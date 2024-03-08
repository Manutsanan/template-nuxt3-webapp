<template>
  <div class="breadcrumb">
    <template v-for="(titlePage, index) in titlePages" :key="index">
      <nuxt-link
        :to="titlePage.to"
        :class="[titlePage.disabled && 'pointer-events-none']"
      >
        <button class="btn-default-info">
          {{ titlePage.name }}
        </button>
      </nuxt-link>
      <div v-if="index + 1 != titlePages.length">/</div>
    </template>
  </div>
</template>

<script setup lang="ts">
const rawTitlePage: any = useCookie("title_page");

const titlePages = ref<any>([]);

watch(
  () => rawTitlePage.value,
  () => {
    titlePages.value = JSON.parse(JSON.stringify(rawTitlePage?.value)) || [];
  },
  {
    deep: true,
  }
);
</script>

<style lang="scss" scoped>
.breadcrumb {
  @apply flex flex-wrap items-center gap-1;
}
</style>
