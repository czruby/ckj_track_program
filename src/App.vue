<template>
    <div id="app">
        <Map @clickMap="OnMapClick"></Map>
        <Modal :showModal="ShowModal" @closeModal="onCloseModal">
            <div v-if="clickType == 'point'" class="ModalContent">
                <PointInfo></PointInfo>
            </div>
            <div v-if="clickType == 'line'" class="ModalContent">
                <LineInfo></LineInfo>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts" name="App">
import Map from './components/Map.vue'
import Modal from './components/Modal.vue'
import LineInfo from './components/LineInfo.vue';
import PointInfo from './components/PointInfo.vue';
import { useParamsStore } from './store/params'
import { ref } from 'vue'
import data from '@/assets/data'
let ShowModal = ref(false)
let clickType = ref('')
let paramsStore = useParamsStore()
let { pointInfoList } = data()
paramsStore.pointInfoList = pointInfoList as any;
function OnMapClick(type: string, params: any) {
    clickType.value = type
    paramsStore.params = params
    ShowModal.value = !ShowModal.value
}
function onCloseModal() {
    ShowModal.value = false
}
</script>

<style scoped>
.ModalContent {
    width: 81%;
    height: 80vh;
    left: 10%;
    top: 10vh;
    z-index: 1;
    position: fixed;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
}
</style>