<template>
    <div class="profile-page">
        <section class="section section-shaped section-lg my-0">
            <div class="shape shape-style-1 bg-gradient-default">
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow v-for="(item, index) in blogs">
                  <div>
                    <p><span v-html="item.blog_title"></span></p>
                    <p><span v-html="item.blog_post"></span></p>
                  </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      blogs : [],
      modals: {
        modal1: false
      }
    };
  },
  mounted() {
    this.$http.get("http://127.0.0.1:8000/api/blogs",{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      // console.log(response)
      this.blogs = response.data
      // localStorage.setItem('user',response.data.success.name)
      // localStorage.setItem('jwt',response.data.success.token)

      // if (localStorage.getItem('jwt') != null){
      //   this.$router.go('/')
      // }
    })
    .catch(error => {
      console.log(error)
    })
  },
};
</script>
<style>
</style>
