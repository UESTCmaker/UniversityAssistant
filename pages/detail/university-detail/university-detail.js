var AV = require('../../../libs/av-weapp.js');
Page({
  data: {
    detailData: {},
    Cintro: "学校简介",
    Chis: "建校历史",
    Csch: "开设院系",
    Cteach: "师资力量",
  },
  onLoad: function (options) {
    var id = options.id;
    var that = this;
    var query = new AV.Query('Universities');
    query.get(id).then(function (res) {
      that.setData({ detailData: res.attributes });
    }, function (error) {
      // 异常处理
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})