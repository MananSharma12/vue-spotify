<script setup lang="ts">
const { registerUser } = useAuth()

const regInSubmission = ref(false);
const regShowAlert = ref(false);
const regAlertVariant = ref('bg-blue-500');
const regAlertMessage = ref("Please wait! Your account in being created");

async function register(values: Record<string, string>) {
  regShowAlert.value = true;
  regInSubmission.value = true;
  regAlertVariant.value = 'bg-blue-500';

  try {
    await registerUser({
      email: values.email,
      password: values.password,
      name: values.name,
      age: values.age,
      country: values.country,
    })
  } catch (error) {
    regInSubmission.value = false;
    regAlertVariant.value = 'bg-red-500';
    regAlertMessage.value = 'An unexpected error occurred. Please try again later.';
    return;
  }

  regAlertMessage.value = "Please wait! Your account in being created"
  regAlertVariant.value = 'bg-green-500';
  regAlertMessage.value = "Success! Your Account has been created"
}
</script>

<template>
  <!-- Registration Form -->
  <Form
      @submit="register"
      :initial-values="{ country: 'India' }"
  >
    <!-- Alert Message -->
    <div
        class="text-white text-center font-bold p-4 rounded mb-4"
        v-if="regShowAlert"
        :class="regAlertVariant"
    >
      {{ regAlertMessage }}
    </div>
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <Field
          name="name"
          type="text"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Name"
          rules="required"
      />
      <ErrorMessage
          name="name"
          class="text-red-600"
      />
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
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <Field
          name="age"
          type="number"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          :rules="{
            required: true,
            min_value: 18,
            max_value: 60
          }"
      />
      <ErrorMessage
          name="age"
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
            required: true
          }"
      />
      <ErrorMessage
          name="password"
          class="text-red-600"
      />
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <Field
          name="confirm_password"
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Confirm Password"
          rules="confirmed:@password"
      />
      <ErrorMessage
          name="confirm_password"
          class="text-red-600"
      />
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <Field
          as="select"
          name="country"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          rules="required"
      >
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
      </Field>
      <ErrorMessage
          name="country"
          class="text-red-600"
      />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <Field
          name="tos"
          type="checkbox"
          class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <label class="inline-block">Accept terms of service</label>
      <ErrorMessage
          name="tos"
          class="text-red-600"
      />
    </div>
    <button
        type="submit"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
        :disabled="regInSubmission"
    >
      Submit
    </button>
  </Form>
</template>
