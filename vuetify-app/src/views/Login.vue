<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login">
        <Login />
    </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
    components: { Login },
}

</script>

<style scoped>
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #2c3e50;
    }
</style>