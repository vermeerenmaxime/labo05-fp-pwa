<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Routine',
  props: {
    data: { type: Object as any },
    name: { type: String, required: false },
    count: { type: Number, required: false },
  },
  setup(props) {
    const handleDelete = () => {};
    console.log(props);
    return { handleDelete, props };
  },
});
</script>
<template>
  <RouterLink
    class="
      flex
      justify-center
      flex-col
      items-center
      border-2 border-gray-200
      rounded-md
      px-4
      py-8
      relative
    "
    :to="`/${props.data.id}`"
  >
    <div class="font-bold">{{ props.name || props.data.title }}</div>
    <div class="text-sm">
      {{ props.count || props.data.numberOfTodos }} items
    </div>
    <div class="absolute right-2 top-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C7C7C7"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
    <button @click.prevent="handleDelete"></button>
  </RouterLink>
</template>
