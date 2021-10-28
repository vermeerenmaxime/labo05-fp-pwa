<script lang="ts">
import { defineComponent } from 'vue';
import router from '../bootstrap/router';
import AppHeader from '../components/AppHeader.vue';
import Routine from '../components/Routine.vue';
export default defineComponent({
  components: { AppHeader, Routine,Todo  },
  setup() {
    function leftAction() {
      console.log('Left action');
      router.back();
    }
    function rightAction() {
      console.log('right action');
      router.push('/add');
    }
    return { leftAction, rightAction };
  },
});
</script>

<template>
  <div>
    <AppHeader
      title="Routines"
      :leftAction="{ text: '', url: '' }"
      :rightAction="{ text: 'Add', url: '/add' }"
    ></AppHeader>
    <div class="grid grid-cols-2 px-8 py-0 gap-8">Todos</div>
    <Todo></Todo>
  </div>
</template>