<template>
  <div class="header" >
    <v-navigation-drawer v-model="drawer" fixed app right>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          v-on:click="r"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar app fixed class="app-header" flat elevate-on-scroll align="center" justify="center">
      <v-container class="py-0 fill-height" align="center" justify="center">
        <!-- Logo -->
        <Logo />
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <v-app-bar-nav-icon color="black" @click.stop="drawer = !drawer" />
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "Header",

  components: {
    Logo: () => import("@/layouts/sections/Logo"),
  },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Homepage",
          to: "/",
        },
        {
          icon: "mdi-information",
          title: "About Us",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Specialists",
          to: "/",
        },
        {
          icon: "mdi-account",
          title: "Members",
          to: "/",
        },
        {
          icon: "mdi-calendar",
          title: "Schedule",
          to: "/schedule",
        },
        {
          icon: "mdi-chat",
          title: "Contact Us",
          to: "/",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Belleville Clinic",
    };
  },
  methods: {
    r() {
      this.drawer = false;
    },
  },
  mounted() {
    this.drawer = false;
  },
};
</script>
<style lang="scss">
  .header{
    z-index: 50 !important;
  }
</style>