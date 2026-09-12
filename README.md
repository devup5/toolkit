


# V2.32

- **\[gate.js]** — 移除 `sessionStorage` 验证状态保存与读取逻辑，每次访问都需重新输入邀请码
- **\[develop/admin-gate.js]** — 同样移除 `sessionStorage`，管理员密码每次访问都需重新输入

# V2.31

1. **全站邀请码门控**

   **新增文件：**
   - **\[gate.css]** — 浅色风格邀请码遮罩样式，支持暗色模式自适应
   - **\[gate.js]** — 邀请码验证逻辑，sessionStorage 会话级存储
   
   **已添加门控的页面：**
   - **\[home.html]** — 主页
   - **\[blog.html]** — 博客
   - **\[login.html]** — 登录
   - **\[register.html]** — 注册
   - **\[index.html]** — 入口跳转页

2. **开发者专区**

   **新增文件：**
   - **\[develop/index.html]** — 开发者控制台页面
   - **\[develop/admin-gate.css]** — 管理员门控样式（红橙主题）
   - **\[develop/admin-gate.js]** — 管理员密码验证逻辑

# V2.21.2
**更新预览**

- 登录：`${API_BASE}/login` → `https://login-server.coding-coder.workers.dev/login`
- 注册：`${API_BASE}/register` → `https://login-server.coding-coder.workers.dev/register`

# V2.21.1
**更新预览**

- **\[login.html]** — 替换为 `<img src="blog-icon.jpg">`
- **\[register.html]** — 替换为 `<img src="blog-icon.jpg">`
- **\[userlogin.css]** — `.auth-brand-logo` 调整为图片样式（`object-fit: cover`、白色边框、圆角阴影）

# V2.21
**更新预览**

1. **新增文件**
   - **\[login.html]** — 登录页面，玻璃拟态风格，与 DevBlog 视觉统一
   - **\[register.html]** — 注册页面，含确认密码字段
   - **\[userlogin.css]** — 登录/注册页面专用样式（玻璃拟态 + 渐变 + 响应式）
   - **\[userlogin.js]** — 登录注册核心逻辑
2. **功能说明**
   1. **API 对接**：`API_BASE = "https://login-server.coding-coder.workers.dev"`，登录调用 `/api/login`，注册调用 `/api/register`，均为 POST JSON 格式
   2. **保持登录**：
      - 未勾选 → 仅存在 `sessionStorage`，关闭浏览器即失效
      - 勾选 → 同时写入 `localStorage`，有效期 30 天，下次访问自动恢复会话
   3. **Blog 页面入口**：
      - 未登录时：导航栏右侧显示「登录」「注册」两个按钮
      - 已登录时：显示用户头像（首字母），点击展开下拉菜单（用户名 + 退出登录）
      - Home 主页完全不涉及登录相关内容
   4. **其他**：主题切换、表单验证（用户名3-20位、密码≥6位）、加载状态动画、错误/成功提示、登录页守卫（已登录自动跳回博客）

# V2.13.2
**更新预览**

- `.sidebar-sublink` 的 `scale(1.25)` → `scale(1.0625)`（即 1.25 × 0.85），`.sidebar-dropdown-menu` 的 `margin-left: -20px` → `-10px`（右移10px）

# V2.13.1
**更新预览**

- 删除 `projects` 数组（6条项目数据）
- 删除 `renderProjects()` 函数
- 删除 `initScrollReveal()` 函数及其调用（仅服务于项目卡片）
- 修复 `footerAbout` 从 `switchPage(4)` 改为 `switchPage(1)`（page 4 已不存在，改为跳转"关于"页）
- 移除首页统计中的"6 项目作品"项

# V2.13
**更新预览**

1. **下拉菜单工具样式调整**
   - `.sidebar-sublink` 添加 `transform: scale(1.25)` + `transform-origin: left center`
   - `.sidebar-dropdown-menu` 添加 `margin-left: -20px` 实现左移 `20px`
   - 字体从 `0.84rem` 增大到 `1.05rem`，padding 加大
2. **"在线网站"改为独立页面**
   - 从下拉菜单改为普通侧边栏导航项 data-page="3"
   - 移除原有的 GitHub/bilibili/博客/TurboWarp 外链
3. **新建"在线网站"页面（page 3）**
   - 宫格布局（sites-grid），自适应列数 `minmax(280px, 1fr)`
   
     **三个网站卡片：**
   - Minecraft中文Wiki → `https://zh.minecraft.wiki/`
   - Minecraft基岩版Wiki → `https://wiki.bedrock.dev/`
   - MCBEID表 → `https://idlist.projectxero.top/`
   - 每张卡片含 SVG 图标、名称、URL、描述，hover 有上浮+边框高亮+图标放大效果
4. **主题按钮移入 sidebar-links**
   - `#themeBtn` 从 `.sidebar-bottom` 的独立按钮移入 `.sidebar-links` 内
   - 样式从 `40x40` 改为 `36x36`，与 GitHub/bilibili 图标按钮统一

