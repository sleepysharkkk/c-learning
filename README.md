# C++ 學習路線產生器

填一份 30 秒的問卷，自動產生個人化的 C++ 基礎入門學習計畫：
學習路線、每日任務、免費資源、練習題、小專案。

- 純靜態網站（HTML + CSS + JavaScript）
- 不需要伺服器、不需要資料庫、不需要任何環境變數或 API 金鑰
- MVP 第一版：只支援 C++ 基礎入門

## 檔案清單

| 檔案 | 用途 |
|------|------|
| `index.html` | 頁面結構與樣式（問卷 + 結果） |
| `data.js` | 課程內容資料庫（7 個單元 + 資源） |
| `app.js` | 規劃引擎與畫面渲染 |

## 部署到 GitHub Pages

1. 到 https://github.com 註冊/登入免費帳號
2. 點「New repository」建立新倉庫（名稱隨意，例如 `cpp-learning-mvp`；不用勾選任何選項）
3. 把這 3 個檔案上傳到倉庫（點 Add file → Upload files → 拖入 → Commit）
4. 進倉庫 Settings → 左側 Pages → Source 選 `Deploy from a branch` → Branch 選 `main` 與 `/ (root)` → Save
5. 等 1~2 分鐘，網址就是 `https://你的帳號.github.io/cpp-learning-mvp/`

之後每次更新檔案，推到 `main` 分支就會自動重新發布。

## 本機預覽（可選）

直接用瀏覽器打開 `index.html` 即可，不需要任何安裝。

---

C++ 學習路線產生器・第一版 MVP・全部內容免費