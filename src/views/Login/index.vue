<template>
  <form>
    <label>
      <input
        type="text"
        placeholder="Email Address"
        v-model="loginForm.username"
      />
    </label>
    <label>
      <input
        type="password"
        placeholder="Password"
        v-model="loginForm.password"
      />
    </label>
    <button class="red" type="button" @click="submit">
      <i class="icon ion-md-lock"></i> Log in
    </button>

    <div class="segment">
      <button class="unit" type="button">
        <i class="icon ion-md-arrow-back"></i>
      </button>
      <button class="unit" type="button">
        <i class="icon ion-md-bookmark"></i>
      </button>
      <button class="unit" type="button">
        <i class="icon ion-md-settings"></i>
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import CryptoJS from "crypto-js";
import { login } from "@/api/index.js";

const loginForm = ref({
  username: "",
  password: "",
});

const submit = async () => {
  if (loginForm.value.username === "" || loginForm.value.password === "")
    return;
  const password = CryptoJS.SHA256(loginForm.value.password).toString();
  console.log(password, "password");
  const params = {
    username: loginForm.value.username,
    password,
  };
  const res = await login(params);
};
</script>

<style lang="less" scoped>
form {
  padding: 1rem;
  width: 1rem * 20;
  margin: 0 auto;

  .segment {
    padding: 1rem * 20;
    text-align: center;
  }

  button,
  input {
    border: 0;
    outline: 0;
    font-size: 1rem;
    border-radius: 1rem * 20;
    padding: 1rem;
    background-color: #ebecf0;
    text-shadow: 1px 1px 0 #fff;
  }

  label {
    display: block;
    margin-bottom: 1rem * 1.5;
    width: 100%;
  }

  input {
    margin-right: 1rem/2;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;

    &:focus {
      box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    }
  }

  button {
    color: #61677c;
    font-weight: bold;
    box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    }

    &:active {
      box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    }

    .icon {
      margin-right: 1rem/2;
    }

    &.unit {
      border-radius: 1rem/2;
      line-height: 0;
      width: 1rem * 3;
      height: 1rem * 3;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem/2;
      font-size: 1rem * 1.2;

      .icon {
        margin-right: 0;
      }
    }

    &.red {
      display: block;
      width: 100%;
      color: #ae1100;
    }
  }
}
</style>
