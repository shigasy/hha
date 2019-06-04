<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      default: 'ページタイトル'
    }
  }
}
</script>

<style scoped></style>
