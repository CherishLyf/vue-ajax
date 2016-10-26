整个应用中数据流是单向的, 正如 Flux 所定义的那样:

1. 用户在组件中输入操作触发 action 调用   <br/>
2. Actions 通过分发 mutations 来修改 store 实例的状态   <br/>
3. Store 实例的状态变化反过来又通过 getters 被组件获知

![vuex](/static/vuex.png)
