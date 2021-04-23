<template>
  <tr>
    <td>{{number}}</td>
    <td>{{post.title}}</td>
    <td>{{post.body}}</td>
    <td>{{post.userId}}</td>
  </tr>
</template>

<script>
export default {
  props : {
    post : {
      type : Object,
      default : () => {
        return {}
      }
    },
    number : {
      type : Number,
      default : () => {
        return 0;
      }
    }
  },
  name: "BodyTable"
}
</script>

<style scoped>

</style>
