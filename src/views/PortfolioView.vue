<template>
  <div class="bg-zinc-800 w-full h-full p-10 relative my-20">
    <div class="max-w-6xl mx-auto py-20">
      <div class="text-white mb-5">
        <h2 class="hidden sm:block uppercase top-5 font-extrabold text-8xl text-zinc-900 absolute">Protfolio</h2>
        <div class="relative sm:flex grid">
          <h2 class="flex-1">Featured works</h2>
          <div class="flex">
            <ul ref="ItemMenu" v-show="show" class="hidden sm:flex gap-8">
              <li @click="filter = 'all'" class="cursor-pointer">All</li>
              <li @click="filter = 'vimeo'" class="cursor-pointer">Vimeo</li>
              <li @click="filter = 'youtube'" class="cursor-pointer">Youtube</li>
              <li @click="filter = 'all'" class="cursor-pointer">Image</li>
            </ul>
            <div @click="menu" class="hidden sm:grid h-8 w-8 ml-10 grid group">
              <div class="bg-white h-[0.22em] transition-all duration-200 w-3 group-hover:ml-5"></div>
              <div class="bg-white h-[0.22em] w-8"></div>
              <div class="bg-white h-[0.22em] transition-all duration-200 ml-5 w-3 group-hover:ml-0"></div>
            </div>
            <ul class="flex my-4 block sm:hidden justify-center w-full gap-5">
              <li @click="filter = 'all'" class="cursor-pointer">All</li>
              <li @click="filter = 'vimeo'" class="cursor-pointer">Vimeo</li>
              <li @click="filter = 'youtube'" class="cursor-pointer">Youtube</li>
              <li @click="filter = 'all'" class="cursor-pointer">Image</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 justify-center sm:grid-cols-2 xl:grid-cols-3 gap-10">
        <div  v-for="photo in filtered_posts">
          <div class="overflow-hidden w-full h-3/4 group">
            <a :href="photo.url" data-lightbox="roadtrip">
              <img class="transition-all w-full h-full object-cover duration-300 group-hover:scale-125" data-lightbox="roadtrip" :src="photo.url" alt="pic"/>
            </a>
          </div>
          <a class="text-white block font-bold my-2" :href="photo.url" data-lightbox="roadtrip">{{photo.name}}</a>
          <span class="text-zinc-500">{{photo.type}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(["Photos"]),
    filtered_posts(){
      if(this.filter === 'all') return this.Photos;
      return this.Photos.filter((photo)=>photo.type === this.filter);
    },
  },
  data(){
    return{
      show:false,
      filter:'all'
    }
  },
  methods:{
    menu(){
      this.show = !this.show
    }
  }
}
</script>
