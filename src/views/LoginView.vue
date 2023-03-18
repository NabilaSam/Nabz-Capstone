<template >
    <form class="requires-validation" @submit.prevent="login">
                                <div class="col-md-12">
                                    <input class="form-control" type="email" v-model="emailAdd" name="email" placeholder="E-mail Address"
                                        required>
                                    <div class="valid-feedback">Email field is valid!</div>
                                    <div class="invalid-feedback">Email field cannot be blank!</div>
                                </div>
                                <div class="col-md-12">
                                    <input class="form-control" type="password" v-model="userPass" name="password" placeholder="Password"
                                        required>
                                    <div class="valid-feedback">Password field is valid!</div>
                                    <div class="invalid-feedback">Password field cannot be blank!</div>
                                </div>
                                <div class="form-button mt-3">
                                    <button id="submit" type="submit" class="btn btn-primary">Login</button>
                                </div>
                                <br>
                                <div class="account">
                                    <p>Create a new account
                                        <router-link to="/register" style="text-decoration:dotted;">here</router-link>.
                                    </p>
                                </div>
                                <!-- <div style="color:white;">
                                    <router-link to="/forgot" style="text-shadow: 0.5px 0 0.5px white;
                             color: white;">Forgot</router-link> password.
                                </div> -->
                            </form>
     
 </template>
 <script>
 export default {
    data() {
        return {
            emailAdd : '',
            userPass : '',
        }
    },
    methods: {
        login() {
            const payload = {
                emailAdd :this.emailAdd,
                userPass :this.userPass
            }
            this.$store.dispatch('login', payload)
        }
    }
}
 </script>
 <style scoped>
 
 h1{
   color: white;
 }
     .form-holder {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       text-align: center;
       min-height: 100vh;
 }
 
 .form-holder .form-content {
     position: relative;
     text-align: center;
     display: flex;
     -webkit-justify-content: center;
     justify-content: center;
     -webkit-align-items: center;
     align-items: center;
     padding: 60px;
 }
 
 .form-content .form-items {
     border: 3px solid #fff;
     padding: 40px;
     display: inline-block;
     width: 100%;
     -webkit-border-radius: 10px;
     border-radius: 10px;
     text-align: left;
 }
 
 .form-content h3 {
     color: #fff;
     text-align: left;
     font-size: 28px;
     font-weight: 600;
     margin-bottom: 5px;
 }
 
 
 .form-content p {
     color: #fff;
     text-align: left;
     font-size: 17px;
     font-weight: 300;
     line-height: 20px;
     margin-bottom: 30px;
 }
 
 
 .form-content label, .was-validated .form-check-input:valid~.form-check-label{
     color: #fff;
 }
 
 .form-content input[type=text], .form-content input[type=password], .form-content input[type=email], .form-content select {
     width: 100%;
     padding: 9px 20px;
     text-align: left;
     border: 0;
     outline: 0;
     border-radius: 6px;
     background-color: #fff;
     font-size: 15px;
     font-weight: 300;
     color: #050505;
     -webkit-transition: all 0.3s ease;
     transition: all 0.3s ease;
     margin-top: 16px;
 }
 
 
 .btn-primary{
     background-color: #000000;
     outline: none;
     border: 0px;
      box-shadow: none;
 }
 
 .btn-primary:hover, .btn-primary:focus, .btn-primary:active{
     background-color: #ffffff;
     color: #000000 !important;
     outline: none !important;
     border: none !important;
      box-shadow: none;
 }
 
 .form-content textarea {
     position: static !important;
     width: 100%;
     padding: 8px 20px;
     border-radius: 6px;
     text-align: left;
     background-color: #fff;
     border: 0;
     font-size: 15px;
     font-weight: 300;
     color: #8D8D8D;
     outline: none;
     resize: none;
     height: 120px;
     -webkit-transition: none;
     transition: none;
     margin-bottom: 14px;
 }
 
 .form-content textarea:hover, .form-content textarea:focus {
     border: 0;
     background-color: #ebeff8;
     color: #8D8D8D;
 }
 
 .mv-up{
     margin-top: -9px !important;
     margin-bottom: 8px !important;
 }
 
 </style>