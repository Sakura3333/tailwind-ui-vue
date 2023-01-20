<template>
    <button class="px-4 py-1 duration-150 ease-in-out ring-offset-2" :class="`${_color[color]} ${_size[size]} ${_type[type]}`">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const _color: any = {
    indigo: "bg-indigo-600 ring-indigo-700 text-white hover:bg-indigo-700",
    dark: "bg-gray-700 ring-gray-900 text-white hover:bg-gray-900",
    white: "bg-white ring-gray-100 text-dark hover:bg-gray-100",
    light: "bg-gray-100 ring-gray-200 text-dark hover:bg-gray-200",
    gray: "bg-gray-400 ring-gray-500 text-white hover:bg-gray-500",
    red: "bg-red-600 ring-red-700 text-white hover:bg-red-700",
    yellow: "bg-yellow-500 ring-yellow-600 text-white hover:bg-yellow-600",
}
const _size: any = {
    mini: 'text-xs focus:ring-1',
    small: 'text-sm focus:ring-2',
    normal: 'text-base focus:ring',
    large: 'text-lg focus:ring-4',
}
const _type: any = {
    normal: 'rounded',
    plain: 'rounded-0',
    rounded: 'rounded-sm',
    pill: 'rounded-full',
}
interface TwButton {
    color: string;
    type: string;
    size: string;
}
withDefaults(defineProps<TwButton>(), {
    color: 'indigo',
    type: 'normal',
    size: 'normal'
});
</script>