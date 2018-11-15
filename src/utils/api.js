import wepy from 'wepy'

export default{
  login (reqData) {
    wepy.request({
      header: {
        'content-type': 'application/json'
      },
      data: reqData,
      url: 'https://www.easy-mock.com/mock/5bed59d57939e615b8bbdbc6/mock/login',
      method: 'post',
      complete: (res) => {
        if (res.data.status === 1) {
          return true
        } else {
          return false
        }
      }
    })
  }
}
