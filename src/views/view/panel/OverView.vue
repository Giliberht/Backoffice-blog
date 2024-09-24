<template>
  <div id="UploadImage" class="flex flex-col items-start mb-4">
    <!-- Section Titre -->
    <section>
      <h1 class="text-2xl text-left uppercase font-bold text-[#273e65]">
        Overview
      </h1>
      <hr class="border-t-2 border-[#ffac3f] mt-2" />
    </section>
  </div>
  <div class="max-h-[70vh] overflow-auto w-full flex flex-col gap-8 mt-8">
    <div class="grid grid-cols-3"><UserStat /></div>
  </div>
</template>
<script>
import UserStat from "@/views/_components/OverViewPanel/UserStat.vue";

export default {
  components: {
    UserStat,
  },
};
</script>

<style></style>
