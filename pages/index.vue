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
        Home

        <div v-for="item in items" key="index">
          {{ formatNumber(item.price, 2) }}
        </div>

        <span :class="changeStatus('success').class">
          {{ changeStatus("success").text }}
        </span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
import service from "~/service";

definePageMeta({
  name: "PageHome",
  middleware: "auth",
});

const titlePage = useCookie("title_page");

const items = ref<any>([{ price: "10000" }, { price: "20000" }]);

const img = ref<any>("");
const imgs = ref<string[]>([]);

const getInfo = async () => {
  try {
    const resp: any = await service.example.info({
      id: "1",
    });
    console.log(resp);
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

const getList = async () => {
  try {
    const resp: any = await service.example.list({
      page: 1,
      limit: 10,
    });
    console.log(resp);
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

const onCreate = async () => {
  try {
    const resp: any = await service.example.list({
      name: "Example",
      des: "Example",
    });
    console.log(resp);
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

// สำหรับอัพโหลดไฟล์รูปภาพ
const onCreateHaveImage = async () => {
  try {
    const formdata = new FormData();
    formdata.append("img", img.value, img.value.name);
    // formdata.append("img[]", imgs.value, imgs.value.name);
    formdata.append("name", "Example");
    formdata.append("des", "Example");

    const resp: any = await service.example.list(formdata);
    console.log(resp);
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

const onUpdateById = async () => {
  try {
    const resp: any = await service.example.updateById({
      id: 1,
      name: "Example 1",
      des: "Example 1",
    });
    console.log(resp);
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

const onUpdate = async () => {
  try {
    const resp: any = await service.example.update({
      id: 1,
      name: "Example 1",
      des: "Example 1",
    });
    console.log(resp);
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

const onDelete = async () => {
  try {
    const resp: any = await service.example.destroy({
      id: 1,
    });
    console.log(resp);
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

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
