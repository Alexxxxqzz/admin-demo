import { defineStore } from 'pinia'
import { loginRequest } from '@/service/login/login'
import { localCache } from '@/utils/cache'
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache('token') ?? '',
    userCount: '',
    passWord: ''
  }),
  actions: {
    async loginAction(account: any) {
      const res = await loginRequest(account)
      console.log(res, '登陆接口')
      //1.拿到返回的数据
      // this.id = data.id
      // this.userCount = data.userCount
      // this.passWord = data.passWord
      // this.token = data.token
      //2.进行本地缓存，根据需求使用local还是session
      localCache.setCache('token', this.token)
    }
  }
})

export default useLoginStore
