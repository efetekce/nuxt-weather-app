<script setup>
const { searchTerm, handleSearch, getWeather, places, query } =
  useWeatherStore();

// const getWeather = async (id) => {
//   const response =
//     await $fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=id:${id}&days=3&aqi=no&alerts=no
// `);
//   console.log(id);
//   console.log(response);
// };
</script>

<template>
  <div>
    hello SearchBar
    <!-- {{ places }} -->
    {{ query }}
    <form>
      <div class="flex items-center bg-white shadow-lg mx-12 border rounded-lg">
        <i class="p-2 text-indigo-500"><Icon /></i>
        <input
          type="text"
          placeholder="search for a place"
          class="border-0 p-2 rounded-lg w-full outline-0 focus:ring-2 focus:ring-indigo-500 ring-inset"
          v-model="searchTerm.query"
          @input="handleSearch"
        />
      </div>
    </form>

    <!-- suggestions bar -->
    <div class="bg-amber-400 w-full">
      <div v-for="result in searchTerm.results" :key="result.Key">
        <button
          class="my-2 px-3 w-full hover:font-bold text-left hover:text-indigo-500"
          @click="getWeather(result.Key)"
        >
          {{ result.LocalizedName }},
          {{ result.AdministrativeArea.LocalizedName }},
          {{ result.Country.LocalizedName }}
        </button>
      </div>
    </div>
  </div>
</template>
