<template>
  <div className="h-screen flex flex-col items-center justify-center pt-20 ">
    <div className="text-center space-y-4 ">
      <h1 className="text-[13vw] md:text-6xl lg:text-[12.75rem] leading-none font-Moondance text-ccl2-White">
        Skinfinity</h1>
      <h2 className="text-[3.4375rem] leading-none font-Poppins text-ccl2-Gold font-bold">CSGO trading and more</h2>
    </div>
    <div className="bg-ccl2-Dark-Blue-70 w-3/5 h-1/4 flex items-center justify-center flex-col space-y-4 mt-20 ">
      <h3 className="text-4xl text-ccl2-White">The newest collections for the best prices</h3>
      <router-link to="/listings" className="text-lg text-ccl2-White">SHOP NOW</router-link>
    </div>
    <div className="flex w-3/5 justify-between space-x-3">
      <div className="bg-ccl2-Light-Blue-40 w-1/2 h-80 flex items-center justify-center text-ccl2-White">
        <router-link to="/listings/team/CT">CT-SIDE WEAPONS</router-link>
      </div>
      <div className="bg-ccl2-Light-Red-40 w-1/2 h-80 flex items-center justify-center text-ccl2-White">
        <router-link to="/listings/team/T">T-SIDE WEAPONS</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
