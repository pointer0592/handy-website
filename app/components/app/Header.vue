<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const { app, header } = useAppConfig()
</script>

<template>
  <UHeader :links="app.links">
    <template #logo>
      <SvgoHandy class="text-4xl" />
    </template>

    <template #right>
      <UButton
        label="Sign in"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        variant="soft"
        color="primary"
        to="/auth/login"
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
