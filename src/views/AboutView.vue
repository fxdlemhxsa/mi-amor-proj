<template>
    <div class="relative z-0 px-10 mt-28">
        <h1 class="text-xl font-bold text-white mt-10">How I See U</h1>
        <CardCarousel :datas="inmyeyes" :setOpenModal="setOpenModal" type="in-my-eyes"/>
        <h1 class="text-xl font-bold text-white mt-10">All the Thing is Us</h1>
        <CardCarousel :datas="isus" :setOpenModal="setOpenModal" type="is-us"/>
        <h1 class="text-xl font-bold text-white mt-10">If U are Song</h1>
        <CardCarousel :datas="song" :setOpenModal="setOpenModal" type="song"/>
    </div>
    <Modal :setOpenModal="setOpenModal" :openModal="openModal">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px] "
        :style="{ backgroundImage: `url(${dataModal.image})`, backgroundPosition: 'center 40%'}"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black" />
      </div>
      <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
        <h1 className="font-bold text-2xl">{{ dataModal.title }} </h1>
        <p>
          {{ dataModal.desc }}
        </p>
      </div>
    </Modal>
</template>
  
<script setup lang="ts">
import { inmyeyes, isus, song } from '../config';

import CardCarousel from '../components/CardCarousel.vue';
import Modal from '../components/Modal.vue';

import { reactive, ref } from 'vue';

const openModal = ref(false)
const dataModal = reactive<any>({
    image: '',
    title: '',
    desc: '',
})

const setOpenModal = (status: boolean, type: string, id: number) => {
  if (!status) {
      dataModal.desc = ''
      dataModal.title = ''
      dataModal.image = ''
      
      openModal.value = status
      return
  }

  let data:any = {}

  switch (type) {
    case 'in-my-eyes':
        data = inmyeyes.find((item) => item.id == id)
        dataModal.desc = data?.desc
        dataModal.title = data?.title
        dataModal.image = data?.thumbnail
        break;
    case 'is-us':
        data = isus.find((item) => item.id == id)
        dataModal.desc = data?.desc
        dataModal.title = data?.title
        dataModal.image = data?.thumbnail
        break;
    case 'song':
        data = song.find((item) => item.id == id)
        dataModal.desc = data?.desc
        dataModal.title = data?.title
        dataModal.image = data?.thumbnail
        break;
  
    default:
        break;
  }

  openModal.value = status
}
</script>

<style scoped>

</style>