<template>
  <div class="about">
    <p>The current time is:</p>
    <h2> {{currentTime}} </h2>
  </div>
</template>

<script>
    export default {
      data() {
        return {
            currentTime: ""
        }
      },
      created() {
        setInterval(() => {
          this.currentTime = new Date().toLocaleTimeString()
        }, 1000)
      },
      destroyed() {
          clearInterval(this)
      }
    }
</script>