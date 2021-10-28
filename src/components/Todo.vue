<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: { date: { type: Object as any } },
  setup(props, { emit }) {
    const getRelativeDuration = (updateDate: Date) => {
      const currentDate: Date = new Date(``);

      let passedTime: string;

      if (new Date(``) == currentDate.getTime()) {
        return 'Just Today';
      }
      return 'Some other day';
    };

    const refreshTodo = async () => {};
  },
});
</script>
