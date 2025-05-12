<template>
  <div>
    <h1>Node.js Version</h1>
    <p>Current Node.js Version: {{ nodeVersion }}</p>
  </div>
</template>

<script setup>
const { $nodeVersion } = useNuxtApp();
const nodeVersion = $nodeVersion || 'Unknown'; // 変数としてNode.jsバージョンを取得
</script>

<style scoped>
div {
  text-align: center;
  padding: 20px;
}
h1 {
  font-size: 24px;
  margin-bottom: 10px;
}
p {
  font-size: 18px;
  color: #333;
}
</style>
