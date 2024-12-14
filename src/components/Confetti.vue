<template>
  <div class="overflow-hidden">
    <span
      v-for="(c, index) in confetti"
      :key="index"
      :style="`left: ${c.x}%; top: ${c.y}%; transform: scale(${c.r})`"
    >
      {{ c.character }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface Confetti {
  character: string;
  x: number;
  y: number;
  r: number;
}

const characters = ['✨', '🥳', '🎂', '🎉', '🎁'];
const confetti = ref<Confetti[]>([]);

let frame: number | null = null;

const generateConfetti = () => {
  return new Array(100).fill(null).map((_, i) => {
    return {
      character: characters[i % characters.length],
      x: Math.random() * 100,
      y: -20 - Math.random() * 100,
      r: 0.1 + Math.random() * 1
    };
  }).sort((a, b) => a.r - b.r);
};

const loop = () => {
  frame = requestAnimationFrame(loop);
  confetti.value = confetti.value.map(emoji => {
    emoji.y += 0.4 * emoji.r;
    if (emoji.y > 120) emoji.y = -20;
    return emoji;
  });
};

onMounted(() => {
  confetti.value = generateConfetti();
  loop();
});

onBeforeUnmount(() => {
  if (frame !== null) {
    cancelAnimationFrame(frame);
  }
});
</script>

<style scoped>
body {
  overflow: hidden !important;
}

span {
  position: absolute;
  font-size: 5vw;
  user-select: none;
  opacity: 50%;
}
</style>
