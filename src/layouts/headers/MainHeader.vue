<template>
  <div class="w-full bg-[red] min-h-[80px]">asdf</div>
  <div>{{ userName.name }}</div>
  <div>{{ userName.email }}</div>
  <div>
    <div v-if="item">
      <div v-for="i in item" :key="i.id">
        <div>{{ i.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { watch, ref } from 'vue';
const item = ref(null);

export default {
  props: ['userName'],

  setup(props) {
    watch(
      () => props.userName.item,
      (newValue, oldValue) => {
        item.value = newValue;
      }
    );
    return {
      item,
    };
  },
};
</script>
