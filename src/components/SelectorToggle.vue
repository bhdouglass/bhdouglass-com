<script setup lang="ts">
import { ref } from 'vue';

const { selector, showLabel, hideLabel } = defineProps({
  selector: String,
  showLabel: String,
  hideLabel: String,
});

const show = ref(true);

const toggle = () => {
  if (show.value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add('hidden');
    });
  }
  else {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.remove('hidden');
    });
  }

  show.value = !show.value;
};
</script>

<template>
  <button @click="toggle()" class="btn btn-light">{{show ? hideLabel : showLabel}}</button>
</template>
