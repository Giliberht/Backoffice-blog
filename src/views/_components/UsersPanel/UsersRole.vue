<template>
  <div class="flex flex-row justify-center p-6 gap-20">
    <div>
      <form
        @submit.prevent="submitRole"
        class="flex flex-col items-start gap-6 border border-gray-300 bg-white rounded-xl shadow-lg p-6 max-w-lg w-full"
        id="role-form"
      >
        <section>
          <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
            Gérer les rôles
          </h2>
          <hr class="border-t-2 border-[#ffac3f] mt-1" />
        </section>
        <p class="text-sm text-gray-600">
          Utilisez ce formulaire pour ajouter ou modifier des rôles.
        </p>

        <!-- Nom du rôle -->
        <div class="flex flex-col gap-2 w-full">
          <label
            for="roleName"
            class="block text-gray-700 text-sm text-left font-bold"
            >Nom du rôle :</label
          >
          <input
            id="roleName"
            v-model="newRole.name"
            type="text"
            class="border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
            placeholder="Ex: Admin, Editeur"
            required
          />
        </div>

        <!-- Description du rôle -->
        <div class="flex flex-col gap-2 w-full">
          <label
            for="roleDescription"
            class="block text-gray-700 text-sm text-left font-bold"
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

        <!-- Permissions associées -->
        <div class="flex flex-col gap-2 w-full">
          <label
            for="rolePermissions"
            class="block text-gray-700 text-sm text-left font-bold"
            >Permissions :</label
          >
          <div class="flex flex-wrap gap-3">
            <div
              v-for="permission in availablePermissions"
              :key="permission"
              class="flex items-center gap-2"
            >
              <input
                type="checkbox"
                :id="permission"
                :value="permission"
                v-model="newRole.permissions"
                class="focus:ring-[#ffac3f]"
              />
              <label :for="permission" class="text-sm">{{ permission }}</label>
            </div>
          </div>
        </div>

        <!-- Bouton de soumission -->
        <button
          type="submit"
          class="w-full bg-[#6893df] hover:bg-[#ffac3f] text-white rounded-md py-2 transition duration-300"
        >
          <font-awesome-icon icon="fa-regular fa-square-plus" class="mr-2" />
          {{ editing ? "Modifier" : "Ajouter" }} le rôle
        </button>
      </form>
    </div>
    <!-- Liste des rôles existants -->
    <div class="border border-gray-300 bg-white rounded-xl shadow-lg p-6">
      <section>
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Rôles existants
        </h2>
        <hr class="border-t-2 border-[#ffac3f] mt-1 w-1/3" />
      </section>
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
          name: "Super Admin",
          description: "Accès complet à toutes les fonctionnalités",
          permissions: ["Créer", "Lire", "Mettre à jour", "Supprimer"],
        },
        {
          id: 2,
          name: "Admin",
          description: "Peut créer et modifier du contenu",
          permissions: ["Créer", "Lire", "Mettre à jour"],
        },
        {
          id: 3,
          name: "Editeur",
          description: "Peut créer et modifier du contenu",
          permissions: ["Créer", "Lire", "Mettre à jour"],
        },
        {
          id: 4,
          name: "Abonné",
          description: "Peut créer et modifier du contenu",
          permissions: ["Créer", "Lire", "Mettre à jour"],
        },
      ],
      availablePermissions: ["Créer", "Lire", "Mettre à jour", "Supprimer"],
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
    submitRole() {
      if (this.editing) {
        const roleIndex = this.roles.findIndex(
          (role) => role.id === this.newRole.id
        );
        if (roleIndex !== -1) {
          this.roles.splice(roleIndex, 1, { ...this.newRole });
        }
      } else {
        const newId = this.roles.length
          ? Math.max(...this.roles.map((role) => role.id)) + 1
          : 1;
        this.roles.push({ id: newId, ...this.newRole });
      }
      this.resetForm();
    },
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
