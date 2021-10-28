<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';
import useFirebase from '../composables/useFirebase';
import HeaderBarAction from '../interfaces/HeaderBarAction';

export default defineComponent({
  props: {
    leftAction: { type: Object as PropType<HeaderBarAction>, required: true },
    rightAction: { type: Object as PropType<HeaderBarAction>, required: true },
    title: { type: String, default: 'Last Done' },
  },
  setup(props) {
    console.log(props);

    const { user, logout } = useFirebase();
    const { push } = useRouter();

    const logOutAndredirect = () => {
      logout()
        .then(() => {
          push('/login');
        })
        .catch((error: Error) => {
          console.error(error);
        });
    };
    return { user, logOutAndredirect, props };
  },
});
</script>
<template>
  <div class="relative">
    <div class="grid grid-cols-3 gap-2 px-8 py-8 items-end">
      <!-- <div class="hover:underline" @click="props.leftAction[1]">
        {{ props.leftAction[0] }}
      </div> -->
      <RouterLink class="hover:underline" :to="leftAction.url">
        {{ leftAction.text }}</RouterLink
      >

      <div class="font-bold text-xl justify-self-center">
        {{ props.title }}
      </div>
      <RouterLink class="hover:underline justify-self-end" :to="rightAction.url"
        >{{ rightAction.text }}
      </RouterLink>
      <!-- <div
        class="hover:underline justify-self-end"
        @click="props.rightAction[1]"
      >
        {{ props.rightAction[0] }}
      </div> -->
    </div>
  </div>
</template>
