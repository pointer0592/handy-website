<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = computed(() => navigation.value.find(item => item._path === '/services')?.children ?? [])
</script>

<template>
  <UContainer>

    <UPageHero
      title="Official Support"
      description="Through NuxtLabs experts and agency networks, we have a solution for every need."
      align="left"
    >
      <NuxtImg
        src="https://picsum.photos/640/360"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </UPageHero>
    <UPage>
      <template #left>
        <UAside>
          <template #top>
            <UContentSearchButton
              class="rounded-md"
              size="sm"
            />
          </template>

          <UNavigationTree :links="mapContentNavigation(links)" />
        </UAside>
      </template>

      <NuxtPage />
    </UPage>
  </UContainer>
</template>
