<template>
  <div class="bg-black w-full p-10 h-full max-w-6xl mx-auto relative my-20">
    <div v-show="show" class="relative">
      <ReadMoreAbout @close="ReadMore"/>
    </div>
    <div class="xl:flex lg:flex md:flex sm:grid gap-16 mb-20">
      <div>
        <img class="w-full h-full object-cover" src="../assets/images/2.jpg" alt="pic">
      </div>
      <div class="text-white relative">
        <h2 class="xl:block lg:block md:block hidden uppercase text-zinc-800 md:left-22 lg:left-28 xl:left-32 -top-10 font-bold text-8xl absolute">about</h2>
        <div class="relative">
        <h3 class="font-extrabold text-4xl my-2">BERNARD SYDNEY</h3>
        <span class="italic text-zinc-400">Creative Web & App Developer</span>
        <hr class="my-10">
          <p class="text-zinc-400 mb-2 italic">My name is Bernard Sydney. I am a Web Developer, and I'm very passionate and dedicated to my work.</p>
        <p class="text-zinc-400 mb-2">With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
          <button @click="ReadMore" class="text-black bg-white border-2 my-4 px-5 py-3 hover:border-2 hover:bg-black hover:text-white">Learn More</button>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <swiper
          :slides-per-view="3"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="flex h-full my-10 cursor-pointer">
        <swiper-slide class="flex">
          <i class="fa fa-lightbulb-o text-white w-1/3 mx-4 text-3xl sm:text-4xl md:text-6xl pt-5" aria-hidden="true"></i>
          <div class="text-white text-sm sm:text-base">
            <h2>Creative Design</h2>
            <p>Web design is a similar process of creation, with the intention of the pre outer presenting...</p>
          </div>
        </swiper-slide>
        <swiper-slide class="flex">
          <i class="fa fa-paper-plane-o text-white w-1/3 mx-4 text-xl sm:text-2xl md:text-4xl pt-5" aria-hidden="true"></i>
          <div class="text-white text-sm sm:text-base">
            <h2>Adobe Photoshop</h2>
            <p>Web design is a similar process of creation, with the intention of the pre outer presenting...</p>
          </div>
        </swiper-slide>
        <swiper-slide class="flex">
          <i class="fa fa-barcode text-white w-1/3 text-xl sm:text-2xl md:text-4xl pt-5 mx-4" aria-hidden="true"></i>
          <div class="text-white text-sm sm:text-base">
            <h2>Brand Identity</h2>
            <p>Web design is a similar process of creation, with the intention of the pre outer presenting...</p>
          </div>
        </swiper-slide>
        <swiper-slide class="flex">
          <i class="fa fa-television text-white w-1/3 text-xl sm:text-2xl md:text-4xl pt-5 mx-4" aria-hidden="true"></i>
          <div class="text-white text-sm sm:text-base">
            <h2>Web Developer</h2>
            <p>Web design is a similar process of creation, with the intention of the pre outer presenting...</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import ReadMoreAbout from '../components/ReadMoreAbout'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


export default {
  components:{
    ReadMoreAbout,
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      show:false,
      change:3
    }
  },
  setup() {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  methods:{
    ReadMore(){
      this.show = !this.show
    }
  }
}
</script>
