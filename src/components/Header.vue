<template>
  <div class="vc-header">
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <router-link to="/">Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isMobile: function() {
      return this.$screen.width() < 468;
    },
    isTablet: function() {
      return this.$screen.width() >= 468 && this.$screen.width() <= 1024;
    },
    isDesktop: function() {
      return this.$screen.width() > 1024;
    },
  },
};
</script>
