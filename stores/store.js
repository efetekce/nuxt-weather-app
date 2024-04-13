export const useWeatherStore = defineStore("weather", () => {
  const searchTerm = reactive({
    query: "",
    timeout: null,
    results: null,
  });

  const places = ref([]);

  const apiKey = "f6038edf8d2a4a7c89701417241104";
  const apiKey2 = "47hAIuP8o8M9RSBosP20WsurcfPSgbAu";
  const handleSearch = () => {
    clearTimeout(searchTerm.timeout);
    searchTerm.timeout = setTimeout(async () => {
      if (searchTerm.query.length >= 3) {
        //http://dataservice.accuweather.com/locations/v1/cities/autocomplete
        // 47hAIuP8o8M9RSBosP20WsurcfPSgbAu
        //       const response =
        //         await $fetch(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${weatherStore.searchTerm.query}
        // `);
        const response = await $fetch(
          `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=47hAIuP8o8M9RSBosP20WsurcfPSgbAu&q=${searchTerm.query}`
        );
        console.log(searchTerm.results);
        console.log(response);
        // const data = await response.json();
        searchTerm.results = response;
      } else {
        searchTerm.results = null;
      }
    }, 1000);
  };
  const getWeather = async (key) => {
    const response = await $fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey2}`
    );
    // console.log(id);
    console.log(key);
    console.log(response);
    places.value.push(response);
  };
  return {
    searchTerm,
    handleSearch,
    getWeather,
    places,
    query: searchTerm.query,
  };
});
