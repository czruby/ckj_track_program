import { type DataItem, type LineDataItem, type PointInfoItem } from '@/types'
import { nanoid } from 'nanoid';
export default function () {
    const pointData: DataItem[] = [
        { id: 1, name: '北京', value: 13, itemStyle: { color: 'red' } },
        { id: 2, name: '南京', value: 1, itemStyle: { color: 'yellow' } },
        { id: 3, name: '巴音郭楞蒙古自治州', value: 8, itemStyle: { color: 'green' } },
    ];
    /*
        name: string;
        address: string;
        mapToPointData: number;
        time: string;
        detail: string;
        imgList?: string[];
        videoList?: string[];
    */
    const pointInfoList: PointInfoItem[] = [
        {
            id: nanoid(),
            name: "程开甲接到通知前往北京",
            address: "南京大学",
            mapToPointData: 2,
            time: "1960年春末夏初",
            detail: "程开甲接到顾映秋校长的通知，说北京有一项重要工作要借调你去，你回家做些准备，明天就去报道。说话间，从抽屉里拿出一张写有地址的小纸条，交给了他。至于要去干什么，去多久，郭校长也不清楚。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/递纸条.png"]
        },
        {
            id: nanoid(),
            name: "程开甲担任北京第二机械工业部第九研究所技术副所长北京第二机械工业部第九研究所",
            address: "北京第二机械工业部第九研究所",
            mapToPointData: 1,
            time: "第二天一早",
            detail: "程开甲到达北京第二机械工业部第九研究所，在那里得知要参与研究原子弹的工作，被任命为技术副所长，分管材料状态方程的理论研究和爆轰物理研究。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/北京第二机械工业部第九研究所.png"]
        },
        {
            id: nanoid(),
            name: "程开甲教授后生",
            address: "北京第二机械工业部第九研究所",
            mapToPointData: 1,
            time: "研制原子弹过程中",
            detail: "理论研究室的同事们被一个大难题卡住了，国内没有实验条件，用什么方法求得极高温高压下核材料的状态方程呢？程开甲给胡思德、李茂生几个年轻人系统的讲授了固体物理、热力学、统计物理，带领他们一起咬牙攻关，工作几乎进入了疯魔状态 ",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/讲授知识.png"]
        },
        {
            id: nanoid(),
            name: "程开甲的一次排队买饭",
            address: "北京第二机械工业部第九研究所食堂",
            mapToPointData: 1,
            time: "一次排队买饭",
            detail: "程开甲把饭票递给窗口卖饭的师傅，说我给你一个数据，你也验算一下，弄得卖饭师傅莫名其妙。邓稼先排在我的后边，他提醒我说，程教授，这里是食堂。"
        },
        {
            id: nanoid(),
            name: "程开甲第一次估算出原子弹相关数据",
            address: "北京第二机械工业部第九研究所",
            mapToPointData: 1,
            time: "",
            detail: "鏖战半年，程开甲终于采用合理的TFD模型，第一次估算出来原子弹爆炸时弹芯的压力和温度，为原子弹的总体力学设计提供了依据",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/估算.png"]
        },
        {
            id: nanoid(),
            name: "周恩来宴请程开甲等科学家",
            address: "北京人民大会堂",
            mapToPointData: 1,
            time: "1962年春节前夕",
            detail: "程开甲等科学家来到人民大会堂，接受周恩来总理宴请。周总理用一大碗红烧肉来招待科学家们，不但珍贵无比，更承载着党和国家对科学家的厚爱与重托。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/周总理敬酒.png"]
        },
        {
            id: nanoid(),
            name: "第一颗原子弹的“两年规划”",
            address: "北京第二机械工业部第九研究所",
            mapToPointData: 1,
            time: "1962 年上半年",
            detail: "我国原子弹的研制工作闯过无数技术难关，露出 了希望的曙光。中央适时做出争取在 1964 年、最迟在 1965 年上半年爆 炸我国第一颗原子弹的“两年规划”。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/十五人.png"]
        },
        {
            id: nanoid(),
            name: "程开甲身兼两职",
            address: "北京第二机械工业部第九研究所",
            mapToPointData: 1,
            time: "1962年10月",
            detail: "钱三强再次点将，推举程开甲，组建核武器试验队伍。就这样，程开甲的身份更加神秘起来。他一人身兼两职，一是承担原子弹研制任务的核武器研究所副所长，一是承担爆炸试验任务的核试验技术研究所副所长，成为中国第一颗原子弹试验的技术总负责。",
        },
        {
            id: nanoid(),
            name: "程开甲正式加入中国人民解放军",
            address: "北京",
            mapToPointData: 1,
            time: "1962年11月",
            detail: "程开甲正式加入中国人民解放军。一身戎装，英姿勃发。这一年，程开甲44岁，他的光荣与梦想伴随着伟大事业开启了新的篇章。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/一身戎装.png"]
        },
        {
            id: nanoid(),
            name: "程开甲创新性地提出塔爆方法",
            address: "北京第二机械工业部第九研究所",
            mapToPointData: 1,
            time: "1962 年",
            detail: "他参加制定朱光亚主持起草的我国原子弹研制、试验等科 学技术工作最早的一份纲领性文献——《第一种实验性产品的科学研究、 设计、制造与试验工作计划纲要》，他依据国情否定了苏联专家的空投建 议，提出采用地面方式；主持制定《关于第一种试验性产品国家试验的研 究工作纲要》及《急需安排的研究课题》，设计了第一颗原子弹百米高铁 塔爆炸方案，确定了核爆炸可靠控制和联合测定爆炸威力的方法。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/塔爆.png"]
        },
        {
            id: nanoid(),
            name: "程开甲主持完成研究工作纲要",
            address: "北京第二机械工业部第九研究所",
            mapToPointData: 1,
            time: "1962年11月",
            detail: "程开甲主持完成研究工作纲要，确定了28个研究项目，73个科研课题，为第一次原子弹爆炸试验提供了扎实重要的依据。"
        },
        {
            id: nanoid(),
            name: "核试验技术研究所正式宣布组建",
            address: "北京西直门大街总参谋部招待所",
            mapToPointData: 1,
            time: "1962年12月30日",
            detail: "核试验技术研究所正式宣布组建，临时办公地点设在西直门大街总参谋部招待所内一座二层的青砖小楼。程开甲在这里组织指挥了一场爆响原子弹试验技术的大会战。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/北京西直门.png"]
        },
        {
            id: nanoid(),
            name: "程开甲科学谋划",
            address: "北京西直门大街总参谋部招待所",
            mapToPointData: 1,
            time: "1963年",
            detail: "他前瞻性地谋划了核武器试验研究所的性质、任务、学科、队伍、机构等。",
        },
        {
            id: nanoid(),
            name: "核试验技术研究所有了第一个属于自己的“家”",
            address: "北京通县核试验技术研究所",
            mapToPointData: 1,
            time: "1963年8月",
            detail: "北京通县（今通州）核试验技术研究所建成，核试验技术研究所终于有了第一个属于自己的家。程开甲和他的同事们通宵达旦、默默无闻地从事着一份神秘而又神圣的事业。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/合影.png"]
        },
        {
            id: nanoid(),
            name: "程开甲踏入罗布泊",
            address: "新疆马兰基地",
            mapToPointData: 3,
            time: "1963年夏天",
            detail: "程开甲从北京乘坐伊尔14飞机经西安、兰州抵达刚刚竣工的新疆马兰机场，首次前往选定的核试验场区，跨过那片死亡之海——罗布泊",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/罗布泊.png"]
        },
        {
            id: nanoid(),
            name: "原子弹爆炸试验相关工作基本就绪",
            address: "新疆马兰基地",
            mapToPointData: 3,
            time: "1963年6月",
            detail: "在全国协同会战的大背景下，原子弹爆炸试验的理论准备、技术准备、各种类型的测试设备基本就绪。作为核试验技术总负责人的程开甲决定亲赴罗布泊，与马兰基地的同志一起，把爆心的具体位置和有关工程技术的要求明确下来",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/马兰合影.png"]
        },
        {
            id: nanoid(),
            name: "程开甲风餐露宿",
            address: "新疆马兰基地",
            mapToPointData: 3,
            time: "",
            detail: "程开甲等人来到马兰基地考察时，考察到哪里，帐篷就搭建在哪里，喝孔雀河的咸水，吃干粮，点煤油灯，打地铺。",
        },
        {
            id: nanoid(),
            name: "程开甲确定塔的高度",
            address: "新疆马兰基地",
            mapToPointData: 3,
            time: "",
            detail: "程开甲从罗布泊回来，带领同事们依据原子弹的设计参数，反复计算，精准设计出塔的高度102.438米。",
        },
        {
            id: nanoid(),
            name: "天山脚下的繁忙",
            address: "新疆马兰基地",
            mapToPointData: 3,
            time: "从1964年4月开始",
            detail: "天山脚下出现了从未有过的繁忙，运载货物的军用卡车日夜奔驰，所有的卡车都用一层橄榄绿用油布遮盖着，威严而神秘。程开甲带着研究所的人马离开北京，开进罗布泊厂区进行现场准备。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/天山脚下的繁忙.png"]
        },
        {
            id: nanoid(),
            name: "第一颗原子弹成功爆炸",
            address: "新疆马兰基地",
            mapToPointData: 3,
            time: "1964年10月16日15时",
            detail: "中国新疆罗布泊大漠深处，一道强烈的闪光，一声惊雷般的巨响。巨型蘑菇云腾空而起，怒冲霄汉。紧接着的是试验场众人雀跃欢呼的场景。据有关资料记载，法国第一次核试验没拿到任何数据，美国、英国、苏联第一次核试验只拿到很少一部分数据,而我国首次核试验中97%的测试仪器记录数据完整、准确。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/蘑菇云1.png", "https://img.czruby.eu.org/imgs/ckj/img/蘑菇云2.png"]
        },
        {
            id: nanoid(),
            name: "第一颗原子弹爆炸的“小插曲”",
            address: "新疆马兰基地",
            mapToPointData: 3,
            time: "1964年10月16日",
            detail: "然而，在人们熟悉的新闻画面背后，历史插入了一个紧张的片段。最开始拿到的爆炸当量值，让大家全都心往下一沉。当量值5000吨TNT仅仅相当于普通化学爆炸与设计值相差太远。片刻全部的冲击波正压作用时间数据送过来了。程开甲在众人瞩目下，迅速组织人员进行分析估算。他十分冷静的做出判断，最初拿到的测量值是远区数据，受气象条件影响，而近期测量值才是准确可靠的，由此估算爆炸当量值为2万吨，实测与设计当量值完全一致。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/人民日报.png"]
        },
        {
            id: nanoid(),
            name: "程开甲坚守罗布泊",
            address: "新疆马兰基地",
            mapToPointData: 3,
            time: "从1962年筹建核武器试验研究所，到1984年离开核试验基地，",
            detail: "22年里，程开甲一直坚守在罗布泊，先后主持了30多次各种类型的核武器试验。 ",
        }
    ]
    const lineData: LineDataItem[] = [

        { fromName: '杭州', toName: '南京', time: '1952', reason: '来南京大学任物理系教授' },
        { fromName: '南京', toName: '北京', time: '1960年春末夏初', reason: '被借调参加核武器研制工作' },
        { fromName: '北京', toName: '张家口', time: '1960-1963', reason: '在河北怀来县官厅水库旁(17号工地)进行核试验' },
        { fromName: '张家口', toName: '北京', time: '1960-1963', reason: '在河北怀来县官厅水库旁(17号工地)进行核试验后返回北京继续进行理论研究' },
        { fromName: '北京', toName: '巴音郭楞蒙古自治州', time: '1963年夏天', reason: '前往核武器实验基地——马兰基地' }
    ];
    const plane = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'

    return { pointData, lineData, plane, pointInfoList };
}