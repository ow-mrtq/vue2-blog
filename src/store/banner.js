import {getBanners} from "@/api/banner";

export default {
	namespaced: true,
	state: {
		loading: false,
		data: []
	},
	mutations: {
		setLoading(state,payload){
			state.loading = payload;
		},
		setData(state,payload){
			state.data = payload;
		}
	},
	actions: {
		async fetchData(ctx){
			if (ctx.state.data.length) return;
			ctx.commit('setLoading',true);
			const res = await getBanners();
			ctx.commit('setData',res);
			ctx.commit('setLoading',false);
		}
	}
}