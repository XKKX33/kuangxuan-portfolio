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

## 部署（Vercel 免费）

### 方式 A：GitHub + Vercel 网页（推荐）

1. 将本目录推送到 GitHub 仓库（仓库根目录 = 本项目根，含 `package.json`）
2. 打开 [vercel.com](https://vercel.com) → 用 GitHub 登录
3. **Add New Project** → 选择该仓库
4. Framework Preset: **Next.js**（自动识别）
5. Root Directory: 留空（本仓库根即站点根）
6. 点击 **Deploy**

之后每次 `git push` 到 `main` 会自动重新部署。线上地址形如：

`https://kuangxuan-portfolio.vercel.app`

### 方式 B：命令行

```bash
npm i -g vercel
vercel login
vercel          # 预览
vercel --prod   # 生产
```

### 本地生产构建

```bash
npm run build
npm start
```

## 设计参考

信息节奏参考 Dennis Snellenberg（身份首屏 → 项目主体 → 能力 About → 联系收尾），视觉为独立 Signal Studio 体系（米白纸感 + 信号蓝 `#315CFF`），非原站照抄。
