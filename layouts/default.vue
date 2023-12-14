<template>
  <div class="flex grow flex-col h-screen w-full">
    <aside
      class="fixed bottom-0 top-0 z-30 md:z-20 flex flex-col border-zinc-800/50 bg-zinc-900 py-6 ltr:border-r rtl:border-l text-white transition-all duration-300 ease-in-out max-md:shadow-2xl ltr:max-md:-left-[20rem] ltr:max-md:left-0 rtl:max-md:-right-[20rem] rtl:max-md:right-0 overflow-hidden"
      :class="
        (isShow && 'w-[20rem] sm:w-[20rem] md:w-[20rem]') ||
        'w-0 sm:w-0 md:w-[6.225em]'
      "
    >
      <div class="flex flex-col">
        <div
          class="flex align-middle items-center px-6 pb-6"
          :class="(isShow && 'justify-between') || 'justify-center'"
        >
          <a :class="(isShow && 'block') || 'hidden'" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 198.43 176.06"
              class="h-12"
            >
              <g>
                <rect
                  fill="#3b82f675"
                  x="0"
                  y="88.03"
                  width="141.73"
                  height="88.03"
                  rx="44.02"
                  ry="44.02"
                ></rect>
                <rect
                  fill="#3b82f6d0"
                  x="0"
                  y="44.02"
                  width="170.08"
                  height="88.03"
                  rx="44.02"
                  ry="44.02"
                ></rect>
                <rect
                  fill="#3b82f6f0"
                  x="0"
                  y="0"
                  width="198.43"
                  height="88.03"
                  rx="44.02"
                  ry="44.02"
                ></rect>
              </g>
            </svg>
          </a>

          <button
            type="button"
            class="flex h-12 w-12 items-center justify-center"
            @click="isShow = !isShow"
          >
            <i
              class="text-xl"
              :class="
                (isShow && 'fa-regular fa-bars-sort') || 'fa-solid fa-bars'
              "
            ></i>
          </button>
        </div>

        <div class="h-full px-6 no-scrollbar">
          <nav>
            <ul>
              <li
                v-for="menu in menus"
                :key="menu.index"
                class="cursor-pointer flex list-none items-center overflow-hidden whitespace-nowrap"
              >
                <NuxtLink
                  :to="menu.to"
                  class="menu-bar"
                  @click="isMobile && hiddenMenu()"
                >
                  <i :class="menu.icon" class="w-6 flex-none me-2 ms-1"></i>
                  <div
                    class="flex w-full items-center justify-between truncate"
                  >
                    <div class="overflow-hidden truncate whitespace-nowrap">
                      {{ menu.name }}
                    </div>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>

    <section
      class="flex flex-auto flex-col transition-all duration-300 ease-in-out h-screen w-full sm:pl-0 scrollbar-auto"
      :class="(isShow && 'md:pl-[20rem]') || 'md:pl-[6.225em]'"
    >
      <!-- Header -->
      <header
        class="sticky top-0 z-10 flex justify-between gap-4 border-b border-zinc-800/50 text-white bg-zinc-900/75 p-6 backdrop-blur-md"
      >
        <div class="flex items-center gap-4 ltr:md:mr-auto rtl:md:ml-auto">
          <button
            type="button"
            class="flex sm:flex md:hidden h-12 w-12 items-center justify-center"
            @click="isShow = !isShow"
          >
            <i class="fa-solid fa-bars text-xl"></i>
          </button>
          <div class="breadcrumb">
            <div class="text-lg font-semibold">{{ titlePage || "" }}</div>
          </div>
        </div>

        <div class="flex items-center gap-4 ltr:md:ml-auto rtl:md:mr-auto">
          <button
            type="button"
            class="inline-flex items-center justify-center bg-transparent text-zinc-400 border-2 border-transparent hover:text-blue-500 active:text-blue-500 px-1.5 py-1.5 text-base rounded-lg transition-all duration-300 ease-in-out"
            @click="onLogout()"
          >
            <i class="fa-regular fa-right-from-bracket text-xl"></i>
          </button>
        </div>
      </header>

      <!-- Main Content -->
      <slot></slot>

      <!-- Footer -->
      <footer class="flex justify-between gap-4 p-6 text-sm">
        <div
          class="flex items-center gap-4 ltr:md:mr-auto rtl:md:ml-auto text-zinc-500"
        >
          <div>Copyright © 2023</div>
        </div>
        <div
          class="flex items-center gap-4 ltr:md:ml-auto rtl:md:mr-auto text-zinc-500"
        >
          <span><b>ENDS888</b> Manage</span>
        </div>
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
defineComponent({
  setup() {
    definePageMeta({
      name: "DefaultLayout",
    });
  },
});

const titlePage = useCookie("title_page");

const isShow = ref<boolean>(true);
const screenWidth = ref<number>(0);
const screenWidthMobile = ref<number>(1280);
const menus = ref<any>([
  { name: "Home", icon: "fa-regular fa-house", to: "/" },
  { name: "Dashboard", icon: "fa-regular fa-rocket", to: "/dashboard" },
]);

const isMobile = computed(() => {
  return screenWidth.value <= screenWidthMobile.value;
});

onMounted(() => {
  if (typeof window !== "undefined") {
    initDate();
  }
});

const initDate = () => {
  updateScreenWidth();
  window.addEventListener("resize", updateScreenWidth);
};

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
  isShow.value = isMobile.value ? false : true;
};

const hiddenMenu = () => {
  isShow.value = false;
};

const onLogout = () => {
  removeCookie("token");
  removeCookie("title_page");
  removeCookie("username");

  location.reload();
};
</script>

<style lang="scss" scoped>
.menu-bar {
  @apply p-3 flex justify-start align-middle items-center cursor-pointer overflow-hidden rounded-xl border text-zinc-500 hover:text-zinc-100 grow transition-all duration-300 ease-in-out border-transparent;

  &.router-link-exact-active {
    @apply text-zinc-100 border-zinc-800;
  }
}
</style>
