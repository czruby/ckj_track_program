<template>
    <div id="pointInfo" ref="pointInfo">
        <h1>路径点信息</h1>
        <hr>
        <p>名称：{{ name }}</p>
        <p>路径点数量：{{ count }}</p>
        <el-collapse accordion>
            <el-collapse-item class="PointInfoDiv" v-for="item in pointInfoListById" :key="item.id" :title="item.name">
                <p>事件名：{{ item.name }}</p>
                <p v-if="item.time == ''">事件时间：不详</p>
                <p v-if="item.time != ''">事件时间：{{ item.time }}</p>
                <p>事件地点：{{ item.address }}</p>
                <p>事件描述：{{ item.detail }}</p>
                <el-carousel height="auto" type="card" :autoplay="false" trigger="click"
                    v-if="item.imgList || item.videoList" indicator-position="outside">
                    <el-carousel-item v-for="(img, index) in item.imgList" :key="img" style="height: max-content;"
                        v-if="item.imgList">
                        <el-image :src="img" :zoom-rate="1.5" :max-scale="7" :min-scale="0.2"
                            :preview-src-list="item.imgList" :initial-index="index" fit="cover" preview-teleported
                            hide-on-click-modal />
                        <div>{{ getImgName(img) }}</div>
                    </el-carousel-item>
                    <el-carousel-item v-for="video in item.videoList" :key="video" style="height: max-content;"
                        v-if="item.videoList">
                        <video :src="video" controls></video>
                    </el-carousel-item>
                </el-carousel>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script setup lang="ts" name="PointInfo">
import { ref } from 'vue'
import { useParamsStore } from '@/store/params'
import { storeToRefs } from 'pinia'
const paramsStore = useParamsStore()

function getImgName(img: string) {
    let match = img.match(/\/([^\/]+)\.(png|jpg|jpeg)$/);
    return match ? match[1] : null;
}
//初始化数据
const { params, pointInfoList } = storeToRefs(paramsStore) as any
let id = ref(params.value.data.id)
let name = ref(params.value.data.name)
let longitude = ref(params.value.data.value[0])
let latitude = ref(params.value.data.value[1])
let count = ref(params.value.data.value[2])
let pointInfoListById = ref()
let pointInfo = ref()
const getPointInfoListById = (id: number) => {
    pointInfoListById.value = pointInfoList.value.filter((item: any) => item.mapToPointData === id)
}
getPointInfoListById(id.value)
//监听数据变化
paramsStore.$subscribe(() => {
    const { params } = storeToRefs(paramsStore) as any
    id.value = params.value.data.id
    name.value = params.value.data.name
    longitude.value = params.value.data.value[0]
    latitude.value = params.value.data.value[1]
    count.value = params.value.data.value[2]
    getPointInfoListById(id.value)
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


.PointInfoDiv {
    display: inline-block;
    width: 90%;
    margin: 5px;
    border-radius: 10px;

}

.el-image {
    width: 80%;
    height: auto;
}


video {
    width: 80%;
    height: auto;
}

.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 14px;
}
</style>