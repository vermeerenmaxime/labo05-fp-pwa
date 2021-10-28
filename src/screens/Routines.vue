<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import router from '../bootstrap/router';
import AppHeader from '../components/AppHeader.vue';
import Routine from '../components/Routine.vue';
import useFirebase from '../composables/useFirebase';
import useGraphQL from '../composables/useGraphQL';
export default defineComponent({
  components: { AppHeader, Routine },
  setup() {
    const { query } = useGraphQL();
    const { user } = useFirebase();

    // const routines: Ref<RoutineModel[]> = ref([]);
    const routines: Ref<any> = ref([]);

    const getRoutines = async () => {
      const data = await query(
        'getRoutinesByUuid',
        `query getRoutinesByUuid ($uuid: String = ""){
      getRoutinesByUuid(uuid:$uuid){
        id
        title
        numberOfTodos
        createdAt
      updatedAt
      }
      }`,
        { uuid: user.value?.uid }
      );
      routines.value = data;
    };

    getRoutines();

    return { routines };
  },
});
</script>

<template>
  <div>
    <AppHeader
      title="Routines"
      :leftAction="{ text: 'Name', url: '' }"
      :rightAction="{ text: 'Add', url: '/add' }"
    ></AppHeader>
    <!-- <AppHeader
      title="Routines"
      :leftAction="['', leftAction]"
      :rightAction="['Add', rightAction]"
    /> -->
    <div class="grid grid-cols-2 px-8 py-0 gap-8">
      <div v-for="routine in routines" :key="routine">
        <Routine :name="routine.title" :count="routine.numberOfTodos" />
      </div>
      <Routine
        v-for="routine of routines"
        :key="routine.id"
        :data="routine"
        name="Tailwind"
        :count="23"
      />
      <Routine name="Tailwind" :count="23" />
      <Routine name="Tailwind" :count="23" />
    </div>
    <!-- Hello
    <ol>
      <li>Tailwind install</li>
      <li>Router toevoegen</li>
      <li>PWA support instellen</li>
    </ol> -->
  </div>
</template>