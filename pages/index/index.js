const { getTopics, getTopicByID } = require('../../utils/api');
const { getDateDiff } = require('../../utils/util.js');

Page({
  data: {
    title: '首页列表',
    topics: [],
    navList: [ {tab: 'all', name: '全部'}, {tab: 'good', name: '精华'}, {tab: 'share', name: '分享'}, {tab: 'ask', name: '问答'}, {tab: 'job', name: '招聘'} ],
    activeIndex: 0,
  },
  onLoad() {
    console.log('onload by topics');
    this.fetchData();
  },

  switchTab(e) {
    const tab = e.currentTarget.id;
    const index = e.currentTarget.dataset.index;

    this.fetchData({tab});
    this.setData({
      activeIndex: index
    });

    
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
        console.log(res.data.data)
        res.data.data.map(item => {
          item.last_reply_at = getDateDiff(item.last_reply_at);
          item.create_at = getDateDiff(item.create_at);
          return item;
        });
        this.setData({
          topics: res.data.data
        });

        wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 10000
        });
        
        setTimeout(function(){
          wx.hideToast()
        },1000)
        
      }
    })
  },

  contentPage(e) {
    
  }
})