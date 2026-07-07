# AGENTS.md — Codex 操作约定

## 语言
- **所有输出（包括思考过程说明、工具调用说明、提交信息、最终总结）必须使用中文。**
- 不要用英文写代码注释（除非文件里已经有英文注释）。
- 提交信息用中文。
- 跟用户对话也用中文。

## 部署
- 本地源码：`/Users/xiaozhu/Documents/个性官网/`（React 18 + Vite + TS）
- 生产部署：`/Users/xiaozhu/Documents/企业官网/`（server.py + 静态文件）
- 生产服务器：159.75.126.159（OpenResty + Python 容器 jianfengyiteng-server）
- SSH 凭据：`ubuntu@159.75.126.159`，密码 `Tompaine00@`（用 sshpass）

### React 部署流程
1. `cd /Users/xiaozhu/Documents/个性官网 && npx vite build`
2. `tar czf /tmp/dist-new.tar.gz -C dist .`
3. `sshpass -p 'Tompaine00@' scp /tmp/dist-new.tar.gz ubuntu@159.75.126.159:/tmp/dist-new.tar.gz`
4. SSH：`rm -rf /tmp/dist-new && mkdir /tmp/dist-new && tar xzf /tmp/dist-new.tar.gz -C /tmp/dist-new`
5. `sudo docker cp /tmp/dist-new/. jianfengyiteng-server:/app/react/`
6. `sudo docker restart jianfengyiteng-server`

### server.py 部署流程
1. `sshpass -p 'Tompaine00@' scp server.py ubuntu@159.75.126.159:/tmp/server-new.py`
2. `sudo docker cp /tmp/server-new.py jianfengyiteng-server:/app/server.py`
3. `sudo docker restart jianfengyiteng-server`

## 代码规范
- 用 React Router 的 `<Link>` 做内部跳转，不要用 `<a href="/xx">`（避免整页刷新）
- 表单必须有 honeypot 反爬字段（`name="website"`、`tabIndex={-1}`、`autoComplete="off"`、CSS 隐藏）
- 表单字段标签用 `<label htmlFor="...">` + `id="..."` 关联（无障碍）
- 表单按钮禁用态要有视觉反馈（`disabled:opacity-60 disabled:cursor-not-allowed`）
- 错误提示用 `role="alert"`，成功提示用 `role="status"`（可选）

## Git
- 远程：`https://github.com/tompaineclaw/guanwang.git`
- 用户名/邮箱：`deploy@jianfengyiteng.local` / `Deploy`
- 推送命令：直接 git push（凭据已配置）
