<script setup lang="ts">
const items = [
  '0824/shed-build/1.webp',
  '0824/shed-build/2.webp',
  '0824/shed-build/3.webp',
  '0824/shed-build/4.webp',
  '0824/shed-build/5.webp',
  '0824/shed-build/6.webp',
  '0824/shed-build/7.webp',
  '0824/shed-build/8.webp',
  '0824/shed-build/9.webp',
  '0824/shed-build/10.webp',
  '0824/shed-build/11.webp',
  '0824/shed-build/12.webp',
  '0824/shed-build/13.webp',
  '0824/shed-build/14.webp',
  '0824/shed-build/15.webp',
  '0824/shed-build/16.webp'
]
</script>

<template>
  <UContainer>
    <UPageHero
      title="Official Support"
      description="Through NuxtLabs experts and agency networks, we have a solution for every need."
      align="left"
    >
      <NuxtImg
        provider="cloudinary"
        src="/0824/shed-build/1.webp"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </UPageHero>

    <UCarousel
      :items="items"
      :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
      indicators
      class="rounded-lg overflow-hidden"
    >
      <template #default="{ item }">
        <NuxtImg
          provider="cloudinary"
          :src="item"
          class="object-cover w-full"
          draggable="false"
          :modifiers="{
            gravity: 'auto'
          }"
        />
      </template>

      <template #prev="{ onClick, disabled }">
        <button
          :disabled="disabled"
          @click="onClick"
        >
          Prev
        </button>
      </template>

      <template #next="{ onClick, disabled }">
        <button
          :disabled="disabled"
          @click="onClick"
        >
          Next
        </button>
      </template>
    </UCarousel>
  </UContainer>
</template>
