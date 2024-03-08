<template>
  <main>
    <div class="top-nav">
      <div></div>
      <div class="form-input">
        <div
          class="absolute top-[2px] bottom-[2px] flex justify-center items-center px-4 rounded start-px"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" style="padding-left: 32.5px" placeholder="Search" />
      </div>
    </div>

    <div class="p-4">
      <div class="card">Home</div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: "PageHome",
  middleware: "auth",
});

const titlePage = useCookie("title_page");

onMounted(() => {
  titlePage.value = JSON.stringify([
    {
      name: "Home",
      to: "/",
      disabled: true,
    },
  ]);
});
</script>
