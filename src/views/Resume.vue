<template>
    <div class="resume-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 bg-gradient-success shape-skew alpha-4">
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
                <div class="card mt--300" style="box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);">
                    <div class="card-body px-4">
                        <h2 class="card-title">Resume</h2>
                        <div class="row justify-content-center card-text">
                            <div class="col-lg-10 order-lg-12 ">
                                <light-timeline :items='items'></light-timeline>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
 const theme = 'red';
export default {
  data () {
    return {
      items: [
        {
          tag: 'Oct, 2018',
          type: 'star',
          htmlMode: true,
          content: '<div><h3>Web Developer</h3><p>Beacon Systems Sdn Bhd</p><ul><li>Involved in building project management website from scratch.</li><li>Involved in Beacon Accounting Software development.</li></ul></div>'
        },
        {
          tag: 'Jun, 2018',
          htmlMode: true,
          color: '#dcdcdc',
          // type: 'circle',
          content: '<div><h5>Industrial Engineer</h5><p>Matrix-ED Engineering Sdn Bhd</p><ul><li>Planning with production planner on the schedule of moving machines into new factory.</li><li>Start relocate machines to new factory based on schedule.</li></ul></div>'
        },
        {
          tag: 'Feb, 2018',
          type: 'star',
          htmlMode: true,
          content: '<div><h3>Industrial Engineer</h3><p>Matrix-ED Engineering Sdn Bhd</p><ul><li>Study power requirement of every machine and produce a single diagram for electrician to construct the electrical system in new factory.</li><li>Liaise with main contractor on the progress of new factory renovation.</li></ul></div>'
        },
        {
          tag: 'Nov, 2017',
          // type: 'star',
          color: '#dcdcdc',
          htmlMode: true,
          content: '<div><h5>Industrial Engineer</h5><p>Matrix-ED Engineering Sdn Bhd</p><ul><li>In charged of the Lean Transformation Program that initiate by COO.</li><li>Conducted time study to reduce waste to achieve objectives of Lean Transformation Program.</li><li>Design and continuously improve the production floor layout toward the concept lean manufacturing.</li></ul></div>'
        },
        {
          tag: 'Sep, 2017',
          type: 'star',
          htmlMode: true,
          content: '<div><h3>Industrial Engineer</h3><p>Matrix-ED Engineering Sdn Bhd</p><ul><li>Trained to operate Turin Robotic Manipulator.</li><li>In charged of robotic welding department and produce welding program for new project.</li><li>Modify welding program of existing project to reduce welding cycle time.</li></ul></div>'
        },
        {
          tag: 'Mar, 2017',
          // type: 'star',
          color: '#dcdcdc',
          htmlMode: true,
          content: '<div><h5>Mechanical Engineer</h5><p>AD Consultants (M) Sdn Bhd</p><ul><li>In charge in project (Putrajaya chilled water plant extension).</li><li>Work full time at site to produce technical drawing and coordination work with contractors.</li></ul></div>'
        },
        {
          tag: 'Oct, 2016',
          type: 'star',
          htmlMode: true,
          content: '<div><h3>Mechanical Engineer</h3><p>AD Consultants (M) Sdn Bhd</p><ul><li>Design mechanical services (Fire Protection System, Cold Water and Sanitary Plumbing, Air Conditioning and Mechanical Ventilation System) for commercial shoplot development.</li><li>Assist in technical drawing for project such as Putrajaya government building and Shah Alam factory.</li></ul></div>'
        },
        {
          tag: 'July, 2016',
          type: 'star',
          htmlMode: true,
          content: '<div><h3>Freelance Web Developer</h3><p>July, 2016 - Oct 2016 (gateready)</p><ul><li>Developed a website to receive parcel on behalf of UPM students and deliver to them when they are available.</li><li>Online shopping behavior of UPM students is not popular and hence the website is discontinued.</li></ul><p>Feb 2015 - Nov 2015 (dishmotion)</p><ul><li>Provide home-cooked soup with rice delivery in UPM.</li><li>Developed a website to automate the taking order process from students in UPM.</li></ul></div>'
        }
      ]
    }
  }
};
</script>
<style>
</style>
