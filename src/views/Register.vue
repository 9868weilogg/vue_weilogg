<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign up with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            addon-left-icon="ni ni-hat-3"
                                            v-model="name">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="email">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="password">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Confirm Password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="confirm_password">
                                </base-input>
                                <!-- <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div> -->
                                <!-- <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox> -->
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="register" :disabled="registerClicked.bool">
                                        {{ registerClicked.message }}
                                    </base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data(){
    return {
      name: "test",
      email: "test@mail.com",
      password: "123456",
      confirm_password: "123456",
      registerClicked: {
        bool: false,
        message: "Create Account",
      },

    }
  },
  methods : {
    register(){
      this.registerClicked.bool = true
      this.registerClicked.message = "Please wait..."
      if(this.password === this.confirm_password && this.password.length >0) {
        // console.log(this.name)
        // console.log(this.email)
        // console.log(this.password)
        // console.log(this.confirm_password) 
        this.$http.post("http://127.0.0.1:8000/api/register",{
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log(response)
          localStorage.setItem('user',response.data.success.name)
          localStorage.setItem('jwt',response.data.success.token)

          if (localStorage.getItem('jwt') != null){
            this.$router.go('/')
          }
        })
        .catch(error => {
          console.log(error.response)
        }) 
      } else {
        this.password = ""
        this.confirm_password = ""
        this.registerClicked.bool = false
        this.registerClicked.message = "Create account"
      }
    }
    
  },
  beforeRouteEnter (to, from, next) { 
    if (localStorage.getItem('jwt')) {
      return next('/');
    }

    next();
  },
};
</script>
<style>
</style>
