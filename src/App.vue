<template>
    <div class="fixed h-full w-full flex">
        <div class="w-64 overflow-y-auto flex-shrink-0 border-r-2 p-4">
            <div>
                <template v-for="route in routes">
                    <router-link class="block rounded-full text-center p-2" :to="route.path">
                        <tw-button color="light" type="normal" size="small" class="w-full font-semibold">{{ route.name }}</tw-button>
                    </router-link>
                </template>
            </div>
        </div>
        <div class="flex-grow flex justify-center p-5 overflow-y-auto">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import TwButton from './components/button/TwButton.vue';

const routes = useRouter().getRoutes();
console.log(routes)

</script>

<style scoped>

</style>