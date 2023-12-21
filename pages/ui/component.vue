<template>
  <main>
    <div class="p-4">
      <div class="card">
        <div class="scrollbar-auto grid gap-10 py-2">
          <div class="grid">
            <div class="mb-5 pb-2 border-b border-white">
              <label class="text-2xl">Button</label>
            </div>
            <div class="grid gap-8">
              <!-- Solid -->
              <div class="grid gap-2">
                <div class="grid gap-2">
                  Solid
                  <div class="flex gap-3">
                    <button class="btn-secondary">.btn-secondary</button>
                    <button class="btn-danger">.btn-danger</button>
                    <button class="btn-warning">.btn-warning</button>
                    <button class="btn-lime">.btn-lime</button>
                    <button class="btn-success">.btn-success</button>
                    <button class="btn-info">.btn-info</button>
                    <button class="btn-primary">.btn-primary</button>
                    <button class="btn-violet">.btn-violet</button>
                  </div>
                </div>
                <div class="grid gap-2">
                  Solid Disabled
                  <div class="flex gap-3">
                    <button class="btn-secondary is-disabled">
                      .btn-secondary .is-disabled
                    </button>
                    <button class="btn-danger is-disabled">
                      .btn-danger .is-disabled
                    </button>
                    <button class="btn-warning is-disabled">
                      .btn-warning .is-disabled
                    </button>
                    <button class="btn-lime is-disabled">
                      .btn-lime .is-disabled
                    </button>
                    <button class="btn-success is-disabled">
                      .btn-success .is-disabled
                    </button>
                    <button class="btn-info is-disabled">
                      .btn-info .is-disabled
                    </button>
                    <button class="btn-primary is-disabled">
                      .btn-primary .is-disabled
                    </button>
                    <button class="btn-violet is-disabled">
                      .btn-violet .is-disabled
                    </button>
                  </div>
                </div>
              </div>

              <!-- Outline -->
              <div class="grid gap-2">
                <div class="grid gap-2">
                  Outline
                  <div class="flex gap-3">
                    <button class="btn-outline-secondary">
                      .btn-outline-secondary
                    </button>
                    <button class="btn-outline-danger">
                      .btn-outline-danger
                    </button>
                    <button class="btn-outline-warning">
                      .btn-outline-warning
                    </button>
                    <button class="btn-outline-lime">.btn-outline-lime</button>
                    <button class="btn-outline-success">
                      .btn-outline-success
                    </button>
                    <button class="btn-outline-info">.btn-outline-info</button>
                    <button class="btn-outline-primary">
                      .btn-outline-primary
                    </button>
                    <button class="btn-outline-violet">
                      .btn-outline-violet
                    </button>
                  </div>
                </div>
                <div class="grid gap-2">
                  Outline Disabled
                  <div class="flex gap-3">
                    <button class="btn-outline-secondary is-disabled">
                      .btn-outline-secondary
                    </button>
                    <button class="btn-outline-danger is-disabled">
                      .btn-outline-danger .is-disabled
                    </button>
                    <button class="btn-outline-warning is-disabled">
                      .btn-outline-warning .is-disabled
                    </button>
                    <button class="btn-outline-lime is-disabled">
                      .btn-outline-lime .is-disabled
                    </button>
                    <button class="btn-outline-success is-disabled">
                      .btn-outline-success .is-disabled
                    </button>
                    <button class="btn-outline-info is-disabled">
                      .btn-outline-info .is-disabled
                    </button>
                    <button class="btn-outline-primary is-disabled">
                      .btn-outline-primary .is-disabled
                    </button>
                    <button class="btn-outline-violet is-disabled">
                      .btn-outline-violet .is-disabled
                    </button>
                  </div>
                </div>
              </div>

              <!-- Default -->
              <div class="grid gap-2">
                <div class="grid gap-2">
                  Default
                  <div class="flex gap-3">
                    <button class="btn-default-secondary">
                      btn-default-secondary
                    </button>
                    <button class="btn-default-danger">
                      .btn-default-danger
                    </button>
                    <button class="btn-default-warning">
                      .btn-default-warning
                    </button>
                    <button class="btn-default-lime">.btn-default-lime</button>
                    <button class="btn-default-success">
                      .btn-default-success
                    </button>
                    <button class="btn-default-info">.btn-default-info</button>
                    <button class="btn-default-primary">
                      .btn-default-primary
                    </button>
                    <button class="btn-default-violet">
                      .btn-default-violet
                    </button>
                  </div>
                </div>
                <div class="grid gap-2">
                  Default Disabled
                  <div class="flex gap-3">
                    <button class="btn-default-secondary is-disabled">
                      btn-default-secondary .is-disabled
                    </button>
                    <button class="btn-default-danger is-disabled">
                      .btn-default-danger .is-disabled
                    </button>
                    <button class="btn-default-warning is-disabled">
                      .btn-default-warning .is-disabled
                    </button>
                    <button class="btn-default-lime is-disabled">
                      .btn-default-lime .is-disabled
                    </button>
                    <button class="btn-default-success is-disabled">
                      .btn-default-success .is-disabled
                    </button>
                    <button class="btn-default-info is-disabled">
                      .btn-default-info .is-disabled
                    </button>
                    <button class="btn-default-primary is-disabled">
                      .btn-default-primary .is-disabled
                    </button>
                    <button class="btn-default-violet is-disabled">
                      .btn-default-violet .is-disabled
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid">
            <div class="mb-5 pb-2 border-b border-white">
              <label class="text-2xl">Badge</label>
            </div>
            <div class="grid gap-8">
              <!-- Solid -->
              <div class="grid gap-2">
                Solid
                <div class="flex gap-3">
                  <span class="badge-secondary">.badge-secondary</span>
                  <span class="badge-danger">.badge-danger</span>
                  <span class="badge-warning">.badge-warning</span>
                  <span class="badge-lime">.badge-lime</span>
                  <span class="badge-success">.badge-success</span>
                  <span class="badge-info">.badge-info</span>
                  <span class="badge-primary">.badge-primary</span>
                  <span class="badge-violet">.badge-violet</span>
                </div>
              </div>

              <!-- Outline -->
              <div class="grid gap-2">
                Outline
                <div class="flex gap-3">
                  <span class="badge-outline-secondary">
                    .badge-outline-secondary
                  </span>
                  <span class="badge-outline-danger">
                    .badge-outline-danger
                  </span>
                  <span class="badge-outline-warning">
                    .badge-outline-warning
                  </span>
                  <span class="badge-outline-lime"> .badge-outline-lime </span>
                  <span class="badge-outline-success">
                    .badge-outline-success
                  </span>
                  <span class="badge-outline-info"> .badge-outline-info </span>
                  <span class="badge-outline-primary">
                    .badge-outline-primary
                  </span>
                  <span class="badge-outline-violet">
                    .badge-outline-violet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: "PageUIComponent",
  middleware: "auth",
});

const titlePage = useCookie("title_page");

onMounted(() => {
  titlePage.value = "Component";
});
</script>
