<template>
  <div class="w-full px-6">
    <div class="bg-white shadow-lg rounded-xl border border-gray-300 p-6 mb-4">
      <section class="mb-6">
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Profil de l'utilisateur
        </h2>
        <hr class="border-t-2 border-[#6893df] mt-1 w-[240px]" />
      </section>
      <div class="grid grid-cols-2 gap-10 text-sm">
        <!-- Informations générales -->
        <section class="mb-4">
          <h3 class="text-lg text-left font-medium text-[#273e65] mb-4">
            Informations générales
            <hr />
          </h3>
          <div class="grid grid-cols-2 gap-5">
            <div class="space-y-4">
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-id-card"
                  class="text-[#273e65] text-xl"
                />
                <p class="text-gray-800">
                  <span class="font-semibold">Nom : </span>
                  {{ user.lastname }}
                </p>
              </div>
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-genderless"
                  class="text-[#273e65] text-xl"
                />
                <p class="text-gray-800">
                  <span class="font-semibold">Genre : </span>
                  {{ user.genre }}
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-id-card"
                  class="text-[#273e65] text-xl"
                />
                <p class="text-gray-800">
                  <span class="font-semibold">Prénom : </span>
                  {{ user.firstname }}
                </p>
              </div>
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
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
            </div>
          </div>
        </section>

        <!-- Informations du compte -->
        <section class="mb-4">
          <h3 class="text-lg text-left font-medium text-[#273e65] mb-4">
            Informations du compte
            <hr />
          </h3>

          <div class="grid grid-cols-2 gap-10">
            <div class="space-y-4">
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-circle-user"
                  class="text-[#273e65] text-xl"
                />
                <p class="text-gray-800">
                  <span class="font-semibold">Pseudo : </span>
                  {{ user.pseudo }}
                </p>
              </div>
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-lock"
                  class="text-[#273e65] text-xl"
                />
                <p class="text-gray-800">
                  <span class="font-semibold">Mdp : </span>
                  <input
                    v-model="user.password"
                    type="password"
                    id="password"
                    class="rounded-lg border-none"
                    readonly
                    disabled
                  />
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-id-badge"
                  class="text-[#273e65] text-lg"
                />
                <p class="text-gray-800">
                  <span class="font-semibold">Rôle : </span>
                  {{ user.role }}
                </p>
              </div>
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-check-circle"
                  class="text-[#273e65] text-xl"
                />
                <p class="text-gray-800">
                  <span class="font-semibold">État du compte : </span>
                  {{ user.statut }}
                </p>
              </div>
            </div>
          </div>
        </section>
        <!-- Activité du compte -->
        <section>
          <h3 class="text-lg text-left font-medium text-[#273e65] mb-4">
            Activité du compte
            <hr />
          </h3>
          <div class="grid grid-cols-2 gap-5 text-sm">
            <div
              class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
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
            <div
              class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
            >
              <font-awesome-icon
                icon="fa-solid fa-history"
                class="text-[#273e65] text-xl"
              />
              <p class="text-gray-800 text-left">
                <span class="font-semibold">Dernière connexion : </span>
                {{ user.lastLogin }}
              </p>
            </div>
            <div
              class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
            >
              <font-awesome-icon
                icon="fa-solid fa-fingerprint"
                class="text-[#273e65] text-xl"
              />
              <p class="text-gray-800 text-left">
                <span class="font-semibold">Dernière action : </span>
                {{ user.lastLogin }}
              </p>
            </div>
          </div>
        </section>
        <!-- Actions -->
        <div class="mt-10 flex justify-end items-end gap-4">
          <button
            @click="editUser(user.id)"
            class="px-4 py-2 text-sm font-medium text-white bg-[#ffac3f] rounded-md hover:bg-[#ffa52e] focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
          >
            <font-awesome-icon icon="fa-solid fa-pen-to-square" class="mr-2" />
            Modifier
          </button>
          <button
            @click="deleteUser(user.id)"
            class="px-3 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <font-awesome-icon icon="fa-solid fa-delete-left" class="mr-2" />
            Supprimer
          </button>
          <router-link to="/backoffice/users-all">
            <button
              class="px-4 py-2 text-sm font-medium text-white bg-[#273e65] rounded-md hover:bg-[#1e2a39] focus:outline-none focus:ring-2 focus:ring-[#273e65]"
            >
              <font-awesome-icon
                icon="fa-solid fa-circle-chevron-left"
                class="mr-2"
              />
              Retour à la liste
            </button>
          </router-link>
        </div>
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
    deleteUser(userId) {
      this.users = this.users.filter((user) => user.id !== userId);
      this.$router.push({ path: "/backoffice/users-all" });
    },
  },
};
</script>

<style scoped></style>
