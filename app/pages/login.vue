<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'Login'
})

const fields = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email'
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password'
}]

const validate = (state: any) => {
  const errors = []
  if (!state.email) errors.push({path: 'email', message: 'Email is required'})
  if (!state.password) errors.push({path: 'password', message: 'Password is required'})
  return errors
}


function onSubmit(data: any) {
  console.log('Submitted', data)
}


</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      title="Welcome back"
      align="top"
      icon="i-heroicons-lock-closed"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      :submit-button="{ trailingIcon: 'i-heroicons-arrow-right-20-solid' }"
      @submit="onSubmit"
    >
      <template #description>
          <p>Sign in with Google or use your registered email/password:</p>

          <div class="pt-6">
            <div class="inline-flex p-0 m-0 rounded-sm hover:ring-1 hover:ring-primary base-transition">
            <AuthGoogleSignIn
              :oneTap="false"
              size="large"
              theme="outline"
            />
            </div>
          </div>

        <UDivider label="OR" class="pt-6" />
      </template>

      <template #password-hint>
        <NuxtLink
          to="/"
          class="text-primary hover:text-primary-600 font-medium text-xs "
        >Forgot password?
        </NuxtLink>
      </template>

      <template #footer>
        <div class="text-sm">
          <span>Don't have an account?&nbsp;&nbsp;</span>
        <ULink
          to="/signup"
          inactive-class="text-primary hover:text-primary-600 font-medium"
        >Sign up
        </ULink>
          <span>.</span>

        </div>
        <div class="text-sm">
          <span> By signing in, you agree to our&nbsp;</span>
        <ULink
          to="/"
          inactive-class="text-primary hover:text-primary-600 font-medium"
        >Terms of Service
        </ULink>
          <span>.</span>
        </div>
      </template>
    </UAuthForm>
  </UCard>
</template>
