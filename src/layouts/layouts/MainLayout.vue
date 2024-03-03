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
import { defineComponent, ref } from 'vue';
import MainHeader from '../headers/MainHeader.vue';
import MainSection from '../sections/MainSection.vue';
import MainFooter from '../footers/MainFooter.vue';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

export default defineComponent({
  name: 'MainLayout',
  components: { MainFooter, MainSection, MainHeader },
  setup() {
    const userNameRef = ref({
      name: 'John Doe',
      email: ' [email protected]',
      data: null, // 초기에는 데이터가 없다고 가정합니다.
    });
    const { isPending, isFetching, isError, data, error } = useQuery({
      queryKey: ['todos'],
      queryFn: async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return data;
      },
    });
    userNameRef.value.item = data;

    return {
      username: userNameRef,
    };
  },
});
</script>
