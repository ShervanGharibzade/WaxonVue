<template>
  <div class="bg-zinc-900 relative w-full relative">
    <div class="max-w-6xl mx-auto p-10">
      <div v-show="show" class="relative">
        <ReadMoreNews @close="ReadMore"/>
      </div>
      <div class="relative my-16">
        <h2 class="text-zinc-800 text-8xl -top-10 uppercase absolute xl:block lg:block sm:block hidden font-extrabold">news</h2>
        <h2 class="text-white text-3xl relative uppercase font-bold">latest news</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-w-full gap-10">
        <div class="w-full">
          <div class="w-full lg:w-80 xl:w-80 group overflow-hidden">
            <img @click="ReadMore" class="group-hover:scale-125 w-full transition-all duration-300" src="https://waxon.ibthemespro.com/img/3.ef4e978a.jpg"
                 alt="photo">
          </div>
          <div class="bg-black text-white p-5 w-full lg:w-80 xl:w-80 overflow-hidden relative">
            <span class="text-zinc-500 ">By Alex Watson05 April 2021</span>
            <p class="my-4 text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold">Format releases a new tool that enables direct video hosting</p>
          </div>
        </div>
        <div>
          <div class="w-full lg:w-80 xl:w-80 group overflow-hidden">
            <img @click="ReadMore" class="group-hover:scale-125 w-full transition-all duration-300" src="https://waxon.ibthemespro.com/img/2.1164d6ec.jpg"
                 alt="photo">
          </div>
          <div class="bg-black text-white p-5 w-full lg:w-80 xl:w-80 overflow-hidden relative">
            <span class="text-zinc-500 ">By Alex Watson05 April 2021</span>
            <p class="my-4 text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold">Format releases a new tool that enables direct video hosting</p>
          </div>
        </div>
        <div>
          <div class="w-full lg:w-80 xl:w-80 group overflow-hidden">
            <img @click="ReadMore" class="group-hover:scale-125 w-full transition-all duration-300" src="https://waxon.ibthemespro.com/img/1.44562211.jpg"
                 alt="photo">
          </div>
          <div class="bg-black text-white p-5 w-full lg:w-80 xl:w-80 overflow-hidden relative">
            <span class="text-zinc-500 ">By Alex Watson05 April 2021</span>
            <p class="my-4 text-md sm:text-lg md:text-lg lg:text-lg xl:text-lgfont-semibold">Format releases a new tool that enables direct video hosting</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReadMoreNews from "@/components/ReadMoreNews"

export default {
  components:{
    ReadMoreNews
  },
  data(){
    return {
      show:false
    }
  },
  methods:{
    ReadMore(){
      this.show = !this.show
    }
  }
}
</script>
