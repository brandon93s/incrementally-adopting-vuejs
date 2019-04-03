<template>
  <div class="hello">
    <h1>Hello, {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloMeetup',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
