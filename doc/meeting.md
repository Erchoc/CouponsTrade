# 会议中的重要内容
项目中需要应用的技术、提交的交付物、注意事项

## 技术
### 1  订单-20161227 
- 订单概念在WEB中很重要，需要应用如下技术实现订单功能 
  - 标准的http请求
    - 在网络正常的前提下，请求是同步的、成对的，有请求就有响应
  - web server的异步
    - 如：express，play都支持异步处理
  - web socket
    - 不只是异步处理，重要的是请求与响应分离。一个请求可以没任何响应，一个响应也可以没有请求

### 2 redux-saga-20161226
- 从过程来讲是做action的迭代
- redux-saga解决了哪些问题
  - 长事务
  - 剥离职责
    - 将reducer中的任务编排部分放在了redux-saga中来处理
  - 提取负作用

### 3 Generator-20161226
- Generator不是一次性执行完的。

### 4 脚手架-20161228
- 需要定义一个脚手架。
  - 原因：针对项目存在大量的Actor，且用的词不稳当
  - 如：写小工具，定义一个文本，写action
  - 好处：避免错误、命名统一、方便改名字

### 多用户并发的问题要考虑
- 同时支持多少个用户发请求
  - 同时支持多少个用户在线查询
  - 同时支持多少个用户提交订单
  - 统计在每天的中午和晚上有多少用户在购券
- 分析（未完成）
  - 

## 文档
## 1 项目交付物-20161221
- 项目全部功能因果介绍文档（包含名词定义）
- 项目的验收方案
- 项目字典表（要实时更新）  