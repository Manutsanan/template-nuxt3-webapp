<template>
  <main>
    <div class="p-4">
      <div class="card">Input</div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: "PageInput",
  middleware: "auth",
});

const titlePage = useCookie("title_page");

onMounted(() => {
  titlePage.value = "Input";
});
</script>
