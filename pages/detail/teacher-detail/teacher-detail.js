// pages/detail/teacher-detail/teacher-detail.js
var data = require('../../../data/data.js');
const AV = require('../../../libs/av-weapp.js');
Page({
  data:{
      detailData:{},
      Cbasic:"基本情况",
    Cintro:"个人简介",
    Csci:"科研情况",
    Cteach:"教学情况",
    Crew:"获奖情况",
    image:"",
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     var name =options.name;
    for(var idx in data.Teachers){
      if(name==data.Teachers[idx].name){
        this.setData({detailData:data.Teachers[idx]});
      }
    }
    var pro ="../../../";
    this.setData({image: pro+this.data.detailData.icon});
    var res = new AV.Query('Teachers').equalTo("name",name);
    res.find().then(function(results){
      console.log(results);
      // var data = AV.Object.createWithoutData('Teachers', results.id);
      // data.fetch().then(function(){
      //   console.log(data);
      // });
    },function(error){
    });
  }
})