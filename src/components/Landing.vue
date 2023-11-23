<template>
  <div class="h-screen flex flex-col items-center justify-center pt-20 ">
    <div class="mt-48 text-center space-y-4 ">
      <h1 id="headline1" class=" font-Moondance text-ccl2-White">
        Skinfinity
      </h1>
      <h2 id="headline2" class="font-Poppins text-ccl2-Gold font-semibold">
        CSGO trading and more
      </h2>
    </div>
    <div class="w-3/5 grid grid-cols-12 gap-4 mt-20">
      <div id="allWeapons"
           class="col-span-12 h-64 bg-ccl2-Dark-Blue-70 flex flex-col items-center justify-center text-ccl2-White space-y-4 relative"
      >
        <h3 class="text-4xl absolute font-light font-Poppins top-8 left-8">The newest collections for the best prices</h3>
        <router-link to="/listings" class="text-lg bg-white/70 text-black rounded-none px-8 py-2 font-semibold font-Poppins absolute bottom-8 right-32">SHOP NOW</router-link>
      </div>
      <div id="usp"
           class="bg-ccl2-Light-Blue-40 col-span-6 h-64 flex flex-col items-center justify-center text-ccl2-White space-y-4 relative"
      >
        <router-link to="/listings/team/CT" class="text-lg bg-white/70 font-Poppins font-semibold text-black rounded-none px-4 py-2 absolute bottom-8 right-24">CT-SIDE WEAPONS</router-link>
      </div>
      <div id="glock18"
           class="bg-ccl2-Light-Red-40 col-span-6 h-64 flex flex-col items-center justify-center text-ccl2-White space-y-4 relative"
      >
        <router-link to="/listings/team/T" class="text-lg bg-white/70 text-black font-semibold font-Poppins rounded-none px-4 py-2 absolute bottom-8 left-24">T-SIDE WEAPONS</router-link>
      </div>
    </div>
  </div>
</template>



<script setup>
</script>

<style scoped>
  #headline1 {
    font-size: 12rem;
    line-height: 1;
  }

  #headline2 {
    font-size: 3rem;
    line-height: 1;
  }

  #allWeapons {
    background-image: url("/img/landing/all.png");
    background-repeat: no-repeat;
    background-position: left top, right top, center bottom;
    background-size: cover  ;
    background-position-y: top;
  }

  #glock18 {
    background-image: url("/img/landing/glock18BG.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  #usp {
    background-image: url("/img/landing/uspBG.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
</style>

