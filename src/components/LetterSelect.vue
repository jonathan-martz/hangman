<template>
  <div class="vc-letter-select">
    <div class="flex space-x-2 text-center letters flex-wrap">
      <div v-for="(item, index) in letters" @click="select(item)" :key="index">
        <div
          v-if="!this.$store.state.hangman.letters[item]"
          class="w-8 py-2 uppercase bg-white border border-black letter"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alphabet: "abcdefghijklmnopqrstuvwxyz",
    };
  },
  methods: {
    select: function (item) {
      this.$store.commit("show", item);
    },
  },
  computed: {
    letters: function () {
      return this.alphabet.split("");
    },
  },
};
</script>
