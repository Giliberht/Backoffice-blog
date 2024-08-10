<template>
  <div class="flex flex-col items-start">
    <div class="flex gap-4">
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
    <div class="grid grid-cols-5 gap-x-14 gap-y-10 mt-5">
      <img
        v-for="image in filteredImages"
        :src="image.src"
        :alt="image.alt"
        :key="image.src"
        class="w-[240px] h-[150px] rounded-xl shadow-lg transition-transform transform hover:scale-105"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "/images/afficheanglais.jpg",
          alt: "Image 1",
          category: "blog",
          date: "2023-01-01",
        },
        {
          src: "/images/affichecinéma.jpg",
          alt: "Image 2",
          category: "projet",
          date: "2023-02-01",
        },
        {
          src: "/images/afficheevent.jpg",
          alt: "Image 3",
          category: "autre",
          date: "2023-03-01",
        },
        {
          src: "/images/agenda-actu.png",
          alt: "Image 4",
          category: "projet",
          date: "2023-04-01",
        },
        {
          src: "/images/afficheanglais.jpg",
          alt: "Image 5",
          category: "blog",
          date: "2023-05-01",
        },
        {
          src: "/images/affichecinéma.jpg",
          alt: "Image 6",
          category: "projet",
          date: "2023-06-01",
        },
        {
          src: "/images/afficheanglais.jpg",
          alt: "Image 7",
          category: "projet",
          date: "2023-07-01",
        },
        {
          src: "/images/affichecinéma.jpg",
          alt: "Image 8",
          category: "autres",
          date: "2023-08-01",
        },
        {
          src: "/images/afficheanglais.jpg",
          alt: "Image 9",
          category: "blog",
          date: "2023-09-01",
        },
      ],
      selectedCategory: "",
      selectedOrder: "",
      filteredImages: [],
    };
  },
  created() {
    this.filterImages();
  },
  methods: {
    filterImages() {
      let images = this.images;
      if (this.selectedCategory && this.selectedCategory !== "all") {
        images = images.filter(
          (image) => image.category === this.selectedCategory
        );
      }
      images.sort((a, b) => {
        if (this.selectedOrder === "asc") {
          return new Date(a.date) - new Date(b.date);
        } else {
          return new Date(b.date) - new Date(a.date);
        }
      });
      this.filteredImages = images;
    },
  },
};
</script>

<style scoped></style>
