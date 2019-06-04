<template>
  <v-layout column align-center>
    <div>
      <Title title="家計簿アプリ"></Title>
    </div>
    <div>
      <HhaForm></HhaForm>
    </div>
  </v-layout>
</template>

<script>
import Title from '~/components/Title.vue'
import HhaForm from '../components/HhaForm'

export default {
  components: {
    HhaForm,
    Title
  }
}
</script>
