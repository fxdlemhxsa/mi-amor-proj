<template>
    <div class="h-screen w-screen">
        <YouTube 
            src="https://www.youtube.com/watch?v=pe_QWQokp5w" 
            @ready="onReady"
            :width="width"
            :height="height"
            ref="youtube" />
    </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue';
import YouTube from 'vue3-youtube'

import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

// Define the ref for the YouTube component
const youtube : any = useTemplateRef('youtube');

// Define the onReady method
const onReady = () => {
  youtube.value?.playVideo();
};
</script>

<style scoped>

</style>