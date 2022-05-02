<template>
  <div @click.self="closeTab" class="w-full top-10 h-[100vh] z-10 py-10 absolute">
    <div class="w-full h-full relative bg-zinc-800 text-white xl:w-full lg:w-full p-10 xl:p-20 lg:p-20 max-w-3xl z-10 rounded-xl mx-auto overflow-y-scroll">
      <i @click="closeTab" class="fa fa-times-circle-o absolute top-2 right-2 lg:right-10 lg:top-10 xl:right-10 xl:top-10 z-10 text-4xl" aria-hidden="true"></i>
      <div class="flex relative">
        <img src="../assets/images/2.jpg" alt="photo">
      </div>
      <span class="my-3">By Alex Watson05 / April 2021</span>
      <h3 class="my-3">Format releases a new tool that enables direct video hosting</h3>
      <p class="my-3">Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.</p>
      <p class="my-3">Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over.</p>
      <p class="my-3">Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be.</p>
      <div class="flex my-3">
        <i class="fa fa-quote-left text-7xl mr-5" aria-hidden="true"></i>
        <p>Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.</p>
      </div>
      <p class="my-3">Pretend everything is new and that you haven’t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off.</p>
      <p class="my-3">The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again.</p>
      <p class="my-3">
        <span></span>
        <i class="fa fa-facebook cursor-pointer text-white text-lg" aria-hidden="true"></i>
        <i class="fa fa-instagram cursor-pointer text-white text-lg ml-4" aria-hidden="true"></i>
        <i class="fa fa-dribbble cursor-pointer text-white text-lg ml-4" aria-hidden="true"></i>
        <i class="fa fa-youtube-play cursor-pointer text-white text-lg ml-4" aria-hidden="true"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    closeTab(){
      this.$emit('close')
    }
  }
}
</script>
