// pages/home/home.js
import {
  request
} from "../../network/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    recommendList: [],
    goods: {
      pop: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      },
    },
    type: "pop"
  },
  tabClick(e) {
    console.log(e)
    let index = e.detail.index
    let type = ""
    switch (index) {
      case 0:
        type = "pop"
        break
      case 1:
        type = "new"
        break
      case 2:
        type = "sell"
        break
    }
    this.setData({
      type: type
    })
  },
  //请求轮播图数据
  getHomeSwiperData() {
    request({
      url: "http://152.136.185.210:8000/api/h8/home/multidata",
      method: "get"
    }).then(res => {
      console.log(res.data.data)
      this.setData({
        bannerList: res.data.data.banner.list,
        recommendList: res.data.data.recommend.list,
      })
    })
  },
  //请求商品数据
  getGoods(type) {
    request({
      url: 'http://152.136.185.210:8000/api/h8/home/data',
      data: {
        page: 1,
        type: type
      }
    }).then(res => {
      console.log(res.data.data.list)
      let assGoods = "goods." + type + ".list"
      this.setData({
        [assGoods]: res.data.data.list
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getHomeSwiperData()
    this.getGoods("pop")
    this.getGoods("new")
    this.getGoods("sell")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    wx.updateShareMenu({
      withShareTicket: true,
      success() { }
    })
  }
})