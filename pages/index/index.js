//index.js
//获取应用实例
const AV = require('../../libs/av-weapp.js');
var app = getApp()
Page({
  data: {
    searchItem: ""
  },
  onLoad: function (options) {
    // AV.Cloud.teacherInfo();
    
  },
  onInputReady: function (event) {
    var item = event.detail.value;
    this.setData({ searchItem: item });
  },
  onSearch: function (event) {
    wx.navigateTo({
      url: '../search/search?item=' + this.data.searchItem,
      success: function (res) {
        // success
      }
    })
  }
})