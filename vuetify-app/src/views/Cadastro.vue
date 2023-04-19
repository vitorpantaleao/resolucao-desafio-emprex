<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="cadastro">
        <Cadastro />
    </div>
</template>

<script>
    import Cadastro from '@/components/Cadastro.vue'

    export default {
        components: { Cadastro },
    }

</script>

<style scoped>
    .cadastro {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #2c3e50;
    }
</style>