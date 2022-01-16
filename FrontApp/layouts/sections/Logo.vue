<template>
  <div class="logo">
    <NLink to="/">
      <v-avatar>
        <img src="/logo2.jpg" alt="Belleville Clinic" />
      </v-avatar>
    </NLink>
  </div>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.logo a {
  display: flex;
  margin-right: 15px !important;
}
</style>