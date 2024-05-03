<script>

export default {
  name:"register",
  data(){
    return{
      firstname:"",
      lastname:"",
      phoneNumber:"",
      gmail:"",
      password:"",
    }
  }
}
</script>

<template>
  <div class="register ">
    <pv-card class="register-content bg-cyan-500">
      <template #title>
        <div class="form-title">
          <h1>REGISTER</h1>
        </div>
      </template>
      <template #content>
        <div class="register-form flex flex-column gap-2">
          <label for="firstname flex flex-column gap-2">FirtsName</label>
          <input type="text" id="firstname" v-model="firstname" required>
        </div>
        <div class="register-form flex flex-column gap-2">
          <label for="lastname">LastName</label>
          <input  type="text" id="lastname" v-model="lastname" required>
        </div>
        <div class="register-form flex flex-column gap-2">
          <label for="phonenumber">Phone Number</label>
          <input type="text" id="phoneNumber" v-model="phoneNumber" required>
        </div>
        <div class="register-form flex flex-column gap-2">
          <label for="gmail">Gmail</label>
          <input type="text" id="gmail" v-model="gmail" required >
        </div>
        <div class="register-form flex flex-column gap-2">
          <label for="password">Password</label>
          <input type="text" id="password" v-model="password" required >
        </div>
        <router-link to="home">
          <button type="submit" class="btn-register">Register</button>
        </router-link>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>

.register-content{
  width: 100vh;
  margin: 0 auto;
  align-items: center;
}

.form-title h1{
  text-align: center;
  color:#002057;
  font-weight: bold;
}

.btn-register{
  display: flex;
  text-align: center;
  align-items: center;
  margin:0 auto;
  background-color: red;
  color:white;
  border: none;
  padding: 15px 32px;
  border-radius: 5px;
  box-shadow:none;

}


</style>