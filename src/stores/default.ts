import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDefaultStore = defineStore(
  'default',
  () => {
    const foo = ref('')

    return {
      foo,
    }
  },
  {
    // @ts-ignore
    unistorage: true,
  }
)
