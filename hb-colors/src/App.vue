<template>
  <div class="layout">
    <div class="header">HEADER</div>
    <div class="menu">
      <input type="button" @click="go('red')" value="RED">
      <br />
      <input type="button" @click="go('blue')" value="BLUE">
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const go = (name) => {
  router.push({name: name})
}
</script>

<style lang="css" scoped>
  .layout {
    position:absolute;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-rows: 50px 1fr;
    grid-template-areas: 
      "menu header"
      "menu content";

    .header {
      grid-area: header;
      background-color: #cccccc;
    }

    .menu {
      grid-area: menu;
      background-color: #3b5586;
    }

    .content {
      grid-area: content;
      background-color: #ffffff;
    }
  }

</style>