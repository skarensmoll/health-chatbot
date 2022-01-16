<template>
  <div>
    <Banner />
    <AllCustomComponents />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Belleville Clinic",
      meta: [
        {
          hid: "description",
          name: "The best clinic",
          content: "Berlin Clinic 2022",
        },
      ],
    };
  },

  data() {
    return {};
  },
  components: {
    Banner: () => import("@/components/shared/lp-banner/Banner"),
    AllCustomComponents: () =>
      import("@/components/custom/AllCustomComponents"),
  },
};
</script>
