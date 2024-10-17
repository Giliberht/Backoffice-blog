<template>
  <div class="w-full px-6">
    <div class="bg-white shadow-md rounded-xl border border-gray-300 p-6 mb-4">
      <section class="mb-6">
        <h2 class="text-xl uppercase text-left font-bold text-[#273e65]">
          Commentaires
        </h2>
        <hr class="border-t-2 border-[#6893df] mt-1 w-[165px]" />
      </section>
      <div class="flex justify-between mb-6">
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
            v-for="comment in filteredComments"
            :key="comment.id"
            class="p-4 bg-white hover:shadow-md hover:rounded-lg rounded-md border-b border-l border-gray-300"
          >
            <div class="flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <h2
                  class="text-lg font-semibold text-left overflow-hidden text-ellipsis whitespace-nowrap w-[170px]"
                >
                  <strong>{{ comment.author }}</strong>
                </h2>
                <span
                  :class="[
                    'inline-block w-2.5 h-2.5 rounded-full mr-2',
                    {
                      'bg-green-500': comment.status === 'Approuvés',
                      'bg-orange-500': comment.status === 'En attente',
                      'bg-red-500': comment.status === 'Rejetés',
                    },
                  ]"
                ></span>
              </div>
              <quote class="text-left text-sm">{{ comment.text }}</quote>
              <div class="flex justify-between mt-3">
                <p class="text-sm text-gray-500">
                  Publié le : {{ comment.date }}
                </p>
                <div class="flex items-center gap-x-4 text-sm">
                  <button
                    class="text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    <font-awesome-icon icon="fa-solid fa-eye" class="text-lg" />
                  </button>
                  <button
                    @click="replyToComment(comment.id)"
                    class="text-orange-500 hover:text-orange-600 focus:outline-none"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-comment-dots"
                      class="text-lg"
                    />
                  </button>
                  <button
                    @click="deleteComment(comment.id)"
                    class="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-trash"
                      class="text-lg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { comments } from "@/lib/CommentData.js";

export default {
  data() {
    return {
      searchQuery: "",
      filters: ["Tous", "Approuvés", "En attente", "Rejetés"],
      currentFilter: "Tous",
      comments: comments,
    };
  },
  computed: {
    filteredComments() {
      if (this.currentFilter === "Tous") return this.comments;
      return this.comments.filter(
        (comment) => comment.status === this.currentFilter
      );
    },
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
  },
};
</script>

<style scoped></style>
