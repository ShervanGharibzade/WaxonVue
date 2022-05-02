<template>
  <div ref="el" class="fixed transition-all z-10 w-full bg-black  px-10 lg:bg-transparent xl:bg-transparent">
    <div class="xl:flex lg:flex md:grid mx-10 my-5 max-w-7xl mx-auto">
      <div class="flex-1">
        <img class="xl:w-20 lg:w-20 w-12 h-6 invert xl:h-10 lg:h-10" src="../assets/images/download.png" alt="logo">
      </div>
      <div>
        <ul class="hidden lg:flex xl:flex font-semibold text-white flex-1 text-xl pt-3  gap-10">
          <li>
            <a class="cursor-pointer" href="#home" v-smooth-scroll="{ duration: 1000, offset: -50}">Home</a>
          </li>
          <li>
            <a class="cursor-pointer" href="#about" v-smooth-scroll="{ duration: 1000, offset: -50}">About</a>
          </li>
          <li>
            <a class="cursor-pointer" href="#portfolio" v-smooth-scroll="{ duration: 1000, offset: -50}">Portfolio</a>
          </li>
          <li>
            <a class="cursor-pointer" href="#testimonail" v-smooth-scroll="{ duration: 1000, offset: -50}">Testimonail</a>
          </li>
          <li>
            <a class="cursor-pointer" href="#news" v-smooth-scroll="{ duration: 1000, offset: -50}">News</a>
          </li>
          <li>
            <a class="cursor-pointer" href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50}">Contact</a>
          </li>
        </ul>
      </div>
      <div @click="showNav" class="xl:hidden lg:hidden block cursor-pointer absolute top-3 right-5 pt-2 h-8 w-8 ml-10 grid group">
        <div class="bg-white h-[0.22em] w-8"></div>
        <div class="bg-white h-[0.22em] w-8"></div>
        <div class="bg-white h-[0.22em] w-8"></div>
      </div>
      <div v-show="show">
        <ul @click.self="showNav" class="xl:flex lg:flex absolute top-0 h-[100vh] right-0 left-0 z-10 bg-white text-black justify-center grid font-semibold text-white xl:flex-1 text-xl lg:flex-1 py-32 xl:pt-3 lg:pt-3 lg:gap-10 xl:gap-10">
          <li class="text-center">
            <a @click.self="showNav" class="cursor-pointer" href="#home" v-smooth-scroll="{ duration: 1000, offset: -50}">Home</a>
          </li>
          <li class="text-center">
            <a @click.self="showNav" class="cursor-pointer" href="#about" v-smooth-scroll="{ duration: 1000, offset: -50}">About</a>
          </li>
          <li class="text-center">
            <a @click.self="showNav" class="cursor-pointer" href="#portfolio" v-smooth-scroll="{ duration: 1000, offset: -50}">Portfolio</a>
          </li>
          <li class="text-center">
            <a @click.self="showNav" class="cursor-pointer" href="#testimonail" v-smooth-scroll="{ duration: 1000, offset: -50}">Testimonail</a>
          </li>
          <li class="text-center">
            <a @click.self="showNav" class="cursor-pointer" href="#news" v-smooth-scroll="{ duration: 1000, offset: -50}">News</a>
          </li>
          <li class="text-center">
            <a @click.self="showNav" class="cursor-pointer" href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50}">Contact</a>
          </li>
          <li class="xl:hidden pt-5 lg:hidden">
            <i class="fa fa-pinterest-p px-2 cursor-pointer" aria-hidden="true"></i>
            <i class="fa fa-google px-2 cursor-pointer" aria-hidden="true"></i>
            <i class="fa fa-spotify px-2 cursor-pointer" aria-hidden="true"></i>
            <i class="fa fa-soundcloud px-2 cursor-pointer" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      point:null
    }
  },
  methods:{
    showNav(){
      this.show = !this.show
    }
  },
  mounted(){
    window.addEventListener('scroll' , ()=>{
      this.point = window.scrollY
      if(this.point>=300){
        this.$refs.el.style.backgroundColor = 'black'
      }
      if(this.point<=300){
        this.$refs.el.style.backgroundColor = 'transparent'
      }
    })
  }
}
</script>
