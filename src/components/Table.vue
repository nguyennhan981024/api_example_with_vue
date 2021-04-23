<template>
  <div class="container">
    <table class="table table-stripped table-border">
      <thead>
      <tr>
        <td>#</td>
        <td>Title</td>
        <td>Body</td>
        <td>User ID</td>
      </tr>
      </thead>
      <BodyTable v-for="(post, index) in postList" :key="index" :number="index+1" :post="post"/>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BodyTable from "@/components/BodyTable";
export default {
  name: "Table",
  computed : {
    ...mapGetters([
      'postList'
    ])
  },
  components: {BodyTable},

}

</script>

<style scoped>

</style>
