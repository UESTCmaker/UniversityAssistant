// pages/search/search.js
const AV = require('../../libs/av-weapp.js');
var app = getApp();

function searchData(searchItem, that) {
  var readydata = [];
  that.setData({ requireData: [] });
  var res = new AV.Query('Universities').contains("name", searchItem);
  res.find().then(function (res) {
    for (var idx in res) {
      var thisdata = res[idx].attributes;
      thisdata['isUniversity'] = true;
      thisdata['id'] = res[idx].id;
      readydata.push(thisdata);
    }
    if (that.data.requireData.length < readydata.length)
      that.setData({ requireData: readydata });
  });
  var res = new AV.Query('Schools').contains("name", searchItem);
  res.find().then(function (res) {
    for (var idx in res) {
      var thisdata = res[idx].attributes;
      thisdata['isSchool'] = true;
      thisdata['id'] = res[idx].id;
      readydata.push(thisdata);
    }
    if (that.data.requireData.length < readydata.length)
      that.setData({ requireData: readydata });
  });
  var res = new AV.Query('Teachers').contains("name", searchItem);
  res.find().then(function (res) {
    for (var idx in res) {
      var thisdata = res[idx].attributes;
      thisdata['isTeacher'] = true;
      thisdata['id'] = res[idx].id;
      readydata.push(thisdata);
    }
    if (that.data.requireData.length < readydata.length)
      that.setData({ requireData: readydata });
  });
}

Page({
  data: {
    searchItem: "",
    requireData: [],
  },
  onLoad: function () {
    var that = this;
    var searchItem = app.globalData.searchItem;
    if (searchItem != "") {
      this.setData({ searchItem: searchItem });
      searchData(searchItem, that);
    }
  },
  onReadyData: function (event) {
    var item = event.detail.value;
    app.globalData.searchItem = item;
    this.setData({ searchItem: item });
  },
  onSearch: function (event) {
    var searchItem = app.globalData.searchItem;
    var that = this;
    if (searchItem != "") {
      this.setData({ searchItem: searchItem });
      searchData(searchItem, that);
    }
  },
  onDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    var mark = event.currentTarget.dataset.mark;
    switch (mark) {
      case "school": wx.navigateTo({ url: '../detail/school-detail/school-detail?id=' + id }); break;
      case "university": wx.navigateTo({ url: '../detail/university-detail/university-detail?id=' + id }); break;
      case "teacher": wx.navigateTo({ url: '../detail/teacher-detail/teacher-detail?id=' + id }); break;
    }
  }
})


