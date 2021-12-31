<template>
  <div class="vp-homepage">
    <div class="grid grid-cols-6 space-y-2">
      <div class="col-span-6 md:col-span-2">
        <hangman></hangman>
      </div>
      <div class="col-span-6 md:col-span-4">
        <letterbox></letterbox>
      </div>
      <div class="col-span-6">
        <letterselect></letterselect>
      </div>
    </div>
  </div>
</template>
<script>
import Hangman from "@/components/Hangman.vue";
import Letterbox from "@/components/Letterbox.vue";
import LetterSelect from "@/components/LetterSelect.vue";

export default {
  name: "Homepage",
  data() {
    return {};
  },
  components: {
    hangman: Hangman,
    letterbox: Letterbox,
    letterselect: LetterSelect,
  },
  mounted() {
    this.$store.commit("seo-prepare", {
      title: "Startseite",
      description: `Willkommen auf der neuen Webseite.`,
    });
  },
};
</script>
