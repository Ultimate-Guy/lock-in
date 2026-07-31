const users = [
  { id: 'owner', name: 'Nova', role: 'Owner', bio: 'Admin owner who can manage rooms and roles.' },
  { id: 'mod1', name: 'Astra', role: 'Mod', bio: 'Moderator with chat controls and DM access.' },
  { id: 'member1', name: 'Echo', role: 'Member', bio: 'Active learner' },
  { id: 'guest', name: 'Guest', role: 'Guest', bio: 'New visitor' }
];

const rooms = [
  { id: 'global', name: 'Global Chat', messages: [
    { author: 'Nova', role: 'Owner', text: 'Welcome to the Lock In Hub!', time: '09:10' },
    { author: 'Astra', role: 'Mod', text: 'Use DMs for private conversations and rooms for specific topics.', time: '09:12' }
  ]},
  { id: 'study', name: 'Study Room', messages: [
    { author: 'Echo', role: 'Member', text: 'Study mode makes the site focused and calm.', time: '09:18' }
  ]},
  { id: 'games', name: 'Game Lobby', messages: [
    { author: 'Guest', role: 'Guest', text: 'Try a blob-cloaked game that loads inside the browser.', time: '09:25' }
  ]}
];

const dmThreads = {
  Nova: [
    { author: 'Nova', role: 'Owner', text: 'This is your private DM thread.', time: '09:05' }
  ],
  Astra: [
    { author: 'Astra', role: 'Mod', text: 'Need help with browser settings?', time: '09:13' }]
};

const games = [
  { id: 'cloak-runner', title: 'Blob Cloak Runner', description: 'A local canvas runner loaded via blob and about:blank wrapper.' },
  { id: 'study-quiz', title: 'Study Focus Quiz', description: 'A quick study mini-game with clean interface.' }
];

let currentRoom = 'global';
let currentDM = null;
let currentUser = users[2];
let autoCloak = true;
let studyMode = false;
let studyVariant = 'disguise';
let darkTheme = true;

const escapeHTML = (text) => String(text)
  .replace(/&/g, '&amp;')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

function initApp() {
  createRoomList();
  createDMList();
  createProfileCards();
  createGameCards();
  applySettings();
  renderChat();
  wireEvents();
  setBrowserDefault();
  initTabs();
  initCloakOverlay();
  detectTeacherView();
}

function wireEvents() {
  document.getElementById('newRoomBtn').addEventListener('click', createNewRoom);
  document.getElementById('sendBtn').addEventListener('click', sendMessage);
  document.getElementById('chatInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') sendMessage();
  });
  document.getElementById('loadBtn').addEventListener('click', () => {
    const url = document.getElementById('browserUrl').value.trim();
    if (url) loadBrowserURL(url);
  });
  document.getElementById('openGamesBtn').addEventListener('click', showGameCatalog);
  document.getElementById('studyToggle').addEventListener('click', () => toggleStudyMode(!studyMode));
  document.getElementById('themeToggle').addEventListener('click', () => toggleTheme(!darkTheme));
  document.getElementById('cloakToggle').addEventListener('click', () => toggleCloak(!autoCloak));
  document.getElementById('studyModeSwitch').addEventListener('change', (event) => toggleStudyMode(event.target.checked));
  document.getElementById('studyVariant').addEventListener('change', (event) => setStudyVariant(event.target.value));
  document.getElementById('cloakSwitch').addEventListener('change', (event) => toggleCloak(event.target.checked));
  document.getElementById('darkSwitch').addEventListener('change', (event) => toggleTheme(event.target.checked));
  document.getElementById('playMusicBtn').addEventListener('click', toggleMusic);
}

function initTabs() {
  document.querySelectorAll('.tab-pill').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-pill').forEach((button) => button.classList.remove('active'));
      document.querySelectorAll('.section-panel').forEach((section) => section.hidden = true);
      tab.classList.add('active');
      document.querySelector(`.section-panel[data-section="${tab.dataset.section}"]`).hidden = false;
    });
  });
}

function createRoomList() {
  const roomList = document.getElementById('roomList');
  roomList.innerHTML = '';
  rooms.forEach((room) => {
    const roomItem = document.createElement('div');
    roomItem.className = 'room-item';
    roomItem.innerHTML = `
      <div>
        <strong>${room.name}</strong>
        <div class="panel-note">${room.messages.length} messages</div>
      </div>
      <button type="button">Open</button>
    `;
    roomItem.querySelector('button').addEventListener('click', () => {
      currentRoom = room.id;
      currentDM = null;
      renderChat();
    });
    roomList.appendChild(roomItem);
  });
}

function createDMList() {
  const dmList = document.getElementById('dmList');
  dmList.innerHTML = '';
  users.filter((user) => user.id !== currentUser.id).forEach((user) => {
    const dmItem = document.createElement('div');
    dmItem.className = 'dm-item';
    dmItem.innerHTML = `
      <div>
        <strong>${user.name}</strong>
        <div class="panel-note">${user.role}</div>
      </div>
      <button type="button">DM</button>
    `;
    dmItem.querySelector('button').addEventListener('click', () => {
      currentDM = user.name;
      renderChat();
    });
    dmList.appendChild(dmItem);
  });
}

function createProfileCards() {
  const profileCards = document.getElementById('profileCards');
  profileCards.innerHTML = '';
  users.forEach((user) => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.innerHTML = `
      <div class="profile-header">
        <div class="profile-avatar">${user.name.charAt(0)}</div>
        <div>
          <div class="profile-name">${user.name}</div>
          <div class="profile-role">${user.role}</div>
        </div>
      </div>
      <div>${user.bio}</div>
      <div class="profile-actions"></div>
    `;
    const actions = card.querySelector('.profile-actions');
    const switchButton = document.createElement('button');
    switchButton.type = 'button';
    switchButton.textContent = 'Switch';
    switchButton.addEventListener('click', () => {
      currentUser = user;
      document.getElementById('sessionUser').textContent = `${user.name}`;
      document.getElementById('currentRole').textContent = user.role;
      document.getElementById('currentRoleLabel').textContent = user.role;
      createDMList();
      createRoomList();
      renderChat();
      updateChatTools();
    });
    actions.appendChild(switchButton);

    if (currentUser.role === 'Owner' && currentUser.id !== user.id) {
      const roleButton = document.createElement('button');
      roleButton.type = 'button';
      roleButton.textContent = 'Role';
      roleButton.addEventListener('click', () => promptRoleChange(user));
      actions.appendChild(roleButton);
    }

    profileCards.appendChild(card);
  });
  document.getElementById('sessionUser').textContent = currentUser.name;
  document.getElementById('currentRole').textContent = currentUser.role;
  document.getElementById('currentRoleLabel').textContent = currentUser.role;
  updateChatTools();
}

function createGameCards() {
  const cards = document.getElementById('gameCards');
  cards.innerHTML = '';
  games.forEach((game) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <strong>${game.title}</strong>
      <p>${game.description}</p>
      <button type="button">Play</button>
    `;
    card.querySelector('button').addEventListener('click', () => loadGame(game.id));
    cards.appendChild(card);
  });
}

function renderChat() {
  const chatMessages = document.getElementById('chatMessages');
  const currentLabel = document.getElementById('currentRoomLabel');
  chatMessages.innerHTML = '';

  if (currentDM) {
    currentLabel.textContent = `DM with ${currentDM}`;
    const thread = dmThreads[currentDM] || [];
    thread.forEach((message) => {
      const item = renderMessage(message);
      chatMessages.appendChild(item);
    });
    return;
  }

  const room = rooms.find((entry) => entry.id === currentRoom) || rooms[0];
  currentLabel.textContent = room.name;
  room.messages.forEach((message, index) => {
    const item = renderMessage(message, index);
    chatMessages.appendChild(item);
  });
}

function renderMessage(message, index) {
  const item = document.createElement('div');
  item.className = 'message';
  const actions = (currentUser.role === 'Owner' || currentUser.role === 'Mod') ? `<button class="message-action" data-index="${index}">Delete</button>` : '';
  item.innerHTML = `
    <div class="message-meta">
      <strong>${escapeHTML(message.author)}</strong>
      <span class="meta">${escapeHTML(message.role)} · ${escapeHTML(message.time)}</span>
      ${actions}
    </div>
    <span>${escapeHTML(message.text)}</span>
  `;
  if (actions) {
    item.querySelector('.message-action').addEventListener('click', () => deleteChatMessage(index));
  }
  return item;
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  const message = {
    author: currentUser.name,
    role: currentUser.role,
    text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  if (currentDM) {
    if (!dmThreads[currentDM]) dmThreads[currentDM] = [];
    dmThreads[currentDM].push(message);
  } else {
    const room = rooms.find((entry) => entry.id === currentRoom) || rooms[0];
    room.messages.push(message);
  }

  input.value = '';
  renderChat();
}

function deleteChatMessage(index) {
  if (currentUser.role !== 'Owner' && currentUser.role !== 'Mod') return;
  if (currentDM) {
    const thread = dmThreads[currentDM] || [];
    if (thread[index]) thread.splice(index, 1);
  } else {
    const room = rooms.find((entry) => entry.id === currentRoom) || rooms[0];
    if (room.messages[index]) room.messages.splice(index, 1);
  }
  renderChat();
}

function promptRoleChange(user) {
  const newRole = prompt(`Set new role for ${user.name} (Owner / Mod / Member / Guest)`, user.role);
  if (!newRole) return;
  const normalized = newRole.trim();
  if (!['Owner', 'Mod', 'Member', 'Guest'].includes(normalized)) {
    alert('Role must be Owner, Mod, Member, or Guest.');
    return;
  }
  user.role = normalized;
  createProfileCards();
  createDMList();
  createRoomList();
}

function updateChatTools() {
  const chatTools = document.getElementById('chatTools');
  if (currentUser.role === 'Owner') {
    chatTools.textContent = 'Owner mode: you can delete chat messages and change roles on other users.';
  } else if (currentUser.role === 'Mod') {
    chatTools.textContent = 'Mod mode: you can delete chat messages but not change user roles.';
  } else if (studyMode) {
    chatTools.textContent = studyVariant === 'disguise'
      ? 'Study mode disguise is enabled. The browser shows a study wrapper while loading actual content in the hidden iframe.'
      : 'Study mode active. The browser runs disguised content while preserving the app format.';
  } else {
    chatTools.textContent = 'Switch to Owner or Mod to access message moderation controls.';
  }
}

function createNewRoom() {
  const name = prompt('New room name');
  if (!name) return;
  const id = name.toLowerCase().replace(/\s+/g, '-');
  if (rooms.some((room) => room.id === id)) {
    alert('Room already exists.');
    return;
  }
  rooms.push({ id, name, messages: [{ author: currentUser.name, role: currentUser.role, text: 'Room created.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }] });
  createRoomList();
}

function loadBrowserURL(value) {
  const trimmedValue = value.trim();
  if (!trimmedValue) return;

  if (games.some((game) => game.id === trimmedValue)) {
    loadGame(trimmedValue);
    return;
  }

  let url = trimmedValue;
  if (!/^(https?:|about:|blob:)/i.test(url)) {
    url = `https://${url}`;
  }

  if (autoCloak) {
    const wrapper = buildCloakWrapper(url);
    const blobUrl = URL.createObjectURL(new Blob([wrapper], { type: 'text/html' }));
    document.getElementById('browserFrame').src = blobUrl;
  } else {
    document.getElementById('browserFrame').src = url;
  }
}

function buildCloakWrapper(url) {
  const visibleContent = studyMode && studyVariant === 'disguise'
    ? `<div style="padding:28px;font-family:system-ui,sans-serif;background:#f8fafc;color:#0f172a;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
         <div>
           <h1 style="margin:0 0 12px;font-size:2rem;">Study Resources</h1>
           <p style="margin:0 0 8px;max-width:680px;">This page is configured for focused task review and assignment planning. The embedded study window contains your approved learning content.</p>
           <p style="margin:0;color:#475569;">Topic: Practical browser behavior, disguised page loading, and system review.</p>
         </div>
         <div style="font-size:0.88rem;color:#64748b;">Secure study layout loaded at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.</div>
       </div>`
    : `<div style="padding:22px;font-family:system-ui,sans-serif;background:#0b1224;color:#e2e8f0;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;">
         <h1 style="margin:0 0 12px;font-size:2rem;">Secure Web Session</h1>
         <p style="max-width:640px;color:#94a3b8;">This interface loads approved content inside a secure wrapper whenever possible.</p>
       </div>`;

  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Study Wrapper</title><style>body,html{margin:0;padding:0;height:100%;overflow:hidden;}iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none;}</style></head><body>${visibleContent}<iframe src="${escapeHTML(url)}"></iframe></body></html>`;
}

function setBrowserDefault() {
  loadBrowserURL('about:blank');
}

function loadGame(gameId) {
  const gameHtml = gameTemplates[gameId];
  if (!gameHtml) return;
  const blobUrl = URL.createObjectURL(new Blob([gameHtml], { type: 'text/html' }));
  document.getElementById('browserFrame').src = blobUrl;
}

function showGameCatalog() {
  alert('Select a game from the catalog below or type its name into the URL bar.');
}

function toggleStudyMode(active) {
  studyMode = active;
  document.body.classList.toggle('study-mode', active);
  document.getElementById('studyModeSwitch').checked = active;
  updateStudyModeUI();
}

function setStudyVariant(value) {
  studyVariant = value;
  document.getElementById('studyVariant').value = value;
  updateStudyModeUI();
}

function updateStudyModeUI() {
  const chatTools = document.getElementById('chatTools');
  if (studyMode) {
    if (studyVariant === 'disguise') {
      chatTools.textContent = 'Study mode is a disguise for the browser and games. The page shows study content while actual loading continues in the wrapped frame.';
    } else {
      chatTools.textContent = 'Study mode is active. This session preserves a calm study theme while still allowing access to content.';
    }
  } else {
    chatTools.textContent = 'Switch to Owner or Mod to access message moderation controls.';
  }
}

function toggleCloak(active) {
  autoCloak = active;
  document.getElementById('cloakSwitch').checked = active;
}

function toggleTheme(active) {
  darkTheme = active;
  document.body.classList.toggle('theme-dark', active);
  document.body.classList.toggle('theme-light', !active);
  document.getElementById('darkSwitch').checked = active;
}

function applySettings() {
  document.getElementById('cloakSwitch').checked = autoCloak;
  document.getElementById('darkSwitch').checked = darkTheme;
  document.getElementById('studyModeSwitch').checked = studyMode;
  document.getElementById('studyVariant').value = studyVariant;
  toggleTheme(darkTheme);
  toggleStudyMode(studyMode);
}

function initCloakOverlay() {
  const overlay = document.getElementById('cloakOverlay');
  const launchButton = document.getElementById('launchAppBtn');
  if (!overlay || !launchButton) return;
  launchButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (studyMode && studyVariant === 'disguise') {
      const browserUrl = document.getElementById('browserUrl').value.trim() || 'about:blank';
      loadBrowserURL(browserUrl);
    }
  });
}

function detectTeacherView() {
  const headers = [navigator.userAgent, navigator.platform, document.referrer].join(' ').toLowerCase();
  const teacherKeywords = ['linewize', 'linewise', 'filter', 'proxy', 'webfilter', 'studentlogin', 'classroom'];
  const isTeacher = teacherKeywords.some((keyword) => headers.includes(keyword));
  const isIframe = window.top !== window.self;
  if (isTeacher || isIframe) {
    closeSessionForTeacher();
  }
}

function closeSessionForTeacher() {
  const overlay = document.getElementById('cloakOverlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
  document.body.innerHTML = '<div style="font-family:system-ui, sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;background:#09132d;color:#f8fafc;text-align:center;padding:24px;"><div><h1>Session Closed</h1><p>The learning resource is unavailable from this connection.</p></div></div>';
  try { window.open('about:blank', '_self'); window.close(); } catch (error) {
    // best-effort only
  }
}

function toggleMusic() {
  const audio = document.getElementById('musicPlayer');
  if (!audio.src) {
    audio.src = 'https://cdn.jsdelivr.net/gh/yotaka/ogg@main/steamwork.ogg';
  }
  audio.paused ? audio.play() : audio.pause();
}

const gameTemplates = {
  'cloak-runner': `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Blob Cloak Runner</title><style>body{margin:0;overflow:hidden;background:#050814;color:#edf1ff;font-family:system-ui, sans-serif;}canvas{display:block;margin:auto;}</style></head><body><canvas id="gameCanvas" width="480" height="360"></canvas><script>const canvas=document.getElementById('gameCanvas');const ctx=canvas.getContext('2d');let x=240,y=180,dx=2,dy=2;let trail=[];let tail=12;let target={x:Math.random()*460+10,y:Math.random()*340+10};function draw(){ctx.fillStyle='#050814';ctx.fillRect(0,0,480,360);ctx.fillStyle='#52d7ff';ctx.fillRect(target.x,target.y,12,12);trail.push({x,y});while(trail.length>tail) trail.shift();ctx.fillStyle='#8bd8ff';trail.forEach((p)=>ctx.fillRect(p.x,p.y,12,12));ctx.fillStyle='#dbeeff';ctx.fillRect(x,y,12,12);x+=dx;y+=dy;if(x<0||x>468||y<0||y>348){x=240;y=180;dx=2;dy=2;tail=12;}if(Math.hypot(x-target.x,y-target.y)<16){target.x=Math.random()*460+10;target.y=Math.random()*340+10;tail++;}requestAnimationFrame(draw);}window.addEventListener('keydown',(e)=>{if(e.key==='ArrowUp'&&dy===0){dx=0;dy=-2;}if(e.key==='ArrowDown'&&dy===0){dx=0;dy=2;}if(e.key==='ArrowLeft'&&dx===0){dx=-2;dy=0;}if(e.key==='ArrowRight'&&dx===0){dx=2;dy=0;}});draw();</script></body></html>`,
  'study-quiz': `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Study Focus Quiz</title><style>body{margin:0;font-family:system-ui, sans-serif;display:grid;place-items:center;height:100vh;background:#09132d;color:#e6f2ff;} .card{width:min(420px,90vw);background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:24px;box-shadow:0 20px 40px rgba(0,0,0,0.3);} button{margin-top:18px;padding:12px 18px;border:none;border-radius:999px;background:#4b8cff;color:#fff;cursor:pointer;}</style></head><body><div class="card"><h1>Study Focus Quiz</h1><p id="question">What is the recommended study session length for high focus?</p><div class="answers"><button onclick="answer('A')">A. 15 minutes</button><button onclick="answer('B')">B. 45 minutes</button><button onclick="answer('C')">C. 90 minutes</button></div><p id="result"></p></div><script>const result=document.getElementById('result');function answer(choice){if(choice==='B'){result.textContent='Correct! 45 minutes is great for steady focus.';} else {result.textContent='Try again — short, frequent focus blocks work best.';}}</script></body></html>`
};

window.addEventListener('DOMContentLoaded', initApp);
