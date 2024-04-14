<script setup>
defineProps({
  place: Object,
});
</script>

<template>
  <div class="shadow-xl p-4 rounded-lg w-1/3 ring-2 ring-indigo-500 ring-inset">
    <p>{{ place.location.name }}</p>
    <p>
      {{ new Date(place.location.localtime).getHours() }}:{{
        new Date(place.location.localtime).getMinutes()
      }}
    </p>
    <p></p>
    <img :src="place.current.condition.icon" class="w-20 h-20" />
  </div>
</template>

<style scoped></style>
