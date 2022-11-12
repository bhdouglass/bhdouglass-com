<script setup lang="ts">
import { ref } from 'vue';

const { selector, showLabel, hideLabel } = defineProps({
  selector: String,
  showLabel: String,
  hideLabel: String,
});

const show = ref(true);

const toggle = () => {
  console.log(show.value, selector);
  if (show.value) {
    document.querySelectorAll(selector).forEach((element) => {
      console.log(element);
      element.classList.add('d-none');
    });
  }
  else {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.remove('d-none');
    });
  }

  show.value = !show.value;
};
</script>

<template>
  <button @click="toggle()" class="btn btn-light">{{show ? hideLabel : showLabel}}</button>
</template>
