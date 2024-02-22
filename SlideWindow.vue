<template>
    <div class="window">
        <div class="arrow next" ref="nextRef" v-if="(item.imgList?.length || 0) + (item.videoList?.length || 0) > 1"></div>
        <div class="arrow prev" ref="prevRef" v-if="(item.imgList?.length || 0) + (item.videoList?.length || 0) > 1"></div>

        <div class="slideDiv" ref="slideDivRef">
            <img v-if="!item.videoList && (item.imgList?.length || 0) + (item.videoList?.length || 0) > 1"
                :src="item.imgList[item.imgList.length - 1]" class="pic" />
            <video v-if="item.videoList && (item.imgList?.length || 0) + (item.videoList?.length || 0) > 1"
                :src="item.videoList[item.videoList.length - 1]" controls class="vid"></video>
            <!-- 上面是设置最后一个轮播图 -->
            <img v-for="img in item.imgList" :src="img" class="pic" />
            <video v-for="video in item.videoList" :src="video" controls class="vid"></video>
            <!-- 下面是设置第一个轮播图 -->
            <img v-if="item.imgList && (item.imgList?.length || 0) + (item.videoList?.length || 0) > 1"
                :src="item.imgList[0]" class="pic" />
            <video v-if="!item.imgList && (item.imgList?.length || 0) + (item.videoList?.length || 0) > 1"
                :src="item.videoList[0]" controls class="vid"></video>
        </div>
        <div class="dots" v-if="(item.imgList?.length || 0) + (item.videoList?.length || 0) > 1" ref="dotsRef">
            <div class="dot active"></div>
            <div class="dot" v-for="index in (item.imgList?.length || 0) + (item.videoList?.length || 0) - 1"></div>
        </div>
    </div>
</template>

<script setup lang="ts" name="SlideWindow">
import { onMounted } from 'vue';
import { ref } from "vue";
import $ from 'jquery'
import { useParamsStore } from '@/store/params'

const paramsStore = useParamsStore()
let slideDivRef = ref<HTMLElement>();
let nextRef = ref<HTMLElement>();
let prevRef = ref<HTMLElement>();
let dotsRef = ref<HTMLElement>();
//注意是从1开始的[1, size - 2]
var index = ref(1);//这是记录图片的索引，通过索引来控制图片的切换， 
var size = 0;//图片的张数
defineProps(['item'])//图片的宽度
let imgWidth = ref(0)
//小圆点切换的函数
function changeDots() {
    //给当前的小圆点添加高亮的样式（active），然后把其他小圆点的样式去掉。
    /*这里设置index-1的原因是因为点只有三个。
    当图片的索引为1，圆点的索引为0
    图片索引为2，圆点索引为1
    所以我们可以看到一直都差1*/
    $(dotsRef.value).children().eq(index.value - 1).addClass('active').siblings().removeClass('active');
}
// 图片切换函数
function changeImg(Width: number, thisIndex: number) {
    console.log(imgWidth.value)
    var slideWidth = -1 * Width * thisIndex;//移动的距离
    $(slideDivRef.value).animate({
        'margin-left': slideWidth + 'px'//每次滑动一个图片的距离
    }, 500);//500的意思是动画效果要在500ms内完成
    if (thisIndex >= size - 1) {
        /*这是关键之三，
        当移动到最后一张图片的时候,
        瞬间（animate函数最后那个0代表转换时间为0ms，所以就是一瞬间的事）
        切换为第一张。*/
        $(slideDivRef.value).animate({ 'margin-left': -Width + 'px' }, 0);// 图片切换过去   
        index.value = 1;//索引要也切换为第一幅图的索引
    }
    if (thisIndex < 1) {
        //要注意在执行下面这段函数之前，已经切换到图片C了。
        $(slideDivRef.value).animate({ 'margin-left': -(size - 2) * Width + 'px' }, 0);// 而这里便是无缝切换的代码
        // (肉眼看不到),但实际已经切换到图片C了
        index.value = size - 2;
    }
}
onMounted(() => {
    size = $(slideDivRef.value).children().length;//图片的张数
    if (size > 1) {
        $(slideDivRef.value).children().get(1).onload = function () {
            imgWidth.value = paramsStore.imgWidth
            changeImg(imgWidth.value, index.value)
        }
    }
    $(nextRef.value).click(function () {
        index.value++;
        changeImg(imgWidth.value, index.value);
        changeDots();
    });
    $(prevRef.value).click(function () {
        index.value--;
        changeImg(imgWidth.value, index.value);
        changeDots();
    });
    //点击小圆点，切换到对应的图片
    $(dotsRef.value).children().each(function (this: any) {
        $(this).click(function (event: any) {
            var target = event.target;//获取点击到的小圆点，获取到的是一个DOM元素
            //获取DOM元素的索引值。
            index.value = $(target).index() + 1;// +1的原因：看上面changeDots()的注释
            changeImg(imgWidth.value, index.value);//改变图片
            changeDots();// 小圆点的状态也要跟着变
        });
    })
})
</script>

<style scoped>
.slideDiv {
    display: flex;
    width: 100%;
}

.window {
    width: 100%;
    height: fit-content;
    overflow: hidden;
    position: relative;
}

.arrow {
    /*左箭头*/
    width: 0;
    height: 0;
    border-right: 25px solid rgba(0, 0, 0, 0.5);
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    position: absolute;
    margin-top: 25%;
    z-index: 3;
}

.arrow:hover {
    /*鼠标移动到箭头时候的样式*/
    border-right-color: black;
}

.next {
    /*右箭头*/
    right: 0;
    margin-top: 25%;
    transform: rotate(180deg);
    z-index: 2;
}

.dots {
    width: 100px;
    height: 30px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -50px;
    z-index: 2;
    /*让圆点显示在轮播图上面*/
}

.dots .dot {
    /*圆点的一些样式*/
    width: 15px;
    height: 15px;
    float: left;
    border-radius: 50%;
    margin: 5px 6px;
    background-color: rgba(7, 17, 27, 0.4);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;
    cursor: pointer;

}

.dots .active {
    /*小圆点高亮的样式*/
    box-shadow: 0 0 0 2px rgba(7, 17, 27, 0.4) inset;
    background-color: #fff;
}

img {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 5%;
    flex-shrink: 0;
}


video {
    width: 80%;
    height: auto;
    margin-left: 10%;
    margin-bottom: 5%;
    flex-shrink: 0;
}
</style>