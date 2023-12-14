<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center h-full"
  >
    <div class="flex flex-col gap-3">
      <span class="text-4xl font-semibold"> Sign in </span>
      <div><span>Mange - Template</span></div>

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

        <button type="submit" class="btn-primary" :disabled="loading">
          <i
            v-if="loading"
            class="fa-sharp fa-solid fa-spinner-third animate-spin"
          ></i>
          {{ (loading && "Loading") || "Sign in" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type LoginRequest } from "@/models/auth.model";

definePageMeta({
  name: "PageLogin",
  layout: "custom",
  middleware: "login",
});

const { $swal }: any = useNuxtApp();
const router = useRouter();

const loading = ref<boolean>(false);
const showPassword = ref<boolean>(false);
const form = reactive<LoginRequest>({
  username: "superadmin",
  password: "123456",
});

const onSubmit = async (event: Event) => {
  event.preventDefault();

  if (!form.username || !form.password) {
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
    refUsername.value = form.username || "";

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
