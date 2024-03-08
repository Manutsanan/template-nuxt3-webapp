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
      <div class="card">
        Dashboard

        <div class="py-3">
          Hover Effect on Sibling
          <div class="list-items flex items-start gap-3 p-2">
            <div
              class="transition duration-300 bg-blue-400 py-4 px-5 rounded-lg"
            >
              Menu 1
            </div>
            <div
              class="transition duration-300 bg-blue-400 py-4 px-5 rounded-lg"
            >
              Menu 2
            </div>
            <div
              class="transition duration-300 bg-blue-400 py-4 px-5 rounded-lg"
            >
              Menu 3
            </div>
          </div>
        </div>

        <div class="py-3">
          Animations
          <div class="flex flex-col items-start gap-5 p-2">
            <div class="box-rotate p-2 bg-rose-400 rounded-lg">rotate</div>
            <div class="box-pulse p-2 bg-rose-400 rounded-lg">pulse</div>
            <div class="box-slideIn p-2 bg-rose-400 rounded-lg">slideIn</div>
            <div class="box-fadeIn p-2 bg-rose-400 rounded-lg">fadeIn</div>
            <div class="box-bounce p-2 bg-rose-400 rounded-lg">bounce</div>
          </div>
        </div>

        <div class="py-3">
          TEST Animation

          <div class="flex flex-col items-start gap-5 p-2">
            <button class="btn-primary" @click="showText = !showText">
              {{ (!showText && "Show") || "Hidden" }} Text
            </button>
            <div :class="[(showText && 'text-show') || 'hidden']">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: "PageDashboard",
  middleware: "auth",
});

const titlePage = useCookie("title_page");

const showText = ref<boolean>(false);

onMounted(() => {
  titlePage.value = JSON.stringify([
    {
      name: "Dashboard",
      to: "/dashboard",
      disabled: true,
    },
  ]);
});
</script>

<style lang="css" scoped>
.list-items:hover > :not(:hover) {
  opacity: 0.4;
}

.box-rotate {
  animation: rotate 1s infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.box-pulse {
  animation: pulse 1s infinite;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.box-slideIn {
  animation: slideIn 1s infinite;
}
@keyframes slideIn {
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
}

.box-fadeIn {
  animation: fadeIn 1s infinite;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 5;
  }
  100% {
    opacity: 0;
  }
}

.box-bounce {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20%);
  }
  100% {
    transform: translateY(-10%);
  }
}

.text-show {
  animation: text-show 1.5s;
}
@keyframes text-show {
  0% {
    filter: blur(1px);
    opacity: 0.5;
    transform: translateY(calc(-50% + 50px));
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>
