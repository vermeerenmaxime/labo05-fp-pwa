<script lang="ts">
import { defineComponent, reactive } from 'vue';
import useFirebase from '../composables/useFirebase';
export default defineComponent({
  setup() {
    const { createUser } = useFirebase();
    const userInput = reactive({ name: '', email: '', password: '' });
    const registerAccount = (event: Event) => {
      event.preventDefault();
      if (userInput.name && userInput.email && userInput.password) {
        createUser(
          userInput.name,
          userInput.email as string,
          userInput.password as string
        );
      } else {
        console.log('Invalid input', userInput);
      }
    };
    return { registerAccount, userInput };
  },
});
</script>

<template>
  <div>
    <input />
    <button></button>
  </div>
</template>