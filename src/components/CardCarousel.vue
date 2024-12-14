<template>
  <div class="w-full h-full relative my-2">
    <Carousel transition="500" v-bind="config" :itemsToShow="5" :itemsToScroll="1" snapAlign="start" class="bg-transparent">
      <Slide v-for="(item, index) in datas" :key="index">
        <div @click="setOpenModal(true, type, item.id)" class="mx-8 lg:mx-2">
            <a href="#" class="group relative block bg-black">
                <img
                :alt="item.title"
                :src="item.thumbnail"
                class="absolute inset-0 h-full w-full object-cover object-center opacity-75 transition-opacity group-hover:opacity-50"
                loading="lazy" 
                decoding="async" 
                fetchpriority="high"
                />
            
                <div class="relative p-4 sm:p-6 lg:p-8">
                    <p class="text-xl font-bold text-white sm:text-2xl">{{ item.title }}</p>
                    <div class="mt-2">
                        <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                        <p class="text-sm text-white">
                            {{ truncateString(item.desc) }}
                        </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
      </Slide>

      <template #addons>
        <Navigation>
          <template #next>
            <ChevronRight fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
          </template>
          <template #prev>
            <ChevronLeft fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
          </template>
        </Navigation>
      </template>
    </Carousel>
  </div>
</template>


<script setup>
  import { ref, toRefs } from 'vue'
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
  import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
  const { datas, setOpenModal, type } = defineProps(['datas', 'setOpenModal', 'type']);

  function truncateString(str) {
    if (str.length > 56) {
        return str.slice(0, 56) + "...";
    }
    return str;
  }

  // Carousel configuration
  const config = {
    itemsToShow: 1,
    autoplay: 2000,
    pauseAutoplayOnHover: true,
    snapAlign: 'center',
    wrapAround: true,

    // 'breakpointMode' determines how the carousel breakpoints are calculated
    // Acceptable values: 'viewport' (default) | 'carousel'
    // 'viewport' - breakpoints are based on the viewport width
    // 'carousel' - breakpoints are based on the carousel width
    breakpointMode: 'carousel',

    // Breakpoints are mobile-first
    // Any settings not specified will fall back to the carousel's default settings
    breakpoints: {
      // 300px and up
      200: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 300px and up
      300: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // 400px and up
      400: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      // 500px and up
      500: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  };
</script>