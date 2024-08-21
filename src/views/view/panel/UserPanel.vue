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
    <nav class="grid grid-cols-4 gap-10">
      <router-link
        to="/backoffice/users-all"
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold rounded-md text-[#273e65] hover:text-[#ffa52e] active:text-[#ffa52e]"
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
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold text-[#273e65] hover:text-[#ffa52e] active:text-[#ffa52e]"
        aria-label="Ajouter des utilisateurs"
      >
        <font-awesome-icon
          icon="fa-solid fa-user-plus"
          class="mr-2 w-[20px] h-[20px] fill-current"
        />
        Ajouter des utilisateurs
      </router-link>

      <router-link
        to="/backoffice/users-role"
        class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-semibold text-[#273e65] hover:text-[#ffa52e] active:text-[#ffa52e]"
        aria-label="Modifier les rôles"
      >
        <font-awesome-icon
          icon="fa-solid fa-list-check"
          class="mr-3 w-[18px] h-[18px] fill-current"
        />
        Gérer les rôles
      </router-link>
    </nav>

    <!-- Section Contenu Dynamique -->
    <div
      class="max-h-[75vh] overflow-auto w-full flex items-center justify-center"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
