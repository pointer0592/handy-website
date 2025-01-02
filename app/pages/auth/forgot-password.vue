<script setup lang="ts">
const { data: page } = await useAsyncData('forgot-password', () => queryContent('/auth').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    My Forgot Password Page
  </div>
</template>
