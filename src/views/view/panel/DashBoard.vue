<template>
  <div id="UploadImage" class="flex flex-col items-start">
    <div>
      <h1 class="text-xl uppercase font-bold text-[#273e65]">Dashboard</h1>
      <hr class="border border-[#ffac3f]" />
    </div>
    <div class="my-8 grid grid-cols-4 gap-4">
      <router-link
        to="/backoffice/dashboard-view"
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold border-[#cbd8ec hover:text-[#ffac3f] active:text-[#ffac3f]"
      >
        <font-awesome-icon
          icon="fa-solid fa-chart-line"
          class="mr-2 w-[24px] h-[24px] fill-current"
        />Statistiques générales</router-link
      >
      <router-link
        to="/backoffice/dashboard-view"
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold border-[#cbd8ec hover:text-[#ffac3f] active:text-[#ffac3f]"
      >
        <font-awesome-icon
          icon="fa-solid fa-globe"
          class="mr-2 w-[24px] h-[24px] fill-current"
        />Statistiques sociales</router-link
      >
      <router-link
        to="/backoffice/dashboard-view"
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold border-[#cbd8ec hover:text-[#ffac3f] active:text-[#ffac3f]"
      >
        <font-awesome-icon
          icon="fa-solid fa-swatchbook"
          class="mr-2 w-[24px] h-[24px] fill-current"
        />Statistiques de contenu</router-link
      >
    </div>
  </div>
  <div><router-view></router-view></div>
</template>
<script>
export default {};
</script>

<style></style>
