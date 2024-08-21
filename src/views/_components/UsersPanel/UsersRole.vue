<template>
  <div class="w-full px-6">
    <div
      class="flex flex-col gap-6 border border-gray-300 bg-white rounded-xl shadow-lg p-6 mb-4"
    >
      <!-- Section de gestion des rôles -->
      <section>
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Gérer les rôles
        </h2>
        <hr class="border-t-2 border-[#6893df] mt-1 w-[165px]" />
      </section>

      <!-- Panel de gestion des rôles -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <!-- Formulaire -->
        <section>
          <h3 class="text-lg text-left font-medium text-[#273e65] mb-4">
            Informations du rôle
            <hr />
          </h3>
          <form @submit.prevent="submitRole" id="role-form" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex flex-col text-left gap-2">
                <label for="roleName" class="text-gray-700 text-sm font-bold"
                  >Nom du rôle :</label
                >
                <input
                  id="roleName"
                  v-model="newRole.name"
                  type="text"
                  class="border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
                  placeholder="Ex : Admin, Éditeur"
                  required
                />
              </div>

              <div class="flex flex-col text-left gap-2">
                <label
                  for="rolePermissions"
                  class="text-gray-700 text-sm font-bold"
                  >Permissions :</label
                >
                <div class="flex flex-wrap gap-2">
                  <div
                    v-for="permission in availablePermissions"
                    :key="permission"
                    class="flex items-center gap-3 mr-3"
                  >
                    <input
                      type="checkbox"
                      :id="permission"
                      :value="permission"
                      v-model="newRole.permissions"
                      class="focus:ring-[#ffac3f]"
                    />
                    <label :for="permission" class="text-sm">{{
                      permission
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col text-left gap-2">
              <label
                for="roleDescription"
                class="text-gray-700 text-sm font-bold"
                >Description :</label
              >
              <textarea
                id="roleDescription"
                v-model="newRole.description"
                class="border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
                placeholder="Description du rôle"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-4 py-2 text-sm font-medium text-white bg-[#ffac3f] rounded-md hover:bg-[#ffa52e] focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
            >
              <font-awesome-icon
                icon="fa-regular fa-square-plus"
                class="mr-2"
              />
              {{ editing ? "Modifier" : "Ajouter" }} le rôle
            </button>
          </form>
        </section>

        <!-- Liste des rôles existants -->
        <section>
          <h3 class="text-lg text-left font-medium text-[#273e65] mb-4">
            Rôles existants
            <hr />
          </h3>
          <ul class="mt-4 space-y-2">
            <li
              v-for="role in roles"
              :key="role.id"
              class="flex justify-between items-center p-4 gap-8 border-b border-gray-300"
            >
              <div class="text-left">
                <p class="font-semibold text-gray-700">{{ role.name }}</p>
                <p class="text-sm text-gray-600">{{ role.description }}</p>
                <p class="text-sm text-gray-500">
                  Permissions : {{ role.permissions.join(", ") }}
                </p>
              </div>
              <div class="flex gap-4">
                <button
                  @click="editRole(role)"
                  class="text-[#6893df] hover:text-[#ffac3f]"
                >
                  Modifier
                </button>
                <button
                  @click="deleteRole(role.id)"
                  class="text-red-500 hover:text-red-700"
                >
                  Supprimer
                </button>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roles: [
        {
          id: 1,
          name: "Admin",
          description: "Accès complet à toutes les fonctionnalités",
          permissions: [
            "Créer",
            "Lire",
            "Mettre à jour",
            "Supprimer",
            "Modifier",
          ],
        },
        {
          id: 2,
          name: "Éditeur",
          description: "Peut créer et modifier du contenu",
          permissions: ["Créer", "Lire", "Modifier"],
        },
        {
          id: 3,
          name: "Abonné",
          description: "Accès limité aux fonctionnalités de base",
          permissions: ["Lire"],
        },
      ],
      availablePermissions: [
        "Créer",
        "Lire",
        "Mettre à jour",
        "Modifier",
        "Supprimer",
      ],
      newRole: {
        id: null,
        name: "",
        description: "",
        permissions: [],
      },
      editing: false,
    };
  },
  methods: {
    submitRole() {},
    editRole(role) {
      this.newRole = { ...role };
      this.editing = true;
    },
    deleteRole(roleId) {
      this.roles = this.roles.filter((role) => role.id !== roleId);
    },
    resetForm() {
      this.newRole = {
        id: null,
        name: "",
        description: "",
        permissions: [],
      };
      this.editing = false;
    },
  },
};
</script>

<style scoped></style>
