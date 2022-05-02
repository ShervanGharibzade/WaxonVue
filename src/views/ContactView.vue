<template>
  <div class="bg-black w-full">
    <div class="max-w-6xl mx-auto my-20 p-10">
      <div class="relative my-16">
        <h2 class="hidden sm:block text-zinc-800 text-8xl -top-10 uppercase absolute font-extrabold">contact</h2>
        <h2 class="text-white text-3xl relative uppercase font-bold">get it touch</h2>
      </div>
      <div class="grid lg:flex gap-10">
        <div>
          <input class="text-white italic bg-black placeholder:text-zinc-500 pl-2 w-full border my-3 h-10 border-zinc-600" placeholder="Name" type="text">
          <input class="text-white italic bg-black placeholder:text-zinc-500 pl-2 w-full border my-3 h-10 border-zinc-600" placeholder="Email" type="email">
          <textarea class="text-white italic bg-black placeholder:text-zinc-500 pl-2 w-full border my-3 h-20 border-zinc-600" placeholder="Message" type="text" />
          <button class="bg-white transition-all duration-300 p-4 hover:pr-6 hover:tracking-widest">Send Message</button>
        </div>
        <div class="w-full">
          <OpenStreetMap class="mx-auto"/>
        </div>
      </div>
      </div>

  </div>
</template>
<script>
import OpenStreetMap from "../components/OpenStreetMap";

export default {
  components:{
    OpenStreetMap
  }
}
</script>
