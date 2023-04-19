<template>
    <v-app>
        <v-app-bar app color="primary" dark v-if="$store.state.logado">
            <div class="d-flex align-center">
                <v-img :src="require('./assets/logo.svg')" class="my-3" contain height="50" />
            </div>

            <v-spacer></v-spacer>

            <v-btn @click="logout" target="_blank" text>
                <v-icon>mdi-logout-variant</v-icon>
                <span class="mr-2">Sair da conta</span>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "App",

        data() {
            return {
                //
            };
        },

        watch: {
            '$store.state.logado': {
                handler() {
                    this.$store.getters.logado
                },
                deep: true,
            },
            // watch if route changes
            $route(to, from) {
                this.$store.commit('SET_SUCESSO', null)
            },
        },

        methods: {
            logout() {
                this.$store.dispatch("logout")
            },
        },
    }
</script>
