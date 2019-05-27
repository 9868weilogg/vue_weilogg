<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img src="@/assets/images/me.jpg" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="primary" class="mr-4" size="sm" @click="modals.modal1 = true">
                                        Skills
                                    </base-button>
                                    <modal :show.sync="modals.modal1">
                                        <h6 slot="header" class="modal-title" id="modal-title-default">Skills</h6>
                                        <div class="col-lg-12">
                                            <base-progress type="info" :value="75" label="PHP, Laravel"></base-progress>
                                            <base-progress type="info" :value="75" label="MySQL"></base-progress>
                                            <base-progress type="info" :value="75" label="HTML, CSS"></base-progress>
                                            <base-progress type="info" :value="70" label="Git"></base-progress>
                                            <base-progress type="info" :value="65" label="Javascript"></base-progress>
                                            <base-progress type="info" :value="75" label="jQuery"></base-progress>
                                            <base-progress type="info" :value="60" label="VueJS"></base-progress>
                                        </div>
                                    </modal>
                                    <!-- <a href="https://www.jobstreet.com.my/" target="_blank"><base-button type="warning" class="mr-4" size="sm">
                                        Jobstreet
                                    </base-button></a> -->
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">contact</span>
                                        <span class="description">william.wlcheah@gmail.com</span><br/>
                                        <span class="description">017 871 3513</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>William</h3>
                            <h5>Cheah Wei Logg
                                <span class="font-weight-light">, 27</span>
                            </h5>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Kuala Lumpur, Malaysia</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Fullstack Web Developer</div>
                            <div><i class="ni education_hat mr-2"></i>Universiti Putra Malaysia</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-justify">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>High tech always catch my eyes, this is one of the reason I choose to gain an engineering degree in university. The university's life is not as difficult as imagine, this is why I have the extra time to learn web programming by myself. I am impressed by the concept of automation, hence, I built <a href="dishmotion.weilogg.com">Dishmotion</a> website to automate the taking order process for my food delivery business.</p>
                                    <p>The food delivery business idea is inspired by my coursemates who miss their parents' home-cooked food. After sometime, I stopped the business due to time constraint for me to prepare food, study and do the delivery.</p>
                                    <p>On the other hand, I faced a difficulty of nobody to receive parcel for my online shopping. Therefore, I built <a href="gateready.weilogg.com">gateready</a> to offer service to help customers to receive their parcel and then deliver to them at their available time. I tested this on university students in UPM and found that the online shopping behavior is not poular yet, so gateready's service is not relevant for them.</p>
                                    <p>I received an job offer from <i>AD Consultants</i> as <b>Mechanical Engineer</b> and started to work in the construction industry. Construction industry is a traditional industry that do not embrace the new technology due to high cost and contains a lot of waste. Therefore, I decided to leave and move on to work as an <b>Industrial Engineer</b> in <i>Matrix-Ed Engineering</i>. I choose to work in this manufacturing plant because it offers an opportunity for me to work on robotic programming and transform existing production line to automated one. I believe programming and automation will be the future.</p>
                                    <p>After a year, I feel like exposing myself to a more technology driven industry and focus more in programming. I decided to leave and seek for a job as a <b>web developer</b>. I am looking forward to challenge myself and be armoured in order to participate in the future world of programming.</p>
                                    <p>I have joined <i>Beacon Systems</i> as <b>Web Developer</b> and it is great that I started to get involved in the programming world. I involved in building in-housed cloud based accounting software and outsourcing project which is a project management system.</p>
                                    <p>I wish to work in bigger team in order to learn more on the coding practise/ architecture to write maintainable and readable code and get exposed to new technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-2 bg-gradient-danger shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-sm pb-100">
                <div class="container pt-sm pb-100">
                    <div class="row text-center justify-content-center">
                        <div class="col-lg-10">
                            <h2 class="display-3 text-white">Portfolio</h2>
                            <p class="lead text-white">My products from the start of coding journey.</p>
                        </div>
                    </div>
                    <div class="container container-lg">
                        <div class="row">
                            <div class="col-md-6 mb-5 mb-md-0">
                                <div class="card card-lift--hover shadow border-0">
                                    <a href="http://dishmotion.weilogg.com">
                                        <!-- <video preload="auto" autoplay="autoplay" loop  id="dishmotionHomepage">
                                           <source src="@/assets/film/dishmotion-homepage.mov" type="video/mov"/>
                                           <source src="@/assets/film/dishmotion-homepage.mp4" type="video/mp4" />
                                           <source src="@/assets/film/dishmotion-homepage.ogg" type="video/ogg" />
                                           Your browser does not support the video tag.
                                        </video> -->
                                        <img id="dishmotionHomepageImg" src="@/assets/images/dishmotion-poster.jpg" alt="dishmotion poster" width="100%" height="auto">
                                    </a>
                                </div>
                                <h5 class="text-white mt-3">Dishmotion</h5>
                                <p class="text-white mt-3">First webpage built to take food order for food delivery service in Univserti Putra Malaysia.</p>
                            </div>
                            <div class="col-md-6 mb-5 mb-lg-0">
                                <div class="card card-lift--hover shadow border-0">
                                    <a href="http://gateready.weilogg.com">
                                        <!-- <video preload="auto" autoplay="autoplay" loop  id="dishmotionHomepage">
                                           <source src="@/assets/film/gateready-homepage.mov" type="video/mov"/>
                                           <source src="@/assets/film/gateready-homepage.mp4" type="video/mp4" />
                                           <source src="@/assets/film/gateready-homepage.ogg" type="video/ogg" />
                                           Your browser does not support the video tag.
                                        </video> -->
                                        <img id="gatereadyHomepageImg" src="@/assets/images/gateready-poster.jpg" alt="gateready poster" width="100%" height="auto">
                                    </a>
                                </div>
                                <h5 class="text-white mt-3">Gateready</h5>
                                <p class="text-white mt-3">Second webpage built to test popularity of online shopping in Universiti Putra Malaysia.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-5 mb-md-0 text-center">
                                <div class="card card-lift--hover shadow border-0">
                                    <a href="http://wages.weilogg.com">
                                        <!-- <video preload="auto" autoplay="autoplay" loop  id="dishmotionHomepage">
                                           <source src="@/assets/film/dishmotion-homepage.mov" type="video/mov"/>
                                           <source src="@/assets/film/dishmotion-homepage.mp4" type="video/mp4" />
                                           <source src="@/assets/film/dishmotion-homepage.ogg" type="video/ogg" />
                                           Your browser does not support the video tag.
                                        </video> -->
                                        <img id="wagesHomepageImg" src="@/assets/images/wages-home.png" alt="wages poster" width="30%" height="auto">
                                    </a>
                                </div>
                                <h5 class="text-white mt-3">Wages</h5>
                                <p class="text-white mt-3">Personal project for learning new skill.</p>
                            </div>
                        </div>
                    </div>
                </div>
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
      modals: {
        modal1: false
      }
    };
  }
};
</script>
<style>
</style>
