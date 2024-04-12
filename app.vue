<script setup>
const abc = ref(false);
</script>

<template>
  <div class="bg-red-200 mb-6 text-center">
    {{
      new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }}
  </div>

  <SearchBar />
</template>
