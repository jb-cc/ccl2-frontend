<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="shadow-lg shadow-ccl2-Light-Blue p-10 text-center text-white">
      <h2 class="text-white font-Moondance text-3xl mb-6">Deposit funds into your account</h2>
      <div class="flex flex-col items-center">
        <button
            @click="deposit(100)"
            class="bg-ccl2-Light-Gold font-Poppins text-ccl2-Midnight-Blue text-xl font-medium hover:bg-ccl2-Dark-Gold  px-6 py-3 mb-4 w-64"
        >
          Deposit
          <img
              src="/img/icons/coin.svg"
              alt="Coin Icon"
              class="inline-block mr-3"
          />100
        </button>
        <button
            @click="deposit(500)"
            class="bg-ccl2-Light-Gold font-Poppins text-ccl2-Midnight-Blue text-xl font-medium hover:bg-ccl2-Dark-Gold  px-6 py-3 mb-4 w-64"
        >
          Deposit
          <img
              src="/img/icons/coin.svg"
              alt="Coin Icon"
              class="inline-block mr-3"
          />500
        </button>
        <button
            @click="deposit(1000)"
            class="bg-ccl2-Light-Gold font-Poppins text-ccl2-Midnight-Blue text-xl font-medium hover:bg-ccl2-Dark-Gold px-6 py-3 mb-4 w-64"
        >
          Deposit
          <img
              src="/img/icons/coin.svg"
              alt="Coin Icon"
              class="inline-block mr-3"
          />1000
        </button>
        <div class="flex items-center w-64">
          <input
              type="text"
              v-model="customAmount"
              placeholder="Custom..."
              class="bg-white text-ccl2-Midnight-Blue font-Poppins font-medium px-4 text-xl py-3 mr-3 w-28"
              @input="validateAmount"
              @keydown="restrictInput"
          />
          <button
              @click="deposit(customAmount)"
              class="bg-ccl2-Light-Gold font-Poppins text-ccl2-Midnight-Blue text-xl font-medium hover:bg-ccl2-Dark-Gold px-6 py-3 w-36"
          >
            Deposit
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>


// importing the necessary files
import { ref } from 'vue';
import {UserStore} from "@/stores/user";
import http from "../http-common";


// initializing the user store
const user = UserStore().user;


// initializing the custom amount variable, which is used to store the amount the user wants to deposit, if the user wants to deposit a custom amount
const customAmount = ref('');

// setting up the deposit function, which takes an amount as a parameter, and deposits that amount to the user's account
async function deposit(amount) {
  console.log(`Depositing ${amount} to user ${user.username}`);
  await http.put(`http://localhost:8080/users/${user.id}/deposit`, {amount : parseInt(amount)} );
  user.balance += parseInt(amount);
}


// check if input is smaller than 0, if so, set it to 0

function validateAmount() {
  if (customAmount.value < 0) {
    customAmount.value = '0';
  }
}


// restrict input to numbers only and some special keys such as backspace, delete, arrow keys, tab and ctrl + a

function restrictInput(event) {
  const key = event.key;
  const isValidInput =
      /^[0-9]$/.test(key) ||
      key === 'Backspace' ||
      key === 'Delete' ||
      key === 'ArrowLeft' ||
      key === 'ArrowRight' ||
      key === 'Tab' || // for accessibility
      (event.ctrlKey || event.metaKey) && key === 'a'; // for ctrl + a to select all



  // if the input is not valid, prevent the default action
  if (!isValidInput) {
    event.preventDefault();
  }
}
</script>
