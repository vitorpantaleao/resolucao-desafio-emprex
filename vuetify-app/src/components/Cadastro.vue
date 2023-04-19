<template>
    <v-container class="fill-height">
        <v-responsive class="d-flex text-center fill-height">

            <v-row class="d-flex pt-14 pb-10 justify-center">
                <v-col sm="10" md="5" xl="4" class="form">
                    <h2>Cadastre-se</h2>
                    <form @submit.prevent="userRegistration">
                        <div class="form-group">
                            <label>Nome</label>
                            <input type="text" class="form-input" v-model="form.nome" required />
                        </div>
                        <div class="form-group">
                            <label>E-mail</label>
                            <input type="email" class="form-input" v-model="form.email" required />
                        </div>
                        <div class="form-group">
                            <label>Senha</label>
                            <input type="password" class="form-input" v-model="form.senha" required />
                        </div>
                        <button type="submit" class="btn-submit">Cadastrar</button>
                        <router-link to="/login" class="d-block link pt-5">Já possui cadastro? Faça login aqui</router-link>
                        <v-alert class="mt-4" type="success" v-if="$store.state.sucesso">Cadastro efetuado com sucesso!</v-alert>
                        <v-alert class="mt-4" type="error" v-if="$store.state.sucesso == false">Erro ao cadastrar, tente novamente</v-alert>
                    </form>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    nome: '',
                    email: '',
                    senha: '',
                },
            }
        },

        methods: {
            userRegistration() {
                this.$store.dispatch('register', this.form)
            }
        },
    }
</script>

<style scoped>
    .form {
        background: #FFF;
        padding: 25px;
        border-radius: 8px;
    }
</style>
