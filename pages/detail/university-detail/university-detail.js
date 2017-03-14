// pages/detail/university-detail/university-detail.js
var data = require('../../../data/data.js');
Page({
  data: {
    detailData: {},
    Cintro:"学校简介",
    Chis:"建校历史",
    Csch:"开设院系",
    Cteach:"师资力量",
    image: "",
    icon: "",
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var name = options.name;
    for (var idx in data.Universities) {
      if (name == data.Universities[idx].name) {
        this.setData({ detailData: data.Universities[idx] });
      }
    }
    var pro = "../../../";
    this.setData({ image: pro + this.data.detailData.image })
    this.setData({ icon: pro + this.data.detailData.icon })
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