<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import 'bootstrap/dist/css/bootstrap.css';
    export default class App extends Vue {}
</script>