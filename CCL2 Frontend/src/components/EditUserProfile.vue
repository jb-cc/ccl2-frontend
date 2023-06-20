<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6 ">
    <h1 class="text-2xl font-bold mb-6 text-center font-Moondance text-6xl text-white">Edit Profile</h1>
    <div class="bg-transparent shadow-none px-16 py-10 mb-4 text-white font-Poppins w-1/3">
      <div class="mb-4 text-xl">
        <label class="flex justify-between">
          <strong>New username:</strong>
          <input type="text" v-model="username" placeholder="  New username" class="bg-ccl2-White text-ccl2-Midnight-Blue" />
        </label>
      </div>
      <div class="mb-4 text-xl">
        <label class="flex justify-between">
          <strong>New e-mail:</strong>
          <input type="email" v-model="email" placeholder="  New e-mail" class="bg-ccl2-White text-ccl2-Midnight-Blue" />
        </label>
      </div>
      <div class="mb-4 text-xl">
        <label class="flex justify-between">
          <strong>Old password:</strong>
          <input type="password" v-model="oldPassword" placeholder="  Old password" class="bg-ccl2-White text-ccl2-Midnight-Blue" />
        </label>
      </div>
      <div class="mb-4 text-xl">
        <label class="flex justify-between">
          <strong>New password:</strong>
          <input type="password" v-model="newPassword" placeholder="  New password" class="bg-ccl2-White text-ccl2-Midnight-Blue" />
        </label>
      </div>
      <div class="mb-4 text-xl">
        <label class="flex justify-between">
          <strong>Repeat new password:</strong>
          <input type="password" v-model="repeatPassword" placeholder="  New password" class="bg-ccl2-White text-ccl2-Midnight-Blue" />
        </label>
      </div>
      <div class="mb-4 flex justify-center">
        <button @click="saveChanges" class="bg-ccl2-Gold hover:bg-ccl2-Dark-Gold text-ccl2-Midnight-Blue font-bold py-2 px-4 focus:outline-none">SAVE CHANGES</button>
      </div>
      <div class="mb-4 text-xl">
        <p>If you want to <span class="text-ccl2-Red">DELETE</span>  your account <span class="text-ccl2-Red">PERMANENTLY</span>, please enter your password.</p>
        <label class="flex justify-between">
          Password:
          <input type="password" v-model="deletePassword" placeholder="  Password" class="bg-ccl2-White text-ccl2-Midnight-Blue" />
        </label>
      </div>
      <div class="mb-4 text-xl">
        <label class="flex justify-between items-center">
          <input type="checkbox" v-model="acceptDelete" class="mr-2">
          <p>I accept that once I click this button, my Account will be permanently deleted.</p>
        </label>
      </div>
      <div class="flex justify-center">
        <button
            @click="deleteAccount"
            :disabled="!acceptDelete"
            :class="{'cursor-not-allowed': !acceptDelete}"
            class="bg-ccl2-Red hover:bg-ccl2-Red-Darker text-ccl2-White font-bold py-2 px-4 focus:outline-none">
          DELETE PERMANENTLY
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
      deletePassword: '',
      acceptDelete: false, // if this is false, the button is deactivated
      acceptSave: false,
    };
  },
  methods: {
    saveChanges() {
      //  save changes
    },
    deleteAccount() {
      // delete account
    }
  }
}
</script>
