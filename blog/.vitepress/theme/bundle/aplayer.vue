<script setup>
import { onMounted, ref } from 'vue';
import 'aplayer/dist/APlayer.min.css';
import { useData } from "vitepress";

const { theme } = useData();
const define_plugins_config = theme.value.plugins;
const audio_list = ref([]);

const fetchMetingData = async (metingList) => {
  const responses = await Promise.all(metingList.map(async (item) => {
    const response = await fetch(`${define_plugins_config.aplayer_config.meting_endpoint}?server=${item.server}&type=${item.type}&id=${item.id}`);
    return response.json();
  }));
  return responses.flat();
};

const initAPlayer = async () => {
  const APlayer = await import('aplayer/dist/APlayer.min.js').then((mod) => mod.default);

  if (typeof window !== 'undefined') {
    if (define_plugins_config.aplayer_config.meting) {
      const metingList = define_plugins_config.aplayer_config.meting_list;
      const fetchedAudios = await fetchMetingData(metingList);
      audio_list.value = fetchedAudios;
    }

    const ap = new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: true,
      audio: audio_list.value,
    });
  }
};

onMounted(() => {
  initAPlayer();
});
</script>

<template>
  <div id="aplayer"></div>
</template>

<style scoped>
/* 你的样式 */
</style>
