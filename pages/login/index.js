//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    codeTitle: '获取验证码',
    isCode:true
  },
  onLoad: function () {

  },
  _getInputPhone(e) {
    const that = this
    if ((/^1[345789]\d{9}$/.test(e.detail.value))) {
      that.data.isCode = true
    } else {
      that.data.isCode = false
    }
  },
  _agree() {
    const that = this
    wx.navigateTo({
      url: '../agreement/index',
    })
  },
  formSubmit(e) {
    wx.showModal({
      content: '红包已发送,完善信息可领取第二个红包，最高金额188元',
      showCancel: true,
      title: '注册成功',
      success: (res) => {
        if (res.confirm) {
          wx.navigateTo({
            url: '../formation/index',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }

      },
      fail: (res) => {},
      complete: (res) => {},
    })

  },
  _getCode() {
    const that = this;
    if (that.data.isCode) {
      var count = 60;
      var si = setInterval(function () {
        if (count > 0) {
          count--;
          that.data.isCode = false
          that.setData({
            codeTitle: '倒计时' + count + ' s',
            isCode:that.data.isCode
          });

        } else {
          that.setData({
            codeTitle: "获取验证码"
          });
          count = 60;
          that.data.isCode = true
          clearInterval(si);
          that.setData({
            isCode:that.data.isCode
          })
        }
      }, 1000);
    
    }

  },
})