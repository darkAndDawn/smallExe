export function request(config) {
  return new Promise((resolve, rejects) => {
    wx.request({
      url: config.url,
      method: config.method || "get",
      data: config.data || {},
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        rejects(err)
      }
    })
  })
}