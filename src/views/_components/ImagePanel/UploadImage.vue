<template>
  <div class="flex flex-row p-6 gap-10">
    <div>
      <form
        @submit.prevent="uploadImage"
        class="flex flex-col items-start gap-5 border border-[#111827]/50 bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
      >
        <h1 class="text-xl font-semibold text-[#111827]">Ajouter des images</h1>
        <p class="text-sm text-[#111827]/75 text-left">
          Utilisez le formulaire ci-dessous pour ajouter de nouvelles images.
        </p>
        <input
          type="file"
          @change="handleFileUpload"
          accept=".png, .jpg, .jpeg, .webp"
          class="border border-[#111827]/35 rounded-md px-4 py-2 w-full text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
        />
        <input
          placeholder="nom du fichier"
          type="text"
          class="border border-[#111827]/35 rounded-md text-sm p-1 w-full focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
        />
        <div class="flex items-center gap-4">
          Catégorie: {{ selectedCategory }}
          <select
            v-model="selectedCategory"
            class="border border-[#111827]/35 rounded-md focus:outline-none p-1 focus:ring-2 focus:ring-[#ffac3f]"
          >
            <option disabled value="">Please select one</option>
            <option>Projet</option>
            <option>Blog</option>
            <option>Autres</option>
          </select>
        </div>
        <div v-if="previewUrl">
          <img
            :src="previewUrl"
            alt="Aperçu de l'image"
            class="mt-2 rounded-md shadow-md w-[480px] h-[240px] border"
          />
        </div>
        <button
          type="submit"
          class="flex justify-center items-center w-full md:w-1/3 bg-[#6893df] hover:bg-[#ffac3f] text-white rounded-md py-2 transition duration-300"
        >
          <font-awesome-icon
            icon="fa-regular fa-square-plus"
            class="mr-2 w-5 h-5"
          />
          <span>Ajouter</span>
        </button>
      </form>
    </div>
    <div>
      <form
        @submit.prevent="updateCategory"
        class="flex flex-col items-start gap-4 border border-[#111827]/50 bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
      >
        <h1 class="text-xl font-semibold text-[#111827]">
          Modifier une catégorie
        </h1>
        <p class="text-sm text-[#111827]/75 text-left">
          Utilisez le formulaire ci-dessous pour modifier les détails de la
          catégorie.
        </p>
        <div class="flex items-center gap-4">
          Catégorie: {{ selectedCategory }}
          <select
            v-model="selectedCategory"
            class="border border-[#111827]/35 rounded-md focus:outline-none p-1 focus:ring-2 focus:ring-[#ffac3f]"
          >
            <option disabled value="">Please select one</option>
            <option>Projet</option>
            <option>Blog</option>
            <option>Autres</option>
          </select>
        </div>
        <button
          type="submit"
          class="flex justify-center items-center w-full md:w-1/3 bg-[#6893df] hover:bg-[#ffac3f] text-white rounded-md py-2 transition duration-300"
        >
          <font-awesome-icon
            icon="fa-regular fa-pen-to-square"
            class="mr-2 w-5 h-5"
          />
          <span>Modifier</span>
        </button>
      </form>
    </div>
    <div>
      <form
        @submit.prevent="uploadImage"
        class="flex flex-col items-start gap-4 border border-[#111827]/50 bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
      >
        <h1 class="text-xl font-semibold text-gray-800">Créer une catégorie</h1>
        <p class="text-sm text-gray-600 text-left">
          Utilisez le formulaire ci-dessous pour ajouter de nouvelles images.
        </p>
        <input
          placeholder="nom du fichier"
          type="text"
          class="border border-[#111827]/35 rounded-md text-sm p-1 w-full focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
        />
        <button
          type="submit"
          class="flex justify-center items-center w-full md:w-1/3 bg-[#6893df] hover:bg-[#ffac3f] text-white rounded-md py-2 transition duration-300"
        >
          <font-awesome-icon
            icon="fa-regular fa-square-plus"
            class="mr-2 w-5 h-5"
          />
          <span>Créer</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["projets", "blog", "autres"],
      selectedCategory: "",
      previewUrl: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.previewUrl = URL.createObjectURL(file);
      }
    },
  },
};
</script>

<style scoped></style>
