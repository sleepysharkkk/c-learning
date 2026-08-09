/* 學習單元庫：C++ 基礎入門 */
const UNITS = [
{
  id:"u1",
  title:"認識程式 & 寫出第一個程式",
  goals:["了解「程式」是什麼、C++ 是用來幹嘛的","準備好寫程式的地方（推薦免安裝的線上編輯器）","寫出第一個程式：印出 Hello World","學會修改程式、重新執行"],
  read:"什麼是程式？程式就是一連串「照著做的指令」。C++ 是世界上最常用的語言之一，很多遊戲、作業系統、金融系統都用 C++ 寫的。新手最推薦用 <b>OnlineGDB</b>（免安裝、開網頁就能寫），先別急著裝複雜的開發環境。",
  tasks:{
    "15":"打開 OnlineGDB → 把下方範例程式<b>用手打一遍</b>（不要複製貼上）→ 按 Run 看結果。今天任務完成。",
    "30":"15 分鐘版全部 → 修改裡面的文字、多印一行，觀察輸出改變 → 休息 5 分鐘，回想「是哪一行讓畫面出現文字」。",
    "60":"30 分鐘版全部 → 完成練習題 1～2 題 → 用 cout 印出 3 行自我介紹 → 把學到的寫成一句話筆記。",
    "120":"60 分鐘版全部 → 不看範例，憑記憶重寫一遍 → 完成本週小專案 → 整理筆記：程式長什麼樣、cout 在做什麼。"
  },
  exercises:[
    {q:"寫出一個程式，執行後印出：Hello, C++!",hint:"需要 #include <iostream>、using namespace std、main 函式、cout。",ans:"#include <iostream>\nusing namespace std;\nint main(){\n    cout << \"Hello, C++!\" << endl;\n    return 0;\n}"},
    {q:"cout 後面要接哪兩個符號，才能把文字送到螢幕上？",hint:"它長得像「輸出的箭頭」。",ans:"<<（兩個小於符號，叫「輸出運算子」）"},
    {q:"每一行程式指令的結尾要用什麼符號？",hint:"跟中文的句號概念很像。",ans:"分號 ;（告訴電腦「這個指令結束了」）"}
  ],
  project:"自我介紹小卡：用 cout 印出 3 行以上的自我介紹（姓名、興趣、為什麼想學程式），每一行之間留一行空白，讓畫面好看。",
  sample:"#include <iostream>\nusing namespace std;\nint main(){\n    cout << \"Hello, C++!\" << endl;\n    return 0;\n}"
},
{
  id:"u2",
  title:"變數與資料型態：讓程式記得住東西",
  goals:["認識 int、double、char、bool、string 五種常用型態","學會用變數「存放」資料","學會用 cin 讓使用者輸入資料","寫出第一個會回應你的程式"],
  read:"變數就像「貼了標籤的盒子」：<b>int</b> 裝整數、<b>double</b> 裝有小數的數、<b>char</b> 裝單一字符、<b>bool</b> 裝是或否、<b>string</b> 裝一段文字。<b>cin >></b> 可以讀取使用者輸入──這是讓程式「活起來」的關鍵。",
  tasks:{
    "15":"讀「重點說明」→ 新增一個 int 變數並印出 → 改成 double 和 string 各試一次 → 看型態不同會怎樣。",
    "30":"15 分鐘版全部 → 試著用 cin 讀一個數字再印出來 → 想一想：變數名稱為什麼不能亂取？",
    "60":"30 分鐘版全部 → 完成練習題 1～3 題 → 把「加法計算機」雛形寫出來（cin 讀兩個數、相加、cout 印出）。",
    "120":"60 分鐘版全部 → 完成本週小專案「加法計算機」→ 筆記：五種型態各記一個例子。"
  },
  exercises:[
    {q:"宣告一個 int 變數 age 等於 18，並印出「我今年 18 歲」。",hint:"int age = 18; 然後 cout << \"我今年 \" << age << \" 歲\" << endl;",ans:"int age = 18;\ncout << \"我今年 \" << age << \" 歲\" << endl;"},
    {q:"3.14、'A'、\"hello\"、5、true 分別是什麼型態？",hint:"小數、單一字符、文字、整數、是或否。",ans:"double、char、string、int、bool"},
    {q:"用 cin 讀兩個整數，把它們相加後印出結果。",hint:"int a, b; cin >> a >> b;",ans:"int a, b;\ncin >> a >> b;\ncout << \"答案是 \" << a + b << endl;"}
  ],
  project:"加法計算機：讓使用者輸入兩個數字，程式印出「a + b = 答案」。會這個以後，所有計算機都一樣原理。",
  sample:"#include <iostream>\nusing namespace std;\nint main(){\n    int a, b;\n    cout << \"請輸入兩個數字：\";\n    cin >> a >> b;\n    cout << a << \" + \" << b << \" = \" << a + b << endl;\n    return 0;\n}"
},
{
  id:"u3",
  title:"條件判斷 if / else：讓程式會做決定",
  goals:["學會 if、else if、else 的寫法","認識比較運算子（> < == !=）","認識邏輯運算子（&& || !）","寫出會「判斷情況」的程式"],
  read:"程式最厲害的地方是「會做決定」。<b>if (條件) { ... } else { ... }</b> 就是：如果條件成立做 A，否則做 B。比較運算子有 &gt; &lt; == != &gt;= &lt;=，邏輯運算子 &amp;&amp;（而且）、||（或者）、!（不是）。注意：判斷「相等」要用 ==，不是 =。",
  tasks:{
    "15":"讀「重點說明」→ 手打範例（數字比大小）→ 改成判斷「奇數或偶數」並執行成功。",
    "30":"15 分鐘版全部 → 練習題 1～2 題 → 想一想：== 和 = 差在哪？寫錯會發生什麼事？",
    "60":"30 分鐘版全部 → 做「成績等第機」（90 以上 A、80 以上 B、60 以上 C、以下 D）→ 完成練習題 3。",
    "120":"60 分鐘版全部 → 完成本週小專案「密碼檢查器」→ 筆記：if 的結構圖畫一遍。"
  },
  exercises:[
    {q:"寫程式：輸入一個整數，判斷並印出它是奇數還是偶數。",hint:"用 % 2（除以 2 的餘數）。if (n % 2 == 0) 是偶數。",ans:"int n; cin >> n;\nif (n % 2 == 0) cout << \"偶數\" << endl;\nelse cout << \"奇數\" << endl;"},
    {q:"輸入成績，印出等第：90↑=A、80↑=B、60↑=C、其他=D。",hint:"用 else if 一層層往下判斷。",ans:"if (s >= 90) cout << \"A\";\nelse if (s >= 80) cout << \"B\";\nelse if (s >= 60) cout << \"C\";\nelse cout << \"D\";"},
    {q:"判斷一個數字是不是「大於 0 且小於 100」。",hint:"用 && 把兩個條件接起來。",ans:"if (n > 0 && n < 100) cout << \"在 0~100 之間\";"}
  ],
  project:"簡易密碼檢查器：設定密碼為 1234，讓使用者輸入，對就印「歡迎！」，錯就印「密碼錯誤」。",
  sample:"#include <iostream>\nusing namespace std;\nint main(){\n    int pwd;\n    cout << \"請輸入密碼：\";\n    cin >> pwd;\n    if (pwd == 1234) cout << \"歡迎！\" << endl;\n    else cout << \"密碼錯誤\" << endl;\n    return 0;\n}"
}
];UNITS.push(
{
  id:"u4",
  title:"迴圈：讓程式自動重複做事",
  goals:["學會 for 迴圈","學會 while 迴圈","認識 break 和 continue","寫出九九乘法表"],
  read:"寫程式最爽的事，就是「叫電腦幫你重複做事」。<b>for (起始; 條件; 更新)</b> 最常用，例如 for (int i = 1; i <= 10; i++) 會跑 10 次。<b>while</b> 則是「只要條件成立就一直做」。<b>break</b> 立刻跳出、<b>continue</b> 跳過本次。巢狀迴圈（迴圈裡面包迴圈）可以印出九九乘法表。",
  tasks:{
    "15":"讀「重點說明」→ 手打範例印出 1~10 → 改成印 1~100 → 觀察 i 的變化。",
    "30":"15 分鐘版全部 → 用 for 印出 1~10 的偶數 → 練習題 1～2 題。",
    "60":"30 分鐘版全部 → 計算 1+2+...+100（用累加變數）→ 練習題 3 → 試著印出 5x5 的 * 方形。",
    "120":"60 分鐘版全部 → 完成本週小專案「九九乘法表」→ 筆記：for 和 while 各寫一個自己的例子。"
  },
  exercises:[
    {q:"用 for 迴圈印出 1 到 10。",hint:"for (int i = 1; i <= 10; i++)",ans:"for (int i = 1; i <= 10; i++){\n    cout << i << endl;\n}"},
    {q:"計算 1+2+3+...+100 的總和並印出。",hint:"先宣告 int sum = 0; 每圈 sum += i;",ans:"int sum = 0;\nfor (int i = 1; i <= 100; i++){\n    sum += i;\n}\ncout << sum << endl;  // 5050"},
    {q:"印出 1~20 之間所有 3 的倍數。",hint:"用 if (i % 3 == 0) 過濾。",ans:"for (int i = 1; i <= 20; i++){\n    if (i % 3 == 0) cout << i << \" \";\n}"}
  ],
  project:"九九乘法表：用巢狀迴圈印出完整的 1~9 乘法表，排列整齊。",
  sample:"for (int i = 1; i <= 9; i++){\n    for (int j = 1; j <= 9; j++){\n        cout << i << \"x\" << j << \"=\" << i*j << \"\\t\";\n    }\n    cout << endl;\n}"
},
{
  id:"u5",
  title:"陣列與字串：一次管理很多資料",
  goals:["認識陣列的宣告與使用","用 for 迴圈走訪陣列","學會 string 的基本操作","寫出成績統計程式"],
  read:"陣列就像「一整排有編號的盒子」：<b>int score[5]</b> 一次給你 5 個格子，編號從 0 開始（score[0] 到 score[4]）。搭配 for 迴圈就能一口氣處理大量資料。<b>string</b> 是文字型態，可以用 .length() 拿長度、用 [i] 取單一字元。",
  tasks:{
    "15":"讀「重點說明」→ 手打範例：5 個成績求平均 → 改成 10 個成績。",
    "30":"15 分鐘版全部 → 練習題 1～2 題 → 想想：陣列編號為什麼從 0 開始？",
    "60":"30 分鐘版全部 → 寫「找最大值」程式 → 練習題 3（字串反轉）。",
    "120":"60 分鐘版全部 → 完成本週小專案「成績統計小工具」→ 筆記：陣列 + for = 批量處理。"
  },
  exercises:[
    {q:"宣告陣列存 5 個成績（80, 90, 70, 85, 95），用迴圈算出平均。",hint:"int sum = 0; for 迴圈累加，最後除以 5。",ans:"int s[5] = {80,90,70,85,95};\nint sum = 0;\nfor (int i = 0; i < 5; i++) sum += s[i];\ncout << \"平均：\" << sum / 5.0 << endl;"},
    {q:"在陣列中找出最大值並印出。",hint:"先假設 s[0] 最大，迴圈中遇到更大的就更新。",ans:"int mx = s[0];\nfor (int i = 1; i < 5; i++){\n    if (s[i] > mx) mx = s[i];\n}\ncout << \"最大：\" << mx << endl;"},
    {q:"輸入一個字串，把它反過來印出（例如 abc → cba）。",hint:"用 .length() 拿長度，從最後一個字元往前印。",ans:"string s;\ncin >> s;\nfor (int i = s.length()-1; i >= 0; i--){\n    cout << s[i];\n}\ncout << endl;"}
  ],
  project:"成績統計小工具：輸入 5 科成績，印出總分、平均、最高、最低。",
  sample:"int s[5];\nfor (int i = 0; i < 5; i++){\n    cout << \"第 \" << i+1 << \" 科成績：\";\n    cin >> s[i];\n}\n// ...用迴圈算總分、平均、最大、最小"
},
{
  id:"u6",
  title:"函式：把程式碼包裝成積木",
  goals:["學會定義和呼叫函式","認識參數與回傳值","認識 void 函式","把大程式拆成小積木"],
  read:"函式就像「積木」：寫一次、用很多次。格式是 <b>型態 名稱(參數) { 內容 }</b>，例如 <b>int add(int a, int b) { return a + b; }</b>。回傳 int 就代表「這個積木會給回一個整數」；不給回東西就用 <b>void</b>。把程式拆成函式，程式會變得好讀、好改、好重用。",
  tasks:{
    "15":"讀「重點說明」→ 手打範例：add 函式 → 呼叫它 3 次，印出不同結果。",
    "30":"15 分鐘版全部 → 練習題 1～2 題 → 想想：為什麼要用函式？",
    "60":"30 分鐘版全部 → 寫 isEven 函式（練習題 3）→ 把之前「加法計算機」改寫成函式版。",
    "120":"60 分鐘版全部 → 完成本週小專案「選單計算機」→ 筆記：函式三部曲（定義、參數、回傳）。"
  },
  exercises:[
    {q:"寫一個函式 int add(int a, int b)，回傳兩數相加，並在主程式呼叫印出 add(3,5) 的結果。",hint:"函式寫在 main 上面；呼叫是 add(3,5)。",ans:"int add(int a, int b){\n    return a + b;\n}\nint main(){\n    cout << add(3, 5) << endl;  // 8\n    return 0;\n}"},
    {q:"寫一個函式 int max2(int a, int b)，回傳比較大的那個數。",hint:"if (a > b) return a; else return b;",ans:"int max2(int a, int b){\n    if (a > b) return a;\n    return b;\n}"},
    {q:"寫一個函式 bool isEven(int n)，是偶數回傳 true、否則 false。",hint:"回傳 n % 2 == 0。",ans:"bool isEven(int n){\n    return n % 2 == 0;\n}"}
  ],
  project:"選單計算機：讓使用者選 1=加 2=減 3=乘 4=除，輸入兩個數字後印出結果（每種運算寫成一個函式）。",
  sample:"int add(int a,int b){ return a+b; }\nint sub(int a,int b){ return a-b; }\n// main 中用 if/switch 依選單呼叫對應函式"
}
);UNITS.push(
{
  id:"u7",
  title:"結業專案：猜數字遊戲（整合全部所學）",
  goals:["整合變數、條件、迴圈、函式","學會使用隨機數","完成一個真正能玩的遊戲","驗收這一個月（或三個月）的成果"],
  read:"這是最後一關。要把前面學的全部用上：變數存答案、cin 讀猜測、if 判斷大小、迴圈讓遊戲持續到猜中為止。隨機數用 <b>rand() % 100 + 1</b>（配 <b>srand(time(0))</b> 讓每次不同）與 <b>#include &lt;cstdlib&gt;</b> 和 <b>#include &lt;ctime&gt;</b>。",
  tasks:{
    "15":"讀「重點說明」→ 手打範例的骨架（產生隨機數、印出提示）→ 確定能跑。",
    "30":"15 分鐘版全部 → 加上「太大／太小」判斷 → 讓遊戲能一直猜到對為止。",
    "60":"30 分鐘版全部 → 加上「猜了幾次」的統計 → 測試 5 次以上，確認沒有 bug。",
    "120":"60 分鐘版全部 → 挑戰版：限制只能猜 7 次，超過就輸 → 寫一篇心得：你學到了什麼。"
  },
  exercises:[
    {q:"產生 1~100 的隨機整數並印出。",hint:"#include <cstdlib>、<ctime>，srand(time(0))，rand() % 100 + 1。",ans:"srand(time(0));\nint ans = rand() % 100 + 1;\ncout << ans << endl;"},
    {q:"猜數字遊戲的核心：讀入猜測，比大小，印出提示。",hint:"if (g > ans) 印「太大」；else if (g < ans) 印「太小」；else 印「答對了」。",ans:"if (g > ans) cout << \"太大！\" << endl;\nelse if (g < ans) cout << \"太小！\" << endl;\nelse cout << \"答對了！\" << endl;"},
    {q:"用 while 迴圈讓遊戲重複到猜中為止，並統計次數。",hint:"while (g != ans) { ... count++ ... }",ans:"int g, count = 0;\ndo {\n    cin >> g; count++;\n    if (g > ans) cout << \"太大！\";\n    else if (g < ans) cout << \"太小！\";\n} while (g != ans);\ncout << \"你猜了 \" << count << \" 次\";"}
  ],
  project:"完整猜數字遊戲：電腦想一個 1~100 的數字，你輸入猜測，它提示太大/太小，猜中後顯示你花了幾次。",
  sample:"#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\nint main(){\n    srand(time(0));\n    int ans = rand() % 100 + 1;\n    int g, count = 0;\n    cout << \"我想到 1~100 的數字，猜猜看：\";\n    do {\n        cin >> g; count++;\n        if (g > ans) cout << \"太大！再猜：\";\n        else if (g < ans) cout << \"太小！再猜：\";\n    } while (g != ans);\n    cout << \"答對了！你猜了 \" << count << \" 次\" << endl;\n    return 0;\n}"
}
);

/* 免費資源 */
const RESOURCES = [
  {name:"OnlineGDB 線上編譯器",url:"https://www.onlinegdb.com/online_c++_compiler",desc:"免安裝、開網頁就能寫 C++。第一版所有範例都在這裡跑。"},
  {name:"W3Schools C++ 教學（中文）",url:"https://www.w3schools.com/cpp/",desc:"每個主題一頁、範例可直接試，最適合跟著本計畫查資料。"},
  {name:"菜鳥教程 C++ 入門",url:"https://www.runoob.com/cplusplus/cpp-tutorial.html",desc:"繁體中文詳細教學，遇到看不懂的概念來這裡查。"},
  {name:"cppreference.com（官方參考）",url:"https://en.cppreference.com/w/",desc:"C++ 官方文件，功能說明最完整，當字典用。"},
  {name:"彭彭學院 C++ 免費影片",url:"https://www.youtube.com/@twdotcss",desc:"中文免費教學影片，跟著畫面操作，聽不懂的地方可以重播。"}
];

/* 程度對應：起點、跳過提示 */
const LEVEL_INFO = {
  newbie:     {label:"完全新手", start:"u1"},
  some:       {label:"會一點點", start:"u2"},
  experienced:{label:"有經驗",   start:"u4"}
};

const TIME_LABEL = {"15":"每天 15 分鐘","30":"每天 30 分鐘","60":"每天 1 小時","120":"每天 2 小時以上"};
const DUR_LABEL   = {"2":"2 週（衝刺）","4":"1 個月（標準）","12":"3 個月（扎實）"};