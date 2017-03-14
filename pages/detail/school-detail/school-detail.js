const AV = require('../../../libs/av-weapp.js');
Page({
  data: {
    detailData: {},
    Cintro: "学院简介",
    Cmajor: "开设专业",
    Cteach: "师资力量",
  },
  onLoad: function (options) {
    var id = options.id;
    var that = this;
    var query = new AV.Query('Schools');
    query.get(id).then(function (res) {
      that.setData({ detailData: res.attributes });
    }, function (error) {
      // 异常处理
    });
  }
})