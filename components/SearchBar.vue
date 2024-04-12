<script setup>
const loading = ref(false);
const searchTerm = reactive({
  query: "",
  timeout: null,
  results: null,
});

const apiKey = "f6038edf8d2a4a7c89701417241104";
const handleSearch = () => {
  clearTimeout(searchTerm.timeout);
  searchTerm.timeout = setTimeout(async () => {
    if (searchTerm.query.length >= 3) {
      const response =
        await $fetch(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${searchTerm.query}
`);
      console.log(response);
      // const data = await response.json();
      searchTerm.results = response;
    } else {
      searchTerm.results = null;
    }
  }, 1000);
};

const getWeather = async (id) => {
  const response =
    await $fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=id:${id}&days=3&aqi=no&alerts=no
`);
  console.log(id);
  console.log(response);
};
</script>

<template>
  <div>
    hello SearchBar

    {{ searchTerm.query }}
    {{ searchTerm.results }}
    <form>
      <div class="flex items-center bg-white shadow-lg border rounded-lg">
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
      <div v-for="result in searchTerm.results" :key="result.id">
        <button
          class="my-2 px-3 w-full hover:font-bold text-left hover:text-indigo-500"
          @click="getWeather(result.id)"
        >
          {{ result.name }}, {{ result.region }}, {{ result.country }}
        </button>
      </div>
    </div>
  </div>
</template>
