<template>
  <div class="flex flex-row justify-center p-6 gap-20">
    <div>
      <form
        @submit.prevent="addUser"
        class="flex flex-col items-start gap-6 border border-gray-300 bg-white rounded-xl shadow-lg p-6 max-w-lg w-full"
        id="new-user"
      >
        <section class="">
          <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
            Ajouter un utilisateur
          </h2>
          <hr class="border-t-2 border-[#ffac3f] mt-1" />
        </section>
        <p class="text-sm text-gray-600">
          Utilisez le formulaire ci-dessous pour ajouter un nouvel utilisateur.
        </p>

        <!-- Civilité -->
        <div class="flex gap-3 w-full">
          <label
            class="block text-gray-700 text-sm text-left font-bold"
            for="civilite"
            >Civilité :</label
          >
          <fieldset class="flex gap-5">
            <div class="flex items-center gap-2">
              <input
                type="radio"
                id="mr"
                name="civilite"
                value="homme"
                checked
                class="focus:ring-[#ffac3f]"
              />
              <label for="mr" class="text-sm">M.</label>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="radio"
                id="mme"
                name="civilite"
                value="femme"
                class="focus:ring-[#ffac3f]"
              />
              <label for="mme" class="text-sm">Mme</label>
            </div>
          </fieldset>
        </div>

        <!-- Nom, Prénom, Email -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div class="flex flex-col gap-2">
            <label
              for="name"
              class="block text-gray-700 text-sm text-left font-bold"
              >Nom & Prénom :</label
            >
            <input
              id="name"
              v-model="newUser.name"
              type="text"
              class="border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
              placeholder="John Doe"
              required
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="email"
              class="block text-gray-700 text-sm text-left font-bold"
              >Email :</label
            >
            <input
              id="email"
              v-model="newUser.email"
              type="email"
              class="border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
              placeholder="exemple@domain.com"
              required
            />
          </div>
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label
            for="password"
            class="block text-gray-700 text-sm text-left font-bold"
            >Mot de passe :</label
          >
          <input
            id="password"
            v-model="newUser.password"
            type="password"
            class="border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
            placeholder="m@Dcv/jgj!10*d"
            minlength="12"
            maxlength="20"
            required
          />
        </div>

        <!-- Rôle et Date d'inscription -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div class="flex flex-col gap-2">
            <label
              for="role"
              class="block text-gray-700 text-sm text-left font-bold"
              >Rôle :</label
            >
            <select
              id="role"
              v-model="newUser.role"
              class="border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
              required
            >
              <option disabled value="">Choisir un rôle</option>
              <option value="abonné">Abonné</option>
              <option value="editeur">Editeur</option>
              <option value="admin">Admin</option>
              <option value="super-admin">Super Admin</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="registrationDate"
              class="block text-gray-700 text-sm text-left font-bold"
              >Date d'inscription :</label
            >
            <input
              v-model="registrationDate"
              id="registrationDate"
              type="date"
              readonly
              class="border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          class="w-full bg-[#6893df] hover:bg-[#ffac3f] text-white rounded-md py-2 transition duration-300"
        >
          <font-awesome-icon icon="fa-regular fa-square-plus" class="mr-2" />
          Ajouter l'utilisateur
        </button>
      </form>
    </div>
    <div
      class="border border-gray-300 bg-white shadow-md rounded-xl p-6 flex flex-col text-left w-[470px] h-auto gap-4"
    >
      <section>
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Informations sur les utilisateurs
        </h2>
        <hr class="border-t-2 border-[#ffac3f] mt-1" />
      </section>

      <!-- Statistiques générales -->
      <div class="flex flex-col items-start gap-4 px-2 text-gray-600 mb-4">
        <h3 class="text-md font-semibold text-gray-700">
          Statistiques générales
        </h3>
        <div class="flex flex-row items-center gap-4">
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
        <div class="flex flex-row items-center gap-4">
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
        <h3 class="text-md font-semibold text-gray-700">
          Activités récentes :
        </h3>
        <p>
          <font-awesome-icon
            icon="fa-solid fa-calendar-day"
            class="text-gray-500 mr-2"
          />
          Nouveaux inscrits cette semaine:
          <span class="font-semibold">{{ newUsersThisWeek }}</span>
        </p>
        <p>
          <font-awesome-icon
            icon="fa-solid fa-history"
            class="text-gray-500 mr-2"
          />
          Dernière connexion: <span class="font-semibold">{{ lastLogin }}</span>
        </p>
      </div>

      <!-- Alertes ou Notifications -->
      <div
        v-if="inactiveUsers > 0"
        class="text-red-600 font-semibold flex items-center gap-1 px-2"
      >
        <font-awesome-icon
          icon="fa-solid fa-exclamation-triangle"
          class="mr-2"
        />
        <span class="font-semibold">{{ inactiveUsers }}</span> utilisateurs
        inactifs.
      </div>
    </div>
  </div>
</template>

<script>
import { users } from "@/lib/UsersData.js";
export default {
  data() {
    return {
      categories: ["projets", "blog", "autres"],
      selectedCategory: "",
      previewUrl: null,
      registrationDate: this.getCurrentDate(),
      newUser: {
        name: "",
        genre: "",
        role: "",
        state: "Hors ligne",
        email: "",
        password: "",
        lastLogin: this.getCurrentDate(),
      },
      users,
      newUsersThisWeek: 8,
      lastLogin: "2024-08-10 14:23",
      inactiveUsers: 5,
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
      return this.users.filter(
        (user) => user.role === "admin" || user.role === "super admin"
      ).length;
    },
    editorUsers() {
      return this.users.filter((user) => user.role === "editeur").length;
    },
    subscriberUsers() {
      return this.users.filter((user) => user.role === "abonné").length;
    },
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.previewUrl = URL.createObjectURL(file);
      }
    },
    getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    addUser() {
      if (
        !this.newUser ||
        !this.newUser.genre ||
        !this.newUser.name ||
        !this.newUser.role ||
        !this.newUser.state ||
        !this.newUser.email ||
        !this.newUser.password
      ) {
        console.error("Formulaire incomplet");
        return;
      }
      const newId = users.length
        ? Math.max(...users.map((user) => user.id)) + 1
        : 1;
      const newUser = {
        id: newId,
        genre: this.newUser.genre,
        name: this.newUser.name,
        role: this.newUser.role,
        state: this.newUser.state,
        email: this.newUser.email,
        password: this.newUser.password,
        registrationDate: this.registrationDate,
      };
      users.push(newUser); // Ajouter l'utilisateur au tableau
      this.resetForm(); // Réinitialiser le formulaire après l'ajout
    },
    resetForm() {
      this.newUser = {
        genre: "",
        name: "",
        role: "",
        state: "Hors ligne",
        email: "",
        password: "",
      };
      this.registrationDate = this.getCurrentDate();
    },
  },
};
</script>

<style scoped></style>
