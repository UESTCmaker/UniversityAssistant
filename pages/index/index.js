//index.js
//获取应用实例
const AV = require('../../libs/av-weapp.js');
var app = getApp();
Page({
  data: {
    searchItem: ""
  },
  onLoad: function (options) {
  },
  onInputReady: function (event) {
    var item = event.detail.value;
    app.globalData.searchItem = item;
    this.setData({ searchItem: item });
  },
  onSearch: function (event) {
    wx.navigateTo({
      url: '../search/search',
      success: function (res) {
        // success
      }
    })
  },
  onShow: function (event) {
    if (app.globalData.searchItem != "") {
      this.setData({ searchItem: app.globalData.searchItem });
    }

  }
})