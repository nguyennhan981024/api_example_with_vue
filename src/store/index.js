import Vue from 'vue'
import Vuex from 'vuex'
import services from "@/services/api";
Vue.use(Vuex)

const store = new Vuex.Store({
  state : () => ({
    postList : [],
  }),
  getters : {
    postList : (state) => state.postList
  },
  mutations : {
    setPosts(state,payload){
      state.postList = [...payload]
    }
  },
  actions : {
    async getPosts({commit}){
      const result = await services.getPosts()
      console.log(result.data);
      commit('setPosts',result.data)
    }

  }


})
export default store;
