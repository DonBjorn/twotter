import {createStore} from 'vuex';
import {UserModule} from "./User";

export default createStore({
    state: {

    },

    mutations: {
      // Funciones que afectan al estado (state)
      // Normalmente se pasan como MAYUSCULAS , para asegurarse de que es efectivamente una mutación
    },

    actions: {
      // Funciones que se llaman desde la aplicacion que llaman a las mutation
    },

    modules: {
        User: UserModule
    }
})
