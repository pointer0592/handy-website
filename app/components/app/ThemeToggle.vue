<template>
  <button
    @click="toggleDark()"
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
    aria-label="Toggle Theme"
  >
    <Icon
      :name="isDark ? 'iconoir:sun-light' : 'iconoir:half-moon'"
      class="flex-shrink-0 h-5 w-5"
    />
  </button>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
