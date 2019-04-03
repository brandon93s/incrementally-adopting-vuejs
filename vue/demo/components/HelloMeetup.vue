<template>
  <hello-meetup :msg="msg" />
</template>

<script>
import HelloMeetup from '@/components/HelloMeetup.vue'

export default {
  data () {
    return {
      msg: 'Atlanta!'
    }
  },
  components: {
    HelloMeetup
  }
}
</script>
