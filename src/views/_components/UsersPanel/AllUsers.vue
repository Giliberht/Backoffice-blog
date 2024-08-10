<template>
  <div
    class="table-container col-span-2 border-gray-200 shadow-md rounded-xl w-full max-w-6xl"
  >
    <table class="table-auto w-full border-collapse border bg-[white]">
      <thead class="border bg-[#273e65] text-white">
        <th class="text-left p-4 border-gray-300">Nom</th>
        <th class="text-left p-4 border-gray-300">Rôle</th>
        <th class="text-left p-4 border-gray-300">État</th>
        <th class="text-left p-4 border-gray-300">Dernière connexion</th>
        <th class="text-left p-4 border-gray-300">Date d'inscription</th>
        <th class="text-left p-4 border-gray-300">Voir</th>
        <th class="text-left p-4 border-gray-300">Modifier</th>
        <th class="text-left p-4 border-gray-300">Supprimer</th>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="border-b border-gray-200 p-4">{{ user.name }}</td>
          <td class="border-b border-gray-200 p-4">{{ user.role }}</td>
          <td class="border-b border-gray-200 p-4">{{ user.state }}</td>
          <td class="border-b border-gray-200 p-4">{{ user.lastLogin }}</td>
          <td class="border-b border-gray-200 p-4">
            {{ user.registrationDate }}
          </td>
          <td class="border-b border-gray-200 p-4 text-center">
            <button
              @click="viewUser(user.id)"
              class="px-3 py-1 text-sm text-white bg-[#ffac3f]/85 rounded hover:bg-[#ffa52e] focus:outline-none focus:ring-2 focus:ring-[#273e65]"
            >
              Voir
            </button>
          </td>
          <td class="border-b border-gray-200 p-4 text-center">
            <button
              @click="editUser(user.id)"
              class="px-3 py-1 text-sm text-white bg-[#6990c7] rounded hover:bg-[#273e65]/90 focus:outline-none focus:ring-2 focus:ring-[#273e65]"
            >
              Modifier
            </button>
          </td>
          <td class="border-b border-gray-200 p-4 text-center">
            <button
              @click="deleteUser(user.id)"
              class="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
      console.log("Supprimer l'utilisateur avec ID:", userId);
      this.users = this.users.filter((user) => user.id !== userId);
    },
  },
};
</script>

<style scoped>
.table-container {
  overflow-y: auto;
  max-height: 70vh;
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
