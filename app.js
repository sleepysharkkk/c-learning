/* ============ 規劃引擎：把問卷答案變成每週計畫 ============ */

function buildPlan(input){
  const startId = LEVEL_INFO[input.level].start;
  const startIdx = UNITS.findIndex(u => u.id === startId);
  let selected = UNITS.slice(startIdx);
  const weeks = input.duration === "2" ? 2 : input.duration === "4" ? 4 : 12;

  let weekUnits = [];
  if (weeks === 2){
    const u = selected.slice(0, 4);
    weekUnits = [u.slice(0,2), u.slice(2,4)];
  } else if (weeks === 4){
    const per = 2;
    for (let i = 0; i < 4; i++) weekUnits.push(selected.slice(i*per, i*per+per));
  } else { // 12 週：每週 1 單元，多的週次排複習週
    for (let i = 0; i < selected.length; i++) weekUnits.push([selected[i]]);
    while (weekUnits.length < 12) weekUnits.push([{id:"review"}]);
  }

  const plan = {
    input: input,
    weeks: weekUnits.map((units, i) => ({
      weekNo: i + 1,
      units: units,
      isReview: units.length === 1 && units[0].id === "review"
    })),
    totalWeeks: weeks,
    sprint: weeks === 2
  };

  // 結業驗收：取最後一個非複習單元
  const allUnits = [];
  weekUnits.forEach(w => w.forEach(u => { if (u.id !== "review") allUnits.push(u); }));
  plan.finalUnit = allUnits[allUnits.length - 1] || UNITS[UNITS.length - 1];
  return plan;
}

/* 複習週內容 */
const REVIEW = {
  title: "複習與加強週（沒有新單元）",
  goals: ["把前面所有單元的練習題全部重做一遍（不行的題目標記起來）","挑一個你最喜歡的舊專案，加上一個新功能","把筆記整理成一份「自己的教學文件」"],
  tasks: {
    "15": "重做 2 題之前覺得最難的練習題 → 做完對答案。",
    "30": "重做 3 題練習題 → 複習一遍筆記 → 選一個舊專案想想要加什麼功能。",
    "60": "重做全部練習題 → 幫一個舊專案加上新功能（例如計算機加上「除法」）→ 更新筆記。",
    "120": "60 分鐘版全部 → 把改良後的專案重新寫一遍（不偷看）→ 寫一小段心得：這個月你最有成就感的事。"
  },
  project: "本週沒有新小專案：目標是把舊專案變得更完整，而不是做新的。"
};/* ============ 渲染引擎：把計畫畫到畫面上 ============ */

function esc(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function generatePlan(e){
  e.preventDefault();
  const input = {
    skill: document.getElementById('f_skill').value.trim() || 'C++ 基礎入門',
    level: document.querySelector('input[name=level]:checked').value,
    time: document.querySelector('input[name=time]:checked').value,
    goal: document.getElementById('f_goal').value.trim(),
    duration: document.querySelector('input[name=duration]:checked').value
  };
  const plan = buildPlan(input);
  render(plan);
  document.getElementById('quizCard').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function backToQuiz(){
  document.getElementById('result').classList.add('hidden');
  document.getElementById('quizCard').classList.remove('hidden');
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function render(plan){
  const i = plan.input;
  const goal = i.goal || "看得懂 C++ 程式，能自己寫出小工具";
  document.getElementById('planSummary').innerHTML =
    "目標：<b>" + esc(goal) + "</b>　｜　程度：" + LEVEL_INFO[i.level].label +
    "　｜　時間：" + TIME_LABEL[i.time] + "　｜　期限：" + DUR_LABEL[i.duration];

  const unitCount = plan.weeks.reduce((n, w) => n + w.units.filter(u => u.id !== 'review').length, 0);
  document.getElementById('kpiRow').innerHTML =
    kpi(plan.totalWeeks + " 週", "總學習期間") +
    kpi(unitCount + " 個單元", "課程內容") +
    kpi(TIME_LABEL[i.time], "每天時間") +
    kpi("5 大交付", "路線・任務・資源・練習・專案");

  /* 一、路線總覽 */
  let routeHtml = '<ol style="margin-left:20px;font-size:.95rem;">';
  plan.weeks.forEach(w => {
    const names = w.units.map(u => u.id === 'review' ? '🔁 複習與加強' : esc(u.title)).join('　→　');
    routeHtml += '<li style="margin-bottom:6px;"><b>第 ' + w.weekNo + ' 週</b>：' + names + '</li>';
  });
  routeHtml += '</ol>';
  if (plan.sprint){
    routeHtml += '<div class="note-box" style="margin-top:12px;">⚠️ <b>2 週衝刺版提醒</b>：密度很高，建議每天至少投入 1 小時；如果真的跟不上，改成 4 週版本重新產生就好，不用硬撐。</div>';
  }
  document.getElementById('routeOverview').innerHTML = routeHtml;

  /* 二、每週計畫 */
  let weekHtml = '';
  plan.weeks.forEach(w => {
    if (w.isReview){
      weekHtml += reviewCard(w.weekNo, plan);
    } else {
      weekHtml += unitCard(w.weekNo, w.units, plan);
    }
  });
  document.getElementById('weeklyPlan').innerHTML = weekHtml;

  /* 三、資源 */
  document.getElementById('resources').innerHTML = RESOURCES.map(r =>
    '<li><a href="' + r.url + '" target="_blank" rel="noopener">' + esc(r.name) + '</a>' +
    '<span class="desc">' + esc(r.desc) + '</span></li>'
  ).join('');

  /* 四、結業驗收 */
  const fin = plan.finalUnit;
  document.getElementById('finalProject').innerHTML =
    '<div class="project-box">🎯 <b>結業專案：' + esc(fin.project) + '</b></div>' +
    '<p style="font-size:.9rem;margin-top:12px;"><b>完成標準</b>：<br>① 不偷看範例，能從空白檔案寫出完整程式<br>② 能對別人解釋每一行在做什麼<br>③ 檔案有存起來，之後想改隨時能改</p>' +
    '<p style="font-size:.88rem;color:var(--muted);margin-top:10px;">下一步：把結業專案貼給朋友玩，或繼續自學更多主題。接下來的版本我們會加入「遊戲開發」「演算法」等其他路線，敬請期待。</p>';
}

function kpi(v, label){
  return '<div class="kpi"><b>' + esc(v) + '</b>' + esc(label) + '</div>';
}

function unitCard(weekNo, units, plan){
  let h = '<section class="unit card">';
  h += '<span class="week-tag">第 ' + weekNo + ' 週</span>';
  h += '<h3>' + esc(units.map(u => u.title).join(' → ')) + '</h3>';

  units.forEach(u => {
    h += '<ul class="goal-list">' + u.goals.map(g => '<li>' + esc(g) + '</li>').join('') + '</ul>';
    h += '<div class="sub-title">📖 重點說明</div><p style="font-size:.9rem;">' + u.read + '</p>';
    h += '<div class="sub-title">⏰ 每天的任務（' + TIME_LABEL[plan.input.time] + '）</div>';
    h += '<div class="task-box">' + u.tasks[plan.input.time] + '</div>';
    if (u.sample){
      h += '<div class="sub-title">💻 範例程式（照著打一遍）</div>';
      h += '<pre class="code">' + esc(u.sample) + '</pre>';
    }
    h += '<div class="sub-title">✏️ 練習題（先自己想，再展開看答案）</div>';
    u.exercises.forEach((ex, idx) => {
      h += '<details><summary>練習 ' + (idx+1) + '：' + esc(ex.q) + '</summary>' +
           '<div class="ans"><b>提示：</b>' + esc(ex.hint) + '<br><br><b>參考答案：</b><pre class="code">' + esc(ex.ans) + '</pre></div></details>';
    });
    h += '<div class="sub-title">🛠️ 本週小專案</div>';
    h += '<div class="project-box">' + esc(u.project) + '</div>';
  });
  h += '</section>';
  return h;
}

function reviewCard(weekNo, plan){
  const r = REVIEW;
  let h = '<section class="unit card">';
  h += '<span class="week-tag">第 ' + weekNo + ' 週</span>';
  h += '<h3>🔁 ' + esc(r.title) + '</h3>';
  h += '<ul class="goal-list">' + r.goals.map(g => '<li>' + esc(g) + '</li>').join('') + '</ul>';
  h += '<div class="sub-title">⏰ 每天的任務（' + TIME_LABEL[plan.input.time] + '）</div>';
  h += '<div class="task-box">' + r.tasks[plan.input.time] + '</div>';
  h += '<div class="sub-title">🛠️ 小專案</div>';
  h += '<div class="project-box">' + esc(r.project) + '</div>';
  h += '</section>';
  return h;
}