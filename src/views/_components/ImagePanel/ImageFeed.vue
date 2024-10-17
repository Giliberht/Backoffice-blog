<template>
  <div class="w-full px-6">
    <div
      class="flex flex-col gap-6 border border-gray-300 bg-white rounded-xl shadow-md p-6 mb-2"
    >
      <section>
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Galerie d'i'mages
        </h2>
        <hr class="border-t-2 border-[#6893df] mt-1 w-[190px]" />
      </section>

      <div class="flex justify-between mb-3">
        <div class="flex gap-2">
          <select
            v-model="selectedCategory"
            @change="filterImages"
            aria-label="Catégorie filter"
            class="border border-[#111827] rounded-md p-1 text-sm"
          >
            <option value="" disabled>Filtrer par</option>
            <option value="all">Toutes</option>
            <option value="projet">Projet</option>
            <option value="blog">Blog</option>
            <option value="autre">Autres</option>
          </select>
          <select
            v-model="selectedOrder"
            @change="filterImages"
            aria-label="Date filter"
            class="border border-[#111827] rounded-md p-1 text-sm"
          >
            <option value="" disabled>Trier par</option>
            <option value="asc">Date croissante</option>
            <option value="desc">Date décroissante</option>
          </select>
        </div>
        <div class="flex flex-wrap justify-end">
          <input
            type="search"
            v-model="searchQuery"
            class="w-full sm:w-[350px] pl-5 pr-4 py-1 rounded-l-md shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#273e65] focus:border-transparent"
            placeholder="Rechercher une image..."
          />
          <button
            class="bg-[#ffac3f]/95 hover:bg-[#ffac3f] rounded-r-md shadow-sm transition-colors duration-200 ease-in-out px-4"
          >
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="text-lg text-white"
            />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-6 mb-2 w-960">
        <div
          v-for="image in filteredImages"
          :key="image.src"
          class="flex flex-col bg-white border border-gray-300 rounded-md hover:shadow-lg transition-shadow"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full rounded-t-md mb-2 object-cover"
          />
          <div class="p-2 flex justify-between items-center">
            <div>
              <p
                class="text-md font-semibold text-left overflow-hidden text-ellipsis whitespace-nowrap w-[170px]"
              >
                {{ image.title }}
              </p>
            </div>

            <div class="flex justify-between mr-2 gap-3">
              <button
                class="text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                <font-awesome-icon icon="fa-solid fa-eye" class="text-lg" />
              </button>
              <button
                @click="editImage(image.src)"
                class="text-orange-500 hover:text-orange-700 focus:outline-none"
              >
                <font-awesome-icon
                  icon="fa-solid fa-pen-to-square"
                  class="text-lg"
                />
              </button>
              <button
                @click="deleteImage(image.src)"
                class="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <font-awesome-icon icon="fa-solid fa-trash" class="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-end justify-end gap-4">
        <button
          @click="newImage"
          class="flex px-4 py-2 text-sm font-medium text-white bg-[#273e65] rounded-md shadow-sm hover:bg-[#1e2a39] focus:outline-none focus:ring-2 focus:ring-[#273e65]"
        >
          <font-awesome-icon
            icon="fa-solid fa-square-plus"
            class="text-xl mr-2"
          />
          Nouvelle Image
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { images } from "@/lib/ImageData.js";

export default {
  data() {
    return {
      images: images,
      selectedCategory: "",
      selectedOrder: "",
      searchQuery: "",
      filteredImages: [],
    };
  },
  created() {
    this.filterImages();
  },
  methods: {
    filterImages() {
      let images = this.images;

      // Filter by category
      if (this.selectedCategory && this.selectedCategory !== "all") {
        images = images.filter(
          (image) => image.category === this.selectedCategory
        );
      }

      // Sort images
      images.sort((a, b) => {
        if (this.selectedOrder === "asc") {
          return new Date(a.date) - new Date(b.date);
        } else {
          return new Date(b.date) - new Date(a.date);
        }
      });

      // Filter by search query
      if (this.searchQuery) {
        images = images.filter((image) =>
          image.alt.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      this.filteredImages = images;
    },
    newImage() {
      // Logic to add a new image
    },
    editImage() {
      // Logic to edit the selected image
    },
    deleteImage() {
      // Logic to delete the selected image
    },
  },
};
</script>

<style scoped>
/* You can add any additional styles here */
</style>
