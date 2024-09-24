<template>
  <div id="UserPanel" class="flex flex-col items-start space-y-8">
    <!-- Section Titre -->
    <section>
      <h1 class="text-2xl text-left uppercase font-bold text-[#273e65]">
        Gestion des utilisateurs
      </h1>
      <hr class="border-t-2 border-[#ffac3f] mt-2" />
    </section>
    <!-- Section Contenu Dynamique -->
    <div
      class="max-h-[100vh] overflow-auto w-full flex items-center justify-center"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
