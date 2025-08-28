
const state = {
  news: [
    { tag: "Announcement", title: "Euro2KLeague is back", text: "Season 1 opens this fall with 12 founding teams.", link: "#" },
    { tag: "Update", title: "Open Tryouts", text: "Player registrations are now live. Show your skill.", link: "#" },
    { tag: "Partnership", title: "Broadcast Nights", text: "Thursday Night Matchups streamed weekly.", link: "#" },
  ],
  standings: [
    { team: "Berlin Titans", w: 8, l: 2, streak: "W4" },
    { team: "Paris Phantoms", w: 7, l: 3, streak: "L1" },
    { team: "Madrid Royals", w: 6, l: 4, streak: "W2" },
    { team: "London Knights", w: 5, l: 5, streak: "W1" },
    { team: "Rome Wolves", w: 4, l: 6, streak: "L2" },
    { team: "Lisbon Eagles", w: 3, l: 7, streak: "L3" },
  ],
  schedule: [
    { date: "Fri 20:00", home: "Berlin Titans", away: "London Knights", id: 101 },
    { date: "Fri 21:00", home: "Paris Phantoms", away: "Madrid Royals", id: 102 },
    { date: "Sat 19:30", home: "Rome Wolves", away: "Lisbon Eagles", id: 103 },
  ],
  leaders: [
    { cat: "PPG", player: "KAZ", team: "Berlin", stat: 28.4 },
    { cat: "APG", player: "Nico", team: "Paris", stat: 12.1 },
    { cat: "RPG", player: "Jules", team: "Madrid", stat: 14.0 },
    { cat: "SPG", player: "Ari", team: "London", stat: 3.2 },
  ],
  teams: ["Berlin Titans","Paris Phantoms","Madrid Royals","London Knights","Rome Wolves","Lisbon Eagles"]
};

document.getElementById("year").textContent = new Date().getFullYear();

// News
const newsGrid = document.getElementById("news-grid");
state.news.forEach(n => {
  const el = document.createElement("a");
  el.className = "card";
  el.href = n.link;
  el.innerHTML = \`
    <span class="tag">\${n.tag}</span>
    <h3>\${n.title}</h3>
    <p>\${n.text}</p>
  \`;
  newsGrid.appendChild(el);
});

// Standings
const tbody = document.querySelector("#standings-table tbody");
state.standings.forEach((row, i) => {
  const pct = (row.w / (row.w + row.l)).toFixed(3);
  const tr = document.createElement("tr");
  tr.innerHTML = \`
    <td>\${row.team}</td>
    <td>\${row.w}</td>
    <td>\${row.l}</td>
    <td>\${pct}</td>
    <td>\${row.streak}</td>
  \`;
  tbody.appendChild(tr);
});

// Schedule
const sched = document.getElementById("schedule-list");
state.schedule.forEach(g => {
  const div = document.createElement("a");
  div.className = "card";
  div.href = \`game.html?id=\${g.id}\`;
  div.innerHTML = \`
    <h3>\${g.away} @ \${g.home}</h3>
    <p>\${g.date}</p>
  \`;
  sched.appendChild(div);
});

// Leaders
const leadersGrid = document.getElementById("leaders-grid");
state.leaders.forEach(l => {
  const el = document.createElement("div");
  el.className = "card";
  el.innerHTML = \`
    <div class="tag">\${l.cat}</div>
    <h3>\${l.player} — \${l.team}</h3>
    <div class="stat">\${l.stat}</div>
  \`;
  leadersGrid.appendChild(el);
});

// Teams
const teamsGrid = document.getElementById("teams-grid");
state.teams.forEach(t => {
  const el = document.createElement("div");
  el.className = "card team";
  el.innerHTML = \`
    <div class="teams team"><span class="pill">\${t}</span></div>
  \`;
  teamsGrid.appendChild(el);
});
