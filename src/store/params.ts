// 引入defineStore用于创建store
import { defineStore } from 'pinia'

// 定义并暴露一个store
export const useParamsStore = defineStore('params', {
    // 动作
    actions: {},
    // 状态
    state() {
        return {
            params: {},
            pointInfoList: []
        }
    },
    // 计算
    getters: {}
})