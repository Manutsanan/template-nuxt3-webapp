<template>
  <div class="flex grow flex-col h-screen w-full">
    <aside
      class="fixed bottom-0 top-0 z-30 md:z-20 flex flex-col border-zinc-300/25 bg-white py-6 ltr:border-r rtl:border-l transition-all duration-300 ease-in-out max-md:shadow-2xl ltr:max-md:-left-[20rem] ltr:max-md:left-0 rtl:max-md:-right-[20rem] rtl:max-md:right-0 overflow-hidden"
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

        <nav class="h-full px-6 no-scrollbar">
          <ul>
            <li
              v-for="menu in menus"
              :key="menu.index"
              class="cursor-pointer flex list-none items-center overflow-hidden whitespace-nowrap pb-1"
            >
              <template v-if="!menu?.childs">
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
              </template>
              <template v-else>
                <div class="flex flex-col w-full">
                  <div
                    class="menu-bar grow"
                    :class="(menu.show && 'menu-active') || ''"
                    @click="menu.show = !menu.show"
                  >
                    <i :class="menu.icon" class="w-6 flex-none me-2 ms-1"></i>
                    <div
                      class="flex w-full items-center justify-between truncate"
                    >
                      <div class="overflow-hidden truncate whitespace-nowrap">
                        {{ menu.name }}
                      </div>
                      <i
                        class="fa-thin fa-chevron-down transition ease-in-out delay-200"
                        :class="(menu.show && 'rotate-0') || 'rotate-180'"
                      ></i>
                    </div>
                  </div>
                  <ul
                    class="transition ease-in-out delay-200 overflow-hidden"
                    :class="[
                      (isShow && 'ml-5') || 'ml-0',
                      (menu.show && 'h-auto') || 'h-0',
                    ]"
                  >
                    <li
                      v-for="child in menu.childs"
                      :key="child.index"
                      class="cursor-pointer flex list-none items-center overflow-hidden whitespace-nowrap pb-1"
                    >
                      <NuxtLink
                        :to="child.to"
                        class="menu-bar"
                        @click="isMobile && hiddenMenu()"
                      >
                        <i
                          :class="child.icon"
                          class="w-6 flex-none me-2 ms-1"
                        ></i>
                        <div
                          class="flex w-full items-center justify-between truncate"
                        >
                          <div
                            class="overflow-hidden truncate whitespace-nowrap"
                          >
                            {{ child.name }}
                          </div>
                        </div>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </template>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <section
      class="flex flex-auto flex-col transition-all duration-300 ease-in-out h-screen w-full sm:pl-0 scrollbar-auto bg-zinc-100"
      :class="(isShow && 'md:pl-[20rem]') || 'md:pl-[6.225em]'"
    >
      <!-- Header -->
      <header
        class="sticky top-0 z-10 flex flex-wrap justify-between gap-4 border-b border-zinc-300/25 bg-white/75 p-6 backdrop-blur-md"
      >
        <div
          class="flex flex-wrap items-center gap-4 ltr:md:mr-auto rtl:md:ml-auto"
        >
          <button
            type="button"
            class="flex sm:flex md:hidden h-12 w-12 items-center justify-center"
            @click="isShow = !isShow"
          >
            <i class="fa-solid fa-bars text-xl"></i>
          </button>

          <Breadcrumb />
        </div>

        <div
          class="flex flex-wrap items-center gap-2 ltr:md:ml-auto rtl:md:mr-auto"
        >
          <button type="button" class="btn-default-info" @click="onLogout()">
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

const route = useRoute();

const isShow = ref<boolean>(true);
const screenWidth = ref<number>(0);
const screenWidthMobile = ref<number>(1280);
const menus = ref<any>([
  { name: "Home", icon: "fa-regular fa-house", to: "/" },
  { name: "Dashboard", icon: "fa-regular fa-rocket", to: "/dashboard" },
  {
    name: "UI",
    icon: "fa-sharp fa-regular fa-puzzle-piece",
    show: false,
    childs: [
      {
        name: "Component",
        icon: "fa-sharp fa-regular fa-sparkles",
        to: "/ui/component",
      },
    ],
  },
]);

const isMobile = computed(() => {
  return screenWidth.value <= screenWidthMobile.value;
});

watch(
  () => route.path,
  () => {
    checkMenuActive();
  },
  {
    deep: true,
  }
);

const initDate = () => {
  updateScreenWidth();
  window.addEventListener("resize", updateScreenWidth);
};

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
  isShow.value = isMobile.value ? false : true;
};

const checkMenuActive = () => {
  for (let i = 0; i < menus.value.length; i++) {
    const menu = menus.value[i];

    if (menu?.childs?.length) {
      let showMenu = false;
      for (let ii = 0; ii < menu.childs.length; ii++) {
        const child = menu.childs[ii];
        if (child.to === route.path) {
          showMenu = true;
        }
      }

      menu.show = showMenu;
    }
  }
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

onMounted(() => {
  if (typeof window !== "undefined") {
    initDate();
  }

  checkMenuActive();
});
</script>

<style lang="scss" scoped>
.menu-bar {
  @apply p-3 flex justify-start align-middle items-center cursor-pointer overflow-hidden rounded-xl border text-zinc-500 hover:text-zinc-950 grow transition-all duration-300 ease-in-out border-transparent;

  &.router-link-exact-active {
    @apply text-zinc-950 border-zinc-300;
  }
  &.menu-active {
    @apply text-zinc-950;
  }
}
</style>
