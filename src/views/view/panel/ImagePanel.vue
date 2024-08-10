<template>
  <div id="UploadImage" class="flex flex-col items-start">
    <div>
      <h1 class="text-xl uppercase font-bold text-[#273e65]">
        Gestion des images
      </h1>
      <hr class="border border-[#ffac3f]" />
    </div>
    <div class="my-8 flex">
      <router-link
        to="/backoffice/images-all"
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold border-[#cbd8ec hover:text-[#ffac3f] active:text-[#ffac3f]"
      >
        <font-awesome-icon
          icon="fa-regular fa-image"
          class="mr-2 w-[22px] h-[22px] fill-current"
        />Galeries</router-link
      >
      <router-link
        to="/backoffice/images-upload"
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold border-[#cbd8ec hover:text-[#ffac3f] active:text-[#ffac3f]"
      >
        <font-awesome-icon
          icon="fa-solid fa-screwdriver-wrench"
          class="mr-2 w-[22px] h-[22px] fill-current"
        />Gérer</router-link
      >
    </div>
  </div>
  <div><router-view></router-view></div>
</template>

<script>
export default {};
</script>

<style></style>
