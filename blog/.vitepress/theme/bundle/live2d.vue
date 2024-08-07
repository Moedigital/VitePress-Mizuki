<script setup lang="ts">
import { useData } from "vitepress";
import live2d from "vue3-live2d";
import { ref } from "vue";
const {theme} = useData()
const define_plugins_config =  theme.value.plugins;
</script>

<template>
<ClientOnly>
  <live2d
      class="live2d"
      width="300"
      height="300"
      resolution="2"
      isLeft=true
      :style="{ position: 'fixed', bottom: 0, right: 0, zIndex: 4 }"
      :api-path="define_plugins_config.live2d_config.api_path"
      :model="define_plugins_config.live2d_config.default_model"
      :tips="define_plugins_config.live2d_config.tips"
  />
</ClientOnly>
</template>

<style scoped>

</style>