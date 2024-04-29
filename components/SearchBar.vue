<script setup lang="ts">
const store = useWeatherStore();
const searchTerm = computed(() => store.searchTerm);
const showModal = computed(() => store.showModal);
const { handleSearch, getWeather } = useWeatherStore();

const animatedDiv = ref<HTMLElement>();
const { apply, set } = useMotion(animatedDiv, {
  initial: {
    scale: 1,
    opacity: 0.55,
  },
  visible: {
    scale: 1.2,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1500,
    },
  },
  reset: {
    scale: 1,
    opacity: 0.55,
    transition: {
      duration: 500,
    },
  },
});
const handleAnimation = async () => {
  await apply({
    scale: 1,
    opacity: 1,
    transition: { type: "spring", damping: 25 },
  });
};

onClickOutside(animatedDiv, async (event) => {
  await apply("reset");
  await apply("visible");
});
</script>

<template>
  <div v-show="!showModal" class="flex flex-col justify-center w-full">
    <!-- {{ query }} -->
    <form>
      <div
        ref="animatedDiv"
        @click="handleAnimation"
        class="flex items-center bg-slate-200 shadow-lg mx-auto border rounded-lg w-1/4 lg:w-1/3"
      >
        <i class="p-2 text-indigo-500"><Icon /></i>
        <input
          v-motion
          type="text"
          placeholder="start with searching for a place"
          class="border-0 bg-slate-200 p-2 rounded-lg w-full duration-500 outline-0 focus:ring-2 focus:ring-indigo-500 placeholder:text-center transition ring-inset"
          v-model="searchTerm.query"
          @input="handleSearch"
        />
      </div>
    </form>
    <!-- suggestions bar -->

    <div class="bg-slate-100 mx-auto mt-2 rounded-xl w-1/3">
      <div
        v-for="result in searchTerm.results"
        :key="result.name"
        class="rounded-xl w-full"
      >
        <button
          class="my-2 px-3 w-full hover:font-bold text-left hover:text-indigo-500"
          @click="getWeather(result.id)"
        >
          <span>{{ result.name }}</span>
          <span v-if="result.region">, {{ result.region }}</span>
          <span v-if="result.country">, {{ result.country }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 12s ease-out;
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1, transition: { repeat:
Infinity, duration: '100', repeatType: 'loop', }, }"

<!-- v-motion="{
      initial: {
        opacity: 1,
      },
      enter: {
        opacity: 0.5,
        transition: {
          repeat: Infinity,
          duration: 3000,
          repeatType: 'mirror',
        },
      },
    }" -->
