<template>
    <v-container class="fill-height">
        <v-responsive class="d-flex text-center fill-height">
            
            <v-row class="d-flex pt-14 pb-10 justify-center">
                <v-col sm="10" md="5" xl="4" class="form">
                    <h2>Login</h2>
                    <form @submit.prevent="userLogin">
                        <div class="form-group">
                            <label>E-mail</label>
                            <input type="email" class="form-input" v-model="form.email" />
                            <p class="textError" v-if="error || $store.state.sucesso == false">Verifique seu e-mail</p>
                        </div>
                        <div class="form-group">
                            <label>Senha</label>
                            <input type="password" class="form-input" v-model="form.senha" />
                            <p class="textError" v-if="error || $store.state.sucesso == false">Verifique sua senha</p>
                        </div>
                        <button type="submit" class="btn-submit">Acessar</button>
                        <router-link to="/cadastrar" class="d-block link pt-5">Não possui cadastro? Cadastre-se aqui</router-link>
                        <v-alert class="mt-4" type="success" v-if="$store.state.sucesso">Login efetuado com sucesso!</v-alert>
                        <v-alert class="mt-4" type="error" v-if="$store.state.sucesso == false">Login inválido, verifique os campos e tente novamente!</v-alert>
                    </form>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                form: {
                    email: '',
                    senha: '',
                },
                error: false,
                status: '',
            }
        },

        watch: {
            // appStore: {
            //     handler() {
            //         // alert('teste')
            //         // this.status = this.appStore.statusLogin
            //     },
            //     deep: true,
            // },
        },

        methods: {
            userLogin() {
                if (this.form.email === '' || this.form.senha === '') {
                    this.error = true
                    return
                } else {
                    this.error = false
                    this.$store.dispatch('login', this.form)
                }
            },
        },
    }
</script>
