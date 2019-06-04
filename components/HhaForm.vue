<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field
            v-model="itemName"
            :counter="100"
            label="商品名"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="itemValue"
            type="number"
            label="Number"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4> </v-flex>
      </v-layout>
    </v-container>
    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn depressed color="primary" @click="add">追加</v-btn>
      </div>
    </v-flex>
    {{ itemList }}
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HhaForm',
  data() {
    return {
      itemName: '',
      itemValue: ''
    }
  },
  computed: {
    ...mapGetters({
      itemList: 'getItemList'
    })
  },
  methods: {
    add: async function() {
      await this.$store.dispatch('storeItemData', this.itemName, this.itemValue)
    }
  }
}
</script>

<style scoped></style>
