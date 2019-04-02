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
                                <small>Or sign in with credentials</small>
                            </div>
                            <form role="form">
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
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="login()" :disabled="loginClicked.bool">
                                        {{ loginClicked.message }}
                                    </base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="/#/register" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
// import axios from 'axios'
export default {
  data(){
    return {
      email: "weilogg@gmail.com",
      password: "Logg5843",
      loginClicked: {
        bool: false,
        message: "sign in"
      }
    }
  },
  methods : {
    login() {
      this.loginClicked.bool = true
      this.loginClicked.message = "Please wait..."
      if(this.password.length > 0) {
        // console.log(this.email)
        // console.log(this.password)
        this.$http.post("http://127.0.0.1:8000/api/login",{
          email: this.email,
          password: this.password,
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
            this.$router.go('/blogs')
          }
        })
        .catch(response => {
          console.log(response)
        })
      } else {
        this.password = ""
      }
    }
  },
  beforeRouteEnter (to, from, next) { 
    if (localStorage.getItem('jwt')) {
      return next('/blogs');
    }

    next();
  },
};
</script>
<style>
</style>
