import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from "@/utils/auth";
// import { resetRouter } from '@/router'

export default {
  namespaced: true,
  state: {
    token: getToken(),
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
  },
  actions: {
   async userlogin(context,data){
    const res= await login(data)
      context.commit('setToken',res)
    }
  },
};
