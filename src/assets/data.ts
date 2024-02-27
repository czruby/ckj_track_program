import { type DataItem, type LineDataItem, type PointInfoItem } from '@/types'
import { nanoid } from 'nanoid';
export default function () {
    const pointData: DataItem[] = [
        { id: 1, name: '北京', value: 20, itemStyle: { color: 'red' } },
        { id: 2, name: '南京', value: 4, itemStyle: { color: 'yellow' } },
        { id: 3, name: '新疆马兰基地', value: 26, itemStyle: { color: 'green' } },
        { id: 4, name: '苏州', value: 5, itemStyle: { color: 'brown' } },
        { id: 5, name: '嘉兴', value: 3, itemStyle: { color: 'purple' } },
        { id: 6, name: '贵州', value: 5, itemStyle: { color: 'pink' } },
        { id: 7, name: '爱丁堡大学', value: 4, itemStyle: { color: 'orange' } },
        { id: 8, name: '杭州', value: 1, itemStyle: { color: 'cyan' } },
        { id: 9, name: '莫斯科', value: 1, itemStyle: { color: 'black' } },
    ];
    const pointInfoList: PointInfoItem[] = [

        {
            id: nanoid(),
            name: "程开甲出生",
            address: "江苏省吴江市（今江苏省苏州市吴江区）",
            mapToPointData: 4,
            time: "1918",
            detail: "祖父去世后第二天，程开甲出生了，爷爷希望他未来能中个状元，独占鳌头，所以给他取名为“开甲”。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/江南小镇.png"]
        },
        {
            id: nanoid(),
            name: "程开甲丧父失母",
            address: "江苏省吴江市（今江苏省苏州市吴江区）",
            mapToPointData: 4,
            time: "程开甲在盛泽绸业小学读书时",
            detail: "7 岁时，程开甲父亲病故，生母在程家成了多余的人，两年后抛下程开甲一人，终于离家出走",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/生母照片.png"]
        },
        {
            id: nanoid(),
            name: "程开甲不学无术，被长辈教训",
            address: "江苏省吴江市（今江苏省苏州市吴江区）",
            mapToPointData: 4,
            time: "程开甲12岁左右",
            detail: "没有父母管教的程开甲，每天除了玩就是玩，成绩常常是倒数第一。12 岁时，程开甲拿了家里的钱跑到上海，花了个精光。花完钱后去了二姐家，二姐告诉家里，家人把他带回盛泽痛打了一顿。为了开甲的未来，大妈程洪氏痛下决心，把他转学到自己任教的小学严加看管",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/大妈照片.png"]
        },
        {
            id: nanoid(),
            name: "程开甲好好学习，发挥才能",
            address: "观音弄小学",
            mapToPointData: 4,
            time: "1930--1931",
            detail: "在观音弄小学，程开甲在简晓峰校长的影响下，心里面立下志愿要好好学习。简晓峰校长经常讲大人物成才的故事，程开甲渐渐懂了“成才”的含义，立志成为大人物。四年级的时候，他因为数学、音乐成绩特别优秀，还跳级读了六年级。最后，程开甲考取了位于江浙交界处的浙江嘉兴秀州中学",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/观音弄小学(现改名为程开甲小学).png"]
        },
        {
            id: nanoid(),
            name: "程开甲阅读人物传记",
            address: "浙江嘉兴秀州中学",
            mapToPointData: 5,
            time: "1931--1937",
            detail: "在秀州中学，程开甲看了大量的人物传记，它们给程开甲树立了榜样，他还在秀州中学图书馆读了很多名人的书，被他们执着创新和不倦研究的精神感动",
        },
        {
            id: nanoid(),
            name: "程开甲学习数学",
            address: "浙江嘉兴秀州中学",
            mapToPointData: 5,
            time: "1931--1937",
            detail: "在数学老师姚广钧的指导和训练下，程开甲对数学技能的记忆得到强化，老师还经常给程开甲开小灶。为了训练记忆力，程开甲把圆周率背到小数点后六十位以上",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/姚广钧照片.png"]
        },
        {
            id: nanoid(),
            name: "程开甲预习大学课本",
            address: "浙江嘉兴秀州中学",
            mapToPointData: 5,
            time: "1931--1937",
            detail: "学完中学课本，就预习大学课本，钻研微积分，还找到美国的原版教材，经常学习到12点，熄灯后，就在楼梯的等下，有时还会去厕所学习",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/程开甲伏案学习.png"]
        },
        {
            id: nanoid(),
            name: "程开甲大学遇恩师",
            address: "浙江大学，西迁游学",
            mapToPointData: 6,
            time: "1937-1941",
            detail: "他幸运地遇上了对他影响很大的束星北、王淦昌、陈建功、苏步青等大师",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/王淦昌老师上课笔记.png", "https://img.czruby.eu.org/imgs/ckj/img/对程开甲影响较大的老师.png"]
        },
        {
            id: nanoid(),
            name: "程开甲熬夜点灯读书",
            address: "浙江大学，西迁游学",
            mapToPointData: 6,
            time: "1937-1941",
            detail: "由于程开甲经常熬夜点灯读书，灯油钱是别人的好几倍",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/经常熬夜点灯，花费是别人的几倍.png"]
        },
        {
            id: nanoid(),
            name: "程开甲与同学打赌",
            address: "浙江大学，西迁游学",
            mapToPointData: 6,
            time: "1937-1941",
            detail: "有一次，一个同学和他打赌，他要是一天一夜不闭睡觉一直看书，他就替我出晚上的灯油费，程开甲年轻气盛，加上机不可失，接受了他的赌约，向老师借来基本量子力学的书，看，计算了一整天，赌局之后，就有了程BOOK这个称号",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/与同学的赌约，获得程BOOK的称号.png"]
        },
        {
            id: nanoid(),
            name: "程开甲撰写论文",
            address: "浙江大学，西迁游学",
            mapToPointData: 6,
            time: "1937-1941",
            detail: "大三时，程开甲听陈建功教授的复变数函数论课后，敢于挑战难题，\n撰写了题为《根据黎曼基本定理推导保角变换面积的极小值》的论文，\n得到陈建功和苏步青赏识，并推荐给英国数学家 Tischmash 教授发表，之\n后文章被苏联斯米尔诺夫的《高等数学教程》全文引用",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/《根据黎曼基本定理推导包角变换面积的最小值》的论文.png"]
        },
        {
            id: nanoid(),
            name: "程开甲随学校西迁",
            address: "浙江大学，西迁游学",
            mapToPointData: 6,
            time: "1937-1941",
            detail: "日军入侵战火，学校西迁。路线：浙江临安西天目山--建德--江西吉安、泰和--桂林--湄潭",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/上大学时，举校西迁.png"]
        },
        {
            id: nanoid(),
            name: "程开甲结婚",
            address: "老家苏州吴江",
            mapToPointData: 4,
            time: "在1941",
            detail: "1941年大学毕业，留校任教，回苏州吴江老家结婚",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/回老家苏州吴江结婚.png"]
        },
        {
            id: nanoid(),
            name: "程开甲获哲学博士学位",
            address: "爱丁堡大学",
            mapToPointData: 7,
            time: "1946-1950",
            detail: "​获哲学博士学位，任英国皇家化学工业研究所研究员",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/程开甲在爱丁堡大学获得哲学博士学位.png"]
        },
        {
            id: nanoid(),
            name: "程开甲等中国学子受到外国人歧视",
            address: "爱丁堡大学",
            mapToPointData: 7,
            time: "1946-1950",
            detail: "由于中国但是羸弱不堪，中国人受到外国人的歧视，有一次程开甲一行中国人去游泳，几个英国人阴阳怪气的念叨，这几个中国人把我们的海水弄脏了",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/外国人阴阳怪气，说中国人把海水弄脏了.png"]
        },
        {
            id: nanoid(),
            name: "程开甲与同门师兄海森堡展开了一场激烈的论战",
            address: "爱丁堡大学",
            mapToPointData: 7,
            time: "1946-1950",
            detail: " 1948 年在瑞士苏黎世大学召开的低温超导国际学术会议上，与同门师兄海森堡展开了一场激烈的论战",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/与同门师兄海森堡展开了一场激烈的论战.png"]
        },
        {
            id: nanoid(),
            name: "程开甲提出“双带模型”",
            address: "爱丁堡大学",
            mapToPointData: 7,
            time: "1946-1950",
            detail: "1948年与导师玻恩共同提出超导的“双带模型”",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/1948年与导师玻恩共同提出超导的“双带模型”.png"]
        },
        {
            id: nanoid(),
            name: "程开甲在浙大任教",
            address: "浙江大学",
            mapToPointData: 8,
            time: "1950-1952",
            detail: "母校浙江大学聘任他为物理系副教授",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/程开甲在浙江大学任副教授.png"]
        },
        {
            id: nanoid(),
            name: "程开甲出版《固体物理学》",
            address: "南京大学",
            mapToPointData: 2,
            time: "在1959",
            detail: "1959年，他出版了中国第一部物理学专著《固体物理学》",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/《固体物理学》.png"]
        },
        {
            id: nanoid(),
            name: "程开甲加入中国共产党",
            address: "南京大学",
            mapToPointData: 2,
            time: "在1956",
            detail: "1956 年7月，他德偿夙愿加入中国共产党，成为新中国成立后南大物理系教工党支部发展的第一个高级知识分子党员",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/程开甲加入中国共产党，成为第一个高级知识分子党员.png"]
        },
        {
            id: nanoid(),
            name: "程开甲仿苏",
            address: "莫斯科大学",
            mapToPointData: 9,
            time: "在1956",
            detail: "高交部组织 30 多位学者的仿苏代表团访问了莫斯科大学的著名高校和研究所原子能发电站，另一件是 600 多位科学家和工程技术专家全封闭 3 个月。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/访问了莫斯科大学的著名高校和研究所原子能发电站.png"]
        },
        {
            id: nanoid(),
            name: "程开甲参与计划制定",
            address: "南京大学",
            mapToPointData: 2,
            time: "1956-1957",
            detail: "参与制定 1956- 1967 年科学技术发展原酒规划纲要，被称作十二年科学规划，包括两带一星在内的一系列科技项目正是在这一规划下发展了起来",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/参与“十二年科学规划”的制定.png"]
        },
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
        },
        {
            id: nanoid(),
            name: "程开甲向周恩来总理汇报原子弹空爆试验的有关事项",
            address: "北京海淀区 钓鱼台国宾馆",
            mapToPointData: 1,
            time: "1965年",
            detail: "1964年，在我国第一颗原子弹成功爆炸后的第七天，程开甲接到了原子弹空爆实验的任务，以实现“武器化”。空爆试验前，程开甲先生在钓鱼台国宾馆向周总理汇报，对爆炸后投弹飞机是否安全、放射性烟云高度以及是否会飘往别处、地面沉降的测量方法等一系列问题一一作了回答。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/钓鱼台国宾馆.jpg"],
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频1.mp4"]
        },
        {
            id: nanoid(),
            name: "首次原子弹空爆试验",
            address: "新疆伊犁地区",
            mapToPointData: 3,
            time: "1965年5月14日9时59分10秒",
            detail: "1965年5月14日，原子弹准确在预定高度发生爆炸，原子弹空爆试验成功，标志着我国有了可以用于实战的核武器。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/首次原子弹空爆试验.jpg"],
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频2.mp4"]
        },
        {
            id: nanoid(),
            name: "实现核武器的研制和试验紧密结合",
            address: "新疆红山 核技术试验研究所",
            mapToPointData: 3,
            time: "1966年",
            detail: "1966年，程开甲代领核试验技术研究所从北京通县搬迁到这里。程开甲先生提出将核武器的研制和试验紧密结合，不同于国外将二者彼此分离，同时建立起了一整套核试验技术体系，这也成为一个具有中国特色的关键性创新。\n",
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频3.mp4"]
        },
        {
            id: nanoid(),
            name: "程开甲先生作为场区技术总负责人，带头进行核试验的相关研究工作。",
            address: "新疆罗布泊 马兰核试验基地",
            mapToPointData: 3,
            time: "1966年",
            detail: "含有热核材料的原子弹试验、导弹核武器试验、氢弹原理试验，几场“硬仗”同时打响。其中，最为牵动人心的是导弹和原子弹这两大尖端技术的“两弹”结合试验，要让“啰嗦君”导弹和“娇小姐”原子弹牵手，以使核武器具有远程战斗力。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/罗布泊核试验场照片.jpg"],
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频4.mp4"]
        },
        {
            id: nanoid(),
            name: "“两弹”结合试验圆满完成",
            address: "新疆罗布泊 马兰核试验基地",
            mapToPointData: 3,
            time: "1966年",
            detail: "为了进行“两弹”结合试验，程开甲带领科研人员踏遍罗布泊场区，对落点安全问题反复论证。1966年10月27日上午9时许，我国第一枚带有核弹头的东风-2A导弹从巴丹吉林沙漠酒泉发射基地升空，经过近900千米的飞行，最终在罗布泊靶场上空的预定高度成功实现核爆炸，“两弹”结合试验圆满完成。而且，程开甲团队捕捉到大量数据，并拍到了导弹核武器试验的整个火球和烟云。标志着我国的武器化进程迈上了一个新的台阶。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/东风-2A导弹成功发射.jpg"],
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频5.mp4"]
        },
        {
            id: nanoid(),
            name: "第一颗氢弹空投试验成功",
            address: "新疆罗布泊 马兰核试验基地",
            mapToPointData: 3,
            time: "1967年",
            detail: "1967年6月17日8时20分，我国第一颗氢弹空投试验成功，居住在新疆乌鲁木齐、哈密、吐鲁番、库尔勒等地的人们看到了天上有“两个太阳”。在首次氢弹空投试验中，程开甲付出了尤其多的心血和智慧，例如固体火箭取样和投弹飞机改为顺风飞行这两项创新，也在后来的历次氢弹空爆试验中所沿用。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/第一颗氢弹爆炸.jpeg", "https://img.czruby.eu.org/imgs/ckj/img/两个太阳.jpeg"],
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频6.mp4"]
        },
        {
            id: nanoid(),
            name: "第一次地下核爆炸成功",
            address: "新疆罗布泊 马兰核试验基地",
            mapToPointData: 3,
            time: "1963-1969年",
            detail: "早在1963年第一颗原子弹研制期间，程开甲就提出成立专门的地质研究室，进行地下核试验的研究。 首次的地下核试验采用平洞方式，然而，最初的两次模拟实验都以失败告终。经过一次又一次修改、完善，程开甲找到了解决方案，他提出了三点技术要求：“不冒顶”、“不放枪”、“不泄露”，进而设计了轻物质的引光自封装置。1969年9月23日0时15分，我国第一次地下核爆炸宣告成功。\n几个月后，程开甲先生不顾危险，亲自进入爆炸后的测试间，在《程开甲口述自传》中，程开甲先生说道；“每次‘深入虎穴’，我的体会就是‘亲眼所见’和‘只听汇报’大不相同。”\n",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/地下核试验引起的山体崩塌.jpg"],
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频7.mp4"]
        },
        {
            id: nanoid(),
            name: "第一次竖井核爆炸试验成功",
            address: "新疆罗布泊 马兰核试验基地",
            mapToPointData: 3,
            time: "1978年-1982年",
            detail: "地下核试验成功后不久，程开甲又面临新的挑战：地下竖井核试验。1978年10月，第一次竖井核爆炸试验成功。\n据程开甲当时的警卫员李国新回忆：在1982年的地爆实验中，爆炸成功后，他与程开甲先生穿上防护服后直奔地心，剂量的笔显示超标，他提醒程开甲先生离开，但先生不为所动，坚持要把该看的看完，并表示“核试验任务就是大家的生命，也是我的生命。”。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/程开甲在地下核试验现场.jpg"],
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频8.mp4"]
        },
        {
            id: nanoid(),
            name: "在程开甲的带领下，核试验技术研究所孕育了一片郁郁葱葱的人才森林。",
            address: "新疆马兰核试验技术研究所",
            mapToPointData: 3,
            time: "1964-1996年",
            detail: "从这里走出的两位院士就有程开甲、于敏、钱绍军、杨裕生、乔登江、邱爱慈、陈达、林俊德、刘国治等十余位。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/马兰核试验基地.jpg", "https://img.czruby.eu.org/imgs/ckj/img/研究所的院士们.jpg"],
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频9.mp4"]
        },
        {
            id: nanoid(),
            name: "程开甲组建项目组",
            address: "新疆马兰核试验技术研究所",
            mapToPointData: 3,
            time: "1964年",
            detail: "程开甲组建了一个项目组，林俊德任组长。在程开甲主持下，林俊德和项目组经过一年夜以继日地攻关，研制出中国第一台钟表式压力自计仪，这也是千万台设备中唯一不依靠协作，完全由研究所独立研制的产品，第一时间准确测得了核爆炸的冲击波参数，立下大功。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/林俊德在调试机器设备.jpg"]
        },
        {
            id: nanoid(),
            name: "程开甲“抢”回科学家人才",
            address: "新疆马兰核试验技术研究所",
            mapToPointData: 3,
            time: "20世纪60年代末",
            detail: "在上世纪60年代末那段动荡时期，林俊德受到冲击，差点儿被复员转业。程开甲听到后竭力争取，为中国的核事业留下了这位优秀的技术骨干。这位被程开甲抢回来的科学家，参与了中国全部45次核试验。\n",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/林俊德.png"],
        },
        {
            id: nanoid(),
            name: "程开甲慧眼识才",
            address: "新疆马兰核试验技术研究所",
            mapToPointData: 3,
            time: "1978年",
            detail: "1978年，程开甲亲自提名37岁的邱爱慈走上带头人的岗位，成为研究所最年轻的研究室副主任，在程开甲的支持下，邱爱慈带领研制发展了大型低阻抗强流脉冲电子束加速器。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/邱爱慈.png"]
        },
        {
            id: nanoid(),
            name: "程开甲提出“一次试验多方收效”",
            address: "新疆马兰核试验技术研究所",
            mapToPointData: 3,
            time: "1964-1996年",
            detail: "联合国五大常任理事国都是核大国。从美国1945年阿拉莫斯首次核试验以来，全世界核试验共有2000多次。其中美国进行了1032次，苏联715次，法国210次，英国45次，中国45次，并且是唯一全部在本土进行的国家。中国核试验走出一条独立之路、创新之路，也走出了其他和大国截然不同的道路——用最少的次数收获最大的效果。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/中国核试验.jpg"]
        },
        {
            id: nanoid(),
            name: "程开甲生活朴素",
            address: "红山",
            mapToPointData: 3,
            time: "1964-1996年",
            detail: "在红山的山坳里，如今只剩下断壁残垣的程开甲旧居，曾是一排用石土和黄土筑起的简朴平房。程开甲选择将家安在了这处依靠山坡的地方，而将前排交通便利的房子让给了同事。小院外，当年男主人每日步行前往办公楼，踏出的路被同事们戏称为可以程开甲小路。",
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频10.mp4"]
        },
        {
            id: nanoid(),
            name: "程开甲夫人高耀珊全力支持程开甲的科研事业",
            address: "新疆马兰核试验技术研究所",
            mapToPointData: 3,
            time: "1964-1996年",
            detail: "1969年，程开甲夫人高耀珊为了支持他所钟情的核事业，告别北京都市生活，带着孩子举家搬迁来到了这里，扎起了根。程开甲和高耀珊一生恩爱如初，相濡以沫，把一场父母之命的包办婚姻过成了人人称羡的美满姻缘。程开甲曾经感慨：“我所做出的每一份成绩都有耀珊的一半功劳。功勋的背后是家庭的牺牲，亲人的奉献，献了青春献终身，献了终身献儿孙，在红山、在马栏，程开甲的家庭是这样，所有的家庭都是这样。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/程开甲与夫人高耀珊.png"]
        },
        {
            id: nanoid(),
            name: "程开甲小黑板上演算大方案",
            address: "新疆马兰核试验技术研究所",
            mapToPointData: 3,
            time: "1964-1997年",
            detail: "程开甲有一面用的很旧，磨的有点发亮的黑板。黑板一侧，程开甲自己拉了根电线，安了一只白炽灯泡，以便在夜晚照明。手写计算数据，这是程开甲保持了一辈子的习惯，工作到哪，研究到哪，就把黑板、计算尺带到哪儿。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/程开甲的小黑板.jpg"],
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频11.mp4"]
        },
        {
            id: nanoid(),
            name: "程开甲在戈壁滩上取得的功勋",
            address: "新疆马兰核试验技术研究所",
            mapToPointData: 3,
            time: "1980-1984",
            detail: "1980年，程开甲当选为中国科学院学部委员，后来改称中科院院士。\n1984年，程开甲已经在戈壁滩上工作生活了20多年，担任核试验基地副司令员也已7年，被任命为国防科工委常任委员",
        },
        {
            id: nanoid(),
            name: "程开甲思考一个新的命题：如何打赢一场高技术战争",
            address: "北京",
            mapToPointData: 1,
            time: "20世纪90年代",
            detail: "回到北京后，程开甲在国内推动展开了高功率微波研究，又在抗辐射加固技术上投入了深入而持续的研究，为国防科研和武器装备发展屡屡建功。同时，他完善了“程-玻恩”超导性双带理论。他还以物理学家托马斯、费米、狄拉克共同命名的TFD模型为基础，创建了应用于新材料设计的电子理论：TFDC凝聚态的新的电子理论。",
        },
        {
            id: nanoid(),
            name: "程开甲同时指导出一份份厚实的学术成果",
            address: "北京",
            mapToPointData: 1,
            time: "20世纪90年代",
            detail: "程开甲担任清华大学，吉林大学，北京航空航天大学等多所高校研究所的兼职教授，研究员。",
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频12.mp4"]
        },
        {
            id: nanoid(),
            name: "程开甲被颁授“两弹一星”功勋奖章",
            address: "北京",
            mapToPointData: 1,
            time: "1999年9月18日",
            detail: "1999年9月18日，国庆50周年前夕，中共中央、国务院、中央军委在人民大会堂隆重举行两弹一星功勋奖章颁授大会。程开甲被颁授“两弹一星”功勋奖章。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/江主席为程开甲院士授勋.png"]
        },
        {
            id: nanoid(),
            name: "程开甲为无名英雄们请功",
            address: "北京",
            mapToPointData: 1,
            time: "",
            detail: "不图利、不求名的程开甲曾经二话不说为别人争取公正的待遇。程开甲收到过一份辗转寄来的工作汇报，写这份汇报的是航空工业部的两名工程技术人员，他们曾经多次承担原子弹试验、投弹、飞机安全研究等工作。然而，由于当时是绝密的工作，单线联系人又已经去世，所以他们的工作从未获得应有的评价与奖励。审阅之后，程开甲心潮起伏、难以平静，他字斟句酌，写下了这段证明：我认为这项成绩长期得不到公认，这是很为遗憾。他们是无名英雄啊。建议关照同类的人员，可以通过适当的渠道自我介绍，并且请有关人员认定，作为一个制度要明确。"
        },
        {
            id: nanoid(),
            name: "在党和国家领导人的决策与指挥下，程开甲与其他将领、科学家共同奋斗。",
            address: "",
            mapToPointData: 1,
            time: "1964-1978",
            detail: "作为核试验技术方面的负责人，程开甲主持了包括：\n1.1964年10月16日，我国首次原子弹爆炸试验成功\n2.1965年5月14日，首次原子弹空投实验成功\n3.1966年10月27日，首次两弹结合试验成功\n4.1967年6月17日，首次氢弹试验成功\n5.1969年9月23日，首次地下平洞试验成功\n6.1978年10月14日，首次地下竖井试验成功\n等30多次核试验，建立了中国特色的核试验科学技术体系。\n许多年后，当被问道对当年回国的决定作何感想，晚年的程开甲感慨：“我现在所做的一切都和祖国紧紧地联系在一起，我很幸福。”\n程开甲认为，人生真正的价值在于贡献。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/程开甲荣誉.jpg"],
            videoList: ["https://img.czruby.eu.org/imgs/ckj/video/参考视频13.mp4"]
        },
        {
            id: nanoid(),
            name: "程开甲溘然长逝",
            address: "新疆 马兰烈士陵园",
            mapToPointData: 3,
            time: "2018年11月7日",
            detail: "2018年11月7日，101岁的程开甲溘然长逝，走完了他不平凡的生命旅程。根据他的遗愿，他的骨灰被安放在马兰烈士陵园，长眠在他曾经战斗的热土。陪伴他的是400多位昔日一同筚路蓝缕、一同战天斗地的老战友，他们的名字就是一部中国核试验史的丰碑。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/新疆马兰烈士陵园.jpg"]
        },
        {
            id: nanoid(),
            name: "程开甲纪念广场建成",
            address: "新疆 驻疆某部",
            mapToPointData: 3,
            time: "2020年8月",
            detail: "2020年8月，程开甲纪念广场建成。云天之下，青铜雕像庄重而又亲切，浮雕纪念墙展现了程开甲一生的形象，铭刻了朱光耀、钱学森、张蕴钰饱含深情的题词、题诗。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/程开甲纪念广场.jpg"]
        },
        {
            id: nanoid(),
            name: "程开甲获得了中国科学家与中国军人的众多最高荣誉",
            mapToPointData: 1,
            address: "",
            time: "",
            detail: "从默默无名走向鼎鼎大名，程开甲在他生前身后获得了中国科学家与中国军人的众多最高荣誉。\n他被评为中国科学院院士。荣获国家科技进步奖特等奖、一等奖，国防科工委科技进步一等奖等众多奖项。\n1999年获颁“两弹一星”功勋奖章；\n2014年，习近平为他颁发2013年度“国家最高科学技术奖”；\n2017年，中国人民解放军新设“八一勋章”，习近平为坐在轮椅上的他授勋；\n2018年庆祝改革开放40周年大会上，他被颁授“改革新风奖章”；\n2019年中华人民共和国成立70周年之际，他被评为“新中国最美奋斗者”，习近平签署主席令授予他“人民科学家”国家荣誉称号。",
            imgList: ["https://img.czruby.eu.org/imgs/ckj/img/程开甲获得众多荣誉.jpg", "https://img.czruby.eu.org/imgs/ckj/img/八一勋章.jpg"]
        }

    ]
    const lineData: LineDataItem[] = [
        { fromName: '苏州', toName: '嘉兴', time: '1931年', reason: '程开甲考上浙江嘉兴秀州中学' },
        { fromName: '嘉兴', toName: '贵州', time: '1937-1941年', reason: '浙江大学西迁游学' },
        { fromName: '贵州', toName: '苏州', time: '1941年', reason: '程开甲回家结婚' },
        { fromName: '苏州', toName: '贵州', time: '1941年', reason: '留校任教' },
        { fromName: '贵州', toName: '爱丁堡大学', time: '1946年', reason: '经英国著名学者李约瑟博士推荐，程开甲获得英国文化委员会奖学金，来到爱丁堡大学，成为被称为“物理学家中的物理学家”玻恩教授的学生。' },
        { fromName: '爱丁堡大学', toName: '杭州', time: '1950年', reason: '听到解放军击败阻挠渡江战役的英国“紫石英”号军舰的消息，决定回国建设国家' },
        { fromName: '杭州', toName: '南京', time: '1952年', reason: '来南京大学任物理系教授' },
        { fromName: '南京', toName: '莫斯科', time: '1956年', reason: '仿问莫斯科大学的著名高校和研究所原子能发电站' },
        { fromName: '莫斯科', toName: '南京', time: '1956年', reason: '从莫斯科访问结束返回' },
        { fromName: '南京', toName: '北京', time: '1960年春末夏初', reason: '被借调参加核武器研制工作' },
        { fromName: '北京', toName: '张家口', time: '1960-1963', reason: '在河北怀来县官厅水库旁(17号工地)进行核试验' },
        { fromName: '张家口', toName: '北京', time: '1960-1963', reason: '在河北怀来县官厅水库旁(17号工地)进行核试验后返回北京继续进行理论研究' },
        { fromName: '北京', toName: '新疆马兰基地', time: '1963年夏天', reason: '前往核武器实验基地——马兰基地' },
        { fromName: '新疆马兰基地', toName: '北京', time: '20世纪90年代', reason: '程开甲回到北京继续从事研究工作' },
        { fromName: '北京', toName: '新疆马兰基地', time: '2018年11月7日', reason: '2018年11月7日，101岁的程开甲溘然长逝，走完了他不平凡的生命旅程。根据他的遗愿，他的骨灰被安放在马兰烈士陵园，长眠在他曾经战斗的热土' },

    ];
    const plane = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'

    return { pointData, lineData, plane, pointInfoList };
}