export const UserModule = {
    namespaced: true,

    state: {
        user: null,

    },

    mutations: {
        // Funciones que afectan al estado (state)
        // Normalmente se pasan como MAYUSCULAS , para asegurarse de que es efectivamente una mutación
        SET_USER(state, user){
            state.user = user;
        }
    },

    actions: {
        // Funciones que se llaman desde la aplicacion que llaman a las mutation
        setUser({ commit }, user){
            // Llama a la mutación, primero a la funcion (nombre) y luego el Data
            commit('SET_USER', user)
        }
    },
};