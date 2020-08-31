<template>
  <div class="counter">
    <h3>Try the buttons!</h3>
    <Button :start-value="btn1Value" :inc-steps="btn1Steps"/>
    <Button :start-value="btn2Value" :inc-steps="btn2Steps"/>
    <Button :start-value="btn3Value" :inc-steps="btn3Steps"/>
  </div>
</template>

<script>
    import Button from '@/components/Button.vue'

    export default {
      data(){
        return {
          btn1Value: 0,
          btn1Steps: 1,
          btn2Value: 45,
          btn2Steps: 5,
          btn3Value: 33,
          btn3Steps: 10
        }
      },
      components: {
        Button
      }
    }
</script>