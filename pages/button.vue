<template>
  <main>
    <div class="p-4">
      <div class="card">Button</div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: "PageButton",
  middleware: "auth",
});

const titlePage = useCookie("title_page");

onMounted(() => {
  titlePage.value = "Button";
});
</script>
