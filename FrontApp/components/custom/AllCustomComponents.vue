<template>
  <div>
    <BannerText />
    <Banner1 />
    <FormBannerText />
    <FormBanner1 />
    <Team />
    <ContactText />
    <Contact />
  </div>
</template>

<script>
export default {
  name: "AllCustomComponents",

  data() {
    return {};
  },
  components: {
    BannerText: () => import("@/components/custom/banner/BannerText"),
    Banner1: () => import("@/components/custom/banner/Banner1"),
    FormBannerText: () => import("@/components/custom/form-banner/FormBannerText"),
    FormBanner1: () => import("@/components/custom/form-banner/FormBanner1"),
    Team: () => import("@/components/custom/team/Team"),
    ContactText: () => import("@/components/custom/contact/ContactText"),
    Contact: () => import("@/components/custom/contact/Contact"),
  },
};
</script>
