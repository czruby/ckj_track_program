<template>
    <Teleport to="body">
        <div id="modalShadow" v-if="showModal">
            <div id="modal">
                <slot></slot>
                <img src="../assets/img/close.png" style="z-index: 1;" id="closePng" @click="closeModal">
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts" name="Modal">
defineProps(['showModal'])
const emit = defineEmits(['closeModal'])
function closeModal() {
    emit('closeModal')
}
</script>

<style scoped>
#modal {
    width: 80%;
    height: 80vh;
    background-image: url(../assets/img/background.png);
    background-attachment: fixed;
    opacity: 85%;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    text-align: center;
    position: fixed;
    left: 10%;
    top: 10vh;
}

#modalShadow {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}

#closePng {
    width: 30px;
    height: 30px;
    position: fixed;
    right: 10%;
    top: 10vh;
    cursor: pointer;
}
</style>