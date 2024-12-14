<template>
  <button
    :class="[
      'flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out',
      variant === 'primary' ? 'bg-white text-black' : '',
      variant === 'secondary' ? 'bg-white/30 text-white' : ''
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: String,
});
</script>
  