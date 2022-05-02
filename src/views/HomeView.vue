<template>
  <div>
    <div id="home" class="bg-black w-full relative h-[100vh]">
      <Nav />
      <div class="flex relative h-full">
        <div class="hidden  lg:block lg:w-1/3 xl:block xl:bg-black xl:w-1/3">
        </div>
        <div class="w-full">
          <img class="object-cover w-full h-full" src="../assets/images/1.jpg" alt="pic">
        </div>
      </div>
      <div class=" max-w-5xl mx-auto">
        <transition appear name="fade">
          <div class="absolute top-60 font-extrabold text-white uppercase text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-8xl">
            <h2>
              Bernard
            </h2>
            <h2>
              sydney
            </h2>
          </div>
        </transition>
        <div class="overflow-hidden pl-10 lg:pl-0 top-[-3em] h-[3em] relative">
          <h2 class="absolute animate-[wiggle_1s_ease-in-out_infinite] bottom-0 z-20 text-white bg-white w-[1px] h-10"></h2>
        </div>
      </div>
    </div>
    <section id="about">
      <transition appear name="fade">
        <About/>
      </transition>
    </section>
    <section id="portfolio">
      <transition appear name="fade">
        <PortfolioView/>
      </transition>
    </section>
    <section id="testimonail">
      <transition appear name="fade">
        <Testimonail/>
      </transition>
    </section>
    <section id="news">
      <transition appear name="fade">
        <News/>
      </transition>
    </section>
    <section id="contact">
      <transition appear name="fade">
        <Contact/>
      </transition>
    </section>
    <div class="bg-zinc-900">
      <div class="grid text-center w-full h-full justify-item-center sm:flex max-w-6xl mx-auto py-10 flex gap-10 text-zinc-100">
        <div class="w-full">
          <span>WAXON © 2022</span>
          <p>ib-themes . All rights reserved.</p>
        </div>
        <div class="w-full">
          <span>Brook 103,</span>
          <p>90021 New York, USA</p>
        </div>
        <div class="w-full">
          <span>hi@waxon.com</span>
          <p>+77 033 442 55 57</p>
        </div>
        <div class="flex justify-center gap-5 w-full pt-5">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-google" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          <i class="fa fa-pinterest-p" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.fade-enter-from {
  opacity: 0;
  transform: translateY(160px);
}
.fade-leave-to{
  opacity: 0;
  transform: translateY(0px);
}
.fade-enter-active ,.fade-leave-active{
  transition: all 1s ease;
}
</style>

<script>
import Nav from '../components/Nav'
import About from  '../views/AboutView'
import PortfolioView from './PortfolioView'
import Testimonail from './TestimonailView'
import News from './NewsView'
import Contact from './ContactView'

export default {
  el:'#home',
  components:{
    About ,Nav ,PortfolioView ,Testimonail ,News ,Contact
  },
  data(){
    return{}
  },
  computed:{
    // scroll(){
    //   window.addEventListener('scroll' , ()=>{
    //     let gh = window.scrollY
    //     console.log(gh)
    //     if (gh>=300){
    //       this.$refs.back.classList.remove('xl:bg-transparent')
    //     }
    //   })
    // }
  }
}
</script>
