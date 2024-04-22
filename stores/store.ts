// const config = useRuntimeConfig();
// f6038edf8d2a4a7c89701417241104

import type { City, CurrentWeatherResponse, WeatherResponse } from "~/types";

interface SearchTerm {
  query: string;
  timeout: any;
  results: null | City[];
}
export const useWeatherStore = defineStore("weather", () => {
  const searchTerm: SearchTerm = reactive({
    query: "",
    timeout: null,
    results: null,
  });

  const places = ref([]);

  const location = ref<null | WeatherResponse>(null);

  // const forecast = ref<null | WeatherAllForecastResponse>(null);
  const showModal = ref(false);

  const handleSearch = () => {
    clearTimeout(searchTerm.timeout);
    searchTerm.timeout = setTimeout(async () => {
      if (searchTerm.query.length >= 3) {
        // const response: City[] = await $fetch(
        //   `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=47hAIuP8o8M9RSBosP20WsurcfPSgbAu&q=${searchTerm.query}`
        const response: City[] = await $fetch(
          `http://api.weatherapi.com/v1/search.json?key=f6038edf8d2a4a7c89701417241104&q=${searchTerm.query}`
        );
        console.log(response);
        searchTerm.results = response;
        console.log(searchTerm.results);
      } else {
        searchTerm.results = null;
      }
    }, 1000);
  };

  const getWeather = async (id: string | number) => {
    const response: WeatherResponse = await $fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=f6038edf8d2a4a7c89701417241104&q=id:${id}&days=5&aqi=no&alerts=no`
    );

    console.log(response);
    // places.value.push(response);
    // console.log(places.value);
    searchTerm.query = "";
    searchTerm.results = null;
    location.value = response;
    console.log(location.value);
    showModal.value = true;
  };

  // const getWeatherForecast = async (id: string | number) => {
  //   const response: ForecastResponse = await $fetch(
  //     `http://api.weatherapi.com/v1/forecast.json?key=f6038edf8d2a4a7c89701417241104&q=id:${id}&days=5&aqi=no&alerts=no
  //     `
  //   );

  //   console.log();
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
