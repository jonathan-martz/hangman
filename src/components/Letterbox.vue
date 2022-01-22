<template>
  <div class="vc-letterbox">
    <div class="">{{ question }}</div>
    <div v-if="loaded" class="space-x-2 letters flex">
      <div
        v-for="(item, index) in letters"
        :class="{
          'text-center uppercase bg-white w-8 border border-black': true,
          invisible: !show[item],
        }"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: true,
    };
  },
  computed: {
    letters: function () {
      return this.$store.state.hangman.result.split("");
    },
    show: function () {
      return this.$store.state.hangman.letters;
    },
    question: function () {
      return this.$store.state.hangman.question;
    },
  },
};
</script>
<style lang="less">
.letters {
  .letter {
  }
}
</style>
