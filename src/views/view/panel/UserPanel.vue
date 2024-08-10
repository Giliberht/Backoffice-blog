<template>
  <div id="UserPanel" class="flex flex-col items-start space-y-8">
    <!-- Section Titre -->
    <section>
      <h1 class="text-2xl text-left uppercase font-bold text-[#273e65]">
        Gestion des utilisateurs
      </h1>
      <hr class="border-t-2 border-[#ffac3f] mt-2" />
    </section>

    <!-- Section Navigation -->
    <nav class="grid grid-cols-4 gap-8 w-full">
      <router-link
        to="/backoffice/users-all"
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold border-[#cbd8ec hover:text-[#ffac3f] active:text-[#ffac3f]"
        aria-label="Liste des utilisateurs"
      >
        <font-awesome-icon
          icon="fa-solid fa-users"
          class="mr-3 w-[24px] h-[24px] fill-current"
        />
        Liste des utilisateurs
      </router-link>

      <router-link
        to="/backoffice/users-add"
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold border-[#cbd8ec hover:text-[#ffac3f] active:text-[#ffac3f]"
        aria-label="Ajouter des utilisateurs"
      >
        <font-awesome-icon
          icon="fa-solid fa-square-plus"
          class="mr-2 w-[20px] h-[20px] fill-current"
        />
        Ajouter des utilisateurs
      </router-link>

      <router-link
        to="/backoffice/users-role"
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold border-[#cbd8ec hover:text-[#ffac3f] active:text-[#ffac3f]"
        aria-label="Modifier les rôles"
      >
        <font-awesome-icon
          icon="fa-solid fa-pen"
          class="mr-2 w-[18px] h-[18px] fill-current"
        />
        Gérer les rôles
      </router-link>
    </nav>

    <!-- Section Contenu Dynamique -->
    <div
      class="max-h-[70vh] overflow-auto w-full flex items-center justify-center"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Classe commune pour les liens de navigation */
</style>
