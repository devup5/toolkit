/* ================================================================
   更新日志数据 — 独立存储，便于维护
   ================================================================ */

const CHANGELOG_VERSION = '3.13.2';

const CHANGELOG_DATA = [
  {
    version: '3.13.2',
    date: '2026-09-06',
    items: [
      { type: '修复', tag: 'fix', text: '修复 tool.html 中切换 # 无法在同页面内切换工具面板的问题，改用 initPageSpecific 统一初始化' },
      { type: '修复', tag: 'fix', text: '修复 initToolRouter 因内联脚本时序问题在侧边栏注入前执行导致 hashchange 失效' },
      { type: '优化', tag: 'optimize', text: '移除 tool.html 底部内联脚本，工具路由初始化统一由 outer.js 调度' }
    ]
  },
  {
    version: '3.13.1',
    date: '2026-09-04',
    items: [
      { type: '修复', tag: 'fix', text: '修复首页三个 section 全部堆叠显示的问题，非激活页面添加 opacity:0 + visibility:hidden' },
      { type: '更换', tag: 'replace', text: '将 tool.php 改回 tool.html，移除 PHP 头部，使用纯 HTML5 格式' },
      { type: '优化', tag: 'optimize', text: '页面切换添加 0.3s 淡入淡出过渡动画，切换更丝滑' }
    ]
  },
  {
    version: '3.13',
    date: '2026-09-03',
    items: [
      { type: '修复', tag: 'fix', text: '修复 # 导航不全面覆盖：侧边栏、右键菜单、底部图标全部统一为 hash 路由' },
      { type: '修复', tag: 'fix', text: '修复侧边栏下拉菜单选择一个收起时全部联动收起的问题，改为独立 toggle' },
      { type: '重构', tag: 'optimize', text: 'home.html 合并 about、changelog 页面，通过 # 切换，消除页面跳转' },
      { type: '移除', tag: 'del', text: '删除 tools 文件夹所有内容，删除独立的 about.html 和 changelog.html' }
    ]
  },
  {
    version: '3.12',
    date: '2026-09-03',
    items: [
      { type: '重构', tag: 'optimize', text: '将 10 个工具页面聚合为单个 tool.html，通过 hash 路由切换，减少页面跳转' },
      { type: '优化', tag: 'optimize', text: '工具懒初始化：仅当用户切换到某工具时才执行其初始化代码' },
      { type: '优化', tag: 'optimize', text: '工具面板切换时保留各工具状态，来回切换不丢失已输入代码' },
      { type: '新增', tag: 'new', text: '侧边栏工具链接统一为 tool.html#hash 格式，支持浏览器前进后退' }
    ]
  },
  {
    version: '3.11.1',
    date: '2026-09-02',
    items: [
      { type: '修复', tag: 'fix', text: '所有页面脚本添加 defer 属性，HTML 解析不再被脚本阻塞，首次打开秒开' },
      { type: '优化', tag: 'optimize', text: 'TypeScript 编译器改为点击运行时懒加载，页面打开不再等待 8MB 编译器下载' },
      { type: '修复', tag: 'fix', text: '修复 Google Fonts 阻塞首次渲染，改为 preload + onload 切换' }
    ]
  },
  {
    version: '3.11',
    date: '2026-09-02',
    items: [
      { type: '新增', tag: 'new', text: '新增 PHP / TypeScript 在线运行工具与 CSS 格式化 / Base64 / 调色板工具' },
      { type: '优化', tag: 'optimize', text: '将 common.js 拆分为 sidebar.js、setting.js、contextmenu.js、outer.js，加快加载速度' },
      { type: '优化', tag: 'optimize', text: '侧边栏重构：新增「编译工具」「前端编辑器」「前端工具」三个下拉菜单' },
      { type: '新增', tag: 'new', text: '右键菜单新增「搜索」选项，选中文本可一键搜索' }
    ]
  },
  {
    version: '3.10.5',
    date: '2026-09-02',
    items: [
      { type: '优化', tag: 'optimize', text: '页面跳转改为预加载模式：旧页面保持可见，fetch 加载完成后才跳转，避免白屏' },
      { type: '修复', tag: 'fix', text: '修复预加载模式下重复点击导航按钮导致多次 fetch 的问题' },
      { type: '修复', tag: 'fix', text: '修复预加载 fetch 异常时页面卡死不跳转的问题，增加 catch 兜底' }
    ]
  },
  {
    version: '3.10.4',
    date: '2026-09-02',
    items: [
      { type: '修复', tag: 'fix', text: '修复切换页面时内容消失后突然闪现，内联脚本在 CSS 加载前设置主题' },
      { type: '优化', tag: 'optimize', text: '深色/浅色主题切换不再产生闪烁，data-theme 属性在 HTML 解析阶段即生效' },
      { type: '优化', tag: 'optimize', text: '添加 color-scheme CSS 属性，浏览器原生控件自动适配主题' }
    ]
  },
  {
    version: '3.10.3',
    date: '2026-09-02',
    items: [
      { type: '修复', tag: 'fix', text: '修复外部资源阻塞渲染导致页面白屏，51.la 改异步、Google Fonts 改非阻塞加载' },
      { type: '优化', tag: 'optimize', text: '导航跳转移除 50ms 人为延迟，改为立即跳转' },
      { type: '修复', tag: 'fix', text: '修复 51.la SDK 未加载完成时调用 LA.init 报错的问题' }
    ]
  },
  {
    version: '3.10.2',
    date: '2026-09-01',
    items: [
      { type: '修复', tag: 'fix', text: '修复切换页面时内容先消失再渐变出现，移除页面过渡动画' },
      { type: '修复', tag: 'fix', text: '修复快速连续切换页面时动画叠加导致显示异常' },
      { type: '优化', tag: 'optimize', text: '页面 active 类切换改为 classList 瞬时操作' }
    ]
  },
  {
    version: '3.10.1',
    date: '2026-08-31',
    items: [
      { type: '修复', tag: 'fix', text: '修复「在线工具」下拉菜单默认不展开的问题' },
      { type: '修复', tag: 'fix', text: '修复页面跳转时初始卡顿，加载条改为 CSS 过渡' },
      { type: '修复', tag: 'fix', text: '修复加载条完成后未自动隐藏的问题' }
    ]
  },
  {
    version: '3.10',
    date: '2026-08-31',
    items: [
      { type: '新增', tag: 'new', text: '拆分多页面：新建 python / html / css / javascript / markdown 独立工具页面' },
      { type: '新增', tag: 'new', text: '新建 about.html 关于页与 changelog.html 更新日志页' },
      { type: '优化', tag: 'optimize', text: '设置改为弹窗模式，任意页面均可打开' },
      { type: '新增', tag: 'new', text: '新增 Cookie 使用确认弹窗，遵守隐私规范' }
    ]
  },
  {
    version: '2.56',
    date: '2026-08-30',
    items: [
      { type: '新增', tag: 'new', text: '设置页缓存管理新增 Cookie 管理功能' },
      { type: '优化', tag: 'optimize', text: '更新日志数据独立为 changelog.js 存储' },
      { type: '移除', tag: 'del', text: '去除开发者文件夹与邀请码门控，保留特殊码机制' },
      { type: '优化', tag: 'optimize', text: '站点统计计数器 API 地址与密钥统一管理，便于维护' }
    ]
  },
  {
    version: '2.55',
    date: '2026-08-29',
    items: [
      { type: '新增', tag: 'new', text: '关于页新增「在线反馈」区块，点击展开飞书表单' },
      { type: '优化', tag: 'optimize', text: '导航栏按钮点击后显示加载条再切换页面，重复点击当前页无效' },
      { type: '修复', tag: 'fix', text: '修复反馈表单展开后无法收起的问题' },
      { type: '优化', tag: 'optimize', text: '加载条动画改用 CSS transition + requestAnimationFrame，更流畅' }
    ]
  },
  {
    version: '2.54',
    date: '2026-08-29',
    items: [
      { type: '优化', tag: 'optimize', text: '右键菜单区分输入框内外：非输入框显示导航项，输入框内显示粘贴' },
      { type: '修复', tag: 'fix', text: '修复右键粘贴失效与右键剪切仅复制未删除的问题' },
      { type: '新增', tag: 'new', text: '拦截 F12 键，需特殊码方可打开开发者工具' },
      { type: '优化', tag: 'optimize', text: '右键菜单搜索功能使用新标签打开搜索结果' }
    ]
  },
  {
    version: '2.53',
    date: '2026-08-29',
    items: [
      { type: '新增', tag: 'new', text: '自定义右键菜单，支持复制、粘贴、剪切、搜索' },
      { type: '新增', tag: 'new', text: '拦截 Ctrl+U 与 Ctrl+Shift+I，需输入特殊码方可使用' },
      { type: '优化', tag: 'optimize', text: '右键菜单自动定位，超出视口边界时反向显示' },
      { type: '新增', tag: 'new', text: '右键菜单支持选中文本一键搜索' }
    ]
  },
  {
    version: '2.52.2',
    date: '2026-08-29',
    items: [
      { type: '优化', tag: 'optimize', text: '关于页 section 标题整体放大 0.75 倍，视觉层次更清晰' },
      { type: '修复', tag: 'fix', text: '修复移动端标题过大导致溢出的问题' },
      { type: '优化', tag: 'optimize', text: 'section 标题响应式字号，小屏自动缩小' }
    ]
  },
  {
    version: '2.52.1',
    date: '2026-08-29',
    items: [
      { type: '优化', tag: 'optimize', text: '重写关于页 section 标题样式，移除实心填充改为 outline 描边风格' },
      { type: '修复', tag: 'fix', text: '修复标题样式在深色模式下对比度不足的问题' },
      { type: '修复', tag: 'fix', text: '修复标题文字在 Safari 浏览器描边错位' }
    ]
  },
  {
    version: '2.52',
    date: '2026-08-29',
    items: [
      { type: '优化', tag: 'optimize', text: '关于页站点统计每次进入都从 0 开始播放数字动画' },
      { type: '新增', tag: 'new', text: '关于页新增站点浏览、今日浏览、昨日访客、本月浏览四项统计' },
      { type: '修复', tag: 'fix', text: '修复统计数字动画只在首次进入播放的问题' },
      { type: '优化', tag: 'optimize', text: '统计卡片响应式布局，移动端自动单列排列' }
    ]
  },
  {
    version: '2.51',
    date: '2026-08-29',
    items: [
      { type: '修复', tag: 'fix', text: '修复 HTML/CSS/JavaScript 编辑器无法输入、无语法高亮、无法导入下载预览的问题' },
      { type: '移除', tag: 'del', text: '去除边缘高光效果及对应设置项' },
      { type: '新增', tag: 'new', text: '新增页面顶部加载进度条与 Cookie 使用确认对话框' },
      { type: '优化', tag: 'optimize', text: '侧边栏底部图标移除 GitHub，新增飞书反馈入口' }
    ]
  },
  {
    version: '2.50.1',
    date: '2026-08-29',
    items: [
      { type: '优化', tag: 'optimize', text: 'HTML / CSS / JavaScript / Markdown 编辑器增加 Prism 语法高亮彩色显示' },
      { type: '修复', tag: 'fix', text: '修复 Prism 高亮与 textarea 输入不同步滚动的问题' },
      { type: '优化', tag: 'optimize', text: '编辑器高亮层与输入层完全对齐，字符位置精确匹配' }
    ]
  },
  {
    version: '2.50',
    date: '2026-08-29',
    items: [
      { type: '修复', tag: 'fix', text: '修复 v2.48 更新日志在历史记录中缺失的问题' },
      { type: '优化', tag: 'optimize', text: '更新日志已读版本号存储到 localStorage，避免重复弹窗' },
      { type: '优化', tag: 'optimize', text: '更新日志弹窗新增版本对比展示，旧版→新版一目了然' },
      { type: '优化', tag: 'optimize', text: '更新日志弹窗关闭后标记已读，同一版本不再重复弹出' }
    ]
  },
  {
    version: '2.49',
    date: '2026-08-29',
    items: [
      { type: '移除', tag: 'del', text: '移除 Lua / Ruby / PHP 在线运行工具' },
      { type: '新增', tag: 'new', text: '工具切换/离开时弹出确认弹窗，防止代码丢失' },
      { type: '优化', tag: 'optimize', text: '编辑器输入框统一使用 JetBrains Mono 等宽字体' },
      { type: '优化', tag: 'optimize', text: '编辑器添加行号显示与代码换行' }
    ]
  },
  {
    version: '2.48',
    date: '2026-08-29',
    items: [
      { type: '新增', tag: 'new', text: '新增 HTML / CSS / JavaScript 在线预览工具，基于 iframe 实时渲染' },
      { type: '新增', tag: 'new', text: '新增 Lua / Ruby / PHP 在线运行工具（懒加载 CDN，失败自动降级）' },
      { type: '优化', tag: 'optimize', text: 'Python 运行支持切换引擎：系统自带（快速）/ Pyodide（完整）' },
      { type: '优化', tag: 'optimize', text: '工具页布局统一为左右分栏：左侧编辑器，右侧输出/预览' }
    ]
  },
  {
    version: '2.47',
    date: '2026-08-29',
    items: [
      { type: '修复', tag: 'fix', text: '计数器日期改为北京时间计算，杜绝访客时区导致的日期错误' },
      { type: '新增', tag: 'new', text: '关于页新增站点统计与昨日数据计数器，每日首次访问自动迁移前一日计数' },
      { type: '修复', tag: 'fix', text: '修复计数器 increment 返回值误用为总计数的问题' },
      { type: '优化', tag: 'optimize', text: '关于页统计数字动画使用 requestAnimationFrame，从 0 递增到目标值' }
    ]
  },
  {
    version: '2.46.1',
    date: '2026-08-29',
    items: [
      { type: '优化', tag: 'optimize', text: '计数器拆分为总/月/日三个计数器，跨天自动重置日计数，跨月自动重置月计数' },
      { type: '优化', tag: 'optimize', text: '计数器重置基于服务端 last_count_time 判断，不依赖 localStorage' },
      { type: '修复', tag: 'fix', text: '修复跨天时日计数器与月计数器未正确重置的问题' }
    ]
  },
  {
    version: '2.46',
    date: '2026-08-29',
    items: [
      { type: '新增', tag: 'new', text: '接入 ruseo.cn PV 计数器，每次访问页面 +1（不受邀请码门控影响）' },
      { type: '优化', tag: 'optimize', text: '计数器在页面 head 中执行，先于邀请码门控' },
      { type: '优化', tag: 'optimize', text: '计数器请求失败时静默降级，不影响页面正常加载' },
      { type: '优化', tag: 'optimize', text: '计数器 API 请求添加 cache: no-store 防止 CDN 缓存旧数据' }
    ]
  },
  {
    version: '2.45',
    date: '2026-08-29',
    items: [
      { type: '移除', tag: 'del', text: '完整移除博客系统，删除 blog.html、script.js、style.css、blog-icon.jpg' },
      { type: '移除', tag: 'del', text: '去除 Minecraft 相关页面与"T显编辑"工具' },
      { type: '优化', tag: 'optimize', text: '站点重心从博客转向在线工具站' },
      { type: '优化', tag: 'optimize', text: '清理无用图片资源与冗余 CSS 样式，减小仓库体积' }
    ]
  },
  {
    version: '2.41',
    date: '2026-08-28',
    items: [
      { type: '移除', tag: 'del', text: '去除 AI 对话功能，删除浮动按钮、对话浮窗及相关代码' },
      { type: '优化', tag: 'optimize', text: '导航栏去除"设置"项，仅保留底部设置图标' },
      { type: '新增', tag: 'new', text: '所有在线工具支持导入文件并解析（Python 导入 .py，Markdown 导入 .md）' },
      { type: '优化', tag: 'optimize', text: '工具栏图标统一为 SVG path，移除所有图片图标' }
    ]
  },
  {
    version: '2.40',
    date: '2026-08-28',
    items: [
      { type: '移除', tag: 'del', text: '完整移除登录注册系统，删除 login.html、register.html 等相关文件' },
      { type: '新增', tag: 'new', text: '新增设置页面，支持深色模式切换与缓存管理' },
      { type: '新增', tag: 'new', text: '接入 51.la 网站统计' },
      { type: '优化', tag: 'optimize', text: '深色模式支持 localStorage 持久化，刷新后保持上次选择' }
    ]
  },
  {
    version: '2.39',
    date: '2026-08-28',
    items: [
      { type: '优化', tag: 'optimize', text: '全站整体放大至 1.15 倍，视觉效果更加舒适' },
      { type: '优化', tag: 'optimize', text: '更新日志标签颜色优化：新增绿、优化蓝、更换黄、修复橘、删除红' },
      { type: '更换', tag: 'replace', text: '侧边栏底部移除 GitHub 和 bilibili 图标，新增设置图标' },
      { type: '优化', tag: 'optimize', text: '全站字体加载改为 preconnect + preload 优化首屏渲染' }
    ]
  },
  {
    version: '2.38.3',
    date: '2026-08-28',
    items: [
      { type: '修复', tag: 'fix', text: '更新日志装饰文字补丁号改为下标显示' },
      { type: '修复', tag: 'fix', text: '修复补丁号在深色模式下不可见的问题' },
      { type: '优化', tag: 'optimize', text: '补丁号下标样式优化，字号缩小至 0.6em' }
    ]
  },
  {
    version: '2.38.2',
    date: '2026-08-28',
    items: [
      { type: '优化', tag: 'optimize', text: '更新日志装饰文字中补丁号缩小显示（如 v2.38 正常，.2 缩小上标）' },
      { type: '修复', tag: 'fix', text: '修复补丁号与主版本号字号一致导致视觉混乱' },
      { type: '优化', tag: 'optimize', text: '补丁号使用 vertical-align: super 上标样式' }
    ]
  },
  {
    version: '2.38.1',
    date: '2026-08-28',
    items: [
      { type: '修复', tag: 'fix', text: '更新日志页面装饰文字改为自动跟随版本号，无需手动修改' },
      { type: '优化', tag: 'optimize', text: '装饰文字从 CHANGELOG_VERSION 变量动态读取' },
      { type: '修复', tag: 'fix', text: '修复装饰文字在页面加载时短暂显示旧版本的问题' }
    ]
  },
  {
    version: '2.38',
    date: '2026-08-28',
    items: [
      { type: '优化', tag: 'optimize', text: 'about-title 标题字号再放大 1.2 倍' },
      { type: '优化', tag: 'optimize', text: 'Markdown 工具图标替换为 SVG path 铅笔图标' },
      { type: '优化', tag: 'optimize', text: '"在线工具"下拉菜单默认展开，chevron 图标旋转 180°' },
      { type: '优化', tag: 'optimize', text: 'about 页面新增面包屑导航，层级关系更清晰' }
    ]
  },
  {
    version: '2.37.2',
    date: '2026-08-28',
    items: [
      { type: '优化', tag: 'optimize', text: '放大"关于"和"更新日志"页面标题字号至 1.2 倍' },
      { type: '修复', tag: 'fix', text: '修复标题放大后与面包屑导航重叠的问题' },
      { type: '优化', tag: 'optimize', text: '标题与正文间距按比例放大' }
    ]
  },
  {
    version: '2.37.1',
    date: '2026-08-28',
    items: [
      { type: '修复', tag: 'fix', text: '修复更新日志页面装饰文字仍显示 v2.36 的问题' },
      { type: '优化', tag: 'optimize', text: '装饰文字版本号改为从 CHANGELOG_VERSION 动态读取' },
      { type: '修复', tag: 'fix', text: '修复装饰文字硬编码导致每次发版需手动改的问题' }
    ]
  },
  {
    version: '2.37',
    date: '2026-08-28',
    items: [
      { type: '优化', tag: 'optimize', text: '在线工具下拉菜单图标替换为 SVG path，风格统一' },
      { type: '更换', tag: 'replace', text: '域名更换为 devup5.github.io' },
      { type: '移除', tag: 'del', text: '暂时去除登录、注册系统' },
      { type: '优化', tag: 'optimize', text: '站点 favicon 更新为 home-icon.jpeg' }
    ]
  },
  {
    version: '2.36',
    date: '2026-08-28',
    items: [
      { type: '新增', tag: 'new', text: '新增"更新日志"独立页面，展示历代所有版本更新记录' },
      { type: '优化', tag: 'optimize', text: '更新日志标签分类：新增、优化、更换、修复、移除' },
      { type: '优化', tag: 'optimize', text: '更新日志列表按版本倒序排列，条目支持标签颜色区分' },
      { type: '新增', tag: 'new', text: '更新日志弹窗支持点击外部关闭与 Esc 键关闭' }
    ]
  },
  {
    version: '2.35.4',
    date: '2026-08-28',
    items: [
      { type: '新增', tag: 'new', text: 'Python 引擎支持 class 类定义、实例化、方法调用、self 关键字' },
      { type: '新增', tag: 'new', text: '支持字典 dict、列表方法、字符串方法、time/datetime 模块' },
      { type: '修复', tag: 'fix', text: '修复字符串转义字符与赋值号/比较运算符混淆的问题' }
    ]
  },
  {
    version: '2.35.3',
    date: '2026-08-28',
    items: [
      { type: '修复', tag: 'fix', text: '重写 Python 引擎为递归 async 架构，修复函数体内 while/try/input 不生效的问题' },
      { type: '新增', tag: 'new', text: '支持 return 语句、for...in 列表遍历、range() 函数' },
      { type: '修复', tag: 'fix', text: '修复嵌套函数作用域变量查找错误与循环体内 continue/break 不生效' }
    ]
  },
  {
    version: '2.35.2',
    date: '2026-08-28',
    items: [
      { type: '优化', tag: 'optimize', text: 'Python 输出区域提供输入交互服务，支持 input() 函数' },
      { type: '新增', tag: 'new', text: '输出区域新增输入框，input() 时自动弹出等待输入' },
      { type: '修复', tag: 'fix', text: '修复多个 input() 连续调用时输入框不刷新的问题' }
    ]
  },
  {
    version: '2.35.1',
    date: '2026-08-28',
    items: [
      { type: '修复', tag: 'fix', text: '修复 Python 预览引擎若干错误：print() 多参数、变量未定义崩溃、字符串拼接' },
      { type: '优化', tag: 'optimize', text: '引擎异常捕获后显示友好错误提示，不崩溃' },
      { type: '优化', tag: 'optimize', text: '输出区域添加占位提示文字' }
    ]
  },
  {
    version: '2.35',
    date: '2026-08-27',
    items: [
      { type: '移除', tag: 'del', text: '去除 Minecraft 相关页面与"T显编辑"工具' },
      { type: '新增', tag: 'new', text: 'Python 运行预览内置到 tool.js，不依赖 Pyodide' },
      { type: '优化', tag: 'optimize', text: '站点定位从综合站转向纯工具站，精简无关内容' },
      { type: '优化', tag: 'optimize', text: '侧边栏导航精简，仅保留工具与关于入口' }
    ]
  },
  {
    version: '2.34.1',
    date: '2026-08-26',
    items: [
      { type: '修复', tag: 'fix', text: '修复刷新网页无需输入邀请码的问题' },
      { type: '优化', tag: 'optimize', text: '邀请码验证状态改为 sessionStorage 存储，关闭标签即失效' },
      { type: '修复', tag: 'fix', text: '修复直接输入 URL 跳过邀请码验证的问题' }
    ]
  },
  {
    version: '2.34',
    date: '2026-08-26',
    items: [
      { type: '优化', tag: 'optimize', text: '站内跳转链接不受邀请码管控，独立访问需输入' },
      { type: '修复', tag: 'fix', text: '修复站内导航跳转后要求重新输入邀请码的问题' },
      { type: '优化', tag: 'optimize', text: '邀请码验证逻辑与页面导航解耦' },
      { type: '修复', tag: 'fix', text: '修复站内跳转时邀请码验证状态丢失导致重复验证' }
    ]
  },
  {
    version: '2.33',
    date: '2026-08-25',
    items: [
      { type: '新增', tag: 'new', text: '登录、注册需同意隐私政策' },
      { type: '优化', tag: 'optimize', text: '隐私政策链接改为新窗口打开，文案完善明确数据收集范围' },
      { type: '新增', tag: 'new', text: '注册页新增隐私政策勾选框，未勾选不可提交' },
      { type: '优化', tag: 'optimize', text: '登录与注册页表单回车键提交支持' }
    ]
  },
  {
    version: '2.32',
    date: '2026-08-24',
    items: [
      { type: '优化', tag: 'optimize', text: '所有邀请码不在本地保存，每次访问都需输入' },
      { type: '修复', tag: 'fix', text: '修复关闭浏览器后邀请码仍有效的安全隐患' },
      { type: '优化', tag: 'optimize', text: '邀请码输入框添加 autocomplete=off 防止自动填充' },
      { type: '优化', tag: 'optimize', text: '邀请码验证逻辑改为服务端校验，前端不存储明文' }
    ]
  },
  {
    version: '2.31',
    date: '2026-08-23',
    items: [
      { type: '新增', tag: 'new', text: '全站邀请码门控，输入正确邀请码方可访问' },
      { type: '新增', tag: 'new', text: '新建 develop 文件夹，需管理员密码访问' },
      { type: '新增', tag: 'new', text: '邀请码错误时输入框抖动动画提示' },
      { type: '优化', tag: 'optimize', text: '邀请码输入框自动聚焦，回车键提交验证' }
    ]
  },
  {
    version: '2.21.2',
    date: '2026-08-22',
    items: [
      { type: '修复', tag: 'fix', text: '登录/注册 API 请求地址添加 /login 和 /register 后缀' },
      { type: '修复', tag: 'fix', text: '修复 API 请求 404 的问题，后端路由不匹配' },
      { type: '优化', tag: 'optimize', text: '登录/注册按钮添加 loading 状态，防止重复提交' }
    ]
  },
  {
    version: '2.21.1',
    date: '2026-08-22',
    items: [
      { type: '优化', tag: 'optimize', text: '注册/登录页面 Logo 更换为 blog-icon.jpg' },
      { type: '修复', tag: 'fix', text: '修复 Logo 图片加载失败时显示破碎图标' },
      { type: '修复', tag: 'fix', text: '修复 Logo 在移动端过大导致布局错位' }
    ]
  },
  {
    version: '2.21',
    date: '2026-08-22',
    items: [
      { type: '新增', tag: 'new', text: '制作 login.html / register.html 登录注册页面，接入 API 对接云端数据库' },
      { type: '新增', tag: 'new', text: '增加"保持登录"选项，本地保存用户信息' },
      { type: '优化', tag: 'optimize', text: '表单验证：用户名 3-20 字符，密码 6-32 字符，注册页添加密码确认' },
      { type: '优化', tag: 'optimize', text: '登录成功后自动跳转首页，失败时表单清空密码' }
    ]
  },
  {
    version: '2.13.2',
    date: '2026-08-21',
    items: [
      { type: '优化', tag: 'optimize', text: '下拉菜单中的工具 CSS 缩小 0.85 倍，右移 10px' },
      { type: '修复', tag: 'fix', text: '修复下拉菜单项图标与文字间距不一致的问题' },
      { type: '修复', tag: 'fix', text: '修复下拉菜单在移动端展开后无法收起的问题' }
    ]
  },
  {
    version: '2.13.1',
    date: '2026-08-21',
    items: [
      { type: '移除', tag: 'del', text: '去除"项目"界面，清理相关 HTML、CSS、JS 代码与图片资源' },
      { type: '优化', tag: 'optimize', text: '侧边栏导航项精简，去除项目入口' },
      { type: '修复', tag: 'fix', text: '修复去除项目界面后侧边栏导航顺序混乱' }
    ]
  },
  {
    version: '2.13',
    date: '2026-08-20',
    items: [
      { type: '移除', tag: 'del', text: '彻底去除 AI 相关功能，删除浮动按钮、对话浮窗及 API 密钥' },
      { type: '优化', tag: 'optimize', text: '重构工具页 JS 结构，去除 AI 依赖' },
      { type: '优化', tag: 'optimize', text: '代码体积减小约 40%，加载速度提升' },
      { type: '优化', tag: 'optimize', text: '移除 AI API 密钥等敏感信息，清理无用配置文件' }
    ]
  }
];
