[ALIP] Global HackerHouse Tools

## 标题

开发 Global HackerHouse Tools

## 摘要

Global HackerHouse Tools 特意为 HackerHouse 提供助力。组织方通过本平台，可以创建 HackerHouse 活动，招募 Hacker 参加活动。Hacker 可以使用此工具发现合适的 HackerHouse，填写相关信息，并进行报名。本平台也可以记录 Hacker 参加的活动信息，并发放 NFT，记录 Hacker 在此期间开发的产品与获得的荣誉。

## 动机

Antalpha-Labs 在 2023 年 8 月发起了 Global HackerHouse（以下简称 GHH）活动。本次活动有 6 个社区参与，大家在协作过程中，使用了很多工具

不同的社区对工具的熟练程度不同，还有多种工具的切换，影响了工作效率。最重要的是，对 Hacekr 没有持续的记录，对 hacker 获得的荣誉也不能全面展示。

所以想通过 Global HackerHouse Tools，为 HackerHouse 提供一站式的解决方案，解决不同社区间工具使用的割裂感，并记录 Hacker 的持续参与和成果。

## 详细说明

![](./ghh.jpg)

如上图所示，GHH 主要 2 个参与方：组织者 与 活动参与者——Hacker。

### 首页
- 显示 HackerHouse Explore

### 组织者

- 注册、登陆功能
  - Email  登录
  - Github 登录

- 活动管理
  - 创建、修改、发布、查看活动
  - 为 hacker 定制报名表单，收集相关信息
  - 面试时间 与 面试工具的无缝接合
  - 设定抵押资金
  - 为 hacker 发放 NFT

- 简单的活动汇总界面

### 活动参与者——Hacker

- 注册、登陆功能
  - Github 登录
- 报名
- 提交项目
- 查看活动信息
- 个人页面展示
- 取回抵押金

### 技术栈

后端使用 [Strapi](https://github.com/strapi/strapi)，Strapi 是一款开源的无头内容管理系统工具，使用起来非常方便。

前端使用 [Next.js](https://nextjs.org/)，提供生产环境所需的所有功能以及最佳的开发体验。

合约：Solidity，通用的 web3 智能合约语言。

## 人员

一共 2 人

- 1 名 前端工程师 Amagi
- 1 名 后端工程师 Shooter

Amagi：[Amagi](https://github.com/AmagiDDmxh)是一位经验丰富的前端开发者，热衷于开源项目和黑客松活动。他在多个知名项目中贡献了开源代码，并积极参与黑客松和 Hacker House 活动。对于 HackerHouse Tools，他有着自己的理解与认识。

Shooter：[Shooter](https://github.com/liushooter/)是 Rebase 技术社区发起人、开源社区爱好者、区块链开发者。参与众多区块链项目开发，并有大量区块链应用开发经验。

## 费用

### 薪水

- 2800 USD：1 人/月 的开发费用需要

### 服务器相关

500U

- 服务器
- 域名购买
- 云数据库
- 云储存
- 第三方服务集成

### 前端模板
300U

### 产品设计

2000U：可选，计划在发出 MVP 版本后参与。设计页面，优化产品流程等。

### 总计
开发者成本：11200 USD（2 个人，2 个月时间）
产品设计：2000 USD（1 个人，1 个月时间）

14000 USD = 11200 + 2000 + 300 + 500

## 风险

## 时间点

预期 2 个月内交付一个可用的版本，可自行部署。

开发进度有可能提前，以下是大致时间。

### 前期调研

前期开发了简略版本：https://github.com/liushooter/ghhdao

这个版本完成了：技术调研、流程设计、数据结构等工作。

### 第 1 个月：

在前一版本的过程中，继续完善功能。

主要为：
- 组织者、hacker 的登录、注册流程
- 创建、修改、发布、查看活动
- 通用的报名流程
- 站内创建面试会议（集成 zoom、google meeting）
- hacker 可以通过 calendly 报名、预约面试
- 发送邮件提醒

### 第 2 个月：
- 提供抵押功能
- 组织方解锁抵押金，hacker 可以取回
- hacker 可以取回抵押金
- 组织者可以设定个性的报名过程
- 优化流程
- 美化页面
