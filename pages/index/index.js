const { getTopics, getTopicByID } = require('../../utils/api');

Page({
  data: {
    title: '首页列表'
  },
  onLoad() {
    console.log('onload by topics');
    this.fetchData();
  },

  fetchData(data) {
    wx.request({
      url: getTopics(data),
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Accept': 'application/json'
      },
      success: function(res){
        console.log(res);        
      }
    })
  }
})