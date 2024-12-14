<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center content-center overflow-hidden">
    <div v-if="COUNTER < 20" class="flex flex-col justify-center items-center content-center">
      <h2 class="font-bold text-7xl my-6">How old are you today?</h2>
      <button class="my-4" @click="increment">{{ COUNTER }} years old</button>
    </div>
    <div v-else-if="COUNTER === 20">
      <h1 class="relative z-10 text-7xl font-bold">HAPPY BIRTHDAY <span class="nidda">NIDDA</span>!</h1>
      <button v-if="SHOW" class="my-4" @click="onNext">Next</button>
      <div>
        <YouTube 
            src="https://www.youtube.com/watch?v=wSm9PIIQhiI" 
            @ready="onReady"
            :width="0"
            :height="0"
            ref="youtube" />
      </div>
      <Confetti />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import Confetti from './Confetti.vue';
import YouTube from 'vue3-youtube'
import {useCountdownStore} from '../stores/countdown'
import router from '../router';


const COUNT = useCountdownStore()
const COUNTER = ref(0);
const SHOW = ref(false)

setTimeout(() => {
    SHOW.value = true
}, 15000);

// Define the ref for the YouTube component
const youtube = useTemplateRef('youtube');

// Define the onReady method
const onReady = () => {
  youtube.value?.playVideo();
};

const onNext = () => {
  if (!COUNT.getCookie('hasVisited')) {
    // First time visit
    router.push('/home')
    // Set a cookie to mark that the user has visited
    COUNT.setCookie('hasVisited', 'true', 365); // 365 days expiration
  }
}

// Function to increment COUNTER
const increment = () => {
  if (COUNTER.value < 21) {
    COUNTER.value += 1;
  }
};

onMounted(() => {
    if (COUNT.getCookie('hasVisited')) {
        // First time visit
        router.push('/home')
        return
    }
    document.body.style.overflow = "hidden";
})

onUnmounted(() => {
    document.body.style.overflow = "";
})
</script>

<style scoped>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 2;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  overflow: hidden;
  overscroll-behavior-y: none;
}

button {
  width: 150px;
  height: 75px;
  padding: 10px;
  background-image: linear-gradient(to bottom right, orange, yellow);
  border: solid 2px white;
  border-radius: 8px;
  font-size: large;
  cursor: pointer;
  color: black;
  font-weight: bold;
}

button:hover {
  background-image: linear-gradient(to bottom right, yellow, orange);
}

.nidda {
  position: relative;
  text-transform: uppercase;
  background-image: linear-gradient(-225deg, orange 0%, yellow 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
