<template>
  <div>
    <svg-icon icon-class="question" @click="goto" v-show="false"/>
  </div>
</template>

<script setup>
const url = ref('http://doc.ruoyi.vip/ruoyi-vue');

function goto() {
  window.open(url.value)
}
</script>