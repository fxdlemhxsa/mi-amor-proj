<template>
    <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
        :style="{ backgroundImage: `url(${Img1})` }"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10 text-white ">
          <h1
            className="lg:text-4xl text-2xl font-bold lg:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            How to say Happy Birthday before I disappear back into the crowd.
          </h1>
          <p
            className="text-sm lg:text-base lg:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
          This is how I, someone who’s been quietly enchanted by you, says Happy Birthday. From afar, I’ve watched you shine brighter every day, hoping you’d feel how special you are. For now, this is my way of saying it: Happy Birthday, to the one who’s always in my heart.
          </p>
          <p data-aos="fade-right" data-aos-duration="1300">
            Click "Play" to see Details
          </p>
          <div
            className="actions flex items-center gap-3"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <Button @click="setOpenModal(true)" variant="primary">
              <Play fillColor="#000000" :size="20" class="cursor-pointer" />
              Play
            </Button>
            <Button variant="secondary">
              <Info :size="20" />
              More Info
            </Button>
          </div>
        </div>
    </section>
    <section className="flex justify-center bg-black text-white">
      <div className="py-5 lg:py-10 flex flex-col gap-5 px-5 lg:px-10 max-w-screen-2xl">
        <h3 className="font-semibold text-xl">More to Explore : My Favorite Footage</h3>
        <section className=" grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
            <CardImage v-for="(item, index) in images" :src="item.src" :key="index" :idx="index" />
        </section>
      </div>
    </section>
    <Modal :setOpenModal="setOpenModal" :openModal="openModal">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px] "
        :style="{ backgroundImage: `url(${Img1})`, backgroundPosition: 'center 40%'}"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black" />
      </div>
      <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
        <h1 className="font-bold text-2xl">Happy Birthday, my one and only... </h1>
        <p>Hi You...</p>
        <p>
          I’ve been sitting here, thinking, How do I even say Happy Birthday to someone like you? Like, how do I even put into words how much you mean to me before I fade back into the noise of everything else? But you’re not like the crowd. You’re my focus. My star in the middle of all this chaos.
        </p>
        <p>
          So, here’s me trying: Happy freakin’ Birthday, babe. 🎉 You’re not just a day worth celebrating; you’re the day. The person who makes life feel less like a blur and more like a masterpiece. You’ve got this magic in you—like, you don’t just light up the room, you light up my whole world.
        </p>
        <p>
          I hope today reminds you of just how insanely special you are, not just to me but to literally everyone lucky enough to know you. You’re that rare kind of human—kind, funny, a little quirky (okay, a lot quirky), and so ridiculously lovable. 
        </p>
        <p>
          And yeah, I might fade into the crowd sometimes, but don’t ever get it twisted—I’ll always find my way back to you. Because honestly, no matter how many birthdays come and go, I know my life would be straight-up meh without you in it.
        </p>
        <p>
          So, here’s to you: my partner-in-crime, my muse, my forever vibe. Happy Birthday, love. Let’s make today unforgettable, just like you.
        </p>
        <p>
          Love, always,
          <br />
          Me, the one who never stops looking at you in a crowded room. ❤️
        </p>
      </div>
    </Modal>
</template>

<script setup lang="ts">
import { Info } from 'lucide-vue-next';
import Play from 'vue-material-design-icons/Play.vue';
import Aos from "aos";
import "aos/dist/aos.css";

import {Img1} from '../assets'

import Button from '../components/CustButton.vue'
import CardImage from '../components/CardImage.vue'
import Modal from '../components/Modal.vue';

import { images } from '../config';
import { ref } from 'vue';

const openModal = ref(false)
const setOpenModal = (status: boolean) => {
  openModal.value = status
}

Aos.init();
</script>

<style scoped>

</style>