<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const { app, header } = useAppConfig()
</script>

<template>
  <UHeader :links="app.links">
    <template #logo>
      Nuxt UI Pro <UBadge
        label="SaaS"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <template #right>
      <UButton
        label="Sign in"
        color="gray"
        to="/login"
      />
      <UButton
        label="Sign up"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        color="black"
        to="/signup"
        class="hidden lg:flex"
      />
      <UColorModeButton />

      <UContentSearchButton
        v-if="header?.search"
        :label="null"
        class=""
      />
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
      />
    </template>
  </UHeader>
</template>
