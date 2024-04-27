<script setup lang="ts">
const store = useWeatherStore();
const searchTerm = computed(() => store.searchTerm);
const showModal = computed(() => store.showModal);
const { handleSearch, getWeather } = useWeatherStore();
</script>

<template>
  <Transition name="fade">
    <div v-show="!showModal" class="flex flex-col justify-center w-full">
      <!-- {{ query }} -->
      <form>
        <div
          class="flex items-center bg-white shadow-lg mx-auto border rounded-lg w-1/4 lg:w-1/3"
        >
          <i class="p-2 text-indigo-500"><Icon /></i>
          <input
            type="text"
            placeholder="start with searching for a place"
            class="border-0 p-2 rounded-lg w-full duration-500 outline-0 focus:ring-2 focus:ring-indigo-500 placeholder:text-center transition ring-inset"
            v-model="searchTerm.query"
            @input="handleSearch"
          />
        </div>
      </form>
      <!-- suggestions bar -->
  <Transition>
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
  </Transition>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 12s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

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
