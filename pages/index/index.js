const { getTopics, getTopicByID } = require('../../utils/api');
const { getDateDiff } = require('../../utils/util.js');

Page({
  data: {
    title: '首页列表',
    topics: []
  },
  onLoad() {
    console.log('onload by topics');
    this.fetchData();
  },

  fetchData(data) {
    wx.request({
      url: getTopics(data),
      data: {},
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: (res) => {
        res.data.data.map(item => {
          item.last_reply_at = getDateDiff(item.last_reply_at);
          item.create_at = getDateDiff(item.create_at);
          return item;
        })
        this.setData({
          topics: res.data.data
        })
      }
    })
  }
})