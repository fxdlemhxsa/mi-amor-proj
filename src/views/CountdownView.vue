<template>
    <div v-if="!COUNT.DISPLAY.expired" class="h-screen w-screen flex flex-col justify-center items-center content-center bg-gray-900">
      <div class="flex flex-col gap-3 text-white text-center px-4">
        <!-- Header -->
        <div class="text-center font-light text-lg sm:text-xl tracking-widest">
          {{ `- going to birthday my bae ` + '<' + `3 -` }}
        </div>
        <hr class="border-gray-600 my-2" />
        
        <!-- Countdown Timer -->
        <div class="flex text-4xl sm:text-6xl justify-center content-center gap-2 sm:gap-4">
          <div class="time">
            {{ COUNT.DISPLAY.days }}
            <div class="label-count">DAYS</div>
          </div>
          <span class="leading-snug">:</span>
          <div class="time">
            {{ COUNT.DISPLAY.hours }}
            <div class="label-count">HOURS</div>
          </div>
          <span class="leading-snug">:</span>
          <div class="time">
            {{ COUNT.DISPLAY.minutes }}
            <div class="label-count">MINUTES</div>
          </div>
          <span class="leading-snug">:</span>
          <div class="time">
            {{ COUNT.DISPLAY.seconds }}
            <div class="label-count">SECONDS</div>
          </div>
        </div>
        <hr class="border-gray-600 my-2" />
      </div>
    </div>
    <Counter v-else/>
</template>
  
<script setup lang="ts">
import {useCountdownStore} from '../stores/countdown'
import Counter from '../components/Counter.vue';

const COUNT = useCountdownStore()
COUNT.showRemaining()
</script>

<style scoped>
body {
  overflow: hidden !important;
}

.fade-enter-active,
.fade-leave-active {
transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
opacity: 0;
}
</style>