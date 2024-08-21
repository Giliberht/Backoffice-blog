<template>
  <div
    class="border border-gray-300 bg-white shadow-md rounded-xl p-6 flex flex-col text-left w-[470px] h-auto gap-4 mb-4"
  >
    <section>
      <h2 class="text-lg uppercase text-left font-bold text-[#273e65]">
        Commentaires récents
      </h2>
      <hr class="border-t-2 border-[#6893df] mt-1 w-[230px]" />
    </section>

    <!-- Statistiques générales -->
    <div class="flex flex-col items-start gap-4 px-2 text-gray-600 mb-4 mt-2">
      <div v-if="recentComments.length > 0" class="space-y-4 w-full">
        <div
          v-for="comment in recentComments"
          :key="comment.id"
          class="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
        >
          <p class="font-semibold">{{ comment.author }}</p>
          <p class="text-gray-600">{{ comment.content }}</p>
          <p class="text-gray-500 text-sm">
            Publié le: {{ formatDate(comment.date) }}
          </p>
        </div>
      </div>
      <p v-else class="text-gray-500">Aucun commentaire récent.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastComment",
  data() {
    return {
      recentComments: [
        // Exemple de données; remplacez-les par des données réelles
        {
          id: 1,
          author: "Jean Dupont",
          content: "Super article, merci!",
          date: "2024-08-20T14:00:00Z",
        },
        {
          id: 2,
          author: "Marie Curie",
          content: "Très intéressant, j'ai appris beaucoup.",
          date: "2024-08-19T09:30:00Z",
        },
        {
          id: 3,
          author: "Albert Einstein",
          content: "Un point de vue très éclairant.",
          date: "2024-08-18T16:45:00Z",
        },
      ],
    };
  },
  methods: {
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("fr-FR", options);
    },
  },
};
</script>

<style scoped></style>
