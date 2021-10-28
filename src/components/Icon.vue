



<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import * as icons from 'lucide-vue-next';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  //   setup(props) {
  //     const icon = icons[props.name];
  //     return { props };
  //   },
  setup(props) {
    const icon: Ref<Function> = ref((icons as any)[props.name]);

    return { icon };
  },
});
</script>

<template>
  <component :is="icon" />
</template>