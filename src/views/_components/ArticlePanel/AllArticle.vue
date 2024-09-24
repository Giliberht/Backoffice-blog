<template>
  <div class="w-full px-6">
    <div
      class="flex flex-col gap-6 border border-gray-300 bg-white rounded-xl shadow-md p-6 mb-2"
    >
      <section>
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Tous les articles
        </h2>
        <hr class="border-t-2 border-[#6893df] mt-1 w-[190px]" />
      </section>
      <div class="flex justify-between mb-3">
        <div class="flex">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="setFilter(filter)"
            :class="[
              'mr-2 px-4 py-1 rounded-md shadow-sm text-sm text-white',
              {
                'bg-[#ffac3f] ': currentFilter === filter,
                'bg-[#6990c7]/90 hover:bg-[#273e65]/90':
                  currentFilter !== filter,
              },
            ]"
          >
            {{ filter }}
          </button>
        </div>
        <span></span>
        <div class="flex flex-wrap justify-end">
          <input
            type="search"
            v-model="searchQuery"
            class="w-full sm:w-[350px] pl-5 pr-4 py-1 rounded-l-md shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#273e65] focus:border-transparent"
            placeholder="Rechercher un article..."
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
      <div class="flex flex-row flex-wrap gap-x-8 gap-y-10 mb-2">
        <ul class="grid grid-cols-4 flex-wrap gap-x-8 gap-y-10 mb-2">
          <li
            v-for="article in filteredArticles"
            :key="article.id"
            class="p-4 bg-white hover:shadow-md hover:rounded-lg rounded-md border-b border-l border-gray-300"
          >
            <div class="flex items-center justify-between">
              <h2
                class="text-lg font-semibold text-left overflow-hidden text-ellipsis whitespace-nowrap w-[170px]"
              >
                {{ article.title }}
              </h2>
              <span
                :class="[
                  'inline-block w-2.5 h-2.5 rounded-full mr-2',
                  {
                    'bg-green-500': article.status === 'Publiés',
                    'bg-orange-500': article.status === 'Brouillons',
                    'bg-blue-500': article.status === 'Programmés',
                  },
                ]"
              ></span>
            </div>
            <div class="flex gap-x-4 mt-3">
              <img
                :src="article.thumbnail"
                alt="Image de l'article"
                class="w-[100px] h-[100px] object-cover rounded-md"
              />
              <p
                class="text-gray-600 w-[175px] text-left my-2 text-sm overflow-hidden text-ellipsis line-clamp-2"
              >
                {{ article.excerpt }}
              </p>
            </div>

            <div class="flex justify-between mt-5">
              <p class="text-sm text-gray-400">Auteur : {{ article.author }}</p>
              <div class="flex items-center gap-x-4 text-sm">
                <button
                  class="text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  <font-awesome-icon icon="fa-solid fa-eye" class="text-lg" />
                </button>
                <button
                  @click="editArticle(article.id)"
                  class="text-orange-500 hover:text-orange-700 focus:outline-none"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-pen-to-square"
                    class="text-lg"
                  />
                </button>
                <button
                  @click="deleteArticle(article.id)"
                  class="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <font-awesome-icon icon="fa-solid fa-trash" class="text-lg" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex items-end justify-end gap-8">
        <div class="flex items-center gap-4 mt-4">
          <button
            class="px-4 py-2 text-sm font-medium flex items-center text-white bg-[#6990c7]/90 hover:bg-[#273e65]/90 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#273e65]"
          >
            <font-awesome-icon
              icon="fa-solid fa-arrow-left"
              class="text-lg mr-3"
            />
            Précédent
          </button>
          <button
            class="px-4 py-2 text-sm flex items-center font-medium text-white bg-[#6990c7]/90 hover:bg-[#273e65]/90 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#273e65]"
          >
            Suivant
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-lg ml-3"
            />
          </button>
        </div>
        <button
          @click="newArticle"
          class="flex px-4 py-2 text-sm font-medium text-white bg-[#273e65] rounded-md shadow-sm hover:bg-[#1e2a39] focus:outline-none focus:ring-2 focus:ring-[#273e65]"
        >
          <font-awesome-icon
            icon="fa-solid fa-square-plus"
            class="text-xl mr-2"
          />
          Nouvel Article
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: ["Tous", "Publiés", "Brouillons", "Programmés"],
      currentFilter: "Tous",
      articles: [
        {
          id: 1,
          title: "Je suis le numéro 1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum molestie quam et consectetur. Aenean viverra mauris vitae sollicitudin molestie. Vestibulum condimentum metus sit amet quam porttitor mollis.",
          status: "Publiés",
          author: "Gibert Victor",
          thumbnail: "https://via.placeholder.com/100",
        },
        {
          id: 2,
          title: "Article 2",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum molestie quam et consectetur. Aenean viverra mauris vitae sollicitudin molestie. Vestibulum condimentum metus sit amet quam porttitor mollis.",
          status: "Brouillons",
          author: "Lemoine Julien",
          thumbnail: "https://via.placeholder.com/100",
        },
        {
          id: 3,
          title: "Article 3",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum molestie quam et consectetur. Aenean viverra mauris vitae sollicitudin molestie. Vestibulum condimentum metus sit amet quam porttitor mollis.",
          status: "Programmés",
          author: "Bernard Emma",
          thumbnail: "https://via.placeholder.com/100",
        },
        {
          id: 4,
          title: "Article 4",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum molestie quam et consectetur. Aenean viverra mauris vitae sollicitudin molestie. Vestibulum condimentum metus sit amet quam porttitor mollis.",
          status: "Programmés",
          author: "Dubois Nicolas",
          thumbnail: "https://via.placeholder.com/100",
        },
        {
          id: 5,
          title: "Article 5",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum molestie quam et consectetur. Aenean viverra mauris vitae sollicitudin molestie. Vestibulum condimentum metus sit amet quam porttitor mollis.",
          status: "Programmés",
          author: "Lemoine Julien",
          thumbnail: "https://via.placeholder.com/100",
        },
        {
          id: 5,
          title: "Article 6",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum molestie quam et consectetur. Aenean viverra mauris vitae sollicitudin molestie. Vestibulum condimentum metus sit amet quam porttitor mollis.",
          status: "Programmés",
          author: "Lemoine Julien",
          thumbnail: "https://via.placeholder.com/100",
        },
        {
          id: 5,
          title: "Article 7",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum molestie quam et consectetur. Aenean viverra mauris vitae sollicitudin molestie. Vestibulum condimentum metus sit amet quam porttitor mollis.",
          status: "Programmés",
          author: "Lemoine Julien",
          thumbnail: "https://via.placeholder.com/100",
        },
        {
          id: 5,
          title: "Article 8",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum molestie quam et consectetur. Aenean viverra mauris vitae sollicitudin molestie. Vestibulum condimentum metus sit amet quam porttitor mollis.",
          status: "Programmés",
          author: "Lemoine Julien",
          thumbnail: "https://via.placeholder.com/100",
        },
      ],
    };
  },
  computed: {
    filteredArticles() {
      if (this.currentFilter === "Tous") return this.articles;
      return this.articles.filter(
        (article) => article.status === this.currentFilter
      );
    },
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
    newArticle() {},
    editArticle() {},
    deleteArticle() {},
  },
};
</script>

<style scoped></style>
