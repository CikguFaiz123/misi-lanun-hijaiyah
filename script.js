// URL GOOGLE APPS SCRIPT DATABASE
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxiIkSkKRsbZu6mQ6jA3AGWvbsexN7zdWPdJRXak0ld9D-EN86i8bbdyuAw1Db5M0YZ-w/exec";

// DATA HIJAIYAH (28 HURUF)
const HIJAIYAH = [
    { base: 'ا', f: {a:'اَ', r:'A'}, k: {a:'اِ', r:'I'}, d: {a:'اُ', r:'U'}, f2: {a:'اً', r:'AN'}, k2: {a:'اٍ', r:'IN'}, d2: {a:'اٌ', r:'UN'} },
    { base: 'ب', f: {a:'بَ', r:'BA'}, k: {a:'بِ', r:'BI'}, d: {a:'بُ', r:'BU'}, f2: {a:'باً', r:'BAN'}, k2: {a:'بٍ', r:'BIN'}, d2: {a:'بٌ', r:'BUN'} },
    { base: 'ت', f: {a:'تَ', r:'TA'}, k: {a:'تِ', r:'TI'}, d: {a:'تُ', r:'TU'}, f2: {a:'تاً', r:'TAN'}, k2: {a:'تٍ', r:'TIN'}, d2: {a:'تٌ', r:'TUN'} },
    { base: 'ث', f: {a:'ثَ', r:'TSA'}, k: {a:'ثِ', r:'TSI'}, d: {a:'ثُ', r:'TSU'}, f2: {a:'ثاً', r:'TSAN'}, k2: {a:'ثٍ', r:'TSIN'}, d2: {a:'ثٌ', r:'TSUN'} },
    { base: 'ج', f: {a:'جَ', r:'JA'}, k: {a:'جِ', r:'JI'}, d: {a:'جُ', r:'JU'}, f2: {a:'جاً', r:'JAN'}, k2: {a:'جٍ', r:'JIN'}, d2: {a:'جٌ', r:'JUN'} },
    { base: 'ح', f: {a:'حَ', r:'HA'}, k: {a:'حِ', r:'HI'}, d: {a:'حُ', r:'HU'}, f2: {a:'حاً', r:'HAN'}, k2: {a:'حٍ', r:'HIN'}, d2: {a:'حٌ', r:'HUN'} },
    { base: 'خ', f: {a:'خَ', r:'KHA'}, k: {a:'خِ', r:'KHI'}, d: {a:'خُ', r:'KHU'}, f2: {a:'خاً', r:'KHAN'}, k2: {a:'خٍ', r:'KHIN'}, d2: {a:'خٌ', r:'KHUN'} },
    { base: 'د', f: {a:'دَ', r:'DA'}, k: {a:'دِ', r:'DI'}, d: {a:'دُ', r:'DU'}, f2: {a:'داً', r:'DAN'}, k2: {a:'دٍ', r:'DIN'}, d2: {a:'دٌ', r:'DUN'} },
    { base: 'ذ', f: {a:'ذَ', r:'DZA'}, k: {a:'ذِ', r:'DZI'}, d: {a:'ذُ', r:'DZU'}, f2: {a:'ذاً', r:'DZAN'}, k2: {a:'ذٍ', r:'DZIN'}, d2: {a:'ذٌ', r:'DZUN'} },
    { base: 'ر', f: {a:'رَ', r:'RA'}, k: {a:'رِ', r:'RI'}, d: {a:'رُ', r:'RU'}, f2: {a:'راً', r:'RAN'}, k2: {a:'رٍ', r:'RIN'}, d2: {a:'رٌ', r:'RUN'} },
    { base: 'ز', f: {a:'زَ', r:'ZA'}, k: {a:'زِ', r:'ZI'}, d: {a:'زُ', r:'ZU'}, f2: {a:'زاً', r:'ZAN'}, k2: {a:'زٍ', r:'ZIN'}, d2: {a:'زٌ', r:'ZUN'} },
    { base: 'س', f: {a:'سَ', r:'SA'}, k: {a:'سِ', r:'SI'}, d: {a:'سُ', r:'SU'}, f2: {a:'ساً', r:'SAN'}, k2: {a:'سٍ', r:'SIN'}, d2: {a:'سٌ', r:'SUN'} },
    { base: 'ش', f: {a:'شَ', r:'SYA'}, k: {a:'شِ', r:'SYI'}, d: {a:'شُ', r:'SYU'}, f2: {a:'شاً', r:'SYAN'}, k2: {a:'شٍ', r:'SYIN'}, d2: {a:'شٌ', r:'SYUN'} },
    { base: 'ص', f: {a:'صَ', r:'SA'}, k: {a:'صِ', r:'SI'}, d: {a:'صُ', r:'SU'}, f2: {a:'صاً', r:'SAN'}, k2: {a:'صٍ', r:'SIN'}, d2: {a:'صٌ', r:'SUN'} },
    { base: 'ض', f: {a:'ضَ', r:'DHA'}, k: {a:'ضِ', r:'DHI'}, d: {a:'ضُ', r:'DHU'}, f2: {a:'ضاً', r:'DHAN'}, k2: {a:'ضٍ', r:'DHIN'}, d2: {a:'ضٌ', r:'DHUN'} },
    { base: 'ط', f: {a:'طَ', r:'TA'}, k: {a:'طِ', r:'TI'}, d: {a:'طُ', r:'TU'}, f2: {a:'طاً', r:'TAN'}, k2: {a:'طٍ', r:'TIN'}, d2: {a:'طٌ', r:'TUN'} },
    { base: 'ظ', f: {a:'ظَ', r:'ZHA'}, k: {a:'ظِ', r:'ZHI'}, d: {a:'ظُ', r:'ZHU'}, f2: {a:'ظاً', r:'ZHAN'}, k2: {a:'ظٍ', r:'ZHIN'}, d2: {a:'ظٌ', r:'ZHUN'} },
    { base: 'ع', f: {a:'عَ', r:'\'A'}, k: {a:'عِ', r:'\'I'}, d: {a:'عُ', r:'\'U'}, f2: {a:'عاً', r:'\'AN'}, k2: {a:'عٍ', r:'\'IN'}, d2: {a:'عٌ', r:'\'UN'} },
    { base: 'غ', f: {a:'غَ', r:'GHA'}, k: {a:'غِ', r:'GHI'}, d: {a:'غُ', r:'GHU'}, f2: {a:'غاً', r:'GHAN'}, k2: {a:'غٍ', r:'GHIN'}, d2: {a:'غٌ', r:'GHUN'} },
    { base: 'ف', f: {a:'فَ', r:'FA'}, k: {a:'فِ', r:'FI'}, d: {a:'فُ', r:'FU'}, f2: {a:'فاً', r:'FAN'}, k2: {a:'فٍ', r:'FIN'}, d2: {a:'فٌ', r:'FUN'} },
    { base: 'ق', f: {a:'قَ', r:'QA'}, k: {a:'قِ', r:'QI'}, d: {a:'قُ', r:'QU'}, f2: {a:'قاً', r:'QAN'}, k2: {a:'قٍ', r:'QIN'}, d2: {a:'قٌ', r:'QUN'} },
    { base: 'ك', f: {a:'كَ', r:'KA'}, k: {a:'كِ', r:'KI'}, d: {a:'كُ', r:'KU'}, f2: {a:'كاً', r:'KAN'}, k2: {a:'كٍ', r:'KIN'}, d2: {a:'كٌ', r:'KUN'} },
    { base: 'ل', f: {a:'لَ', r:'LA'}, k: {a:'لِ', r:'LI'}, d: {a:'لُ', r:'LU'}, f2: {a:'لاً', r:'LAN'}, k2: {a:'لٍ', r:'LIN'}, d2: {a:'لٌ', r:'LUN'} },
    { base: 'م', f: {a:'مَ', r:'MA'}, k: {a:'مِ', r:'MI'}, d: {a:'مُ', r:'MU'}, f2: {a:'ماً', r:'MAN'}, k2: {a:'مٍ', r:'MIN'}, d2: {a:'مٌ', r:'MUN'} },
    { base: 'ن', f: {a:'نَ', r:'NA'}, k: {a:'نِ', r:'NI'}, d: {a:'نُ', r:'NU'}, f2: {a:'ناً', r:'NAN'}, k2: {a:'نٍ', r:'NIN'}, d2: {a:'نٌ', r:'NUN'} },
    { base: 'و', f: {a:'وَ', r:'WA'}, k: {a:'وِ', r:'WI'}, d: {a:'وُ', r:'WU'}, f2: {a:'واً', r:'WAN'}, k2: {a:'وٍ', r:'WIN'}, d2: {a:'وٌ', r:'WUN'} },
    { base: 'ه', f: {a:'هَ', r:'HA'}, k: {a:'هِ', r:'HI'}, d: {a:'هُ', r:'HU'}, f2: {a:'هاً', r:'HAN'}, k2: {a:'هٍ', r:'HIN'}, d2: {a:'هٌ', r:'HUN'} },
    { base: 'ي', f: {a:'يَ', r:'YA'}, k: {a:'يِ', r:'YI'}, d: {a:'يُ', r:'YU'}, f2: {a:'ياً', r:'YAN'}, k2: {a:'يٍ', r:'YIN'}, d2: {a:'يٌ', r:'YUN'} }
];

const PIRATE_DEFEATS = {
    1: { name: "Lanun Jack Separuh", avatar: "🏴‍☠️", text: "Aduhh! Macam mana kau boleh cam baris atas Fathah dengan begitu cepat?! Aku tewas... Huuu 😭" },
    2: { name: "Kapten Parrot", avatar: "🦜", text: "Squawk! Baris bawah Kasrah pun kau kuasai?! Jangan seronok sangat, pulau depan lagi susah! 😭" },
    3: { name: "Lanun Jerung Gagah", avatar: "🦈", text: "Tidakkk! Baris depan Dammah aku dah hancur! Ampun Kapten kecil, awak memang hebat! 😭" },
    4: { name: "Kapten Buaya Darat", avatar: "🐊", text: "Grrr! Tanwin Fathatain pun kau lepas?! Air mata lanun ini takkan berhenti mengalir... Huuu 😭" },
    5: { name: "Gergasi Gurita", avatar: "🐙", text: "Tak mungkin! Kuasa Tanwin Kasratain aku dah tumpas! Tahniah Kapten, awak memang bijak! 🐙😭" },
    6: { name: "Lanun Besi Tua", avatar: "⚓", text: "Arrrgghh! Semua baris tanwin kau kuasai! Tinggal Raja Lanun sahaja lagi... Hati-hati! 😭" },
    7: { name: "Raja Lanun Hijaiyah", avatar: "☠️", text: "SYABAS KAPTEN! Kau telah tewaskan aku dan menguasai SEMUA baris Hijaiyah! Harta karun syiling emas ini milikmu! 🎉 👑 💰" }
};

const HOUSES = {
    temenggung: { name: 'Temenggung', fill: '#f59e0b', bgClass: 'bg-amber-500', borderClass: 'border-amber-400', textClass: 'text-yellow-300', icon: '🟡' },
    syahbandar: { name: 'Syahbandar', fill: '#22c55e', bgClass: 'bg-green-500', borderClass: 'border-green-500', textClass: 'text-green-300', icon: '🟢' },
    bendahara: { name: 'Bendahara', fill: '#3b82f6', bgClass: 'bg-blue-500', borderClass: 'border-blue-400', textClass: 'text-blue-300', icon: '🔵' },
    laksamana: { name: 'Laksamana', fill: '#ef4444', bgClass: 'bg-red-500', borderClass: 'border-red-500', textClass: 'text-red-300', icon: '🔴' }
};

const SHOP_ITEMS = [
    { id: 'boat_sailboat', name: 'Kapal Layar Rumah', model: 'sailboat', price: 0 },
    { id: 'boat_cruise', name: 'Kapal Cruise Mewah 🚢', model: 'cruise', price: 150 },
    { id: 'boat_sub', name: 'Kapal Selam 🥽', model: 'sub', price: 300 },
    { id: 'boat_jetski', name: 'Jetski Laju ⚡', model: 'jetski', price: 500 }
];

let pData = { 
    playerName: '',
    house: 'temenggung',
    stars: 0, coins: 0, unlockedIslands: [1], 
    completedModes: { 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[] }, 
    inventory: ['boat_sailboat'], equippedBoatId: 'boat_sailboat',
    houseScores: { temenggung: 0, syahbandar: 0, bendahara: 0, laksamana: 0 },
    audio: true 
};

let tempSelectedHouse = 'temenggung';
let currentIslandId = 1, currIslandType = 'mix', currentGameMode = '';
let qNum = 0, maxQ = 0, score = 0, correctCount = 0, wrongCount = 0;
const STORAGE_KEY = 'misi_lanun_mobile_v18';

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const islandThemes = {
    1: "bg-gradient-to-b from-amber-950 via-sky-900 to-slate-950",
    2: "bg-gradient-to-b from-blue-950 via-cyan-950 to-slate-950",
    3: "bg-gradient-to-b from-emerald-950 via-teal-950 to-slate-950",
    4: "bg-gradient-to-b from-purple-950 via-indigo-950 to-slate-950",
    5: "bg-gradient-to-b from-rose-950 via-slate-900 to-slate-950",
    6: "bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950",
    7: "bg-gradient-to-b from-red-950 via-amber-950 to-black"
};

// INTEGRASI GOOGLE SHEETS (ONLINE DATABASE)
function syncScoresFromCloud() {
    if (!GOOGLE_SHEET_URL) return;
    fetch(GOOGLE_SHEET_URL)
        .then(res => res.json())
        .then(data => {
            if (data && typeof data === 'object') {
                pData.houseScores = { ...pData.houseScores, ...data };
                saveData();
                if (document.getElementById('screen-leaderboard').classList.contains('flex')) {
                    renderLeaderboard();
                }
            }
        })
        .catch(err => console.log("Gagal muat turun markah dari awan"));
}

function sendScoreToCloud(houseKey, scoreAmount) {
    if (!GOOGLE_SHEET_URL || !scoreAmount || scoreAmount <= 0) return;
    fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ house: houseKey, score: scoreAmount })
    }).then(() => {
        setTimeout(syncScoresFromCloud, 1000);
    }).catch(err => console.log("Gagal hantar markah ke awan"));
}

// REGISTRATION & RUMAH SUKAN
function selectHouseRegister(houseKey) {
    tempSelectedHouse = houseKey;
    playSfx('click');
    document.querySelectorAll('.house-opt-btn').forEach(btn => {
        btn.classList.remove('ring-4', 'ring-yellow-300');
    });
    let target = document.getElementById('btn-house-' + houseKey);
    if(target) target.classList.add('ring-4', 'ring-yellow-300');
}

function showRegisterModal() {
    let nameInput = document.getElementById('player-name-input');
    if (nameInput) nameInput.value = pData.playerName || '';
    selectHouseRegister(pData.house || 'temenggung');
    document.getElementById('register-overlay').classList.remove('hidden');
    document.getElementById('register-overlay').classList.add('flex');
}

function confirmRegistration() {
    let input = document.getElementById('player-name-input').value.trim();
    if (!input) {
        alert("Sila masukkan nama anda!");
        return;
    }
    playSfx('click');
    pData.playerName = input;
    pData.house = tempSelectedHouse;
    saveData();
    updateUIProfile();
    document.getElementById('register-overlay').classList.add('hidden');
    document.getElementById('register-overlay').classList.remove('flex');
}

function updateUIProfile() {
    let hData = HOUSES[pData.house] || HOUSES.temenggung;
    let badge = document.getElementById('player-badge');
    if (badge) {
        badge.innerText = `${hData.icon} ${pData.playerName}`;
        badge.className = `px-3 py-1 rounded-full text-xs font-black border border-white/30 shadow text-white ${hData.bgClass}`;
    }
    let menuInfo = document.getElementById('menu-player-info');
    if (menuInfo) {
        menuInfo.innerText = `Kapten: ${pData.playerName} (${hData.name})`;
    }
}

// ANIMASI BUIH
function triggerBubbles(callback) {
    const container = document.getElementById('bubble-container');
    if (!container) { if (callback) callback(); return; }
    
    container.innerHTML = '';
    container.classList.remove('hidden');

    for (let i = 0; i < 45; i++) {
        let bubble = document.createElement('div');
        bubble.className = 'bubble';
        let size = Math.random() * 55 + 20;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDelay = (Math.random() * 0.4) + 's';
        bubble.style.setProperty('--sway', (Math.random() * 80 - 40) + 'px');
        container.appendChild(bubble);
    }

    setTimeout(() => { if (callback) callback(); }, 500);
    setTimeout(() => { container.classList.add('hidden'); container.innerHTML = ''; }, 1400);
}

// KESAN BUNYI & MUZIK
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSfx(type) {
    if (!pData.audio) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    
    if(type === 'click') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(600, now); osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
        gain.gain.setValueAtTime(0.3, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now); osc.stop(now + 0.1);
    } else if (type === 'correct') {
        osc.type = 'triangle'; osc.frequency.setValueAtTime(500, now); osc.frequency.setValueAtTime(800, now + 0.1);
        gain.gain.setValueAtTime(0.3, now); gain.gain.linearRampToValueAtTime(0, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(200, now); osc.frequency.linearRampToValueAtTime(100, now + 0.3);
        gain.gain.setValueAtTime(0.3, now); gain.gain.linearRampToValueAtTime(0, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
    } else if (type === 'win') {
        osc.type = 'square'; [400, 500, 600, 800, 1000].forEach((f, i) => osc.frequency.setValueAtTime(f, now + i*0.1));
        gain.gain.setValueAtTime(0.2, now); gain.gain.linearRampToValueAtTime(0, now + 0.6);
        osc.start(now); osc.stop(now + 0.6);
    }
}

function playBGM(screen) {
    if (!pData.audio) return;
    ['bgm-menu', 'bgm-map', 'bgm-game'].forEach(id => {
        let el = document.getElementById(id); if(el) { el.pause(); el.currentTime = 0; }
    });
    let track = document.getElementById('bgm-' + screen);
    if(track) { track.volume = 0.5; track.play().catch(e => console.log("Autoplay disekat")); }
}

function toggleAudio() {
    pData.audio = !pData.audio;
    document.getElementById('btn-audio').innerText = pData.audio ? '🔊' : '🔇';
    document.getElementById('toggle-audio-setting').checked = pData.audio;
    if(!pData.audio) {
        ['bgm-menu', 'bgm-map', 'bgm-game'].forEach(id => { let el=document.getElementById(id); if(el) el.pause(); });
    } else {
        playSfx('click');
        let currentScreen = 'menu';
        document.querySelectorAll('.game-screen').forEach(s => { if(s.classList.contains('flex')) currentScreen = s.id.replace('screen-',''); });
        playBGM(currentScreen);
    }
    saveData();
}

function startApp() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    ['bgm-menu', 'bgm-map', 'bgm-game'].forEach(id => { let a = document.getElementById(id); if(a) a.load(); });
    playSfx('click'); 
    triggerBubbles(() => {
        document.getElementById('start-overlay').style.display = 'none'; 
        if (!pData.playerName) {
            showRegisterModal();
        }
        nav('menu', false);
    });
}

// SYSTEM NAVIGASI UTAMA
function nav(screenId, useBubbles = true) {
    const doNav = () => {
        if(screenId !== 'menu') playSfx('click');
        document.querySelectorAll('.game-screen').forEach(s => {
            s.classList.add('hidden'); 
            s.classList.remove('flex');
        });
        
        let target = document.getElementById('screen-' + screenId);
        if(target) {
            target.classList.remove('hidden');
            target.classList.add('flex');
        }
        
        let topBar = document.getElementById('top-bar');
        if(screenId === 'menu') { topBar.classList.add('hidden'); topBar.classList.remove('flex'); }
        else { topBar.classList.remove('hidden'); topBar.classList.add('flex'); }
        
        if(['menu', 'map', 'game'].includes(screenId)) playBGM(screenId);
        if (screenId === 'map') updateMap();
        if (screenId === 'modes') renderModes();
        if (screenId === 'shop') renderShop();
        if (screenId === 'leaderboard') { renderLeaderboard(); syncScoresFromCloud(); }
    };

    if (useBubbles) triggerBubbles(doNav);
    else doNav();
}

// JANA KOD SVG MODEL KAPAL
function getShipSVG(modelType, houseKey) {
    let house = HOUSES[houseKey] || HOUSES.temenggung;
    let color = house.fill;

    if (modelType === 'cruise') {
        return `
        <svg viewBox="0 0 100 100" class="w-14 h-14 overflow-visible drop-shadow">
            <path d="M 12 75 L 88 75 L 78 90 L 22 90 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
            <path d="M 8 60 L 92 60 L 88 75 L 12 75 Z" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
            <circle cx="25" cy="67" r="2.5" fill="#0284c7"/>
            <circle cx="38" cy="67" r="2.5" fill="#0284c7"/>
            <circle cx="50" cy="67" r="2.5" fill="#0284c7"/>
            <circle cx="62" cy="67" r="2.5" fill="#0284c7"/>
            <circle cx="75" cy="67" r="2.5" fill="#0284c7"/>
            <rect x="20" y="46" width="55" height="14" rx="2" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
            <rect x="28" y="34" width="38" height="12" rx="2" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
            <path d="M 9 63 L 91 63" stroke="${color}" stroke-width="3.5"/>
            <rect x="52" y="20" width="10" height="14" rx="1" fill="${color}" stroke="#1e293b" stroke-width="1.5"/>
            <rect x="50" y="17" width="14" height="4" rx="1" fill="#0f172a"/>
            <circle cx="57" cy="11" r="3" fill="#cbd5e1" opacity="0.7"/>
        </svg>`;
    } else if (modelType === 'sub') {
        return `
        <svg viewBox="0 0 100 100" class="w-14 h-14 overflow-visible drop-shadow">
            <ellipse cx="50" cy="62" rx="38" ry="18" fill="${color}" stroke="#0f172a" stroke-width="2"/>
            <rect x="42" y="30" width="16" height="16" rx="3" fill="#475569" stroke="#0f172a" stroke-width="2"/>
            <path d="M 50 30 L 50 18 L 56 18" stroke="#0f172a" stroke-width="3" fill="none" stroke-linecap="round"/>
            <circle cx="32" cy="62" r="4.5" fill="#38bdf8" stroke="#0f172a" stroke-width="1.5"/>
            <circle cx="50" cy="62" r="4.5" fill="#38bdf8" stroke="#0f172a" stroke-width="1.5"/>
            <circle cx="68" cy="62" r="4.5" fill="#38bdf8" stroke="#0f172a" stroke-width="1.5"/>
            <path d="M 12 55 L 12 69 L 4 62 Z" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>
            <circle cx="9" cy="62" r="3" fill="#cbd5e1"/>
        </svg>`;
    } else if (modelType === 'jetski') {
        return `
        <svg viewBox="0 0 100 100" class="w-13 h-13 overflow-visible drop-shadow">
            <path d="M 10 70 L 90 70 L 78 85 L 25 85 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
            <path d="M 22 55 L 75 55 L 90 70 L 10 70 Z" fill="${color}" stroke="#0f172a" stroke-width="2"/>
            <rect x="30" y="42" width="25" height="12" rx="2" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>
            <path d="M 60 40 L 70 55" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
            <circle cx="60" cy="38" r="3" fill="#f8fafc"/>
        </svg>`;
    } else {
        return `
        <svg viewBox="0 0 100 100" class="w-12 h-12 overflow-visible drop-shadow">
            <path d="M 15 65 L 85 65 L 72 88 L 28 88 Z" fill="#7c2d12" stroke="#451a03" stroke-width="2"/>
            <line x1="50" y1="12" x2="50" y2="65" stroke="#451a03" stroke-width="3"/>
            <path d="M 52 15 L 85 52 L 52 52 Z" fill="${color}" stroke="#b45309" stroke-width="2"/>
        </svg>`;
    }
}

// PERGERAKAN BOT LANUN DI PETA
function moveBoatToIsland(islandId) {
    const boatContainer = document.getElementById('map-boat');
    let item = SHOP_ITEMS.find(x => x.id === pData.equippedBoatId) || SHOP_ITEMS[0];
    
    if (boatContainer) {
        boatContainer.innerHTML = getShipSVG(item.model, pData.house);
    }
    
    const targetIsland = document.getElementById('island-' + islandId);
    if (boatContainer && targetIsland) {
        boatContainer.style.bottom = targetIsland.style.bottom;
        boatContainer.style.top = targetIsland.style.top;
        boatContainer.style.left = targetIsland.style.left;
        boatContainer.style.right = targetIsland.style.right;
    }
}

// PETA LAUTAN
function updateMap() {
    let highestUnlocked = 1;
    for(let i=1; i<=7; i++) {
        let el = document.getElementById('island-'+i);
        if(el) {
            if(pData.unlockedIslands && pData.unlockedIslands.includes(i)) {
                el.classList.remove('island-locked');
                highestUnlocked = i;
            } else {
                el.classList.add('island-locked');
            }
        }
    }
    document.getElementById('stat-stars').innerText = (pData.stars || 0) + ' ⭐';
    document.getElementById('stat-coins').innerText = (pData.coins || 0) + ' 💰';
    updateUIProfile();
    
    setTimeout(() => moveBoatToIsland(currentIslandId || highestUnlocked), 300);
}

function selectIsland(id) {
    if (!pData.unlockedIslands || !pData.unlockedIslands.includes(id)) { playSfx('wrong'); return; }
    playSfx('click'); currentIslandId = id;
    const types = ['mix', 'f', 'k', 'd', 'f2', 'k2', 'd2', 'mix'];
    currIslandType = types[id] || 'f'; 
    moveBoatToIsland(id);
    nav('modes');
}

// RENDER PAPAN MARKAH (LEADERBOARD RUMAH SUKAN)
function renderLeaderboard() {
    const container = document.getElementById('leaderboard-container');
    
    let sortedHouses = Object.keys(HOUSES).map(key => {
        return {
            key: key,
            ...HOUSES[key],
            score: pData.houseScores[key] || 0
        };
    }).sort((a, b) => b.score - a.score);

    let html = '';
    const medals = ['🥇 No. 1', '🥈 No. 2', '🥉 No. 3', '🎗️ No. 4'];

    sortedHouses.forEach((house, rank) => {
        let isPlayerHouse = house.key === pData.house;

        html += `
        <div class="bg-slate-800 border-2 ${isPlayerHouse ? 'border-yellow-400 bg-slate-800/90' : 'border-slate-700'} p-4 rounded-2xl flex items-center justify-between shadow-lg">
            <div class="flex items-center gap-3">
                <div class="text-3xl font-black w-12 text-center">${medals[rank]}</div>
                <div>
                    <h3 class="font-bold text-white text-base flex items-center gap-2">
                        <span>${house.icon}</span> <span>Rumah ${house.name}</span>
                        ${isPlayerHouse ? `<span class="bg-yellow-400 text-slate-900 text-[10px] px-2 py-0.5 rounded-full font-black">RUMAH ANDA</span>` : ''}
                    </h3>
                    <p class="text-xs text-slate-400 mt-0.5">Kapten: ${isPlayerHouse ? pData.playerName : 'Murid'}</p>
                </div>
            </div>
            <div class="text-right">
                <div class="text-xl font-black text-yellow-400">${house.score}</div>
                <div class="text-[10px] text-sky-300 font-bold">MATA KEJOHANAN</div>
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

// KEDAI LANUN
function renderShop() {
    const container = document.getElementById('shop-container');
    let html = '';

    SHOP_ITEMS.forEach((item) => {
        let isOwned = pData.inventory.includes(item.id);
        let isEquipped = pData.equippedBoatId === item.id;

        html += `
        <div class="bg-slate-800 border-2 ${isEquipped ? 'border-amber-400' : 'border-slate-700'} p-3 rounded-2xl flex flex-col items-center justify-between text-center shadow-lg">
            ${getShipSVG(item.model, pData.house)}
            <h4 class="font-bold text-white text-xs my-1">${item.name}</h4>
            <p class="text-xs text-yellow-400 font-bold mb-2">${isOwned ? 'Milik Anda' : item.price + ' 💰'}</p>
            
            ${isEquipped ? 
                `<button disabled class="w-full py-1.5 rounded-xl text-xs font-bold bg-green-700 text-white border border-green-500">DIPAKAI</button>` :
                (isOwned ? 
                    `<button onclick="equipItem('${item.id}')" class="btn-primary w-full py-1.5 text-xs">GUNA</button>` :
                    `<button onclick="buyItem('${item.id}', ${item.price})" class="btn-primary w-full py-1.5 text-xs bg-gradient-to-r from-amber-500 to-yellow-600 border-yellow-300">BELI 💰</button>`
                )
            }
        </div>`;
    });

    container.innerHTML = html;
}

function buyItem(id, price) {
    if (pData.coins >= price) {
        pData.coins -= price;
        pData.inventory.push(id);
        pData.equippedBoatId = id;
        playSfx('win');
        saveData();
        renderShop();
    } else {
        playSfx('wrong');
        alert("Syiling Emas anda tidak mencukupi!");
    }
}

function equipItem(id) {
    playSfx('click');
    pData.equippedBoatId = id;
    saveData();
    renderShop();
}

function triggerWinConfetti() {
    if (typeof confetti === 'function') {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
        setTimeout(() => confetti({ particleCount: 100, angle: 60, spread: 55, origin: { x: 0 } }), 300);
        setTimeout(() => confetti({ particleCount: 100, angle: 120, spread: 55, origin: { x: 1 } }), 600);
    }
}

function goToNextIsland() {
    playSfx('click');
    showPirateCutscene(currentIslandId);
}

function showPirateCutscene(islandId) {
    let data = PIRATE_DEFEATS[islandId] || PIRATE_DEFEATS[1];
    document.getElementById('cutscene-avatar').innerText = data.avatar;
    document.getElementById('cutscene-name').innerText = data.name.toUpperCase();
    document.getElementById('cutscene-text').innerText = data.text;
    
    if (islandId === 7) {
        playSfx('win');
        triggerWinConfetti();
        document.getElementById('cutscene-btn-text').innerText = "KEMBALI KE MENU UTAMA";
        document.getElementById('cutscene-btn-icon').innerText = "🏆";
    } else {
        playSfx('wrong');
        document.getElementById('cutscene-btn-text').innerText = "SETERUSNYA";
        document.getElementById('cutscene-btn-icon').innerText = "➡️";
    }
    
    nav('cutscene');
}

function finishCutscene() {
    if (currentIslandId === 7) {
        nav('menu');
    } else {
        let nextId = currentIslandId + 1;
        if (nextId <= 7 && pData.unlockedIslands.includes(nextId)) {
            currentIslandId = nextId;
        }
        nav('map');
        setTimeout(() => {
            moveBoatToIsland(currentIslandId);
        }, 600);
    }
}

function renderModes() {
    const modeScreen = document.getElementById('screen-modes');
    if (modeScreen) {
        modeScreen.className = `game-screen flex flex-col p-4 h-full w-full transition-colors duration-500 ${islandThemes[currentIslandId] || islandThemes[1]}`;
    }

    const titles = ["", "PULAU FATHAH (-َ)", "PULAU KASRAH (-ِ)", "PULAU DAMMAH (-ُ)", "PULAU FATHATAIN (-ً)", "PULAU KASRATAIN (-ٍ)", "PULAU DAMMATAIN (-ٌ)", "RAJA LANUN"];
    document.getElementById('modes-island-title').innerText = titles[currentIslandId] || "PULAU";
    
    const modes = [
        { id: 'mode1', name: 'KENALI BARIS', desc: 'Pilih jawapan Rumi yang betul.', icon: '📝', color: 'from-blue-600 to-blue-800' },
        { id: 'mode2', name: 'MATCH MASTER', desc: 'Cari kad memori yang sepadan.', icon: '🃏', color: 'from-purple-600 to-purple-800' },
        { id: 'mode3', name: 'TREASURE HUNT', desc: 'Cari 3 huruf yang tepat.', icon: '🏴‍☠️', color: 'from-teal-600 to-teal-800' }
    ];
    
    let html = ''; let isPrevCompleted = true;
    const completed = (pData.completedModes && pData.completedModes[currentIslandId]) ? pData.completedModes[currentIslandId] : [];

    modes.forEach((m, idx) => {
        let isCompleted = completed.includes(m.id);
        let isLocked = !isPrevCompleted && idx > 0;
        
        html += `
        <div class="bg-slate-800/90 border-2 ${isCompleted ? 'border-green-500' : 'border-slate-600'} rounded-2xl p-4 flex flex-col shadow-md ${isLocked ? 'opacity-50 grayscale' : ''}">
            <div class="flex items-center gap-4 mb-3">
                <div class="text-4xl bg-gradient-to-br ${m.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg border border-white/20">${m.icon}</div>
                <div class="flex-grow">
                    <h3 class="font-bold text-white text-lg leading-tight">${m.name}</h3>
                    <p class="text-slate-400 text-xs mt-1">${m.desc}</p>
                </div>
            </div>
            <button ${isLocked ? 'disabled' : ''} onclick="startMode('${m.id}')" class="mt-auto w-full py-3 rounded-xl font-bold text-white ${isLocked ? 'bg-slate-700' : 'bg-gradient-to-r ' + m.color} shadow-md active:scale-95 transition-transform">
                ${isCompleted ? 'MAIN SEMULA' : (isLocked ? 'KUNCI' : 'MULA MISI')}
            </button>
        </div>`;
        isPrevCompleted = isCompleted;
    });

    let isIslandCleared = completed.length >= 3;
    let isLastIsland = currentIslandId >= 7;
    let buttonLabel = isLastIsland ? 'TAMAT MISI 🏆' : 'KE PULAU SETERUSNYA ⛵';

    html += `
    <div class="mt-2 pt-3 border-t border-sky-800/80">
        <button ${isIslandCleared ? '' : 'disabled'} onclick="goToNextIsland()" class="btn-primary w-full py-4 text-lg bg-gradient-to-r ${isLastIsland ? 'from-amber-500 to-yellow-600 border-yellow-300' : 'from-emerald-500 to-green-700 border-green-400'} flex items-center justify-center gap-2 ${isIslandCleared ? 'animate-pulse' : 'opacity-50 grayscale pointer-events-none'}">
            <span>${buttonLabel}</span>
        </button>
        ${!isIslandCleared ? `<p class="text-center text-xs text-amber-300 font-bold mt-2">Selesaikan 3 mod permainan di atas untuk unlock!</p>` : ''}
    </div>`;

    document.getElementById('modes-container').innerHTML = html;
}

function getQ() {
    let l = getRandom(HIJAIYAH);
    let allowedTypes = ['f', 'k', 'd'];
    if (['f2', 'k2', 'd2'].includes(currIslandType)) {
        allowedTypes = ['f2', 'k2', 'd2'];
    } else if (currIslandType === 'mix') {
        allowedTypes = ['f', 'k', 'd', 'f2', 'k2', 'd2'];
    }

    let tKey = (['f', 'k', 'd', 'f2', 'k2', 'd2'].includes(currIslandType)) ? currIslandType : getRandom(allowedTypes);
    return { arabic: l[tKey].a, rumi: l[tKey].r, tKey: tKey, allowedTypes: allowedTypes };
}

// MOD 1: KUIZ OBJEKTIF
function playMode1(area) {
    let q = getQ();
    let options = [{text: q.rumi, correct: true}];
    
    while(options.length < 4) {
        let dl = getRandom(HIJAIYAH);
        let dtKey = getRandom(q.allowedTypes);
        let distractorText = dl[dtKey].r;
        if(distractorText !== q.rumi && !options.find(x => x.text === distractorText)) {
            options.push({text: distractorText, correct: false});
        }
    }
    options = shuffle(options);
    
    area.innerHTML = `
        <div class="absolute top-2 left-4 right-4 flex justify-between text-sky-300 font-bold text-xs bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
            <span>SOALAN: ${qNum}/${maxQ}</span>
        </div>
        <div class="w-full flex flex-col items-center mt-10">
            <div class="bg-slate-800 w-40 h-40 md:w-48 md:h-48 rounded-3xl border-4 border-amber-500 flex items-center justify-center shadow-xl mb-8">
                <div class="text-[5rem] arabic-text text-yellow-400 drop-shadow-md">${q.arabic}</div>
            </div>
            <div class="grid grid-cols-2 gap-3 w-full max-w-[280px]">
                ${options.map((opt, i) => `
                    <button onclick="ansMode1(this, ${opt.correct})" class="game-card text-2xl font-bold py-5 text-white active:scale-90">${opt.text}</button>
                `).join('')}
            </div>
        </div>
    `;
}

window.ansMode1 = function(btn, isCorrect) {
    document.querySelectorAll('.game-card').forEach(b => b.disabled = true);
    if(isCorrect) {
        btn.classList.add('correct'); playSfx('correct'); score += 10; correctCount++;
        setTimeout(() => nextTurn(), 600);
    } else {
        btn.classList.add('wrong'); playSfx('wrong'); wrongCount++;
        setTimeout(() => nextTurn(), 800);
    }
    updateGameUI();
};

// MOD 2: MATCH MASTER
function playMode2(area) {
    let pairs = 6; 
    let cards = [];
    let selectedLetters = shuffle([...HIJAIYAH]).slice(0, pairs);
    
    let tKeyGroup = ['f','k','d'];
    if (['f2','k2','d2'].includes(currIslandType)) {
        tKeyGroup = ['f2','k2','d2'];
    } else if (currIslandType !== 'mix') {
        tKeyGroup = [currIslandType];
    }

    selectedLetters.forEach((l, i) => {
        let tKey = getRandom(tKeyGroup);
        cards.push({id: i, type: 'A', text: l[tKey].a});
        cards.push({id: i, type: 'R', text: l[tKey].r});
    });
    cards = shuffle(cards);
    
    area.innerHTML = `<div class="grid grid-cols-3 gap-2 w-full max-w-[280px] mx-auto mt-2" id="mem-grid"></div>`;
    let grid = document.getElementById('mem-grid');
    let flipped = []; let matched = 0;
    
    cards.forEach((c) => {
        let div = document.createElement('div'); div.className = 'memory-card';
        div.innerHTML = `<div class="memory-card-inner">
            <div class="memory-card-back">?</div>
            <div class="memory-card-front ${c.type === 'A' ? 'arabic-text text-4xl text-yellow-400' : 'text-2xl font-bold'}">${c.text}</div>
        </div>`;
        
        div.onclick = () => {
            if(flipped.length >= 2 || div.classList.contains('flipped') || div.classList.contains('matched')) return;
            playSfx('click'); div.classList.add('flipped'); flipped.push({c, div});
            
            if(flipped.length === 2) {
                setTimeout(() => {
                    if(flipped[0].c.id === flipped[1].c.id) {
                        playSfx('correct'); score += 15; correctCount++; matched++;
                        flipped[0].div.classList.add('matched'); flipped[1].div.classList.add('matched');
                        if(matched === pairs) setTimeout(() => endGame(), 800);
                    } else {
                        playSfx('wrong'); wrongCount++;
                        flipped[0].div.classList.remove('flipped'); flipped[1].div.classList.remove('flipped');
                    }
                    flipped = []; updateGameUI();
                }, 700);
            }
        };
        grid.appendChild(div);
    });
}

// MOD 3: TREASURE HUNT
function playMode3(area) {
    let tKey = currIslandType === 'mix' ? getRandom(['f','k','d','f2','k2','d2']) : currIslandType;
    let typeName = {f:"Baris Atas", k:"Baris Bawah", d:"Baris Depan", f2:"Tanwin Atas", k2:"Tanwin Bawah", d2:"Tanwin Depan"}[tKey];
    let allowedWrongTypes = ['f','k','d'].includes(tKey) ? ['f','k','d'].filter(k => k !== tKey) : ['f2','k2','d2'].filter(k => k !== tKey);
    
    let options = [];
    while(options.length < 3) {
        let l = getRandom(HIJAIYAH);
        if(!options.find(x => x.text === l[tKey].a)) options.push({text: l[tKey].a, correct: true});
    }
    while(options.length < 9) {
        let wKey = getRandom(allowedWrongTypes);
        let l = getRandom(HIJAIYAH);
        if(!options.find(x => x.text === l[wKey].a)) options.push({text: l[wKey].a, correct: false});
    }
    options = shuffle(options);
    let found = 0;
    
    area.innerHTML = `
        <div class="absolute top-2 left-4 right-4 flex justify-between text-sky-300 font-bold text-xs bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
            <span>MISI: ${qNum}/${maxQ}</span>
        </div>
        <div class="w-full flex flex-col items-center mt-10">
            <p class="text-sm font-bold text-sky-100 mb-4 bg-sky-800/80 px-4 py-2 rounded-xl border border-sky-600 text-center leading-tight">
                Cari semua <span class="text-yellow-400 text-base">${typeName}</span>
            </p>
            <div class="grid grid-cols-3 gap-3 w-full max-w-[280px]">
                ${options.map((opt, i) => `
                    <button onclick="ansMode3(this, ${opt.correct})" class="aspect-square bg-slate-800 border-2 border-slate-600 rounded-2xl text-5xl arabic-text text-white shadow-md active:scale-90 transition-all flex items-center justify-center">
                        ${opt.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    window.ansMode3 = function(btn, isCorrect) {
        if(btn.disabled) return;
        btn.disabled = true;
        if(isCorrect) {
            btn.classList.add('bg-green-600', 'border-green-400'); playSfx('correct');
            found++; score += 5; correctCount++;
            if(found >= 3) setTimeout(() => nextTurn(), 800);
        } else {
            btn.classList.add('bg-red-600', 'border-red-400', 'opacity-40'); playSfx('wrong'); wrongCount++; score -= 2;
        }
        updateGameUI();
    };
}

function startMode(mode) {
    playSfx('click'); currentGameMode = mode;
    qNum = 0; score = 0; correctCount = 0; wrongCount = 0;
    
    if(mode === 'mode1') { maxQ = 10; document.getElementById('game-title').innerText = 'KENALI BARIS'; }
    if(mode === 'mode2') { maxQ = 1; document.getElementById('game-title').innerText = 'MATCH MASTER'; }
    if(mode === 'mode3') { maxQ = 5; document.getElementById('game-title').innerText = 'TREASURE HUNT'; }
    
    nav('game'); nextTurn();
}

function updateGameUI() { document.getElementById('game-score-display').innerText = `${score} 💰`; }

function nextTurn() {
    if(qNum >= maxQ) return endGame();
    qNum++; updateGameUI();
    let area = document.getElementById('game-area'); area.innerHTML = ''; 
    
    if(currentGameMode === 'mode1') playMode1(area);
    if(currentGameMode === 'mode2') playMode2(area);
    if(currentGameMode === 'mode3') playMode3(area);
}

function abortGame() { playSfx('click'); nav('modes'); }

function endGame() {
    let starsEarned = 0; 
    let pct = correctCount / (correctCount + wrongCount || 1);
    
    if(pct >= 0.8) starsEarned = 3; 
    else if(pct >= 0.5) starsEarned = 2; 
    else if(pct > 0) starsEarned = 1;

    pData.coins += score; pData.stars += starsEarned;

    // HANTAR MARKAH KE GOOGLE SHEETS
    if (pData.house && score > 0) {
        if (!pData.houseScores[pData.house]) pData.houseScores[pData.house] = 0;
        pData.houseScores[pData.house] += score;
        sendScoreToCloud(pData.house, score);
    }
    
    if (starsEarned > 0) {
        playSfx('win');
        if (!pData.completedModes[currentIslandId]) pData.completedModes[currentIslandId] = [];
        if (!pData.completedModes[currentIslandId].includes(currentGameMode)) pData.completedModes[currentIslandId].push(currentGameMode);
        
        if (pData.completedModes[currentIslandId].length >= 3) {
            let nextId = currentIslandId + 1;
            if (nextId <= 7 && !pData.unlockedIslands.includes(nextId)) pData.unlockedIslands.push(nextId);
        }
    } else {
        playSfx('wrong');
    }
    saveData();

    document.getElementById('result-score').innerText = '+' + score + ' Mata';
    document.getElementById('result-coins').innerText = '+' + score + ' 💰';
    document.getElementById('result-correct').innerText = correctCount;
    document.getElementById('result-wrong').innerText = wrongCount;
    
    document.getElementById('result-title').innerText = starsEarned > 0 ? "HEBAT!" : "CUBA LAGI!";
    document.getElementById('result-stars').innerHTML = Array.from({length:3}, (_,i) => 
        `<div class="text-5xl ${i < starsEarned ? 'text-yellow-400' : 'text-slate-700 grayscale opacity-50'} drop-shadow-md">⭐</div>`
    ).join('');
    
    let msg = starsEarned === 3 ? "Bagus, sempurna!" : (starsEarned > 0 ? "Teruskan usaha!" : "Jangan putus asa, asah kemahiran anda!");
    document.getElementById('result-msg').innerText = msg;
    
    document.getElementById('result-buttons').innerHTML = `
        <button onclick="nav('modes')" class="btn-primary w-full py-4 text-lg">SETERUSNYA ➡️</button>
        <button onclick="nav('map')" class="btn-primary w-full py-4 text-lg bg-gradient-to-b from-slate-600 to-slate-800 border-slate-500">PETA KEMBALI</button>`;
    
    nav('results');
}

function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(pData)); updateMap(); }

function loadData() {
    let saved = localStorage.getItem(STORAGE_KEY);
    if(saved) { 
        try { 
            let parsed = JSON.parse(saved);
            pData = { ...pData, ...parsed };
            if(!pData.inventory) pData.inventory = ['boat_sailboat'];
            if(!pData.equippedBoatId) pData.equippedBoatId = 'boat_sailboat';
            if(!pData.houseScores) pData.houseScores = { temenggung: 0, syahbandar: 0, bendahara: 0, laksamana: 0 };
            if(!pData.completedModes) pData.completedModes = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[]};
            for(let i=1; i<=7; i++) {
                if(!pData.completedModes[i]) pData.completedModes[i] = [];
            }
            if(!pData.unlockedIslands || pData.unlockedIslands.length === 0) pData.unlockedIslands = [1];
            document.getElementById('toggle-audio-setting').checked = pData.audio; 
        } catch(e){} 
    }
}

function resetData() { if(confirm("Perhatian! Adakah anda pasti mahu padam semua data permainan tempatan?")) { localStorage.removeItem(STORAGE_KEY); location.reload(); } }

window.onload = () => {
    loadData(); updateMap(); syncScoresFromCloud();
};