<template>
  <div class="flex flex-col items-center">
    <h2 class="text-white text-2xl mb-4">Deposit funds into your account</h2>
    <div class="flex flex-col items-center">
      <button
          @click="deposit(100)"
          class="bg-white text-black border border-black px-4 py-2 mb-2"
      >
        Deposit
        <img
            src="/img/icons/coin.svg"
            alt="Coin Icon"
            class="inline-block mr-2"
        />100
      </button>
      <button
          @click="deposit(500)"
          class="bg-white text-black border border-black px-4 py-2 mb-2"
      >
        Deposit
        <img
            src="/img/icons/coin.svg"
            alt="Coin Icon"
            class="inline-block mr-2"
        />500
      </button>
      <button
          @click="deposit(1000)"
          class="bg-white text-black border border-black px-4 py-2 mb-2"
      >
        Deposit
        <img
            src="/img/icons/coin.svg"
            alt="Coin Icon"
            class="inline-block mr-2"
        />1000
      </button>
      <div class="flex items-center">
        <input
            type="text"
            v-model="customAmount"
            placeholder="Enter custom amount"
            class="bg-white text-black border border-black px-4 py-2 mr-2"
            @input="validateAmount"
            @keydown="restrictInput"
        />
        <button
            @click="deposit(customAmount)"
            class="bg-white text-black border border-black px-4 py-2"
        >
          Deposit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {UserStore} from "@/stores/user";
import http from "../http-common";

const user = UserStore().user;
const customAmount = ref('');


async function deposit(amount) {
  console.log(`Depositing ${amount} to user ${user.username}`);
  await http.put(`http://localhost:8080/users/${user.id}/deposit`, {amount : parseInt(amount)} );
  user.balance += parseInt(amount);
}

function validateAmount() {
  if (customAmount.value < 0) {
    customAmount.value = '0';
  }
}

function restrictInput(event) {
  const key = event.key;
  const isValidInput =
      /^[0-9]$/.test(key) ||
      key === 'Backspace' ||
      key === 'Delete' ||
      key === 'ArrowLeft' ||
      key === 'ArrowRight' ||
      key === 'Tab' || // für accesibility
      (event.ctrlKey || event.metaKey) && key === 'a'; // für steuerung + a zum alles selecten


  if (!isValidInput) {
    event.preventDefault();
  }
}
</script>
