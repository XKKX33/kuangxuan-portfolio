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

## 页面

| 路径 | 说明 |
|------|------|
| `/` | 首页：Hero → 字幕 → 精选项目 → 概览 → 时间轴 → 能力 |
| `/work` | 项目列表（List / Grid） |
| `/work/[slug]` | 案例详情（3 个完整页） |
| `/about` | 关于 |
| `/contact` | 联系 |
| `/resume.pdf` | 简历下载 |

## 隐私

公开站点**不展示**手机号、出生年月、户籍、民族、政治面貌。联系方式仅为邮箱。

## 部署（GitHub Pages · 免费）

线上地址（启用 Pages 后）：

**https://xkkx33.github.io/kuangxuan-portfolio/**

### 自动部署

推送到 `main` 后，GitHub Actions 会：

1. `npm ci` + 静态导出（`output: "export"`）
2. 发布 `out/` 到 GitHub Pages

工作流：`.github/workflows/deploy-pages.yml`

### 首次需要你点一次（仓库设置）

1. 打开：https://github.com/XKKX33/kuangxuan-portfolio/settings/pages  
2. **Source** 选 **GitHub Actions**（不是 Deploy from a branch）  
3. 打开：https://github.com/XKKX33/kuangxuan-portfolio/actions  
4. 若 workflow 未跑，点 **Deploy GitHub Pages** → **Run workflow**  
5. 等绿色勾后访问上面的网址

### 本地模拟 Pages 构建

```bash
# Windows PowerShell
$env:GITHUB_PAGES="true"; npm run build
# 产物在 out/
npx serve out
```

### 本地日常开发（无 basePath）

```bash
npm run dev
```

## 设计参考

信息节奏参考 Dennis Snellenberg（身份首屏 → 项目主体 → 能力 About → 联系收尾），视觉为独立 Signal Studio 体系（米白纸感 + 信号蓝 `#315CFF`），非原站照抄。
