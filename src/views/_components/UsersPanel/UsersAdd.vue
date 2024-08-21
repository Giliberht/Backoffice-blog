<template>
  <div class="w-full px-6">
    <div
      class="flex flex-col items-start gap-6 border border-gray-300 bg-white rounded-xl shadow-lg p-6 mb-4"
    >
      <section>
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Ajouter un utilisateur
        </h2>
        <hr class="border-t-2 border-[#6893df] mt-1 w-[240px]" />
      </section>
      <form
        @submit.prevent="addUser"
        id="new-user"
        class="grid grid-cols-2 gap-10"
      >
        <!-- Informations générales -->
        <section class="mb-4">
          <h3 class="text-lg text-left font-medium text-[#273e65] mb-4">
            Informations générales
            <hr />
          </h3>
          <div class="space-y-4">
            <div
              class="flex items-center gap-3 p-2 mb-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 text-sm"
            >
              <font-awesome-icon
                icon="fa-solid fa-image"
                class="text-[#273e65] text-xl"
              />
              <label for="profilePicture" class="font-semibold"
                >Photo de profil :</label
              >
              <input
                v-on:change="newUser.profilePicture"
                type="file"
                id="profilePicture"
                class="mt-1 px-2 py-1 rounded-lg border border-gray-300"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-5 text-sm">
            <div class="space-y-4">
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-user"
                  class="text-[#273e65] text-xl"
                />
                <label for="lastname" class="font-semibold">Nom :</label>
                <input
                  v-model="newUser.lastname"
                  type="text"
                  id="lastname"
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                  placeholder="Niel"
                />
              </div>
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-venus-mars"
                  class="text-[#273e65] text-xl"
                />
                <label for="gender" class="font-semibold">Genre :</label>
                <select
                  v-model="newUser.gender"
                  id="gender"
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                >
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-calendar"
                  class="text-[#273e65] text-xl"
                />
                <label for="birthdate" class="font-semibold"
                  >Date de naissance :</label
                >
                <input
                  v-model="newUser.birthdate"
                  type="date"
                  id="birthdate"
                  class="mt-1 px-2 py-1 rounded-lg border border-gray-300"
                />
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
                <label for="firstname" class="font-semibold">Prénom :</label>
                <input
                  v-model="newUser.firstname"
                  type="text"
                  id="firstname"
                  class="mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                  placeholder="Xavier"
                />
              </div>
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-envelope"
                  class="text-[#273e65] text-xl"
                />
                <label for="email" class="font-semibold">Email :</label>
                <input
                  v-model="newUser.email"
                  type="email"
                  id="email"
                  class="mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                  placeholder="email.adresse@example.com"
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
          <div class="grid grid-cols-2 gap-5 text-sm">
            <div class="space-y-4">
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-user"
                  class="text-[#273e65] text-xl"
                />
                <label for="pseudo" class="font-semibold">Pseudo :</label>
                <input
                  v-model="newUser.pseudo"
                  type="text"
                  id="pseudo"
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                  placeholder="Choisissez un pseudo"
                />
              </div>
              <div
                class="relative flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-lock"
                  class="text-[#273e65] text-xl"
                />
                <label for="password" class="font-semibold">Mdp</label>
                <input
                  v-model="newUser.password"
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  class="w-full mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                />
                <button
                  type="button"
                  @click="togglePassword"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2"
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
                  icon="fa-solid fa-bell"
                  class="text-[#273e65] text-xl"
                />
                <label for="notifications" class="font-semibold"
                  >Notifications :</label
                >
                <select
                  v-model="newUser.notifications"
                  id="notifications"
                  class="w-1/2 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                >
                  <option value="email">Par Email</option>
                  <option value="sms">Par SMS</option>
                  <option value="none">Aucune</option>
                </select>
              </div>
            </div>

            <div class="space-y-4">
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-id-badge"
                  class="text-[#273e65] text-xl"
                />
                <label for="role" class="font-semibold">Rôle :</label>
                <select
                  v-model="newUser.role"
                  id="role"
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                >
                  <option value="abonné">Abonné</option>
                  <option value="editeur">Éditeur</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div
                class="relative flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-lock"
                  class="text-[#273e65] text-xl"
                />
                <label for="confirmPassword" class="font-semibold"
                  >Confirmer Mdp :</label
                >
                <input
                  v-model="newUser.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  id="confirmPassword"
                  class="w-1/2 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                />
                <button
                  type="button"
                  @click="toggleConfirmPassword"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <font-awesome-icon
                    :icon="
                      showConfirmPassword
                        ? 'fa-solid fa-eye-slash'
                        : 'fa-solid fa-eye'
                    "
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <div></div>
        <!-- Actions -->
        <div class="mt-10 flex justify-end gap-4">
          <button
            type="submit"
            class="px-4 py-2 text-sm font-medium text-white bg-[#ffac3f] rounded-md hover:bg-[#ffa52e] focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
          >
            <font-awesome-icon icon="fa-solid fa-square-plus" class="mr-2" />
            Ajouter l'utilisateur
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
      </form>
    </div>
  </div>
</template>

<script>
import { users } from "@/lib/UsersData.js";

export default {
  data() {
    return {
      newUser: {
        lastname: "",
        firstname: "",
        gender: "",
        role: "abonné",
        pseudo: "",
        state: "Hors ligne",
        email: "",
        password: "",
        confirmPassword: "",
        lastLogin: this.getCurrentDate(),
        birthdate: "",
        profilePicture: null,
        interests: [],
        notifications: "email",
        securityQuestion: "",
      },
      users,
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    getCurrentDate() {
      let date = new Date();
      let day = String(date.getDate()).padStart(2, "0");
      let month = String(date.getMonth() + 1).padStart(2, "0");
      let year = date.getFullYear();
      return `${year}-${month}-${day}`;
    },
    addUser() {},
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  },
};
</script>

<style scoped></style>
