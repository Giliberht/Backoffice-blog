<template>
  <div
    class="border border-gray-300 bg-white shadow-md rounded-xl p-6 flex flex-col text-left w-[470px] h-auto gap-4 mb-4"
  >
    <section>
      <h2 class="text-lg uppercase text-left font-bold text-[#273e65]">
        Informations sur les utilisateurs
      </h2>
      <hr class="border-t-2 border-[#6893df] mt-1 w-[340px]" />
    </section>

    <!-- Statistiques générales -->
    <div class="flex flex-col items-start gap-4 px-2 text-gray-600 mb-4 mt-2">
      <h3 class="text-md font-semibold text-gray-700">
        Statistiques générales
      </h3>
      <div class="flex flex-row items-center gap-4 text-sm">
        <p>
          <font-awesome-icon
            icon="fa-solid fa-circle"
            class="text-gray-400 mr-1"
          />
          Total:
          <span class="font-semibold ml-2">{{ allUsers }}</span>
        </p>
        <p>
          <font-awesome-icon
            icon="fa-solid fa-circle"
            class="text-[#0f8000] mr-2"
          />
          En ligne: <span class="font-semibold ml-2">{{ onlineUsers }}</span>
        </p>
        <p>
          <font-awesome-icon
            icon="fa-solid fa-circle"
            class="text-red-600 mr-2"
          />
          Hors ligne:
          <span class="font-semibold ml-2">{{ offlineUsers }}</span>
        </p>
      </div>
    </div>

    <!-- Répartition des rôles -->
    <div class="flex flex-col items-start gap-4 px-2 text-gray-600 mb-4">
      <h3 class="text-md font-semibold text-gray-700">
        Répartition des rôles :
      </h3>
      <div class="flex flex-row items-center gap-4 text-sm">
        <p>
          <font-awesome-icon
            icon="fa-solid fa-user-shield"
            class="text-blue-600 mr-2"
          />
          Admins: <span class="font-semibold ml-2">{{ adminUsers }}</span>
        </p>
        <p>
          <font-awesome-icon
            icon="fa-solid fa-edit"
            class="text-purple-600 mr-2"
          />
          Editeurs: <span class="font-semibold ml-2">{{ editorUsers }}</span>
        </p>
        <p>
          <font-awesome-icon
            icon="fa-solid fa-user"
            class="text-yellow-500 mr-2"
          />
          Abonnés:
          <span class="font-semibold ml-2">{{ subscriberUsers }}</span>
        </p>
      </div>
    </div>

    <!-- Activités récentes -->
    <div class="flex flex-col items-start gap-4 px-2 text-gray-600 mb-4">
      <h3 class="text-md font-semibold text-gray-700">Activités récentes :</h3>
      <p class="text-sm">
        <font-awesome-icon
          icon="fa-solid fa-calendar-day"
          class="text-gray-500 mr-2"
        />
        Nouveaux inscrits cette semaine :
        <span class="font-semibold ml-1">{{ newUsersThisWeek }}</span>
      </p>
      <p class="text-sm">
        <font-awesome-icon
          icon="fa-solid fa-history"
          class="text-gray-500 mr-2"
        />
        Dernière connexion :
        <span class="font-semibold ml-1">{{ lastLogin }}</span>
      </p>
    </div>

    <!-- Alertes ou Notifications -->
    <div
      v-if="inactiveUsers > 0"
      class="text-red-600 font-semibold flex items-center gap-1 px-2 text-md"
    >
      <font-awesome-icon icon="fa-solid fa-exclamation-triangle" class="mr-2" />
      <span class="font-semibold">{{ inactiveUsers }}</span> utilisateurs
      inactifs.
    </div>
  </div>
</template>

<script>
import { users } from "@/lib/UsersData.js";
export default {
  name: "UserStat",
  data() {
    return {
      users,
      newUsersThisWeek: 8,
      lastLogin: "2024-08-10 14:23",
    };
  },
  computed: {
    allUsers() {
      return this.users.length;
    },
    onlineUsers() {
      return this.users.filter((user) => user.state === "En ligne").length;
    },
    offlineUsers() {
      return this.users.filter((user) => user.state === "Hors ligne").length;
    },
    adminUsers() {
      return this.users.filter((user) => user.role === "admin").length;
    },
    editorUsers() {
      return this.users.filter((user) => user.role === "editeur").length;
    },
    subscriberUsers() {
      return this.users.filter((user) => user.role === "abonné").length;
    },
    inactiveUsers() {
      return this.users.filter((user) => user.statut === "inactif").length;
    },
  },
};
</script>

<style scoped></style>
