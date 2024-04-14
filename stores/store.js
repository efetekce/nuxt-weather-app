export const useWeatherStore = defineStore("weather", () => {
  const config = useRuntimeConfig();

  const searchTerm = reactive({
    query: "",
    timeout: null,
    results: null,
  });

  const places = ref([]);

  const location = ref(null);

  const showModal = ref(false);

  const handleSearch = () => {
    clearTimeout(searchTerm.timeout);
    searchTerm.timeout = setTimeout(async () => {
      if (searchTerm.query.length >= 3) {
        const response =
          await $fetch(`http://api.weatherapi.com/v1/search.json?key=${config.public.weatherApiKey}&q=${searchTerm.query}
        `);
        // const response = await $fetch(
        //   `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=47hAIuP8o8M9RSBosP20WsurcfPSgbAu&q=${searchTerm.query}`
        // );
        // console.log(searchTerm.results);
        // console.log(response);

        searchTerm.results = response;
      } else {
        searchTerm.results = null;
      }
    }, 1000);
  };

  const getWeather = async (id) => {
    const response =
      await $fetch(`http://api.weatherapi.com/v1/forecast.json?key=${config.public.weatherApiKey}&q=id:${id}&days=3&aqi=no&alerts=no
`);
    console.log(id);
    console.log(response);
    places.value.push(response);
    console.log(places.value);
    searchTerm.query = "";
    searchTerm.results = null;
    location.value = response;
    console.log(location.value);
    showModal.value = true;
  };
  // const getWeather = async (key) => {
  //   const response = await $fetch(
  //     `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey2}`
  //   );
  //   // console.log(id);
  //   console.log(key);
  //   console.log(response);
  //   places.value.push(response);
  // };
  return {
    searchTerm,
    handleSearch,
    getWeather,
    places,
    location,
    showModal,
    query: searchTerm.query,
  };
});
