import type { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    slug: "taac-2026",
    title: "TAAC 2026",
    titleCn: "腾讯广告算法大赛",
    field: "Advertising Ranking",
    role: "Core Member",
    year: "2026",
    period: "2026.04–2026.05",
    summary:
      "基于 HyFormer + RankMixer 的广告推荐排序：训练加速、特征工程与目标域融合。",
    tags: ["Recommendation", "Ranking", "Model Optimization"],
    featured: true,
    hasDetail: true,
    meta: {
      role: "Core Member",
      focus: "Training & Feature Engineering",
      model: "HyFormer + RankMixer",
      year: "2026",
    },
    challenge:
      "广告推荐模型需要同时处理用户、广告和多域历史行为序列，而训练速度和特征表达能力会直接影响模型迭代效率。",
    contribution: [
      "使用 torch.compile、BF16 AMP、TF32 和 Numba 优化训练与数据处理。",
      "构建哈希统计、周期时间和节假日特征，增强用户、广告与历史序列表达。",
      "引入目标域融合，根据当前广告上下文动态加权不同历史行为序列。",
    ],
    system: {
      nodes: [
        "User Profile",
        "Ad Context",
        "Search History",
        "Click History",
        "Purchase History",
        "Time Features",
      ],
      result: "Target-aware Fusion → RankMixer → Prediction",
    },
    reflection: [
      "训练侧编译与混合精度通常比盲目加深网络更能缩短迭代周期。",
      "特征中的时间与节假日信号对广告场景有稳定增益，需与序列建模协同验证。",
      "数据加载与模型计算的瓶颈需要分开 profiling，避免只优化一侧。",
    ],
    visuals: { accent: "#315CFF", label: "Ranking" },
  },
  {
    slug: "a-share-agent",
    title: "A-Share Intelligence Agent",
    titleCn: "A股智能投研工作流",
    field: "AI Agent / Financial Analysis",
    role: "Independent",
    year: "2026",
    period: "2026.03–至今",
    summary:
      "将情绪周期、波浪、MACD、成交量与资金流向组织为可约束的投研 Agent 工作流。",
    tags: ["AI Agent", "Financial Analysis", "Workflow"],
    featured: true,
    hasDetail: true,
    meta: {
      role: "Independent",
      focus: "Skill Design & Constraint Rules",
      model: "LLM + Domain Rules",
      year: "2026",
    },
    challenge:
      "个股分析如果只靠自由文本提示，容易不稳定、难复盘；需要把领域结构变成可复用的决策工作流。",
    contribution: [
      "开发 A 股智能投研 Skill，整合情绪周期、波浪结构、MACD、成交量与资金流向。",
      "支持走势判断、观察池筛选、关键位置识别与复盘归因。",
      "用数据日期、行情来源、冲突信号与资金分层规则约束模型输出，提升可解释性。",
    ],
    system: {
      nodes: [
        "Market Data",
        "Structure Signals",
        "Constraint Rules",
        "Agent Nodes",
        "Decision Report",
      ],
      result: "Structured analysis workflow with conflict handling",
    },
    reflection: [
      "规则约束比单纯加长 prompt 更能降低金融场景胡编风险。",
      "冲突信号需要显式暴露给用户，而不是静默平均掉。",
      "下一步可接入回测钩子，把「判断」接到可验证结果上。",
    ],
    visuals: { accent: "#1C1C1C", label: "Agent" },
  },
  {
    slug: "news-recommendation",
    title: "News Recommendation",
    titleCn: "新闻点击预测与召回排序",
    field: "Recall / Ranking",
    role: "Core Member",
    year: "2026",
    period: "2026.03–2026.04",
    summary:
      "多路召回 + 特征工程 + 多模型融合，生成用户 Top5 新闻推荐列表。",
    tags: ["Recall", "Ranking", "Feature Engineering"],
    featured: true,
    hasDetail: true,
    meta: {
      role: "Core Member",
      focus: "Recall & Ranking Fusion",
      model: "Multi-path + Rank/Classify/Seq",
      year: "2026",
    },
    challenge:
      "需要预测用户最后可能点击的五篇文章，同时覆盖短期兴趣、低活用户、热点、新文与长尾。",
    contribution: [
      "召回阶段组合近期点击、相似用户、热门文章、内容相似与发布时间规则。",
      "排序围绕「用户为什么会点这篇」构建特征，比较候选与近期点击在内容、主题、时间、字数上的差异。",
      "融合排序、分类与序列模型结果，生成 Top5 推荐列表。",
    ],
    system: {
      nodes: [
        "User History",
        "Multi-path Recall",
        "Feature Build",
        "Fusion Ranking",
        "Top 5",
      ],
      result: "Top5 click prediction list",
    },
    reflection: [
      "召回覆盖面与排序精度需要分阶段评估，不能只看最终 Top5。",
      "低活用户更依赖相似用户与热点路径，不能只靠近期点击。",
      "特征里的「差异量」往往比绝对属性更可解释。",
    ],
    visuals: { accent: "#315CFF", label: "Recall" },
  },
  {
    slug: "cnki-pipeline",
    title: "CNKI Data Pipeline",
    titleCn: "知网基金成果采集与数据治理",
    field: "Data Engineering",
    role: "Core Member",
    year: "2026",
    period: "2026.01–2026.04",
    summary:
      "175 本经管期刊、百万级数据的清洗、采集与缺口自动补采流水线。",
    tags: ["Automation", "Data Engineering", "Web Crawling"],
    featured: true,
    hasDetail: false,
    meta: {
      role: "Core Member",
      focus: "Pipeline & Data Quality",
      model: "Python + Selenium + OpenCV",
      year: "2026",
    },
    challenge:
      "经管类期刊基金成果字段噪声大，需要从表格清洗到检索采集再到缺口补采的闭环。",
    contribution: [
      "搭建原始论文表格、基金字段清洗、基金编号提取到知网检索采集的自动化流程。",
      "使用 Python、Pandas、Selenium、OpenCV 开发清洗与采集脚本。",
      "覆盖 175 本期刊，数据量超百万条，并支持缺口统计与补采。",
    ],
    system: {
      nodes: [
        "Raw Tables",
        "Field Cleaning",
        "ID Extract",
        "CNKI Crawl",
        "Gap Refill",
      ],
      result: "Million-scale structured fund outcomes",
    },
    reflection: [
      "补采闭环比一次性爬取更能保证数据资产可维护。",
      "OCR/OpenCV 仅用于必要字段，应控制失败重试成本。",
    ],
    visuals: { accent: "#9A9A96", label: "Data" },
  },
]
