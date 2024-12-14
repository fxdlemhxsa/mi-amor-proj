<template>
  <div
    class="group rounded-lg overflow-hidden relative cursor-pointer"
    data-aos="fade-up"
    :data-aos-duration="1000 + idx * 100"
    data-aos-once="true"
  >
    <img
      :src="src"
      alt="image-card"
      class="w-full h-full object-cover group-hover:scale-105 duration-300 ease-in-out"
    />
    <div class="absolute w-full h-full bg-[#000]/50 top-0 group-hover:opacity-100 opacity-0 duration-300 ease-in-out"></div>
  </div>
</template>

<script setup>
defineProps({
    src: {
        type: String,
        required: true,
    },
    idx: {
        type: Number,
        required: true,
    },
});
</script>
  