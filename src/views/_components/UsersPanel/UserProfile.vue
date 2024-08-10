<template>
  <div class="flex justify-center p-6">
    <div
      class="bg-white shadow-lg rounded-xl border border-gray-300 p-6 w-full max-w-6xl"
    >
      <section class="mb-6">
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Profil de l'utilisateur
        </h2>
        <hr class="border-t-2 border-[#ffac3f] mt-1 w-1/5" />
      </section>

      <!-- Informations utilisateur -->
      <div class="grid grid-cols-2 gap-10">
        <div class="space-y-4">
          <div
            class="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
          >
            <font-awesome-icon
              icon="fa-solid fa-user"
              class="text-[#273e65] text-xl"
            />
            <p class="text-gray-800">
              <span class="font-semibold">Nom & Prénom : </span>
              {{ user.name }}
            </p>
          </div>

          <div
            class="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
          >
            <font-awesome-icon
              icon="fa-solid fa-lock"
              class="text-[#273e65] text-xl"
            />
            <p class="text-gray-800">
              <span class="font-semibold text-left">Mot de passe : </span>
              <input
                v-model="user.password"
                type="password"
                id="password"
                class="mt-1 rounded-lg border-none"
                required
                readonly
                disabled
              />
            </p>
          </div>
          <div
            class="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
          >
            <font-awesome-icon
              icon="fa-solid fa-id-badge"
              class="text-[#273e65] text-xl"
            />
            <p class="text-gray-800">
              <span class="font-semibold">Rôle : </span>
              {{ user.role }}
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <div
            class="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
          >
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              class="text-[#273e65] text-xl"
            />
            <p class="text-gray-800">
              <span class="font-semibold">Email : </span>
              {{ user.email }}
            </p>
          </div>

          <div
            class="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
          >
            <font-awesome-icon
              icon="fa-solid fa-calendar-alt"
              class="text-[#273e65] text-xl"
            />
            <p class="text-gray-800">
              <span class="font-semibold">Date d'inscription : </span>
              {{ user.registrationDate }}
            </p>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-6 flex justify-end gap-4">
        <button
          @click="editUser(user.id)"
          class="px-4 py-2 text-sm font-medium text-white bg-[#ffac3f] rounded-lg hover:bg-[#ffa52e] focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
        >
          Modifier
        </button>
        <router-link to="/backoffice/users-all">
          <button
            class="px-4 py-2 text-sm font-medium text-white bg-[#273e65] rounded-lg hover:bg-[#1e2a39] focus:outline-none focus:ring-2 focus:ring-[#273e65]"
          >
            Retour à la liste
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { users } from "@/lib/UsersData.js";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      const userId = parseInt(this.$route.params.id);
      this.user = users.find((user) => user.id === userId);
    },
    editUser(userId) {
      this.$router.push({ name: "EditUser", params: { id: userId } });
    },
  },
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
