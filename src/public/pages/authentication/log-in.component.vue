<script>
export default {
  name: 'log-ing',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      alert(`Login attempt with email: ${this.email}`);
    },
  },
};
</script>
<template>
  <div class="log-in" ref="log-in">
    <pv-card class="cart-login bg-cyan-500">
      <template #title>
        <div class="title-login">
          <h2>PERUVENTURA</h2>
          <h1>WELCOME BACK</h1>
        </div>
      </template>
      <template #content>
        <div class="content-card">
          <div class="login-label flex flex-column gap-2">
            <label for="email">Email Adress</label>
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div class="login-label flex flex-column gap-2">
            <label for="email">Password</label>
            <input
              v-model="password"
              type="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <router-link to="home">
            <pv-button
              label="Submit"
              class="login-button flex align-items-center"
              type="submit"
              >Login</pv-button
            >
          </router-link>
          <hr />
          <router-link to="register">
            <pv-button label="link" link class="login-link flex"
              >Don’t have an account?</pv-button
            >
          </router-link>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style>
.log-in {
  background-color: #002057;
  width: 100vh;
  margin: 0 auto;
  align-items: center;
}

.title-login {
  border: 1px solid red;
  text-align: center;
}

.title-login h1 {
  font-size: 40px;
  color: #940808;
  font-weight: bold;
}
.title-login h2 {
  font-size: 32px;
  color: #002057;
  font-weight: bolder;
}

.content-card {
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
}

.login-label {
  padding: 10px;
}

.login-button {
  text-align: center;
  align-items: center;
  color: white;
  background-color: red;
  margin: 0 auto;
}

.p-button {
  text-align: center;
}

.login-link {
  align-items: center;
}
</style>
