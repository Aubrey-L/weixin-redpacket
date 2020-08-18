Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: [{
      name:'EMS',
      checked: true
    },{
      name:'ODM',
    },{
      name:'IDH',
    },{
      name:'终端',
    },{
      name:'银色银色银色银色银色51',
    },{
      name:'银色银色银银色61',
    },{
      name:'银色银色银银色61',
    },{
      name:'银色银色银银色61',
    },{
      name:'银色银色银银色61',
    },{
      name:'银色银色银银色61',
    },{
      name:'银色银色银银色61',
    },{
      name:'银色银色银银色61',
    },{
      name:'银色银色银银色61',
    }],
    parameter2:[{
      name:'军工',
      checked: true
    },{
      name:'贸易',
    },{
      name:'通讯',
    },{
      name:'工业控制',
    },{
      name:'贸易',
    },{
      name:'贸易',
    },{
      name:'贸易',
    },{
      name:'贸易',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }, 
   parameterTap:function(e){

  },
  formSubmit(e){
    wx.redirectTo({
      url: '../homeHq/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})