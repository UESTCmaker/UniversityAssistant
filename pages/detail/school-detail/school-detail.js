// pages/detail/school-detail/school-detail.js
var data = require('../../../data/data.js');
Page({
  data:{
    detailData:{},
    Cintro:"学院简介",
    Cmajor:"开设专业",
    Cteach:"师资力量",
    image:"",
    icon:"",
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var name =options.name;
    for(var idx in data.Schools){
      if(name==data.Schools[idx].name){
        this.setData({detailData:data.Schools[idx]});
      }
    }
    var pro ="../../../";
    this.setData({image: pro+this.data.detailData.image})
    this.setData({icon: pro+this.data.detailData.icon})
  }
})