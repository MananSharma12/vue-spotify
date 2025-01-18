<script setup lang="ts">
const loginInSubmission = ref(false);
const loginShowAlert = ref(false);
const loginAlertVariant = ref('bg-blue-500');
const loginAlertMessage = ref("Please wait! We are loggin you in.");

function login(values: Record<string, string>) {
  loginShowAlert.value = true;
  loginInSubmission.value = true;
  loginAlertVariant.value = 'bg-blue-500';
  loginAlertMessage.value = "Please wait! We are loggin you in."
  loginAlertVariant.value = 'bg-green-500';
  loginAlertMessage.value = "Success! You are now logged in."
}
</script>

<template>
  <!-- Login Form -->
  <Form @submit="login">
    <!-- Alert Message -->
    <div
        class="text-white text-center font-bold p-4 rounded mb-4"
        v-if="loginShowAlert"
        :class="loginAlertVariant"
    >
      {{ loginAlertMessage }}
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <Field
          name="email"
          type="email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Email"
          :rules="{
            required: true,
            email: true
          }"
      />
      <ErrorMessage
          name="email"
          class="text-red-600"
      />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <Field
          name="password"
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
          :rules="{
            required: true,
          }"
      />
      <ErrorMessage
          name="password"
          class="text-red-600"
      />
    </div>
    <button
        type="submit"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
        :disabled="loginInSubmission"
    >
      Submit
    </button>
  </Form>
</template>