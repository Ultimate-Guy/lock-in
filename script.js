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
  { id: 'b_ap', title: 'Brotato All Pain No Gain', url: '../Games/brotatoAPNG/Brotato.html', image: '../Games/brotatoAPNG/images (23).jpeg', desc: 'The newest version of Brotato with the All Pain No Gain update.', popular: true },
  { id: 'y_io', title: 'Yohoho.io', url: '../Games/yohoho/index.html', image: '../Games/yohoho/images (24).jpeg', desc: 'A pirate battle royale game where you collect gold and fight opponents.', popular: true },
  { id: 'b_er', title: 'Bitcoin Clicker', url: '../Games/Bitcoin/Bitcoin.py', image: '../Bitcoin/images (4).jpeg', jsbin: 'glaxyias.github.io/Bitcoin-clicker/', desc: 'A Homemade Special.', popular: true },
  { id: 's_lp', title: 'Slope', url: '../Games/slope/index.html', image: '../Games/slope/images (25).jpeg', desc: 'A fast-paced 3D platformer. Stay on the track!', popular: true },
  { id: 'd_md', title: 'DriveMad', url: '../Games/drivemad/index.html', image: '../Games/drivemad/images (26).jpeg', desc: 'Challenging physics-based driving. Don\'t flip your truck!', popular: true },
  { id: 'b_ft', title: 'Bullet Force', url: '../Games/bulletforce/index.html', image: '../Games/bulletforce/images (27).jpeg', desc: 'Action-packed multiplayer FPS. Dominate the battlefield.', popular: true },
  { id: 'b_bb', title: 'Baseball Bros', url: '../Games/baseballbros/Baseballbros.html', image: '../Games/baseballbros/images (28).jpeg', desc: 'An arcade baseball game with fast-paced matches.', popular: true },
  { id: 'b_kt', title: 'Basket Bros', url: '../Games/basketbros/Basketbros.html', image: '../Games/basketbros/images (29).jpeg', desc: 'Chaotic basketball with crazy dunks and quick matches.', popular: true },
  { id: 'b_sts', title: 'Basketball Stars', url: '../Games/basketballstars/Basketballstars.html', image: '../Games/basketballstars/images (30).jpeg', desc: 'Fast-paced 1v1 street-style basketball matches.', popular: true },
  { id: 'c_cc', title: 'Cookie Clicker', url: '../Games/cookieclicker/cookieclicker.html', jsbin: 'https://codepen.io/Glaeesas/embed/EaZpPeO?default-tab=result&theme-id=dark', isEmbedCode: true, image: '../Games/cookieclicker/images (35).jpeg', desc: 'Click cookies to build an industrial empire.', popular: true },
  { id: 'b_rd', title: 'Basket Random', url: '../Games/basketrandom/Basketrandom.html', image: '../Games/basketrandom/images (5).jpeg', desc: 'Fun basketball game featuring completely random physics parameters.', popular: true },
  { id: 'r_bw', title: 'Retro Bowl', url: '/Games/retrobowl/Retrobowl.html', image: '/Games/retrobowl/images (6).jpeg', desc: 'Manage your team and lead them to gridiron glory.', popular: true },
  { id: 'a_us', title: 'Among Us', url: '../Games/amongus/Amongus.html', desc: 'Complete tasks while avoiding hidden impostors.', popular: true },
  { id: 'd_dk', title: 'Doki Doki Literature Club', url: '../Games/dokidoki/index.html', desc: 'A deep psychological horror visual novel experience.', popular: true },
  { id: 'p_tr', title: 'PolyTrack', url: '../Games/polytrack/index.html', desc: 'A fast-paced low-poly racing game with crisp drifting controls.', popular: true },
  { id: 'a_gr', title: 'Agar.io', url: '../Games/agar/index.html', desc: 'Multiplayer cells-eating battle arena. (May experience latency issues)', popular: true },
  { id: 't_ts', title: 'Truck Sim', url: '../Games/trucksim/index.html', desc: 'Navigate tricky roads transporting heavy structural cargo safely.', popular: true },
  { id: 'g_ta', title: 'Grand Theft Auto', url: '../Games/GTA/index.html', desc: 'Classic open-world sandbox environment full of sandbox operations.', popular: true },
  { id: 't_pa', title: 'Throw a Potato', url: '../Games/TAPA/index.html', image: '../Games/TAPA/images (20).jpeg', desc: 'Physics arcade game where you launch a potato over complex obstacles.', popular: true },
  { id: 't_p2', title: 'Throw a Potato 2', url: '../Games/TAPA2/index.html', image: '../Games/TAPA2/images.png', desc: 'The official sequel featuring refined launch engines and bigger stages.', popular: true },
  { id: 't_to', title: 'Tung Tung Tung Sahur Obby', url: '../Games/T^3sahurobby/index.html', image: '../Games/T^3sahurobby/images (21).jpeg', desc: 'Meme-inspired obstacle map built to test jumping accuracy.', popular: true },
  { id: 't_tb', title: 'Tung Baldi Basics', url: '../Games/tungbaldibasics/index.html', desc: 'Horror puzzle game featuring surreal environments and puzzle challenges.', popular: true },
  { id: 'w_dl', title: 'Wordle', url: '../Games/wordle/index.html', desc: 'Figure out the daily hidden five-letter word within six attempts.', popular: true },
  { id: 'v_3x', title: 'Vex 3 Xmas', url: '../Games/Vex/Vex3Xmas/index.html', desc: 'Festive holiday edition of the classic stickman parkour challenge.', popular: true },
  { id: 'v_4', title: 'Vex 4', url: '../Games/Vex/Vex4/index.html', desc: 'Sprint, leap, and dodge deadly stage traps dynamically.', popular: true },
  { id: 'v_5', title: 'Vex 5', url: '../Games/Vex/Vex5/index.html', desc: 'Hardcore level obstacles matching elite timing requirements.', popular: true },
  { id: 'v_6', title: 'Vex 6', url: '../Games/Vex/Vex6/index.html', desc: 'Refined stickman parkour tracks with brand new stage assets.', popular: true },
  { id: 'v_7', title: 'Vex 7', url: '../Games/Vex/Vex7/index.html', desc: 'Complex levels engineered to test your reflexes.', popular: true },
  { id: 'v_8', title: 'Vex 8', url: '../Games/Vex/Vex8/index.html', desc: 'The absolute latest installment in the Vex platforming franchise.', popular: true },
  { id: 'v_ch', title: 'Vex Challenges', url: '../Games/Vex/VexChallenges/index.html', desc: 'Bite-sized high-speed speedrunning tasks for testing agility.', popular: true },
  { id: 'v_x2', title: 'Vex x3m 2', url: '../Games/Vex/Vexx3m2/index.html', desc: 'Extreme driving mechanics combined with classic Vex obstacle formats.', popular: true },
  { id: 'v_xm', title: 'Vex x3m', url: '../Games/Vex/Vexx3m/index.html', desc: 'Blast through motorcycle speed trials with tight balance adjustments.', popular: true },
  { id: 'v_3', title: 'Vex 3', url: '../Games/Vex/Vex3/index.html', image: '../Games/Vex/Vex3/images (22).jpeg', desc: 'The iconic original entry into the parkour system.', popular: true },
  { id: 'slice_master', title: 'Slice Master', url: '../Games/slicemaster/index.html', desc: 'Flip your blades accurately to chop items clean in half down the line.', popular: true },
  { id: 'skinwalker', title: 'Skinwalker', url: '../Games/skinwalker/index.html', desc: 'Atmospheric survival horror centered around staying undetected outdoors.', popular: true },
  { id: 'skib_shooter', title: 'Skib Shooters', url: '../Games/skibshooter/index.html', desc: 'Dynamic target arena where waves of attackers stream in continuously.', popular: true },
  { id: 'ragdoll_drop', title: 'Ragdoll Drop', url: '../Games/ragdrop/index.html', jsbin: 'https://codepen.io/Glaeesas/embed/OPWZjEg?default-tab=result&theme-id=dark', isEmbedCode: true, desc: 'Drop your structural targets down pins to clear high score records.', popular: true },
  { id: 'g_spin', title: 'Gun Spin', url: '../Games/gunspin/gunspin.html', desc: 'Launch your firearm through the air and use recoil strategically to travel the greatest distance possible.', popular: true },
  { id: 'gm_1', title: 'Gun Mayhem', url: '../Games/GunMayhem/gunmayhem/gunmayhem.html', image: '../Games/GunMayhem/gunmayhem/images (9).jpeg', desc: 'Fast-paced multiplayer arena shooter featuring powerful weapons, explosions, and chaotic battles.', popular: true },
  { id: 'gm_2', title: 'Gun Mayhem 2', url: '../Games/GunMayhem/gunmayhem2/gunmayhem2.html', image: '../Games/GunMayhem/gunmayhem2/images (10).jpeg', desc: 'The sequel to Gun Mayhem with more weapons, maps, customization, and intense combat.', popular: true },
  { id: 'gm_r', title: 'Gun Mayhem Redux', url: '../Games/GunMayhem/gunmayhemredux/gunmayhemredux.html', image: '../Games/GunMayhem/gunmayhemredux/images (11).jpeg', desc: 'A remastered Gun Mayhem experience with improved gameplay, expanded content, and smoother action.', popular: true },
  { id: 'm_d', title: 'Mutilate a Doll', url: '../Games/mutilateadoll/mutilateadoll.html', desc: 'A sandbox ragdoll simulation game where you can experiment with physics, weapons, and chaos. (Will Cause Massive Lag)', popular: true },
  { id: 'b_md', title: 'Bacon May Die', url: '../Games/bakonmaydie/index.html', desc: 'Fast-paced side-scrolling brawler where a fearless pig battles endless enemy waves using melee attacks and powerful weapons.', popular: true },
  { id: 'a_df', title: 'A Dance of Fire and Ice', url: '../Games/ADOFAI/ADOFAI.html', image: '../Games/ADOFAI/ADOFAI.jpeg', desc: 'Rhythm-based precision game where you guide two orbiting planets through challenging musical tracks.', popular: true },
  { id: 'a_sr', title: 'Amazing Strange Rope Police', url: '../Games/ASRP/index.html', image: '../Games/ASRP/images (1).jpeg', desc: 'Open-world action game where you use superhuman abilities, vehicles, and gadgets to fight crime across a massive city.', popular: true },
  { id: 'a_oc', title: 'Ages of Conflict', url: '../Games/AOC/index.html', desc: 'Strategic world simulation where nations wage wars, form alliances, and reshape the map through dynamic conflicts.', popular: true },
  { id: 'mx3', title: 'Moto X3M', url: '../Games/MotoX3m/MotoX3m/index.html', image: '../Games/MotoX3m/MotoX3m/images (14).jpeg', desc: 'Race through explosive obstacle courses packed with ramps, traps, and high-speed motorcycle stunts.', popular: true },
  { id: 'mx3_2', title: 'Moto X3M 2', url: '../Games/MotoX3m/MotoX3m2/index.html', image: '../Games/MotoX3m/MotoX3m2/images (15).jpeg', desc: 'The sequel featuring tougher tracks, bigger jumps, and even more dangerous stunt challenges.', popular: true },
  { id: 'mx3_3', title: 'Moto X3M 3', url: '../Games/MotoX3m/MotoX3m3/index.html', image: '../Games/MotoX3m/MotoX3m3/images (16).jpeg', desc: 'Take on intense new levels filled with hazards, precision jumps, and fast-paced motorcycle action.', popular: true },
  { id: 'mx3_w', title: 'Moto X3M Winter', url: '../Games/MotoX3m/MotoX3m Winter/index.html', image: '../Games/MotoX3m/MotoX3m Winter/images (17).jpeg', desc: 'A festive winter-themed Moto X3M adventure featuring snowy tracks and holiday-inspired obstacles.', popular: true },
  { id: 'mx3_s', title: 'Moto X3M Spooky Land', url: '../Games/MotoX3m/MotoX3m Spooky Land/index.html', image: '../Games/MotoX3m/MotoX3m Spooky Land/images (18).jpeg', desc: 'Halloween-themed motorcycle racing with haunted tracks, creepy decorations, and dangerous traps.', popular: true },
  { id: 'mx3_p', title: 'Moto X3M Pool Party', url: '../Games/MotoX3m/MotoX3m Pool Party/index.html', image: '../Games/MotoX3m/MotoX3m Pool Party/images (19).jpeg', desc: 'Splash through water-filled stunt courses packed with slides, loops, and summer-themed challenges.', popular: true },
  { id: 'dad', title: 'Daddish', url: '../Games/daddish/index.html', desc: 'Charming platformer where a radish dad embarks on a journey to rescue his missing children through challenging levels.', popular: true },
  { id: 'eggy', title: 'Eggy Car', url: '../Games/eggy/index.html', desc: 'Drive carefully across hilly terrain while balancing a fragile egg on your vehicle without letting it fall.', popular: true },
  { id: 'er_1', title: 'Escape Road', url: '../Games/Escaperoad/Escape Road/index.html', image: '../Games/Escaperoad/Escape Road/images (5).jpeg', desc: 'Outrun relentless pursuers in this high-speed driving game packed with sharp turns and daring escapes.', popular: true },
  { id: 'er_2', title: 'Escape Road 2', url: '../Games/Escaperoad/Escape Road 2/index.html', image: '../Games/Escaperoad/Escape Road 2/images (6).jpeg', desc: 'The sequel expands the action with tougher chases, new vehicles, and more intense escape routes.', popular: true },
  { id: 'er_3', title: 'Escape Road 3', url: '../Games/Escaperoad/Escape Road 3/index.html', image: '../Games/Escaperoad/Escape Road 3/images (7).jpeg', desc: 'Take on even greater challenges with faster pursuits, advanced obstacles, and nonstop driving action.', popular: true },
  { id: 'erc_2', title: 'Escape Road City 2', url: '../Games/Escaperoad/Escape Road City 2/index.html', image: '../Games/Escaperoad/Escape Road City 2/images (8).jpeg', desc: 'Navigate a bustling city while evading capture through crowded streets, shortcuts, and dangerous intersections.', popular: true },
  { id: 'imt', title: 'Idle Miner Tycoon', url: '../Games/IMT/index.html', image: '../Games/IMT/images (13).jpeg', desc: 'Build a mining empire from the ground up by managing resources, upgrading operations, and expanding your profits.', popular: true },
  { id: 'ime_1', title: 'Idle Mining Empire', url: '../Games/IME/index.html', jsbin: 'https://codepen.io/Glaeesas/embed/bNgMxpg?default-tab=result&theme-id=dark', isEmbedCode: true, image: '../Games/IME/images (12).jpeg', desc: 'Build your mining operation from the ground up, automate production, and expand your empire to earn massive profits even while idle.', popular: true },
  { id: 'dbs', title: 'Double Barrel Sniper', url: '../Games/DBS/index.html', image: '../Games/DBS/download.jpeg', desc: 'Sharpen your aim in this precision sniper game featuring challenging missions, long-range shots, and tactical gameplay.', popular: true },
  { id: 'dm_1', title: 'Doge Miner', url: '../Games/Dogeminer1/index.html', image: '../Games/Dogeminer1/images (3).jpeg', desc: 'Mine Dogecoins, hire Shiba workers, and upgrade your operation to reach the moon in this idle clicker game.', popular: true },
  { id: 'dm_2', title: 'Doge Miner 2', url: '../Games/Dogeminer2/index.html', image: '../Games/Dogeminer2/images (4).jpeg', desc: 'The sequel expands the Dogecoin mining adventure with new upgrades, planets, and even more ways to grow your mining empire.', popular: true },
  { id: 'babel_tower', title: 'Babel Tower', url: '../Games/babeltower/index.html', desc: 'Build the legendary tower of Babel by managing resources, hiring workers, and upgrading your production lines in this strategic idle game.', popular: true },
  { id: 'baby_chicco', title: 'Baby Chicco Adventure', url: '../Games/bcadventure/index.html', desc: 'Guide a cute little penguin through a dangerous world filled with obstacles, enemies, and platforming challenges in this classic side-scrolling adventure.', popular: true },
  { id: 'baby_sniper_vietnam', title: 'Baby Sniper in Vietnam', url: '../Games/BSV/index.html', image: '../Games/BSV/images (2).jpeg', desc: 'Take on critical missions, hone your long-range accuracy, and clear strategic targets under the cover of dense jungle terrain in this tactical sniping simulation.', popular: true },
  { id: 'backrooms', title: 'The Backrooms', url: '../Games/backrooms/index.html', desc: 'Explore the eerie, endless yellow hallways of the Backrooms while trying to find an exit and avoid the terrifying entities lurking in the shadows.', popular: true },
  { id: 'bad_bodyguard', title: 'Bad Bodyguard', url: '../Games/badbodyguard/index.html', desc: 'Navigate chaotic security situations, make split-second defensive decisions, and protect your high-profile clients from wild incoming hazards in this unpredictable simulation.', popular: true },
  { id: 'car_crash_3', title: 'Car Crash 3', url: '../Games/carcrash3/index.html', desc: 'Test the limits of high-speed structural physics, unleash vehicle destruction across sandbox stunt arenas, and watch realistic damage dynamics play out in this high-impact driving simulator.', popular: true },
  { id: 'stick_merge', title: 'Stick Merge', url: '../Games/stickmerge/index.html', image: '../Games/stickmerge/images (31).jpeg', desc: 'Merge various weapons together to create more powerful firearms and eliminate targets.', popular: true },
  { id: 'strike_force_kitty', title: 'Strike Force Kitty', url: '../Games/strikeforcekitty/index.html', image: '../Games/strikeforcekitty/images (32).jpeg', desc: 'Lead a squad of adorable kittens to rescue the princess, defeating enemies and collecting outfits along the way.', popular: true },
  { id: 'superhot', title: 'SUPERHOT', url: '../Games/superhot/index.html', image: '../Games/superhot/images (33).jpeg', desc: 'An innovative first-person shooter where time moves only when you move.', popular: true },
  { id: 'arena_king', title: 'Arena King', url: '../Games/arenaking/index.html', image: '../Games/arenaking/images (34).jpeg', desc: 'Battle opponents in the arena, collect gold, and grow your crown to become the ultimate king.', popular: true },
  { id: 'a_dark_room', title: 'A Dark Room', url: '../Games/adarkroom/index.html', jsbin: 'https://codepen.io/Glaeesas/embed/019f90ef-3bea-753d-be5c-54659e699c0a?default-tab=result&theme-id=dark', isEmbedCode: true, image: '../Games/adarkroom/images (36).jpeg', desc: 'An atmospheric, text-based survival adventure that starts with a cold room and a single spark.', popular: true },
  { id: 'a_date_with_death', title: 'A Date with Death', url: '../Games/adatewithdeath/index.html', image: '../Games/adatewithdeath/images.jpeg', desc: 'A romance chat sim where you chat, customize your look, and place your soul on the line against the Grim Reaper.', popular: true },
  { id: 'day_in_the_office', title: 'A Day in the Office', url: '../Games/dayintheoffice/index.html', image: '../Games/dayintheoffice/images (1).jpeg', desc: 'A surreal horror game where you navigate an endless work day that you can never escape.', popular: true },
  { id: 'advent_neon', title: 'AdventNEON', url: '../Games/adventneon/index.html', image: '../Games/adventneon/images (2).jpeg', desc: 'A hyper-active 2D action platformer focused on intense speed and crushing combat.', popular: true },
  { id: 'adventure_capitalist', title: 'Adventure Capitalist', url: '../Games/adventure capitalist/index.html', image: '../Games/adventure capitalist/images (3).jpeg', desc: 'Start with a single lemonade stand and invest your way to building a massive financial empire.', popular: true },
  { id: 'itch', title: 'itch.io test', url: '../Games/Sortthecourt/SortTheCourt_Windows.zip', desc: 'itch.io test', popular: true },
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
let editingProfile = null;

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
  document.getElementById('newProfileBtn').addEventListener('click', () => showProfileForm());
  document.getElementById('saveProfileBtn').addEventListener('click', saveProfile);
  document.getElementById('cancelProfileBtn').addEventListener('click', hideProfileForm);
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
    tab.addEventListener('click', () => showSection(tab.dataset.section));
  });
  // wire side nav items
  document.querySelectorAll('.side-item').forEach((item) => {
    item.addEventListener('click', () => showSection(item.dataset.section));
  });
}

function showSection(section) {
  // hide all panels
  document.querySelectorAll('.section-panel').forEach((s) => s.hidden = true);
  // show requested
  const panel = document.querySelector(`.section-panel[data-section="${section}"]`);
  if (panel) panel.hidden = false;

  // update top tabs active state
  document.querySelectorAll('.tab-pill').forEach((t) => t.classList.toggle('active', t.dataset.section === section));
  // update side nav active state
  document.querySelectorAll('.side-item').forEach((s) => s.classList.toggle('active', s.dataset.section === section));
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
        <strong>${escapeHTML(user.name)}</strong>
        <div class="panel-note">${escapeHTML(user.role)}</div>
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
    const avatarContent = user.picture ? '' : user.name.charAt(0);
    card.innerHTML = `
      <div class="profile-header">
        <div class="profile-avatar" style="background-image:${user.picture ? `url('${escapeHTML(user.picture)}')` : 'none'}">${avatarContent}</div>
        <div>
          <div class="profile-name">${escapeHTML(user.name)}</div>
          <div class="profile-role">${escapeHTML(user.role)}</div>
        </div>
      </div>
      <div>${escapeHTML(user.bio || '')}</div>
      <div class="profile-actions"></div>
    `;
    const actions = card.querySelector('.profile-actions');
    const viewButton = document.createElement('button');
    viewButton.type = 'button';
    viewButton.textContent = 'View';
    viewButton.addEventListener('click', () => showProfileForm(user));
    actions.appendChild(viewButton);

    const switchButton = document.createElement('button');
    switchButton.type = 'button';
    switchButton.textContent = 'Switch';
    switchButton.addEventListener('click', () => switchProfile(user));
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

function switchProfile(user) {
  currentUser = user;
  document.getElementById('sessionUser').textContent = `${user.name}`;
  document.getElementById('currentRole').textContent = user.role;
  document.getElementById('currentRoleLabel').textContent = user.role;
  createDMList();
  createRoomList();
  renderChat();
  updateChatTools();
}

function showProfileForm(user = null) {
  editingProfile = user;
  const formCard = document.getElementById('profileFormCard');
  document.getElementById('profileFormTitle').textContent = user ? `Edit Profile: ${user.name}` : 'Add New Profile';
  document.getElementById('profileName').value = user ? user.name : '';
  document.getElementById('profileRole').value = user ? user.role : 'Member';
  document.getElementById('profilePicture').value = user ? (user.picture || '') : '';
  document.getElementById('profileBio').value = user ? (user.bio || '') : '';
  document.getElementById('profileDescription').value = user ? (user.description || '') : '';
  formCard.classList.remove('hidden');
  formCard.scrollIntoView({ behavior: 'smooth' });
}

function hideProfileForm() {
  editingProfile = null;
  document.getElementById('profileFormCard').classList.add('hidden');
}

function saveProfile() {
  const name = document.getElementById('profileName').value.trim();
  const role = document.getElementById('profileRole').value;
  const picture = document.getElementById('profilePicture').value.trim();
  const bio = document.getElementById('profileBio').value.trim();
  const description = document.getElementById('profileDescription').value.trim();
  if (!name) {
    alert('Profile name is required.');
    return;
  }

  if (editingProfile) {
    editingProfile.name = name;
    editingProfile.role = role;
    editingProfile.picture = picture || '';
    editingProfile.bio = bio;
    editingProfile.description = description;
  } else {
    const id = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    if (users.some((profile) => profile.id === id)) {
      alert('A profile with that name already exists.');
      return;
    }
    users.push({ id, name, role, picture: picture || '', bio, description });
  }

  hideProfileForm();
  createProfileCards();
}

function openProfileByName(name) {
  const user = users.find((profile) => profile.name === name);
  if (user) showProfileForm(user);
}

function createGameCards() {
  const cards = document.getElementById('gameCards');
  cards.innerHTML = '';
  games.forEach((game) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    const imageBlock = game.image ? `<div class="game-cover" style="background-image:url('${escapeHTML(game.image)}')"></div>` : '';
    const description = game.desc || game.description || 'No description available.';
    const actionLabel = game.id === 'cloak-runner' || game.id === 'study-quiz' ? 'Launch' : 'Play';
    card.innerHTML = `
      ${imageBlock}
      <strong>${escapeHTML(game.title)}</strong>
      <p>${escapeHTML(description)}</p>
      <div class="game-button-row"><button type="button">${actionLabel}</button></div>
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
      <strong class="message-author" data-author="${escapeHTML(message.author)}">${escapeHTML(message.author)}</strong>
      <span class="meta">${escapeHTML(message.role)} · ${escapeHTML(message.time)}</span>
      ${actions}
    </div>
    <span>${escapeHTML(message.text)}</span>
  `;
  item.querySelector('.message-author')?.addEventListener('click', () => openProfileByName(message.author));
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
  const game = games.find((entry) => entry.id === gameId);
  if (!game) return;
  if (gameTemplates[gameId]) {
    const blobUrl = URL.createObjectURL(new Blob([gameTemplates[gameId]], { type: 'text/html' }));
    document.getElementById('browserFrame').src = blobUrl;
    return;
  }
  const url = resolveGameUrl(game);
  document.getElementById('browserUrl').value = url;
  loadBrowserURL(url);
}

function resolveGameUrl(game) {
  if (game.isEmbedCode && game.jsbin) {
    return game.jsbin.startsWith('http') ? game.jsbin : `https://${game.jsbin}`;
  }
  if (!game.url) return 'about:blank';
  const rawUrl = game.url.trim();
  if (/^https?:\/\//i.test(rawUrl)) {
    return rawUrl;
  }
  if (/^\/\//.test(rawUrl)) {
    return `https:${rawUrl}`;
  }
  if (/^\.\.\//.test(rawUrl)) {
    return `https://glaxyias.github.io/${rawUrl.replace(/^\.\.\//, '')}`;
  }
  if (/^\//.test(rawUrl)) {
    return `https://glaxyias.github.io${rawUrl}`;
  }
  return `https://glaxyias.github.io/${rawUrl}`;
}

function showGameCatalog() {
  document.querySelectorAll('.tab-pill').forEach((button) => button.classList.remove('active'));
  document.querySelectorAll('.section-panel').forEach((section) => section.hidden = true);
  document.querySelector('.tab-pill[data-section="games"]').classList.add('active');
  document.querySelector('.section-panel[data-section="games"]').hidden = false;
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
  maybeShowCloakOverlay();
}

function initCloakOverlay() {
  const overlay = document.getElementById('cloakOverlay');
  const launchButton = document.getElementById('launchAppBtn');
  if (!overlay || !launchButton) return;
  launchButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
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

// Expose a friendly initializer to show the overlay when studyMode is enabled
function maybeShowCloakOverlay() {
  const overlay = document.getElementById('cloakOverlay');
  if (!overlay) return;
  if (studyMode) overlay.classList.remove('hidden');
  else overlay.classList.add('hidden');
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
