<template>
  <main>
    <div class="p-4">
      <div class="card">Dashboard</div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: "PageDashboard",
  middleware: "auth",
});

const titlePage = useCookie("title_page");

onMounted(() => {
  titlePage.value = "Dashboard";
});
</script>
