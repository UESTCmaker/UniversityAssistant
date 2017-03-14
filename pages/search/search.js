// pages/search/search.js
const AV = require('../../libs/av-weapp.js');
var data = require("../../data/data.js");
Page({
  data: {
    searchKey: "",
    requireData: [],
  },
  onLoad: function (options) {
    var searchKey = options.item;
    var readydata = [];
    if (searchKey != "") {
      this.setData({ searchKey: searchKey });
      for (var idx in data.Universities) {
        if (data.Universities[idx].name.indexOf(searchKey) != -1) {
          var thisdata = data.Universities[idx];
          thisdata['isUniversity'] = true;
          readydata.push(thisdata);
        }
      };
      for (var idx in data.Schools) {
        if (data.Schools[idx].name.indexOf(searchKey) != -1) {
          var thisdata = data.Schools[idx];
          thisdata['isSchool'] = true;
          readydata.push(thisdata);
        }
      };
      for (var idx in data.Teachers) {
        if (data.Teachers[idx].name.indexOf(searchKey) != -1) {
          var thisdata = data.Teachers[idx];
          thisdata['isTeacher'] = true;
          readydata.push(thisdata);
        }
      };
      this.setData({
        requireData: readydata
      });
    }
    // var teacher = AV.Object.extend("Teachers");
    // var t1 = new teacher();
    // t1.set("name", "詹瑾瑜");
    // t1.set("icon", "images/uestc/zhanjinyu-uestc.jpg");
    // t1.set("Title", "副教授");
    // t1.set("Education", "博士");
    // t1.set("School", "电子科技大学信息与软件工程学院");
    // t1.set("Field", "嵌入式系统设计、软/硬件协同设计验证");
    // t1.set("Contact", "zhanjy@uestc.eud.cn");
    // t1.set("mark", "teacher");
    // t1.set("Introduction", "1996年9月至2000年7月，电子科技大学，计算机科学与工程学院，计算机科学与技术专业，本科，2000年7月获工学学士学位； \n\n2000年9月至2006年3月，电子科技大学，计算机科学与工程学院，计算机应用技术专业，硕博连读，2003年4月获工学硕士学位，2006年3月获工学博士学位； \n\n 2006年4月至2010年7月，电子科技大学，计算机科学与工程学院，任教，讲师；\n\n 2010年8月至2014年12月，电子科技大学，计算机科学与工程学院，任教，副教授； \n\n 2013年1月至2014年1月，获电子科技大学优秀青年教师出国计划资助在美国加州大学欧文分校（University of California, Irvine）计算机与电子工程系交流访问。 \n\n 2015年1月至今，电子科技大学，信息与软件工程学院，任教，副教授，硬件基础课程组负责人。");
    // t1.set("Research", "从2000年攻读硕博连读至今，长期从事嵌入式系统设计、软硬件协同设计验证、系统体系结构优化等方面的研究。\n\n主持并参与了核高基、自然科学基金、863等多项国家级和省部级等科研项目，对嵌入式系统设计、软硬件协同设计验证、系统体系结构优化等技术领域的前沿技术有较深入的探索，取得了一些创新性成果。申请并获准国家发明专利一项，软件著作权十余项。在国内外主要的学术刊物和会议上发表学术论文二十余篇，其中十余篇被SCI和EI收录。");
    // t1.set("Teaching", "主讲本科课程：《数字逻辑设计》、《汇编语言程序设计》、《FPGA硬件设计》\n\n主讲软件工程硕士课程：《嵌入式系统与软件》\n\n参与编写本科教材：《汇编语言程序设计》、《嵌入式系统原理及应用开发技术（第二版）》、《数字逻辑（第2版）》\n\n参与编写软件工程硕士研究生教材：《Java Web技术开发》");
    // t1.set("Rewards", "2010年3月，获电子科技大学“教学质量优秀主讲教师”称号。\n\n2011年9月，获电子科技大学“优秀青年主讲教师”称号。\n\n2012年3月，获电子科技大学“优秀女教师”称号。\n\n2016年3月，获电子科技大学首届青年教师教学竞赛一等奖。\n\n2016年5月，在电子科技大学信息与软件工程学院“我最喜爱的老师”评选活动中获“春风化雨奖”。");
    // t1.save().then(function (res) {
    //   console.log('objectId is ' + res.id);
    // }, function (error) {
    //   console.error("error");
    // })
  },
  onReadyData: function (event) {
    var item = event.detail.value;
    this.setData({ searchKey: item });
  },
  onSearch: function (event) {
    var searchKey = this.data.searchKey;
    var readydata = [];
    if (searchKey != "") {
      this.setData({ searchKey: searchKey });
      for (var idx in data.Universities) {
        if (data.Universities[idx].name.indexOf(searchKey) != -1) {
          var thisdata = data.Universities[idx];
          thisdata['isUniversity'] = true;
          readydata.push(thisdata);
        }
      };
      for (var idx in data.Schools) {
        if (data.Schools[idx].name.indexOf(searchKey) != -1) {
          var thisdata = data.Schools[idx];
          thisdata['isSchool'] = true;
          readydata.push(thisdata);
        }
      };
      for (var idx in data.Teachers) {
        if (data.Teachers[idx].name.indexOf(searchKey) != -1) {
          var thisdata = data.Teachers[idx];
          thisdata['isTeacher'] = true;
          readydata.push(thisdata);
        }
      };
      this.setData({
        requireData: readydata
      });
    }
  },

  onDetail: function (event) {
    var name = event.currentTarget.dataset.name;
    var mark = event.currentTarget.dataset.mark;
    switch (mark) {
      case "school": wx.navigateTo({ url: '../detail/school-detail/school-detail?name=' + name }); break;
      case "university": wx.navigateTo({ url: '../detail/university-detail/university-detail?name=' + name }); break;
      case "teacher": wx.navigateTo({ url: '../detail/teacher-detail/teacher-detail?name=' + name }); break;
    }
  }
})