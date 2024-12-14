<template>
    <div class="h-screen">
        <Navbar></Navbar>
        <main>
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                <suspense timeout="0">
                    <template #default>
                        <component :is="Component" :key="$route.path"></component>
                    </template>
                    <template #fallback>
                        <div class="flex justify-center items-center content-center w-full h-screen">
                            <div class="self-center font-semibold">SABAR ...</div>
                        </div>
                    </template>
                </suspense>
                </transition>
            </router-view>
        </main>
        <footer>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
</script>

<style>

</style>