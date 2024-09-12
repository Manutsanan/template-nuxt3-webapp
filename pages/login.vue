<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center h-full"
  >
    <div class="flex flex-col gap-3">
      <div>
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
      </div>
      <div class="py-4">
        <span class="text-4xl font-semibold"> Sign in </span>
      </div>
      <div>
        <span>Mange - Template</span>
      </div>

      <form class="flex flex-col gap-3" @submit="onSubmit">
        <div class="form-input">
          <div
            class="absolute top-[2px] bottom-[2px] flex justify-center items-center px-4 rounded start-px"
          >
            <i class="fa-regular fa-user"></i>
          </div>
          <input
            type="text"
            v-model="form.username"
            style="padding-left: 32.5px"
          />
        </div>
        <div class="form-input">
          <div
            class="absolute top-[2px] bottom-[2px] flex justify-center items-center px-4 rounded start-px"
          >
            <i class="fa-regular fa-key"></i>
          </div>
          <input
            :type="(showPassword && 'text') || 'Password'"
            v-model="form.password"
            style="padding: 6.5px 32.5px"
          />
          <div
            class="absolute top-[2px] bottom-[2px] flex justify-center items-center px-4 rounded end-px"
          >
            <i
              class="fa-regular cursor-pointer eye-password"
              :class="(showPassword && 'fa-eye') || 'fa-eye-slash'"
              @click="showPassword = !showPassword"
            ></i>
          </div>
        </div>

        <button
          type="submit"
          class="btn-primary text-xl font-semibold"
          :disabled="loading"
        >
          <i
            v-if="loading"
            class="fa-sharp fa-solid fa-spinner-third animate-spin mr-2"
          ></i>
          {{ (loading && "Loading") || "Sign in" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type LoginRequest } from "@/models/auth.model";

// import { type ResponseMessage, type ResponseWithPagination, type Paginate } from "@/models/http.model";

// import { type ResponseMessage } from "@/models/http.model";
// import { type ResponseWithPagination } from "@/models/http.model";
// import { type Paginate } from "@/models/http.model";

definePageMeta({
  name: "PageLogin",
  layout: "custom",
  middleware: "login",
});

const { $swal }: any = useNuxtApp();
const router = useRouter();

const loading = ref<boolean>(false);
const showPassword = ref<boolean>(false);
const form = ref<LoginRequest>({
  username: "superadmin",
  password: "123456",
});

const onSubmit = async (event: Event) => {
  event.preventDefault();

  if (!form.value.username || !form.value.password) {
    $swal.fire({
      icon: "warning",
      title: "warning !",
      text: "Username or password incorrect.",
    });
    return;
  }

  loading.value = true;

  try {
    // const response: any = await service.auth.login({
    //   username: form.username,
    //   password: form.password,
    // });
    // if (response?.code == "200") {
    //   const refToken = setCookie("token");
    //   refToken.value = response?.data?.access_token || "";
    //   const refUsername = setCookie("username");
    //   refUsername.value = form.username || "";
    //   router.push("/");
    // }

    const refToken = setCookie("token");
    refToken.value =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const refUsername = setCookie("username");
    refUsername.value = form.value.username || "";

    router.push("/");
  } catch (error) {
    $swal.fire({
      icon: "warning",
      title: "warning !",
      text: error,
    });
  } finally {
    loading.value = false;
  }
};
</script>
