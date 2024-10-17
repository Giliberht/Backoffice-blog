<template>
  <div class="w-full px-6">
    <div
      class="flex flex-col items-start gap-6 border border-gray-300 bg-white rounded-xl shadow-md p-6 mb-4"
    >
      <section>
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Nouvel article
        </h2>
        <hr class="border-t-2 border-[#6893df] mt-1 w-[170px]" />
      </section>
      <div>
        <form
          @submit.prevent="addArticle"
          id="new-article"
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
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200 text-sm"
              >
                <font-awesome-icon
                  icon="fa-solid fa-image"
                  class="text-[#273e65] text-xl"
                />
                <label for="articleImage" class="font-semibold"
                  >Image de l'article :</label
                >
                <input
                  type="file"
                  id="articleImage"
                  class="mt-1 px-2 py-1 rounded-lg border border-gray-300"
                />
              </div>
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-heading"
                  class="text-[#273e65] text-xl"
                />
                <label for="title" class="font-semibold">Titre :</label>
                <input
                  v-model="newArticle.title"
                  type="text"
                  id="title"
                  class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                  placeholder="Titre de l'article"
                />
              </div>
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-file"
                  class="text-[#273e65] text-xl"
                />
                <label for="content" class="font-semibold">Contenu :</label>
                <textarea
                  v-model="newArticle.content"
                  id="content"
                  rows="4"
                  class="w-full mt-1 px-2 py-1 rounded-lg border border-gray-300"
                  required
                  placeholder="Écrivez le contenu de l'article ici..."
                ></textarea>
              </div>
            </div>
          </section>

          <!-- Informations supplémentaires -->
          <section class="mb-4">
            <h3 class="text-lg text-left font-medium text-[#273e65] mb-4">
              Informations supplémentaires
              <hr />
            </h3>
            <div class="grid grid-cols-2 gap-5 text-sm">
              <div class="space-y-4">
                <div
                  class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-tag"
                    class="text-[#273e65] text-xl"
                  />
                  <label for="category" class="font-semibold"
                    >Catégorie :</label
                  >
                  <select
                    v-model="newArticle.category"
                    id="category"
                    class="w-2/3 mt-1 px-2 py-1 rounded-lg border border-gray-300"
                    required
                  >
                    <option value="technologie">Technologie</option>
                    <option value="mode">Mode</option>
                    <option value="nourriture">Nourriture</option>
                    <option value="voyage">Voyage</option>
                    <!-- Ajouter d'autres catégories selon besoin -->
                  </select>
                </div>
              </div>
              <div
                class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <font-awesome-icon
                  icon="fa-solid fa-clock"
                  class="text-[#273e65] text-xl"
                />
                <label for="publicationDate" class="font-semibold"
                  >Date de publication :</label
                >
                <input
                  v-model="newArticle.publicationDate"
                  type="date"
                  id="publicationDate"
                  class="mt-1 px-2 py-1 rounded-lg border border-gray-300"
                />
              </div>
            </div>
          </section>
        </form>
        <!-- Actions -->
        <div class="mt-10 flex justify-end gap-4">
          <button
            type="submit"
            class="px-4 py-2 text-sm font-medium text-white bg-[#ffac3f] rounded-md hover:bg-[#ffa52e] focus:outline-none focus:ring-2 focus:ring-[#ffac3f]"
          >
            <font-awesome-icon icon="fa-solid fa-square-plus" class="mr-2" />
            Ajouter l'article
          </button>
          <router-link to="/backoffice/article-all">
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
export default {
  data() {
    return {
      newArticle: {
        image: null,
        title: "",
        content: "",
        category: "",
        publicationDate: "",
      },
    };
  },
  methods: {
    submitNewArticle() {
      if (
        !this.newArticle.title ||
        !this.newArticle.content ||
        !this.newArticle.author
      ) {
        alert("Veuillez remplir tous les champs obligatoires !");
        return;
      }
      console.log("Nouvel article ajouté :", this.newArticle);
      this.resetForm();
    },
    resetForm() {
      this.newArticle = {
        title: "",
        content: "",
        author: "",
        thumbnail: "",
        status: "Publiés",
      };
    },
  },
};
</script>

<style scoped></style>
