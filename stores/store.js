export const useWeatherStore = defineStore("weather", () => {
  const searchTerm = reactive({
    query: "",
    timeout: null,
    results: null,
  });

  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { searchTerm, doubleCount, increment };
});
