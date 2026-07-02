# shadcn-ui-kit

基于 React 19 + Vite 7 + Tailwind CSS v4 + shadcn/ui (new-york) 的个人组件库，使用 Storybook 作为可交互组件文档，并通过 GitHub Actions 自动部署到 GitHub Pages。

## 技术栈

| 类别 | 选型 |
|------|------|
| 框架 | React 19 |
| 构建 | Vite 7 |
| 样式 | Tailwind CSS v4 |
| 组件 | shadcn/ui (new-york style) |
| 文档 | Storybook 9 |
| 语言 | TypeScript 5.9 |
| 包管理 | pnpm 10 |

## 本地开发

```bash
pnpm install        # 安装依赖
pnpm dev            # 启动 Storybook (http://localhost:6006)
pnpm build          # 构建静态站点到 ./storybook-static
```

## 添加新组件

使用 shadcn/ui CLI 按需添加组件（以 button 为例）：

```bash
pnpm add:component button
```

添加后在 `src/components/ui/` 下会生成对应文件，然后在同目录新建 `*.stories.tsx` 编写文档。

## 目录结构

```
shadcn-ui-kit/
├── .github/workflows/   # CI: 自动部署 Storybook 到 GitHub Pages
├── .storybook/          # Storybook 配置
├── src/
│   ├── components/ui/   # shadcn/ui 组件
│   ├── lib/utils.ts     # cn() 工具函数
│   ├── styles/          # 全局样式 (Tailwind v4 + 设计令牌)
│   └── index.ts         # 组件库入口
├── components.json      # shadcn/ui 配置
└── package.json
```

## 设计令牌

采用 shadcn/ui 默认的 `neutral` 色板，支持亮/暗主题切换。所有 CSS 变量定义在 `src/styles/globals.css`，可在 `:root` 与 `.dark` 中覆盖。

## GitHub Pages 部署

push 到 `main` 分支后，GitHub Actions 会自动构建 Storybook 并部署。首次使用需在仓库 **Settings → Pages → Build and deployment** 中将 Source 设为 `GitHub Actions`。
