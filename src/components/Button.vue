<template>
  <div class="button">
    <button v-on:click="initialValue += increment"> {{initialValue}} </button>
  </div> 
</template>

<script>
export default {
  data(){
    return {
      initialValue: this.startValue,
      increment: this.incSteps
    }
  },
  props: ["startValue", "incSteps"]
}
</script>