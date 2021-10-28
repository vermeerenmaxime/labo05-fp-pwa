<script lang="ts">
import { defineComponent } from 'vue';
import router from '../bootstrap/router';
import AppHeader from '../components/AppHeader.vue';
import Routine from '../components/Routine.vue';

export default defineComponent({
  components: { AppHeader, Routine },
  setup() {
    const colors = ['blue', 'red', 'green', 'purple', 'yellow'];
    const icons = ['airplay', 'camera', 'activity'];
    function leftAction() {
      console.log('Left action');
      router.back();
    }
    function rightAction() {
      console.log('right action');
    }
    return { leftAction, rightAction, colors, icons };
  },
});
</script>

<template>
  <div>
    <AppHeader
      title="New Routine"
      :leftAction="{ text: 'Cancel', url: '' }"
      :rightAction="{ text: 'Add', url: '/add' }"
    ></AppHeader>
    <div class="px-8 py-0">
      <label class="font-semibold grid gap-2"
        >Routine title<input
          class="
            p-2
            px-3
            w-full
            rounded-md
            border-2 border-gray-200
            text-gray-600
            hover:border-gray-500
          "
          placeholder="eg. Morning Routine"
      /></label>
      <div class="font-semibold grid gap-2 mt-6">Color</div>
      <div class="grid grid-cols-5 sm:grid-cols-10 gap-4 mt-2">
        <div v-for="color in colors" v-bind:key="color">
          <label :for="color">
            <input type="radio" class="peer hidden" :id="color" name="color" />
            <div
              class="
                p-4
                rounded-md
                border-2 border-gray-200
                text-gray-100
                peer-hover:border-gray-500
                peer-checked:border-gray-500
                justify-center
                items-center
                flex
                cursor-pointer
              "
            >
              <div
                class="p-3 rounded-full bg-gray-300"
                :class="'bg-' + color + '-400'"
              ></div>
            </div>
          </label>
        </div>
      </div>
      <div class="font-semibold grid gap-2 mt-6">Icon</div>
      <div class="grid grid-cols-5 sm:grid-cols-10 gap-4 mt-2">
        <div v-for="icon in icons" v-bind:key="icon">
          <label :for="icon">
            <input type="radio" class="peer hidden" :id="icon" name="icon" />
            <div
              class="
                p-4
                rounded-md
                border-2 border-gray-200
                text-gray-100
                peer-hover:border-gray-500
                peer-checked:border-gray-500
                justify-center
                items-center
                flex
                cursor-pointer
              "
            >
              <Icon :name="icon" />
            </div>
          </label>
        </div>
      </div>
    </div>

    <!-- Hello
    <ol>
      <li>Tailwind install</li>
      <li>Router toevoegen</li>
      <li>PWA support instellen</li>
    </ol> -->
  </div>
</template>