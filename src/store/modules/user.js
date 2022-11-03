import { login, logout, getInfo ,getUserDetailById} from '@/api/user'
import { getToken, setToken, removeToken } from "@/utils/auth";
// import { resetRouter } from '@/router'

export default {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: {}
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      setToken(token);
    },
    removeToken(state) {
      state.token = null;
      removeToken();
    },
    setUserInfo(state, userInfo) {
      state.userInfo = { ...userInfo }
    },
    reomveUserInfo(state) {
      state.userInfo = {}
    }
  },
  actions: {
   async userlogin(context,data){
    const res= await login(data)
      context.commit('setToken',res)
    },
    async getUserInfo (context) {
      const result = await getInfo()
      const baseInfo = await getUserDetailById(result.userId)
      const baseResult = { ...result, ...baseInfo }  
      console.log(baseResult);
      context.commit('setUserInfo', baseResult) 
      return baseResult 
    }
  },
};
