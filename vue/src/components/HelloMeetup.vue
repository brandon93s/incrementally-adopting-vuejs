<template>
  <div class="hello">
    <h1>Hello, {{ msg }}</h1>

    <!--
        To demo code splitting and async components,
        the following button loads a sub-component dynamically.

        Monitor your network tab to see the chunks "hot load".
      -->
    <button v-if="!showAsync" @click="showAsync = true">
        Load Async Component
    </button>

    <sub-component v-else />
  </div>
</template>

<script>
export default {
  name: 'HelloMeetup',
  props: {
    msg: String
  },
  data () {
    return {
      showAsync: false
    }
  },
  components: {
    SubComponent: () => import('@/components/SubComponent.vue')
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
