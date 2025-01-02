<template>
  <div v-if="!hasAcceptedCookies">
    <UNotification
      title="Cookie Policy"
      description="We use cookies to improve your experience. By continuing, you agree to our policy."
      :actions="[
        { label: 'Accept', onClick: handleAcceptCookies },
        { label: 'Learn More', onClick: () => { /* Navigate to privacy policy */ } }
      ]"
    />
  </div>
</template>

<script setup lang="ts">

const cookie = useCookie('acceptedCookies', false);

const acceptedCookies = useCookie('acceptedCookies', false);
const hasAcceptedCookies = computed(() => acceptedCookies.value);

const handleAcceptCookies = () => {
  acceptedCookies.value = true;
};
</script>
