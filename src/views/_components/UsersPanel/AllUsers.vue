<template>
  <div class="w-full px-6">
    <div class="bg-white shadow-md rounded-xl border border-gray-300 p-6 mb-4">
      <section class="mb-6">
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Liste des utilisateurs
        </h2>
        <hr class="border-t-2 border-[#6893df] mt-1 w-[230px]" />
      </section>
      <div class="table-container col-span-2 border-gray-200 w-full mb-4">
        <table class="table-auto w-full border-collapse border bg-[white]">
          <thead class="border bg-[#273e65] text-white">
            <th class="text-left p-4 border-gray-300">Nom & prénom</th>
            <th class="text-left p-4 border-gray-300">Rôle</th>
            <th class="text-left p-4 border-gray-300">Statut</th>
            <th class="text-left p-4 border-gray-300">État</th>
            <th class="text-left p-4 border-gray-300">Dernière connexion</th>
            <th class="text-left p-4 border-gray-300"></th>
            <th class="text-left p-4 border-gray-300"></th>
            <th class="text-left p-4 border-gray-300"></th>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td class="border-b border-gray-200 p-4">
                {{ user.lastname }} {{ user.firstname }}
              </td>
              <td class="border-b border-gray-200 p-4">{{ user.role }}</td>
              <td class="border-b border-gray-200 p-4">{{ user.state }}</td>
              <td class="border-b border-gray-200 p-4">{{ user.statut }}</td>
              <td class="border-b border-gray-200 p-4">{{ user.lastLogin }}</td>
              <td class="border-b border-gray-200 p-4 text-center">
                <button
                  @click="viewUser(user.id)"
                  class="px-3 py-1 text-sm text-white bg-[#ffac3f]/85 rounded-md hover:bg-[#ffa52e] focus:outline-none focus:ring-2 focus:ring-[#273e65]"
                >
                  <font-awesome-icon icon="fa-solid fa-eye" class="mr-2" />
                  Voir le profil
                </button>
              </td>
              <td class="border-b border-gray-200 p-4 text-center">
                <button
                  @click="editUser(user.id)"
                  class="px-3 py-1 text-sm text-white bg-[#6990c7] rounded-md hover:bg-[#273e65]/90 focus:outline-none focus:ring-2 focus:ring-[#273e65]"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-pen-to-square"
                    class="mr-2"
                  />
                  Modifier
                </button>
              </td>
              <td class="border-b border-gray-200 p-4 text-center">
                <button
                  @click="deleteUser(user.id)"
                  class="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-delete-left"
                    class="mr-2"
                  />
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { users } from "@/lib/UsersData.js";

export default {
  data() {
    return {
      users,
    };
  },
  methods: {
    viewUser(userId) {
      this.$router.push({ name: "UserProfile", params: { id: userId } });
    },
    editUser(userId) {
      this.$router.push({ name: "EditUser", params: { id: userId } });
    },
    deleteUser(userId) {
      this.users = this.users.filter((user) => user.id !== userId);
    },
  },
};
</script>

<style scoped>
.table-container {
  overflow-y: auto;
  max-height: 64vh;
}

table {
  background-color: #ffffff;
}

th,
td {
  text-align: left;
  padding: 12px;
}

table tr:nth-child(odd) {
  background-color: #e2e8f0;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
