<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'Sign up'
})

const fields = [{
  name: 'name',
  label: '',
  type: 'text',
  placeholder: 'Enter your name'
}, {
  name: 'email',
  label: '',
  type: 'email',
  placeholder: 'Enter your email'
}, {
  name: 'password',
  label: '',
  type: 'password',
  placeholder: 'Enter your password'
},{
  name: 'confirm_password',
  label: '',
  type: 'password',
  placeholder: 'Confirm your password'
}]

const validate = (state: any) => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' })

  if (!state.password) errors.push({ path: 'password', message: 'Password is required' })

  if (!state.password) {
    errors.push({ path: 'password', message: 'Password is required' })
  } else {
    // Check if the password meets the criteria
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
    if (!passwordRegex.test(state.password)) {
      errors.push({
        path: 'password',
        message: 'Password minimum: 8 characters, including one number and one symbol'
      })
    }
  }

  if (!state.confirm_password) {
    errors.push({ path: 'confirm_password', message: 'Confirm Password is required' })
  } else if (state.password !== state.confirm_password) {
    errors.push({ path: 'confirm_password', message: 'Passwords do not match' })
  }

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
      align="top"
      title="Create an account"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      :submit-button="{ label: 'Create account' }"
      @submit="onSubmit"
    >
      <template #description>
        Already have an account? <NuxtLink
          to="/login"
          class="text-primary font-medium"
        >Login</NuxtLink>.

        <div class="pt-6">
          <div class="inline-flex p-0 m-0 rounded-sm hover:ring-1 hover:ring-primary base-transition">
            <AuthGoogleSignIn
              :oneTap="false"
              size="large"
              theme="outline"
              text="Register with Google"
            />
          </div>
        </div>

        <UDivider label="OR" class="pt-6" />
        <div class="pt-6 text-left">Provide information below:</div>
      </template>

      <template #footer>
        By signing up, you agree to our <NuxtLink
          to="/"
          class="text-primary font-medium"
        >Terms of Service</NuxtLink>.
      </template>
    </UAuthForm>
  </UCard>
</template>
