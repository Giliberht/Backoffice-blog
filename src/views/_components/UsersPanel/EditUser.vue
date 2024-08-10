<template>
  <div class="flex justify-center p-6">
    <div
      class="bg-white shadow-lg rounded-xl border border-gray-300 p-6 w-full"
    >
      <section class="mb-6">
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Modifier l'utilisateur
        </h2>
        <hr class="border-t-2 border-[#ffac3f] mt-1 w-1/3" />
      </section>

      <!-- Formulaire de modification utilisateur -->
      <form @submit.prevent="updateUser" class="grid grid-cols-2 gap-10">
        <div class="space-y-4">
          <div
            class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
          >
            <font-awesome-icon
              icon="fa-solid fa-user"
              class="text-[#273e65] text-xl"
            />
            <label for="name" class="font-semibold">Nom & Prénom</label>
            <input
              v-model="user.name"
              type="text"
              id="name"
              class="mt-1 p-2 rounded-lg border border-gray-300"
              required
            />
          </div>

          <div
            class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
          >
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              class="text-[#273e65] text-xl"
            />
            <label for="email" class="font-semibold">Email</label>
            <input
              v-model="user.email"
              type="email"
              id="email"
              class="mt-1 p-2 rounded-lg border border-gray-300"
              required
            />
          </div>

          <div
            class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
          >
            <font-awesome-icon
              icon="fa-solid fa-id-badge"
              class="text-[#273e65] text-xl"
            />
            <label for="role" class="font-semibold">Rôle</label>
            <select
              v-model="user.role"
              id="role"
              class="mt-1 p-2 rounded-lg border border-gray-300"
              required
            >
              <option value="abonné">Abonné</option>
              <option value="editeur">Editeur</option>
              <option value="admin">Admin</option>
              <option value="super-admin">Super Admin</option>
            </select>
          </div>
        </div>
        <div class="space-y-4">
          <div
            class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
          >
            <font-awesome-icon
              icon="fa-solid fa-lock"
              class="text-[#273e65] text-xl"
            />
            <label for="password" class="font-semibold">Mot de passe</label>
            <input
              v-model="user.password"
              type="password"
              id="password"
              class="mt-1 p-2 rounded-lg border border-gray-300"
              required
            />
          </div>

          <div
            class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
          >
            <font-awesome-icon
              icon="fa-solid fa-venus-mars"
              class="text-[#273e65] text-xl"
            />
            <label for="gender" class="font-semibold">Genre</label>
            <select
              v-model="user.gender"
              id="gender"
              class="mt-1 p-2 rounded-lg border border-gray-300"
              required
            >
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
              <option value="autre">Autre</option>
            </select>
          </div>
        </div>
      </form>
      <!-- Actions -->
      <div class="mt-6 flex justify-end gap-4">
        <button
          type="submit"
          class="px-4 py-2 text-sm font-medium text-white bg-[#ffac3f] rounded-lg hover:bg-[#ffa52e] focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
        >
          Enregistrer
        </button>
        <button
          type="button"
          @click="viewUser(user.id)"
          class="px-4 py-2 text-sm font-medium text-white bg-[#273e65] rounded-lg hover:bg-[#1e2a39] focus:outline-none focus:ring-2 focus:ring-[#273e65]"
        >
          Retour au profil
        </button>
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
    updateUser() {
      // Logique pour mettre à jour l'utilisateur
      console.log("Utilisateur mis à jour:", this.user);
      // Exemple de mise à jour locale
      const index = users.findIndex((user) => user.id === this.user.id);
      if (index !== -1) {
        users[index] = { ...this.user }; // Remplacez l'utilisateur dans la liste
      }
    },
    viewUser(userId) {
      this.$router.push({ name: "UserProfile", params: { id: userId } });
    },
  },
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
