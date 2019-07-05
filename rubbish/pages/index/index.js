var model = require('../../utils/rubbish.js')


Page({
  data: {
    scrollTop: 0,
    hidden: true,
    flag: 0,
    currentTab: 0,
    bgcolor: '#FFCD68',
  },
  switchNav: function(e) {
    var idx = e.currentTarget.dataset.idx;
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })

    let that = this;
    that.setData({
      idx: idx
    })
    if (idx == 0) {
      that.setData({
        color: '#FFE8BB',
        bgcolor: '#FFCD68',
      })
    }
    if (idx == 1) {
      that.setData({
        color: '#D1D1D1',
        bgcolor: '#999999',
        currentTab: 1

      })
    }

    if (idx == 2) {
      that.setData({
        color: '#A0DEDD',
        bgcolor: '#2DB7B5',
        currentTab: 2
      })
    }
    if (idx == 3) {
      that.setData({
        color: '#FFC1C1',
        bgcolor: '#FF7777',
        currentTab: 3
      })
    }
  },
  catchTouchMove: function(res) {
    return false
  },

  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  onShow: function(e) {
    let that = this;
    that.setData({
      str: model.str,
      color: '#FFE8BB'
    })
  },
  scrll: function (e) {
    var scrollTop = e.detail.scrollTop
  },
  //返回到顶部
  goTop: function (e) {
      this.setData({
        scrollTop: 0,
      })
  }
    
})