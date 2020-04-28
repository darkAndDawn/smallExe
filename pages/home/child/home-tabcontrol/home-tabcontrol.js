// pages/home/child/home-tabcontrol/home-tabcontrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabConArr:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击切换 流行 新款 精选
    tabConClick(e){
      this.setData({
        activeIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent("tabClick", {index:this.data.activeIndex})
    }
  }
})
