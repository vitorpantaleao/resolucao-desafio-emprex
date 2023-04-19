import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logado: localStorage.getItem('logado') || null,
        sucesso: null,
    },
    mutations: {
        SET_LOGADO(state, payload) {
            state.logado = payload
        },
        SET_SUCESSO(state, payload) {
            state.sucesso = payload
        },
    },
    actions: {
        register(context, register) {
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCa37WBMBxUxp5jV0fgcvIgp_lLeFbik3s', {
                    email: register.email,
                    password: register.senha,
                    returnSecureToken: true,
                })
                .then(response => {
                    if (response.status === 200) {
                        context.commit('SET_SUCESSO', true)
                        setTimeout(() => {
                            context.commit('SET_SUCESSO', null)
                            router.push('/login')
                        }, 1000)
                    } else {
                        context.commit('SET_SUCESSO', false)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        login(context, login) {
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCa37WBMBxUxp5jV0fgcvIgp_lLeFbik3s', {
                    email: login.email,
                    password: login.senha,
                    returnSecureToken: true,
                })
                .then(response => {
                    if (response.status === 200) {
                        context.commit('SET_LOGADO', true)
                        localStorage.setItem('logado', true)
                        localStorage.setItem('token', response.data.idToken)
                        context.commit('SET_SUCESSO', true)
                        setTimeout(() => {
                            context.commit('SET_SUCESSO', null)
                            router.push('/')
                        }, 1000)
                    } else {
                        context.commit('SET_SUCESSO', false)
                    }
                })
                .catch(error => {
                    if (error.response.status === 400) {
                        context.commit('SET_SUCESSO', false)
                        context.commit('SET_LOGADO', false)
                        localStorage.setItem('logado', false)
                    }
                    console.log(error)
                })
        },
        logout(context) {
            context.commit('SET_LOGADO', false)
            localStorage.removeItem('logado')
            localStorage.removeItem('token')
            router.push('/login')
        },
    },
    getters: {
        logado(state) {
            return state.logado
        },
    },
})

