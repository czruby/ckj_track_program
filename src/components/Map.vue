<template>
    <div id="map">
        <div id="map_chart"></div>
    </div>
</template>

<script setup lang="ts" name="Map">
import 'echarts/extension/bmap/bmap'
import * as echarts from 'echarts'
import { onMounted, nextTick } from 'vue'
import china from '@/assets/china'
import { type DataItem, type LineDataItem } from '@/types'
import data from '@/assets/data'

const emit = defineEmits(['clickMap'])

const { geoCoordMap, styleJson } = china();
const { pointData, lineData, plane } = data();
const convertData = function (data: DataItem[]) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                id: data[i].id,
                itemStyle: {
                    color: data[i].itemStyle?.color
                }
            });
        }
    }
    return res;
};
const convertLineData = function (data: LineDataItem[]) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var fromCoord = geoCoordMap[data[i].fromName];
        var toCoord = geoCoordMap[data[i].toName];
        if (fromCoord && toCoord) {
            res.push({
                fromName: data[i].fromName,
                toName: data[i].toName,
                time: data[i].time,
                reason: data[i].reason,
                coords: [[fromCoord[0], fromCoord[1]], [toCoord[0], toCoord[1]]]
            });
        }
    }
    return res;
};
onMounted(async () => {
    await nextTick()
    var chartDom = document.getElementById('map_chart');
    var myChart = echarts.init(chartDom);
    var option = {
        title: {
            text: '程开甲行迹图',
            subtext: 'Cheng Kaijia Trace Map',
            sublink: '',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
        },
        bmap: {
            center: [104.114129, 35.550339],
            zoom: 6,
            mapOptions: {
                enableMapClick: false,
            },
            roam: true,
            mapStyle: {
                styleJson: styleJson
            }
        },
        emphasis: {

        },
        series: [
            //行迹图标点
            {
                name: '行迹点',
                type: 'effectScatter',
                zlevel: 2,
                showEffectOn: 'emphasis',
                rippleEffect: {
                    brushType: 'fill',
                    period: 4,
                    scale: 4
                },
                coordinateSystem: 'bmap',
                data: convertData(pointData),
                symbolSize: function (val: any) {
                    if (val[2] < 10) {
                        return 10;
                    } else {
                        return val[2] * 0.9;
                    }
                },
                encode: {
                    value: 2
                },
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    label: {
                        show: true,
                        // formatter: function (params: any) {
                        //     console.log(params.data)
                        //     // 这里可以自定义返回鼠标悬停时显示的内容
                        //     return params.data['value'][2]; // 示例：返回经纬度和第三个值
                        // },
                    }
                },
                tooltip: {
                    formatter: function (params: any) {
                        // params 是包含当前数据信息的对象数组，每个对象对应一个series项的数据
                        var res = '';
                        res += '地点：' + params.data.name + '<br/>';
                        res += '经度：' + params.data.value[0] + '<br/>'; // 假设经度是第一个值
                        res += '纬度：' + params.data.value[1] + '<br/>'; // 假设纬度是第二个值
                        res += '行迹点数：' + params.data.value[2] + '<br/>'; // 显示与点大小相关的值
                        return res;
                    },
                }
            },
            //行迹图画线
            {
                type: 'lines',
                zlevel: 1,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 4,
                    trailLength: 0,
                    symbol: plane,
                    symbolSize: 20
                },
                coordinateSystem: 'bmap',
                lineStyle: {
                    normal: {
                        color: 'red',
                        width: 5,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertLineData(lineData),
                tooltip: {
                    formatter: function (params: any) {
                        // params 是包含当前数据信息的对象数组，每个对象对应一个series项的数据
                        var res = '';
                        res += '起点：' + params.data.fromName + '<br/>';
                        res += '终点：' + params.data.toName + '<br/>';
                        res += '时间：' + params.data.time + '<br/>';
                        return res;
                    },
                }
            }
        ]
    }
    option && myChart.setOption(option);
    myChart.on('click', clickMap);
    window.onresize = function () {
        myChart.resize();
    }
    const bmap = (myChart as any).getModel().getComponent('bmap').getBMap();
    bmap.enableScrollWheelZoom()
    bmap.enableKeyboard()
    bmap.addEventListener('dblclick', () => {
        bmap.disableDoubleClickZoom() // 在每次更新后重新禁用双击放大功能
    })
})

function clickMap(params: any) {
    if (params.componentType === 'series') {
        if (params.seriesType === 'effectScatter') {
            emit('clickMap', 'point', params)
        } else if (params.seriesType === 'lines') {
            emit('clickMap', 'line', params)
        }
    }
}
</script>

<style>
#map_chart {
    width: 100%;
    height: 98vh;
}

.BMap_cpyCtrl {
    display: none;
}

.anchorBL {
    display: none;
}
</style>