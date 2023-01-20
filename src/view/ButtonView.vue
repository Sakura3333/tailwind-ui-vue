<template>
    <div class="space-y-5">
        <div class="flex flex-wrap">
            <template v-for="c in color">
                <tw-button class="m-1 self-baseline" :color="c" size="normal" type="normal">{{ c }}</tw-button>
            </template>
        </div>
        <div class="flex flex-wrap">
            <template v-for="s in size">
                <tw-button class="m-1 self-baseline" color="indigo" :size="s" type="normal">{{ s }}</tw-button>
            </template>
        </div>
        <div class="flex flex-wrap">
            <template v-for="t in type">
                <tw-button class="m-1 self-baseline" color="indigo" size="normal" :type="t">{{ t }}</tw-button>
            </template>
        </div>
        <code class="block bg-dark text-white p-5">
            {{ `<tw-button color="indigo" size="normal" type="normal">
                    Tailwind Button
                </tw-button>` }}
        </code>
    </div>
</template>

<script setup lang="ts">
import TwButton from '../components/button/TwButton.vue';
const color = ["indigo", "dark", "white", "gray", 'light', "red", "yellow"];
const size = ['mini', 'small', 'normal', 'large'];
const type = ['normal', 'plain', 'rounded', 'pill'];

</script>

<style scoped>
</style>