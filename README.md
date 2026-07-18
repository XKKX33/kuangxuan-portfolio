# Kuang Xuan Portfolio

Signal Studio 个人作品集：推荐系统 · AI Agent · 数据智能。

Next.js (App Router) + Tailwind CSS + Lenis + GSAP-ready.

## 开发

```bash
cd kuangxuan-portfolio
npm install
npm run dev
```

打开 http://localhost:3000

## 内容

编辑以下文件即可更新文案，无需改布局：

- `content/site.ts` — 身份、导航、加载词
- `content/projects.ts` — 项目列表与案例详情
- `content/about.ts` — 教育、能力、技能

## 页面（中文默认 / 英文 `/en`）

| 路径 | 说明 |
|------|------|
| `/` · `/en` | 首页：Hero → 字幕 → 精选项目 → 概览 → 时间轴 → 能力 |
| `/work` · `/en/work` | 项目列表（List / Grid） |
| `/work/[slug]` · `/en/work/[slug]` | 案例详情（3 个完整页） |
| `/about` · `/en/about` | 关于 |
| `/contact` · `/en/contact` | 联系 |
| `/resume.pdf` | 简历下载（中英共用） |

线上示例：

- 中文：https://xkkx33.github.io/kuangxuan-portfolio/
- 英文：https://xkkx33.github.io/kuangxuan-portfolio/en/

## 隐私

公开站点**不展示**手机号、出生年月、户籍、民族、政治面貌。联系方式仅为邮箱。

## 部署（GitHub Pages · 免费）

线上地址：

**https://xkkx33.github.io/kuangxuan-portfolio/**

### 当前部署方式

静态站点发布在 **`gh-pages` 分支**（仓库 Settings → Pages → Deploy from a branch → `gh-pages` / `/`）。

更新网站时在本机执行：

```bash
# Windows PowerShell
$env:GITHUB_PAGES="true"
npm run build
# 将 out/ 推到 gh-pages（可用 npx gh-pages -d out）
npx --yes gh-pages -d out -b gh-pages
```

或继续用「构建 out → 推送到 gh-pages」的脚本/手动流程。

### 本地模拟 Pages 构建

```bash
$env:GITHUB_PAGES="true"; npm run build
npx serve out
```

### 本地日常开发（无 basePath）

```bash
npm run dev
```

## 设计参考

信息节奏参考 Dennis Snellenberg（身份首屏 → 项目主体 → 能力 About → 联系收尾），视觉为独立 Signal Studio 体系（米白纸感 + 信号蓝 `#315CFF`），非原站照抄。
