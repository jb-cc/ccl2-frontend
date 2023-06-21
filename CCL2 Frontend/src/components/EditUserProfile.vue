<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6">
    <h1
      class="text-2xl font-bold mb-6 text-center font-Moondance text-6xl text-white"
    >
      Edit Profile
    </h1>
    <div
      class="bg-transparent shadow-none px-16 py-10 mb-4 text-white font-Poppins w-1/3"
    >
      <div class="mb-4 text-xl">
        <label class="flex justify-between">
          <strong>New username:</strong>
          <input
            type="text"
            v-model="username"
            placeholder="  New username"
            class="bg-ccl2-White text-ccl2-Midnight-Blue"
          />
        </label>
      </div>
      <div class="mb-4 text-xl">
        <label class="flex justify-between">
          <strong>New e-mail:</strong>
          <input
            type="email"
            v-model="email"
            placeholder="  New e-mail"
            class="bg-ccl2-White text-ccl2-Midnight-Blue"
          />
        </label>
      </div>
      <div class="mb-4 text-xl">
        <label class="flex justify-between">
          <strong>Old password:</strong>
          <input
            type="password"
            v-model="oldPassword"
            placeholder="  Old password"
            class="bg-ccl2-White text-ccl2-Midnight-Blue"
          />
        </label>
      </div>
      <div class="mb-4 text-xl">
        <label class="flex justify-between">
          <strong>New password:</strong>
          <input
            type="password"
            v-model="newPassword"
            placeholder="  New password"
            class="bg-ccl2-White text-ccl2-Midnight-Blue"
          />
        </label>
      </div>
      <div class="mb-4 text-xl">
        <label class="flex justify-between">
          <strong>Repeat new password:</strong>
          <input
            type="password"
            v-model="repeatPassword"
            placeholder="  New password"
            class="bg-ccl2-White text-ccl2-Midnight-Blue"
          />
        </label>
      </div>
      <div v-if="repeatPassword" class="mb-4 flex justify-center text-lg">
        <p v-if="!passwordsMatch" class="text-ccl2-Red">
          Passwords do not match!
        </p>
      </div>
      <div v-if="saveError" class="mb-4 flex justify-center text-lg" ><p class="text-ccl2-Red">{{ saveError }}</p></div>
      <div v-if="saveSuccess" class="mb-4 flex justify-center text-lg" ><p class="text-green-500">{{ saveSuccess }}</p></div>
      <div class="mb-4 flex justify-center">
        <button
          @click="saveChanges"
          :disabled="!passwordsMatch || !username || !email || !oldPassword" :class="{ 'cursor-not-allowed': !passwordsMatch || !username || !email || !oldPassword }"
          class="bg-ccl2-Gold hover:bg-ccl2-Dark-Gold text-ccl2-Midnight-Blue font-bold py-2 px-4 focus:outline-none"
        >
          SAVE CHANGES
        </button>
      </div>
      <div class="mb-4 text-xl">
        <p>
          If you want to <span class="text-ccl2-Red">DELETE</span> your account
          <span class="text-ccl2-Red">PERMANENTLY</span>, please enter your
          password.
        </p>
        <label class="flex mt-6 mb-6 justify-between">
          Password:
          <input
            type="password"
            v-model="deletePassword"
            placeholder="  Password"
            class="bg-ccl2-White text-ccl2-Midnight-Blue"
          />
        </label>
      </div>
      <div class="mb-4 text-xl">
        <label class="flex justify-between items-center">
          <input type="checkbox" v-model="acceptDelete" class="mr-2" />
          <p>
            I accept that once I click this button, my Account will be
            permanently deleted.
          </p>
        </label>
      </div>
      <div class="flex justify-center">
        <button
          @click="deleteAccount"
          :disabled="!acceptDelete"
          :class="{ 'cursor-not-allowed': !acceptDelete }"
          class="bg-ccl2-Red hover:bg-ccl2-Red-Darker text-ccl2-White font-bold py-2 px-4 focus:outline-none"
        >
          DELETE PERMANENTLY
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import http from "../http-common";
import { UserStore } from "@/stores/user";

const user = UserStore().user;
const username = ref("");
const email = ref("");
const oldPassword = ref("");
const newPassword = ref("");
const repeatPassword = ref("");
const passwordsMatch = computed(
  () => newPassword.value === repeatPassword.value
); // null if passwords don't match
const deletePassword = ref("");
const acceptDelete = ref(false);
const saveError = ref(null);
const saveSuccess = ref(null);

const saveChanges = () => {
  if (!passwordsMatch.value) {
    console.error("New password and repeated password do not match!");
    return;
  }
  console.log("user: " + JSON.stringify(user));
  const response = http
    .put(`http://localhost:8080/users/${user.id}/edit`, {
      newUsername: username.value,
      newEmail: email.value,
      oldPassword: oldPassword.value,
      newPassword: newPassword.value,
    })
    .then((response) => {
      console.log(response);
      saveError.value = null;
      saveSuccess.value = response.data.message;
      console.log("saveSuccess: " + saveSuccess.value);
      user.username = username.value;
      user.email = email.value;
    })
    .catch((error) => {
      if (error.response) {
        saveError.value = error.response.data.message;
        console.log('saveError: ', saveError.value)
      }
      else {
        saveError.value = error.message;
        console.log('saveError: ', saveError.value);
      }

    });
};

const deleteAccount = () => {
  // delete account
};
</script>
