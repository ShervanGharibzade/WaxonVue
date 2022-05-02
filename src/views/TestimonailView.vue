<template>
  <div class="bg-black w-full h-full relative my-20">
    <div class="max-w-6xl mx-auto px-10">
      <div class="relative my-32">
        <h2 class="xl:block lg:block md:block hidden text-zinc-800 uppercase -top-16 font-extrabold md:text-7xl lg:text-9xl xl:text-9xl absolute">Testimonail</h2>
        <h2 class="text-white relative font-bold uppercase text-3xl">what clients say</h2>
      </div>
      <div class="lg:flex sm:gird md:flex xl:flex gap-10 pb-40">
        <div class="flex-1">
          <div v-for="post in filtered_posts" class="text-white">
            <i class="fa fa-quote-right text-8xl" aria-hidden="true"></i>
            <p class="text-zinc-400 italic my-6">{{post.text}}</p>
            <div class="flex">
              <img :src="post.url" alt="pic" class="mr-4 w-16 h-16 rounded-full">
              <div>
                <h2 class="font-bold text-xl">{{post.name}}</h2>
                <h2 class="text-gray-400 italic">{{post.job}}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 w-full flex sm:flex relative">
          <div class="md:block mr-2 w-full h-3/4 hidden">
              <img  class="cursor-pointer  w-full h-full object-cover" src="https://waxon.ibthemespro.com/img/1.48c9a595.jpg" alt="pic">
              <button @click="filter = 1" class="w-2/4 top-0 cursor-pointer left-0 right-0 h-3/4 absolute bg-zinc-900/40 focus:bg-zinc-900/0 z-20 text-red-800"></button>
          </div>
          <div class="relative md:block hidden w-2/3">
            <div class="relative">
              <img class="cursor-pointer hidden md:block  w-full h-full right-0 top-52 object-cover" src="https://waxon.ibthemespro.com/img/3.75910db8.jpg" alt="pic">
              <button @click="filter = 3" class="w-full top-0 cursor-pointer left-0 right-0 h-full absolute bg-zinc-900/40 focus:bg-zinc-900/0 z-20 text-red-800"></button>
            </div>
            <div class="relative mt-2">
              <img class="cursor-pointer  w-full h-full object-cover" src="https://waxon.ibthemespro.com/img/2.ed11aaa2.jpg" alt="pic">
              <button @click="filter = 2" class="w-full top-0 cursor-pointer left-0 right-0 h-full absolute bg-zinc-900/40 focus:bg-zinc-900/0 z-20 text-red-800"></button>
            </div>
          </div>
          <div class="xl:hidden lg:hidden overflow-hidden md:hidden w-full relative mm:flex flex gap-5 my-4">
            <div class="relative">
              <img class="cursor-pointer focus:bg-red-500 w-full h-full object-cover" src="https://waxon.ibthemespro.com/img/1.48c9a595.jpg" alt="pic">
              <button @click="filter = 1" class="w-full top-0 cursor-pointer left-0 right-0 h-full absolute bg-zinc-900/40 focus:bg-zinc-900/0 z-20 text-red-800"></button>
            </div>
            <div class="relative">
              <img class="cursor-pointer opacity-70 w-full h-full object-cover" src="https://waxon.ibthemespro.com/img/2.ed11aaa2.jpg" alt="pic">
              <button @click="filter = 2" class="w-full top-0 cursor-pointer left-0 right-0 h-full absolute bg-zinc-900/40 focus:bg-zinc-900/0 z-20 text-red-800"></button>
            </div>
            <div class="relative">
              <img class="cursor-pointer opacity-70 w-full h-full object-cover" src="https://waxon.ibthemespro.com/img/3.75910db8.jpg" alt="pic">
              <button @click="filter = 3" class="w-full top-0 cursor-pointer left-0 right-0 h-full absolute bg-zinc-900/40 focus:bg-zinc-900/0 z-20 text-red-800"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(["Posts"]),
    filtered_posts(){
      return this.Posts.filter((post)=>post.id === this.filter);
    },
  },
  data(){
    return{
      show:false,
      filter:1
    }
  }
}
</script>
