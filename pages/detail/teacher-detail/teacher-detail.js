const AV = require('../../../libs/av-weapp.js');
Page({
  data: {
    detailData: {},
    Cbasic: "基本情况",
    Cintro: "个人简介",
    Csci: "科研情况",
    Cteach: "教学情况",
    Crew: "获奖情况",
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.id;
    var that = this;
    var query = new AV.Query('Teachers');
    query.get(id).then(function (res) {
      that.setData({ detailData: res.attributes });
    }, function (error) {
      // 异常处理
    });
  }
})