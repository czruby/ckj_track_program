<template>
    <div id="lineInfo">
        <h1>路径信息</h1>
        <hr>
        <p>起点：{{ fromName }}</p>
        <p>终点：{{ toName }}</p>
        <p>时间：{{ time }}</p>
        <p>原因：{{ reason }}</p>
    </div>
</template>

<script setup lang="ts" name="LineInfo">
import { ref } from 'vue'
import { useParamsStore } from '@/store/params'
import { storeToRefs } from 'pinia'

const paramsStore = useParamsStore()
//初始化数据
const { params } = storeToRefs(paramsStore) as any
let fromName = ref(params.value.data.fromName)
let toName = ref(params.value.data.toName)
let time = ref(params.value.data.time)
let reason = ref(params.value.data.reason)
//监听数据变化
paramsStore.$subscribe(() => {
    const { params } = storeToRefs(paramsStore) as any
    fromName.value = params.value.data.fromName
    toName.value = params.value.data.toName
    time.value = params.value.data.time
    reason.value = params.value.data.reason
})

</script>

<style scoped>
h1 {
    text-align: left;
    font-size: medium;
    margin-left: 10px;
}

p {
    text-align: left;
    font-size: medium;
    margin-left: 10px;
    margin-top: 5px;
}
</style>