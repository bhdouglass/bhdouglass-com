<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);

const toggle = () => {
  show.value = !show.value;
};
</script>

<template>
  <h2 role="button" @click="toggle()">
    Table of Contents
    <i :class="{'ri-arrow-drop-down-line': !show, 'ri-arrow-drop-up-line': show}"></i>
  </h2>
  <div v-if="show">
    <slot />
  </div>
</template>
