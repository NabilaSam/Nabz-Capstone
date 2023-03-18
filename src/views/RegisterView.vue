<template>
    <div class="container-fluid">
        <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items" style="background-color: rgb(0,0,0,0.3);">
                        <h3>Register</h3>
                        <p>Fill in the data below to register your account.</p>
                        <form class="requires-validation" @submit.prevent="register">
                                <div class="col-md-12">
                                    <input class="form-control" v-model="firstName" type="text" name="name" placeholder="First Name" required>
                                    <div class="valid-feedback">First Name field is valid!</div>
                                    <div class="invalid-feedback">First Name field cannot be blank!</div>
                                </div>
                                <div class="col-md-12">
                                    <input class="form-control" v-model="lastName" type="text" name="lastname" placeholder="Last Name"
                                        required>
                                    <div class="valid-feedback">Last Name field is valid!</div>
                                    <div class="invalid-feedback">Last Name field cannot be blank!</div>
                                </div>
                                <div class="col-md-12">
                                    <input class="form-control" v-model="emailAdd" type="email" name="email" placeholder="E-mail Address"
                                        required>
                                    <div class="valid-feedback">Email field is valid!</div>
                                    <div class="invalid-feedback">Email field cannot be blank!</div>
                                </div>
                                <div class="col-md-12">
                                    <input class="form-control" v-model="cellphoneNumber" type="text" name="cell" placeholder="Cell Number" required>
                                    <div class="valid-feedback">Cell Number is valid!</div>
                                    <div class="invalid-feedback">Cell number field cannot be blank!</div>
                                </div>
                                <div class="col-md-12">
                                    <input class="form-control" v-model="userPass" type="password" name="password" placeholder="Password"
                                        required>
                                    <div class="valid-feedback">Password field is valid!</div>
                                    <div class="invalid-feedback">Password field cannot be blank!</div>
                                </div>
                                <div class="col-md-12">
                                    <input class="form-control" v-model="userRole" type="text" name="userRole" placeholder="Admin or User"
                                        required>
                                    <div class="valid-feedback">User Role field is valid!</div>
                                    <div class="invalid-feedback">User Role field cannot be blank!</div>
                                </div>

                                <div class="form-button mt-3">
                                    <button id="submit" type="submit" class="btn btn-primary">Register</button>
                                </div>
                                <div v-if="msg">
                                    <p class="text-center">{{ msg }}</p>
                                    <p class="text-center">Please <RouterLink to="/login">Login</RouterLink> to Continue</p>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            cellphoneNumber: null,
            emailAdd: "",
            userPass: "",
            userRole: "",
            userProfile: "https://i.postimg.cc/26Y1n3gw/3445053.png"
        }
    },
    computed : {
        msg() {
            return this.$store.state.message
        }
    },
    methods: {
        register() {
            const payload = {
                firstName: this.firstName,
                lastName: this.lastName,
                cellphoneNumber: this.cellphoneNumber,
                emailAdd: this.emailAdd,
                userPass: this.userPass,
                userRole: this.userRole,
                userProfile: this.userProfile,
            }
            this.$store.dispatch('register', payload)
        }
    }
}

</script>
<style scoped>
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

</style>