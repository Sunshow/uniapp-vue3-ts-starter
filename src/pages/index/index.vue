<template>
  <view class="content flex flex-col">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area flex justify-center">
      <text class="title">{{ title }} - {{ foo }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useDefaultStore } from '@/stores/default'
  import { storeToRefs } from 'pinia'
  const title = ref('Hello')

  const store = useDefaultStore()

  const { foo } = storeToRefs(store)

  onMounted(() => {
    console.log('mounted')
  })
</script>

<style>
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
