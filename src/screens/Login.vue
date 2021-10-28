<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useFirebase from '../composables/useFirebase';

interface User {
  email: string;
  password: string;
}

export default defineComponent({
  setup() {
    const { login } = useFirebase();
    const { push } = useRouter();
    const loginInput: User = reactive({ email: '', password: '' });
    function loginUser(event: Event) {
      if (loginInput.email && loginInput.password) {
        login(loginInput.email, loginInput.password).then(
          (success: boolean) => {
            if (success) push('/');
          }
        );
      }
    }

    return { loginUser, loginInput };
  },
});
</script>

<template>
  <form @submit="loginUser($event)">
    <input v-model="loginInput.email" type="email" />
    <input v-model="loginInput.password" type="password" />
    <button type="submit"></button>
  </form>
</template>