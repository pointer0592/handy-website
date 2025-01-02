<script setup lang="ts">
import { useOneTap, type CredentialResponse } from "vue3-google-signin";

const { isReady, login } = useOneTap({
  disableAutomaticPrompt: true,
  onSuccess: (response: CredentialResponse) => {
    console.log("Success:", response);
  },
  onError: () => console.error("Error with One Tap Login"),
  // options
});
</script>

<template>
  <UButton color="primary" :disabled="!isReady" @click="() => login()">
    Trigger One Tap Login Manually
  </UButton>
</template>
