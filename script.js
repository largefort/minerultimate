let gold = 0;
let diamonds = 0;
let miners = 0;
let diamondMiners = 0;
let minerCost = 10;
let diamondMinerCost = 50;
let goldPerSecond = 0;
let diamondsPerSecond = 0;

document.getElementById('mineGoldButton').addEventListener('click', mineGold);
document.getElementById('mineDiamondButton').addEventListener('click', mineDiamond);
document.getElementById('hireMinerButton').addEventListener('click', hireMiner);
document.getElementById('hireDiamondMinerButton').addEventListener('click', hireDiamondMiner);

function mineGold() {
    gold += 1;
    updateDisplay();
}

function mineDiamond() {
    diamonds += 1;
    updateDisplay();
}

function hireMiner() {
    if (gold >= minerCost) {
        gold -= minerCost;
        miners += 1;
        goldPerSecond += 1;
        minerCost = Math.floor(minerCost * 1.5);
        updateDisplay();
    }
}

function hireDiamondMiner() {
    if (diamonds >= diamondMinerCost) {
        diamonds -= diamondMinerCost;
        diamondMiners += 1;
        diamondsPerSecond += 1;
        diamondMinerCost = Math.floor(diamondMinerCost * 1.5);
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('gold').textContent = gold;
    document.getElementById('diamonds').textContent = diamonds;
    document.getElementById('miners').textContent = miners;
    document.getElementById('diamondMiners').textContent = diamondMiners;
    document.getElementById('minerCost').textContent = minerCost;
    document.getElementById('diamondMinerCost').textContent = diamondMinerCost;
}

// Idle gold and diamond generation
setInterval(() => {
    gold += goldPerSecond;
    diamonds += diamondsPerSecond;
    updateDisplay();
}, 1000);

// Save game state
setInterval(() => {
    localStorage.setItem('gold', gold);
    localStorage.setItem('diamonds', diamonds);
    localStorage.setItem('miners', miners);
    localStorage.setItem('diamondMiners', diamondMiners);
    localStorage.setItem('minerCost', minerCost);
    localStorage.setItem('diamondMinerCost', diamondMinerCost);
    localStorage.setItem('goldPerSecond', goldPerSecond);
    localStorage.setItem('diamondsPerSecond', diamondsPerSecond);
}, 5000);

// Load game state
window.onload = () => {
    if (localStorage.getItem('gold')) {
        gold = parseInt(localStorage.getItem('gold'));
        diamonds = parseInt(localStorage.getItem('diamonds'));
        miners = parseInt(localStorage.getItem('miners'));
        diamondMiners = parseInt(localStorage.getItem('diamondMiners'));
        minerCost = parseInt(localStorage.getItem('minerCost'));
        diamondMinerCost = parseInt(localStorage.getItem('diamondMinerCost'));
        goldPerSecond = parseInt(localStorage.getItem('goldPerSecond'));
        diamondsPerSecond = parseInt(localStorage.getItem('diamondsPerSecond'));
        updateDisplay();
    }
};
