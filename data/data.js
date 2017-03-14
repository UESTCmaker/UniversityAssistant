var Universities = [
    {
        name: "电子科技大学",
        EnglishName: "University Of Electronic Science And Technology Of China",
        EstablishedTime: "1956年",
        location: "中国四川成都",
        Type: "理工",
        Property: "985工程 |211工程",
        Department: "中华人民共和国教育部",
        Category: "公立大学",
        Website: "http://www.uestc.edu.cn/web3",
        icon: "images/uestc/icon-uestc.png",
        image: "images/uestc/image-uestc.jpg",
        mark: "university",
        id:10,
        Introduction: "电子科技大学（University of Electronic Science and Technology of China）简称“电子科大”，坐落于有“天府之国”之称的成都市，由中华人民共和国教育部直属，位列“211工程”、“985工程”，入选国家“2011计划”、“111计划”、“卓越工程师教育培养计划”，两电一邮成员，设有研究生院，是一所以电子信息科学技术为核心、以工为主，理工渗透，理、工、管、文协调发展的多科性研究型全国重点大学，被誉为“中国电子类院校的排头兵”。",
        History: "电子科技大学原名成都电讯工程学院，是1956年在周恩来总理的亲自部署下，由交通大学（现上海交通大学、西安交通大学）、南京工学院（现东南大学）、华南工学院（现华南理工大学）的电讯工程有关专业合并创建而成。1960年，被中共中央列为全国重点高等学校；1961年，被中共中央确定为七所国防工业院校之一。1988年，更名为电子科技大学。1997年，被确定为国家首批“211工程”建设的重点大学。2000年，由原信息产业部主管划转为教育部主管。2001年，进入国家“985工程”重点建设大学行列。",
        Schools: ["英才实验学院", "通信与信息工程学院", "电子工程学院", "微电子与固体电子学院", "物理电子学院", "光电信息学院", "计算机科学与工程学院", "自动化工程学院", "机械电子工程学院", "生命科学与技术学院", "数学科学学院", "经济与管理学院", "政治与公共管理学院", "外国语学院", "能源科学与工程学院", "资源与环境学院", "航空航天学院", "信息与软件工程学院", "格拉斯哥学院"],
        Teachers: [
            {
                name: "李言荣",
                id: 1,
                image: "images/uestc/liyanrong-uestc.jpg"
            },
            {
                name: "陈星弼",
                id: 2,
                image: "images/uestc/chenxingbi-uestc.jpg"
            },
            {
                name: "李乐民",
                id: 3,
                image: "images/uestc/lilemin-uestc.jpg"
            },
            {
                name: "刘盛刚",
                id: 4,
                image: "images/uestc/liushenggang-uestc.jpg"
            }
        ]
    },
    {
        name: "西安电子科技大学",
        EnglishName: "Xidian University",
        EstablishedTime: "1931年",
        location: "中国陕西西安",
        Type: "理工",
        Property: "985工程 |211工程",
        Department: "中华人民共和国教育部",
        Category: "首批20所全国重点大学",
        Website: "http://www.xidian.edu.cn",
        icon: "images/xdu/icon-xdu.png",
        image: "images/xdu/image-xdu.jpg",
        mark: "university",
        id:11,
        Introduction: "西安电子科技大学（Xidian University）简称“西电”或“西军电”，是中央部属高校，直属教育部，工信部共建，是1959年中央确定的首批20所全国重点大学，国家首批“211工程”、“985工程优势学科创新平台”、“2011计划”（牵头建设信息感知技术协同创新中心）、“111计划”、“卓越工程师教育培养计划”重点建设高校，56所获批设立研究生院的重点大学之一，我国最早的2所国防工业重点军校之一（哈军工、西军电并称），中国电子信息领域科学研究和人才培养的核心基地，中国雷达、信息论、密码学、电子对抗、微波天线等学科的发源地。",
        History: "学校坐落于举世闻名的世界四大古都之一的十三朝古都西安，前身是1931年诞生于江西瑞金的中央军委无线电学校，历经中央军委工程学校、解放军通信工程学院、中国人民解放军军事电信工程学院等历史时期。建校80余年来，学校为国家培养了20万电子信息领域的高级人才，产生了120多位解放军将军，成长起了17位两院院士（其中恢复高考以来毕业生中有9位当选两院院士），为国家建设和社会进步做出了重要贡献。",
        Schools: ["通信工程学院", "电子工程学院", "计算机学院", "机电工程学院", "物理与光电工程学院", "经济管理学院", "数学与统计学院", "人文学院", "外国语学院", "软件学院", "微电子学院", "生命科学技术学院", "空间科学与技术学院", "先进材料与纳米科技学院", "网络与信息安全学院", "国际教育学院", "网络与继续教育学院"],
        Teachers: []
    }
];

var Schools = [
    {
        name: "信息与软件工程学院",
        EnglishName: "School of Information and Software Engineering",
        EstablishedTime: "2001年",
        University: "电子科技大学",
        Code: "1251[电子科技大学沙河校区专用]",
        icon: "images/uestc/icon-uestc.png",
        image:"images/uestc/image-sw-uestc.jpg",
        mark: "school",
        id: 100,
        Introduction: "电子科技大学信息与软件工程学院成立于2001年，是电子科技大学26个普通二级行政单位之一，是教育部和国家计委联合批准成立的全国首批35所示范性软件学院之一。学院设有软件技术、大型主机、网络安全工程、信息工程、嵌入式系统、工业产品辅助设计及工程方向、数字动漫、信息获取与控制八个系，国家软件人才国际培训（成都）基地、IBM大型主机系统教育中心（成都）、对外合作科、中印教育中心等机构。",
        Majors: "软件工程（软件技术） \n软件工程（信息获取与控制）\n软件工程（嵌入式系统） \n软件工程（大型主机）\n软件工程（网络安全工程）\n软件工程（信息工程）\n软件工程（工业产品计算机辅助设计与工程）",
        Teachers: [
            {
                name: "雷航",
                id: 5,
                image: "images/uestc/leihang-uestc.jpg"
            },
            {
                name: "詹瑾瑜",
                id: 6,
                image: "images/uestc/zhanjinyu-uestc.jpg"
            },
            {
                name: "李晓瑜",
                id: 7,
                image: "images/uestc/lixiaoyu-uestc.jpg"
            },
             {
                name: "刘盛刚",
                id: 4,
                image: "images/uestc/liushenggang-uestc.jpg"
            }
        ]
    },
    {
        name: "软件学院",
        EnglishName: "School of Software Engineering",
        EstablishedTime: "2002年",
        University: "北京大学",
        Code: "3251",
        icon: "images/pku/icon-pku.png",
        image:"images/pku/image-pku.jpg",
        mark: "school",
        id: 101,
        Introduction: "北京大学软件学院成立于2002年3月，隶属于北京大学。为适应我国经济结构战略性调整的要求和软件产业发展对人才的迫切需要，实现我国软件人才培养的跨越式发展，教育部和国家发展计划委员会以教高[2001]6号文正式批准北京大学等35所高等学校试办示范性软件学院，根据文件精神，北京大学经2002年3月15日第451次校长办公会研究，决定成立“北京大学软件学院”。",
        Majors: "软件工程",
        Teachers: []

    }
];

var Teachers = [
    {
        name: "詹瑾瑜",
        id: 6,
        icon: "images/uestc/zhanjinyu-uestc.jpg",
        Title: "副教授",
        Education: "博士",
        School: "电子科技大学信息与软件工程学院",
        Field: "嵌入式系统设计、软/硬件协同设计验证",
        Contact: "????@uestc.edu.cn",
        mark: "teacher",
        Introduction: "1996年9月至2000年7月，电子科技大学，计算机科学与工程学院，计算机科学与技术专业，本科，2000年7月获工学学士学位； \n\n2000年9月至2006年3月，电子科技大学，计算机科学与工程学院，计算机应用技术专业，硕博连读，2003年4月获工学硕士学位，2006年3月获工学博士学位； \n\n 2006年4月至2010年7月，电子科技大学，计算机科学与工程学院，任教，讲师；\n\n 2010年8月至2014年12月，电子科技大学，计算机科学与工程学院，任教，副教授； \n\n 2013年1月至2014年1月，获电子科技大学优秀青年教师出国计划资助在美国加州大学欧文分校（University of California, Irvine）计算机与电子工程系交流访问。 \n\n 2015年1月至今，电子科技大学，信息与软件工程学院，任教，副教授，硬件基础课程组负责人。",
        Research: "从2000年攻读硕博连读至今，长期从事嵌入式系统设计、软硬件协同设计验证、系统体系结构优化等方面的研究。\n\n主持并参与了核高基、自然科学基金、863等多项国家级和省部级等科研项目，对嵌入式系统设计、软硬件协同设计验证、系统体系结构优化等技术领域的前沿技术有较深入的探索，取得了一些创新性成果。申请并获准国家发明专利一项，软件著作权十余项。在国内外主要的学术刊物和会议上发表学术论文二十余篇，其中十余篇被SCI和EI收录。",
        Teaching: "主讲本科课程：《数字逻辑设计》、《汇编语言程序设计》、《FPGA硬件设计》\n\n主讲软件工程硕士课程：《嵌入式系统与软件》\n\n参与编写本科教材：《汇编语言程序设计》、《嵌入式系统原理及应用开发技术（第二版）》、《数字逻辑（第2版）》\n\n参与编写软件工程硕士研究生教材：《Java Web技术开发》",
        Rewards: "2010年3月，获电子科技大学“教学质量优秀主讲教师”称号。\n\n2011年9月，获电子科技大学“优秀青年主讲教师”称号。\n\n2012年3月，获电子科技大学“优秀女教师”称号。\n\n2016年3月，获电子科技大学首届青年教师教学竞赛一等奖。\n\n2016年5月，在电子科技大学信息与软件工程学院“我最喜爱的老师”评选活动中获“春风化雨奖”。"
    },{
        name: "A",
        id: 6,
        image: "",
        Title: "",
        Education: "",
        School: "电子科技大学信息与软件工程学院",
        Field: "",
        Contact: "",
        mark: "teacher",
        Introduction: "",
        Research: "",
        Teaching: "",
        Rewards: ""
    }
];

module.exports = {
    Universities: Universities,
    Schools: Schools,
    Teachers: Teachers
}
