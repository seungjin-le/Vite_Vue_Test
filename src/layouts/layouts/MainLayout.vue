<template>
  <div class="flex flex-col min-h-[100vh] h-auto justify-between">
    <div class="w-full">
      <MainHeader :userName="username" />
      <MainSection />
    </div>
    <MainFooter />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import MainHeader from '../headers/MainHeader.vue';
import MainSection from '../sections/MainSection.vue';
import MainFooter from '../footers/MainFooter.vue';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
console.log('zxcvzxcv');
const { isPending, isFetching, isError, data, error } = useQuery({
  queryKey: 'todos',
  queryFn: axios
    .get('https://reqbin.com/echo/get/json')
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    }),
});

export default defineComponent({
  name: 'MainLayout',
  components: { MainFooter, MainSection, MainHeader },
  data() {
    return {
      username: {
        name: 'John Doe',
        email: ' [email protected]',
      },
      items: data || 'No data',
    };
  },
});
</script>
