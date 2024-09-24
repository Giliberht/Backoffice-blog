<template>
  <div class="w-full px-6">
    <div class="bg-white shadow-md rounded-xl border border-gray-300 p-6 mb-4">
      <section class="mb-6">
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Modifier l'utilisateur
        </h2>
        <hr class="border-t-2 border-[#6893df] mt-1 w-[240px]" />
      </section>

      <!-- Formulaire de modification utilisateur -->
      <form @submit.prevent="updateUser" class="grid grid-cols-2 gap-10">
        <!-- Informations générales -->
        <section class="mb-4">
          <h3 class="text-lg text-left font-medium text-[#273e65] mb-4">
            Informations générales
            <hr />
          </h3>
          <div class="grid grid-cols-2 gap-5 text-sm">
            <div class="space-y-4">
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-user"
                  class="text-[#273e65] text-xl"
                />
                <label for="lastname" class="font-semibold">Nom</label>
                <input
                  v-model="user.lastname"
                  type="text"
                  id="lastname"
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
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
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                >
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>
            <div class="space-y-4">
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-user"
                  class="text-[#273e65] text-xl"
                />
                <label for="firstname" class="font-semibold">Prénom</label>
                <input
                  v-model="user.firstname"
                  type="text"
                  id="firstname"
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
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
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Informations du compte -->
        <section class="mb-4">
          <h3 class="text-lg text-left font-medium text-[#273e65] mb-4">
            Informations du compte
            <hr />
          </h3>
          <div class="grid grid-cols-2 gap-10 text-sm">
            <div class="space-y-4">
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-user"
                  class="text-[#273e65] text-xl"
                />
                <label for="pseudo" class="font-semibold">Pseudo</label>
                <input
                  v-model="user.pseudo"
                  type="text"
                  id="pseudo"
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
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
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                >
                  <option value="abonné">Abonné</option>
                  <option value="editeur">Editeur</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div class="space-y-4">
              <div
                class="relative flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-lock"
                  class="text-[#273e65] text-xl"
                />
                <label for="password" class="font-semibold">Mdp</label>
                <input
                  v-model="user.password"
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                />
                <button
                  type="button"
                  @click="togglePassword"
                  class="w-1/4 absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <font-awesome-icon
                    :icon="
                      showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
                    "
                  />
                </button>
              </div>
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-lock"
                  class="text-[#273e65] text-xl"
                />
                <label class="font-semibold">État</label>
                <select
                  v-model="user.statut"
                  id="role"
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                >
                  <option value="actif">Actif</option>
                  <option value="inactif">Inactif</option>
                  <option value="suspend">Suspendu</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </form>

      <!-- Actions -->
      <div class="mt-10 flex justify-end gap-4">
        <button
          @click="viewUser(user.id)"
          type="submit"
          class="px-4 py-2 text-sm font-medium text-white bg-[#ffac3f] rounded-md hover:bg-[#ffa52e] focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
        >
          <font-awesome-icon icon="fa-solid fa-floppy-disk" class="mr-2" />
          Enregistrer
        </button>
        <button
          @click="deleteUser(user.id)"
          class="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <font-awesome-icon icon="fa-solid fa-delete-left" class="mr-2" />
          Supprimer
        </button>
        <button
          type="button"
          @click="viewUser(user.id)"
          class="px-4 py-2 text-sm font-medium text-white bg-[#273e65] rounded-md hover:bg-[#1e2a39] focus:outline-none focus:ring-2 focus:ring-[#273e65]"
        >
          <font-awesome-icon
            icon="fa-solid fa-circle-chevron-left"
            class="mr-2"
          />
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
      users,
      showPassword: false,
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
    updateUser() {},
    viewUser(userId) {
      this.$router.push({ name: "UserProfile", params: { id: userId } });
    },
    deleteUser(userId) {
      this.users = this.users.filter((user) => user.id !== userId);
      this.$router.push({ path: "/backoffice/users-all" });
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped></style>
