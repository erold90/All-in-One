// Betting Slips Data - Extracted from Sisal screenshots
const bettingSlips = [
    {
        id: 1,
        name: "Schedina 1",
        quota: 805.17,
        stake: 10.00,
        potentialWin: 8373.79,
        bets: [
            { match: "Auxerre - Paris Saint-Germain", datetime: "23/01 - 20:00", type: "1X2 ESITO FINALE", selection: "2", odds: 1.28 },
            { match: "Inter - Pisa", datetime: "23/01 - 20:45", type: "1X2 ESITO FINALE", selection: "1", odds: 1.18 },
            { match: "Bayer Leverkusen - Werder Brema", datetime: "24/01 - 15:30", type: "1X2 ESITO FINALE", selection: "1", odds: 1.60 },
            { match: "Bayern Monaco - Augsburg", datetime: "24/01 - 15:30", type: "My Combo", selection: "1X2:1 + U/O 1.5:OVER", odds: 1.15, isCombo: true },
            { match: "Manchester City - Wolverhampton", datetime: "24/01 - 16:00", type: "My Combo", selection: "1X2:1 + U/O 1.5:OVER", odds: 1.33, isCombo: true },
            { match: "Fiorentina - Cagliari", datetime: "24/01 - 18:00", type: "My Combo", selection: "DOPPIA CHANCE:1X + U/O 1.5:OVER", odds: 1.50, isCombo: true },
            { match: "Union Berlino - Borussia Dortmund", datetime: "24/01 - 18:30", type: "DOPPIA CHANCE", selection: "X2", odds: 1.27 },
            { match: "Bournemouth - Liverpool", datetime: "24/01 - 18:30", type: "DOPPIA CHANCE", selection: "X2", odds: 1.27 },
            { match: "Lecce - Lazio", datetime: "24/01 - 20:45", type: "DOPPIA CHANCE", selection: "X2", odds: 1.22 },
            { match: "Villarreal - Real Madrid", datetime: "24/01 - 21:00", type: "My Combo", selection: "DOPPIA CHANCE:X2 + U/O 1.5:OVER", odds: 1.52, isCombo: true },
            { match: "Marsiglia - Lens", datetime: "24/01 - 21:05", type: "DOPPIA CHANCE", selection: "1X", odds: 1.30 },
            { match: "Atletico Madrid - Maiorca", datetime: "25/01 - 14:00", type: "1X2 ESITO FINALE", selection: "1", odds: 1.28 },
            { match: "Atalanta - Parma", datetime: "25/01 - 15:00", type: "My Combo", selection: "1X2:1 + U/O 1.5:OVER", odds: 1.67, isCombo: true },
            { match: "Genoa - Bologna", datetime: "25/01 - 15:00", type: "U/O 2.5", selection: "UNDER", odds: 1.57 },
            { match: "Crystal Palace - Chelsea", datetime: "25/01 - 15:00", type: "DOPPIA CHANCE", selection: "X2", odds: 1.27 },
            { match: "Borussia Monchengladbach - Stoccarda", datetime: "25/01 - 15:30", type: "GOAL/NOGOAL", selection: "GOAL", odds: 1.45 },
            { match: "Arsenal - Manchester United", datetime: "25/01 - 17:30", type: "1X2 ESITO FINALE", selection: "1", odds: 1.57 },
            { match: "Juventus - Napoli", datetime: "25/01 - 18:00", type: "DOPPIA CHANCE", selection: "1X", odds: 1.22 },
            { match: "Benfica - CF Estrela", datetime: "25/01 - 19:00", type: "1X2 ESITO FINALE", selection: "1", odds: 1.13 },
            { match: "Roma - Milan", datetime: "25/01 - 20:45", type: "GOAL/NOGOAL", selection: "GOAL", odds: 1.85 }
        ]
    },
    {
        id: 2,
        name: "Schedina 2",
        quota: 53.67,
        stake: 3.00,
        potentialWin: 167.45,
        bets: [
            { match: "Auxerre - Paris Saint-Germain", datetime: "23/01 - 20:00", type: "1X2 ESITO FINALE", selection: "2", odds: 1.30 },
            { match: "Inter - Pisa", datetime: "23/01 - 20:45", type: "My Combo", selection: "1X2:1 + U/O 1.5:OVER", odds: 1.33, isCombo: true },
            { match: "Bayer Leverkusen - Werder Brema", datetime: "24/01 - 15:30", type: "My Combo", selection: "1X2:1 + U/O 1.5:OVER", odds: 1.82, isCombo: true },
            { match: "Bayern Monaco - Augsburg", datetime: "24/01 - 15:30", type: "My Combo", selection: "1X2:1 + MULTIGOAL:1-6", odds: 1.23, isCombo: true },
            { match: "Union Berlino - Borussia Dortmund", datetime: "24/01 - 18:30", type: "1X2 ESITO FINALE", selection: "2", odds: 2.05 },
            { match: "Bournemouth - Liverpool", datetime: "24/01 - 18:30", type: "DOPPIA CHANCE", selection: "X2", odds: 1.27 },
            { match: "Arsenal - Manchester United", datetime: "25/01 - 17:30", type: "My Combo", selection: "1X2:1 + U/O 1.5:OVER", odds: 1.86, isCombo: true },
            { match: "Juventus - Napoli", datetime: "25/01 - 18:00", type: "My Combo", selection: "DOPPIA CHANCE:1X + U/O 3.5:UNDER", odds: 1.52, isCombo: true },
            { match: "Roma - Milan", datetime: "25/01 - 20:45", type: "U/O 2.5", selection: "UNDER", odds: 1.65 }
        ]
    },
    {
        id: 3,
        name: "Schedina 3",
        quota: 5.01,
        stake: 3.00,
        potentialWin: 15.03,
        bets: [
            { match: "Auxerre - Paris Saint-Germain", datetime: "23/01 - 20:00", type: "DOPPIA CHANCE", selection: "X2", odds: 1.05 },
            { match: "Inter - Pisa", datetime: "23/01 - 20:45", type: "My Combo", selection: "1X2:1 + U/O 1.5:OVER", odds: 1.33, isCombo: true },
            { match: "Bayer Leverkusen - Werder Brema", datetime: "24/01 - 15:30", type: "DOPPIA CHANCE", selection: "1X", odds: 1.15 },
            { match: "Bayern Monaco - Augsburg", datetime: "24/01 - 15:30", type: "My Combo", selection: "1X2:1 + MULTIGOAL:1-6", odds: 1.23, isCombo: true },
            { match: "Manchester City - Wolverhampton", datetime: "24/01 - 16:00", type: "1X2 ESITO FINALE", selection: "1", odds: 1.20 },
            { match: "Bournemouth - Liverpool", datetime: "24/01 - 18:30", type: "DOPPIA CHANCE", selection: "X2", odds: 1.27 },
            { match: "Arsenal - Manchester United", datetime: "25/01 - 17:30", type: "DOPPIA CHANCE", selection: "1X", odds: 1.12 },
            { match: "Juventus - Napoli", datetime: "25/01 - 18:00", type: "U/O 2.5", selection: "UNDER", odds: 1.48 }
        ]
    },
    {
        id: 4,
        name: "Schedina 4",
        quota: 3.58,
        stake: 4.00,
        potentialWin: 14.32,
        bets: [
            { match: "Inter - Pisa", datetime: "23/01 - 20:45", type: "My Combo", selection: "1X2:1 + U/O 1.5:OVER", odds: 1.33, isCombo: true },
            { match: "Bayern Monaco - Augsburg", datetime: "24/01 - 15:30", type: "My Combo", selection: "MULTIGOAL:1-6 + 1X2:1", odds: 1.23, isCombo: true },
            { match: "Bournemouth - Liverpool", datetime: "24/01 - 18:30", type: "DOPPIA CHANCE", selection: "X2", odds: 1.27 },
            { match: "Juventus - Napoli", datetime: "25/01 - 18:00", type: "MULTIGOAL MULTIESITO", selection: "1-3", odds: 1.33 },
            { match: "Roma - Milan", datetime: "25/01 - 20:45", type: "COMBO CHANCE", selection: "X O NOGOAL", odds: 1.29 }
        ]
    }
];

// Match data with live scores (simulated - will be updated with real API)
let matchesData = {
    "Auxerre - Paris Saint-Germain": { homeTeam: "Auxerre", awayTeam: "Paris Saint-Germain", datetime: "2026-01-23T20:00:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Inter - Pisa": { homeTeam: "Inter", awayTeam: "Pisa", datetime: "2026-01-23T20:45:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Bayer Leverkusen - Werder Brema": { homeTeam: "Bayer Leverkusen", awayTeam: "Werder Brema", datetime: "2026-01-24T15:30:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Bayern Monaco - Augsburg": { homeTeam: "Bayern Monaco", awayTeam: "Augsburg", datetime: "2026-01-24T15:30:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Manchester City - Wolverhampton": { homeTeam: "Manchester City", awayTeam: "Wolverhampton", datetime: "2026-01-24T16:00:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Fiorentina - Cagliari": { homeTeam: "Fiorentina", awayTeam: "Cagliari", datetime: "2026-01-24T18:00:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Union Berlino - Borussia Dortmund": { homeTeam: "Union Berlino", awayTeam: "Borussia Dortmund", datetime: "2026-01-24T18:30:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Bournemouth - Liverpool": { homeTeam: "Bournemouth", awayTeam: "Liverpool", datetime: "2026-01-24T18:30:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Lecce - Lazio": { homeTeam: "Lecce", awayTeam: "Lazio", datetime: "2026-01-24T20:45:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Villarreal - Real Madrid": { homeTeam: "Villarreal", awayTeam: "Real Madrid", datetime: "2026-01-24T21:00:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Marsiglia - Lens": { homeTeam: "Marsiglia", awayTeam: "Lens", datetime: "2026-01-24T21:05:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Atletico Madrid - Maiorca": { homeTeam: "Atletico Madrid", awayTeam: "Maiorca", datetime: "2026-01-25T14:00:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Atalanta - Parma": { homeTeam: "Atalanta", awayTeam: "Parma", datetime: "2026-01-25T15:00:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Genoa - Bologna": { homeTeam: "Genoa", awayTeam: "Bologna", datetime: "2026-01-25T15:00:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Crystal Palace - Chelsea": { homeTeam: "Crystal Palace", awayTeam: "Chelsea", datetime: "2026-01-25T15:00:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Borussia Monchengladbach - Stoccarda": { homeTeam: "Borussia Monchengladbach", awayTeam: "Stoccarda", datetime: "2026-01-25T15:30:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Arsenal - Manchester United": { homeTeam: "Arsenal", awayTeam: "Manchester United", datetime: "2026-01-25T17:30:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Juventus - Napoli": { homeTeam: "Juventus", awayTeam: "Napoli", datetime: "2026-01-25T18:00:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Benfica - CF Estrela": { homeTeam: "Benfica", awayTeam: "CF Estrela", datetime: "2026-01-25T19:00:00", homeScore: null, awayScore: null, status: "scheduled" },
    "Roma - Milan": { homeTeam: "Roma", awayTeam: "Milan", datetime: "2026-01-25T20:45:00", homeScore: null, awayScore: null, status: "scheduled" }
};

// Auto-refresh interval
let refreshInterval = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderMatches();
    renderBettingSlips();
    updateSummary();
    updateLastRefreshTime();

    // Set up auto-refresh
    const autoRefreshCheckbox = document.getElementById('auto-refresh');
    if (autoRefreshCheckbox.checked) {
        startAutoRefresh();
    }

    autoRefreshCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            startAutoRefresh();
        } else {
            stopAutoRefresh();
        }
    });

    // Manual refresh button
    document.getElementById('refresh-btn').addEventListener('click', () => {
        fetchLiveScores();
    });

    // Initial fetch
    fetchLiveScores();
});

function startAutoRefresh() {
    if (refreshInterval) clearInterval(refreshInterval);
    refreshInterval = setInterval(fetchLiveScores, 30000);
}

function stopAutoRefresh() {
    if (refreshInterval) {
        clearInterval(refreshInterval);
        refreshInterval = null;
    }
}

function updateLastRefreshTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('it-IT');
    document.getElementById('last-update').textContent = `Ultimo aggiornamento: ${timeString}`;
}

// Fetch live scores from API
async function fetchLiveScores() {
    const refreshBtn = document.getElementById('refresh-btn');
    refreshBtn.innerHTML = '<span class="loading"></span> Aggiornando...';
    refreshBtn.disabled = true;

    try {
        // Try to fetch from football-data.org API (free tier)
        // You can replace this with your preferred API
        const response = await fetch('https://api.football-data.org/v4/matches?status=LIVE,FINISHED,SCHEDULED', {
            headers: {
                'X-Auth-Token': 'YOUR_API_KEY_HERE' // Replace with your API key
            }
        });

        if (response.ok) {
            const data = await response.json();
            updateMatchesFromAPI(data);
        } else {
            // Fallback to simulated data for demo
            simulateLiveScores();
        }
    } catch (error) {
        console.log('API not available, using simulated data');
        simulateLiveScores();
    }

    renderMatches();
    renderBettingSlips();
    updateSummary();
    updateLastRefreshTime();

    refreshBtn.innerHTML = '<span class="refresh-icon">&#8635;</span> Aggiorna';
    refreshBtn.disabled = false;
}

// Simulate live scores for demo purposes
function simulateLiveScores() {
    const now = new Date();

    Object.keys(matchesData).forEach(matchName => {
        const match = matchesData[matchName];
        const matchTime = new Date(match.datetime);
        const timeDiff = now - matchTime;
        const minutesSinceStart = Math.floor(timeDiff / 60000);

        if (minutesSinceStart >= 0 && minutesSinceStart < 105) {
            // Match is live
            match.status = 'live';
            match.minute = Math.min(minutesSinceStart, 90) + (minutesSinceStart > 45 && minutesSinceStart < 60 ? 0 : 0);

            // Simulate random scores based on time
            if (match.homeScore === null) {
                match.homeScore = 0;
                match.awayScore = 0;
            }

            // Random goal probability
            if (Math.random() < 0.02) {
                if (Math.random() < 0.5) {
                    match.homeScore++;
                } else {
                    match.awayScore++;
                }
            }
        } else if (minutesSinceStart >= 105) {
            // Match finished
            match.status = 'finished';
            if (match.homeScore === null) {
                // Generate final score
                match.homeScore = Math.floor(Math.random() * 4);
                match.awayScore = Math.floor(Math.random() * 3);
            }
        } else {
            // Match not started
            match.status = 'scheduled';
        }
    });
}

// Update matches from real API data
function updateMatchesFromAPI(apiData) {
    if (!apiData.matches) return;

    apiData.matches.forEach(apiMatch => {
        const matchName = `${apiMatch.homeTeam.name} - ${apiMatch.awayTeam.name}`;
        if (matchesData[matchName]) {
            matchesData[matchName].homeScore = apiMatch.score.fullTime.home;
            matchesData[matchName].awayScore = apiMatch.score.fullTime.away;
            matchesData[matchName].status = apiMatch.status.toLowerCase();
        }
    });
}

// Render matches overview
function renderMatches() {
    const grid = document.getElementById('matches-grid');
    grid.innerHTML = '';

    // Sort matches by datetime
    const sortedMatches = Object.entries(matchesData).sort((a, b) => {
        return new Date(a[1].datetime) - new Date(b[1].datetime);
    });

    sortedMatches.forEach(([matchName, match]) => {
        const card = document.createElement('div');
        card.className = `match-card ${match.status}`;

        const dateTime = new Date(match.datetime);
        const dateStr = dateTime.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit' });
        const timeStr = dateTime.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });

        let statusHtml = '';
        switch (match.status) {
            case 'live':
                statusHtml = `<span class="match-status live">LIVE ${match.minute || ''}'</span>`;
                break;
            case 'finished':
                statusHtml = '<span class="match-status finished">Finita</span>';
                break;
            default:
                statusHtml = '<span class="match-status scheduled">In programma</span>';
        }

        const scoreHtml = match.status === 'scheduled'
            ? '<span class="match-score pending">vs</span>'
            : `<span class="match-score">${match.homeScore} - ${match.awayScore}</span>`;

        card.innerHTML = `
            <div class="match-header">
                <span class="match-datetime">${dateStr} - ${timeStr}</span>
                ${statusHtml}
            </div>
            <div class="match-teams">
                <div class="team">
                    <span class="team-name">${match.homeTeam}</span>
                </div>
                ${scoreHtml}
                <div class="team">
                    <span class="team-name">${match.awayTeam}</span>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Evaluate bet result
function evaluateBet(bet, match) {
    if (match.status === 'scheduled') return 'pending';

    const homeScore = match.homeScore;
    const awayScore = match.awayScore;
    const totalGoals = homeScore + awayScore;

    // Determine match result
    let matchResult;
    if (homeScore > awayScore) matchResult = '1';
    else if (homeScore < awayScore) matchResult = '2';
    else matchResult = 'X';

    // Check different bet types
    const selection = bet.selection.toUpperCase();
    const type = bet.type.toUpperCase();

    // Handle combo bets
    if (bet.isCombo) {
        const parts = selection.split(' + ');
        let allWon = true;

        for (const part of parts) {
            if (!evaluateSingleSelection(part, matchResult, homeScore, awayScore, totalGoals)) {
                allWon = false;
                break;
            }
        }

        return allWon ? 'won' : 'lost';
    }

    // Handle single bets
    return evaluateSingleSelection(`${type}:${selection}`, matchResult, homeScore, awayScore, totalGoals) ? 'won' : 'lost';
}

function evaluateSingleSelection(selection, matchResult, homeScore, awayScore, totalGoals) {
    selection = selection.toUpperCase();

    // 1X2 bets
    if (selection.includes('1X2:1') || selection === '1X2 ESITO FINALE:1') {
        return matchResult === '1';
    }
    if (selection.includes('1X2:2') || selection === '1X2 ESITO FINALE:2') {
        return matchResult === '2';
    }
    if (selection.includes('1X2:X') || selection === '1X2 ESITO FINALE:X') {
        return matchResult === 'X';
    }

    // Double chance
    if (selection.includes('DOPPIA CHANCE:1X') || selection === 'DOPPIA CHANCE:1X') {
        return matchResult === '1' || matchResult === 'X';
    }
    if (selection.includes('DOPPIA CHANCE:X2') || selection === 'DOPPIA CHANCE:X2') {
        return matchResult === 'X' || matchResult === '2';
    }
    if (selection.includes('DOPPIA CHANCE:12') || selection === 'DOPPIA CHANCE:12') {
        return matchResult === '1' || matchResult === '2';
    }

    // Over/Under
    if (selection.includes('U/O 1.5:OVER')) {
        return totalGoals > 1.5;
    }
    if (selection.includes('U/O 1.5:UNDER')) {
        return totalGoals < 1.5;
    }
    if (selection.includes('U/O 2.5:OVER')) {
        return totalGoals > 2.5;
    }
    if (selection.includes('U/O 2.5:UNDER')) {
        return totalGoals < 2.5;
    }
    if (selection.includes('U/O 3.5:OVER')) {
        return totalGoals > 3.5;
    }
    if (selection.includes('U/O 3.5:UNDER')) {
        return totalGoals < 3.5;
    }

    // Goal/NoGoal
    if (selection.includes('GOAL/NOGOAL:GOAL') || selection === 'GOAL/NOGOAL:GOAL') {
        return homeScore > 0 && awayScore > 0;
    }
    if (selection.includes('GOAL/NOGOAL:NOGOAL') || selection === 'GOAL/NOGOAL:NOGOAL') {
        return homeScore === 0 || awayScore === 0;
    }

    // Multigoal
    if (selection.includes('MULTIGOAL:1-6') || selection.includes('MULTIGOAL MULTIESITO:1-6')) {
        return totalGoals >= 1 && totalGoals <= 6;
    }
    if (selection.includes('MULTIGOAL:1-3') || selection.includes('MULTIGOAL MULTIESITO:1-3')) {
        return totalGoals >= 1 && totalGoals <= 3;
    }

    // Combo Chance (X or NoGoal)
    if (selection.includes('X O NOGOAL')) {
        return matchResult === 'X' || homeScore === 0 || awayScore === 0;
    }

    // Simple selections
    if (selection === '1') return matchResult === '1';
    if (selection === '2') return matchResult === '2';
    if (selection === 'X') return matchResult === 'X';
    if (selection === '1X') return matchResult === '1' || matchResult === 'X';
    if (selection === 'X2') return matchResult === 'X' || matchResult === '2';
    if (selection === 'OVER') return totalGoals > 2.5;
    if (selection === 'UNDER') return totalGoals < 2.5;
    if (selection === 'GOAL') return homeScore > 0 && awayScore > 0;
    if (selection === 'NOGOAL') return homeScore === 0 || awayScore === 0;

    return true; // Default to pending/unknown
}

// Render betting slips
function renderBettingSlips() {
    const container = document.getElementById('slips-container');
    container.innerHTML = '';

    bettingSlips.forEach(slip => {
        const slipElement = document.createElement('div');
        slipElement.className = 'betting-slip';

        let wonCount = 0;
        let lostCount = 0;
        let pendingCount = 0;
        let liveCount = 0;

        const betsHtml = slip.bets.map(bet => {
            const match = matchesData[bet.match];
            let betStatus = 'pending';
            let statusIcon = 'pending';
            let scoreHtml = '';

            if (match) {
                if (match.status === 'live') {
                    betStatus = 'live';
                    statusIcon = 'live';
                    scoreHtml = `<span class="bet-score">${match.homeScore} - ${match.awayScore}</span>`;
                    liveCount++;
                } else if (match.status === 'finished') {
                    betStatus = evaluateBet(bet, match);
                    statusIcon = betStatus;
                    scoreHtml = `<span class="bet-score">${match.homeScore} - ${match.awayScore}</span>`;
                    if (betStatus === 'won') wonCount++;
                    else if (betStatus === 'lost') lostCount++;
                } else {
                    pendingCount++;
                }
            } else {
                pendingCount++;
            }

            return `
                <div class="bet-item ${betStatus}">
                    <div class="bet-match-info">
                        <span class="bet-match-name">${bet.match}</span>
                        <span class="bet-datetime">${bet.datetime}</span>
                    </div>
                    <div class="bet-details">
                        <span class="bet-selection">${bet.type}: <strong>${bet.selection}</strong></span>
                        <span class="bet-odds">${bet.odds.toFixed(2)}</span>
                    </div>
                    ${scoreHtml || statusIcon !== 'pending' ? `
                    <div class="bet-result">
                        ${scoreHtml}
                        <span class="bet-status-icon ${statusIcon}"></span>
                    </div>
                    ` : ''}
                </div>
            `;
        }).join('');

        let slipStatus = 'pending';
        let slipStatusText = 'In corso';
        if (lostCount > 0) {
            slipStatus = 'lost';
            slipStatusText = 'Persa';
        } else if (pendingCount === 0 && liveCount === 0 && wonCount === slip.bets.length) {
            slipStatus = 'won';
            slipStatusText = 'Vinta!';
        } else if (liveCount > 0) {
            slipStatus = 'live';
            slipStatusText = 'LIVE';
        }

        slipElement.innerHTML = `
            <div class="slip-header">
                <span class="slip-title">${slip.name}</span>
                <span class="slip-quota">Quota ${slip.quota.toFixed(2)}</span>
            </div>
            <div class="slip-info">
                <div class="slip-info-item">
                    <div class="slip-info-label">Puntata</div>
                    <div class="slip-info-value">${slip.stake.toFixed(2)} €</div>
                </div>
                <div class="slip-info-item">
                    <div class="slip-info-label">Vincita Potenziale</div>
                    <div class="slip-info-value">${slip.potentialWin.toFixed(2)} €</div>
                </div>
            </div>
            <div class="slip-bets">
                ${betsHtml}
            </div>
            <div class="slip-footer">
                <div class="slip-status">
                    <span class="status-badge ${slipStatus}">${slipStatusText}</span>
                </div>
                <span class="slip-progress">${wonCount}/${slip.bets.length} vinte</span>
            </div>
        `;

        container.appendChild(slipElement);
    });
}

// Update summary cards
function updateSummary() {
    const totalStake = bettingSlips.reduce((sum, slip) => sum + slip.stake, 0);
    const potentialWin = bettingSlips.reduce((sum, slip) => sum + slip.potentialWin, 0);

    document.getElementById('total-stake').textContent = `${totalStake.toFixed(2)} €`;
    document.getElementById('potential-win').textContent = `${potentialWin.toFixed(2)} €`;

    // Calculate overall status
    let hasLive = false;
    let hasLost = false;
    let allWon = true;

    bettingSlips.forEach(slip => {
        slip.bets.forEach(bet => {
            const match = matchesData[bet.match];
            if (match) {
                if (match.status === 'live') hasLive = true;
                if (match.status === 'finished') {
                    const result = evaluateBet(bet, match);
                    if (result === 'lost') hasLost = true;
                    if (result !== 'won') allWon = false;
                } else {
                    allWon = false;
                }
            } else {
                allWon = false;
            }
        });
    });

    const statusBadge = document.querySelector('#current-status .status-badge');
    if (hasLost) {
        statusBadge.className = 'status-badge lost';
        statusBadge.textContent = 'Alcune perse';
    } else if (allWon) {
        statusBadge.className = 'status-badge won';
        statusBadge.textContent = 'Tutte vinte!';
    } else if (hasLive) {
        statusBadge.className = 'status-badge live';
        statusBadge.textContent = 'LIVE';
    } else {
        statusBadge.className = 'status-badge pending';
        statusBadge.textContent = 'In attesa';
    }
}

// Manual score update function (for testing)
function setScore(matchName, homeScore, awayScore, status = 'finished') {
    if (matchesData[matchName]) {
        matchesData[matchName].homeScore = homeScore;
        matchesData[matchName].awayScore = awayScore;
        matchesData[matchName].status = status;
        renderMatches();
        renderBettingSlips();
        updateSummary();
    }
}

// Export functions for console testing
window.setScore = setScore;
window.matchesData = matchesData;
window.bettingSlips = bettingSlips;
