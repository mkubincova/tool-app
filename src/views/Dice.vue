<template>
  <div class="dice">
    <h2>{{diceValue}}</h2>
    <p v-if="diceValue < 3">That was low.</p>
    <p v-else-if="diceValue < 5">That was average.</p>
    <p v-else>That was high.</p>
    <button v-on:click="throwDice"><fa-icon :icon="['fas', 'dice']" /> Throw again!</button>
  </div>
</template>

<script>
    export default {
      methods: {
            throwDice() {
              const newValue = 1 + Math.floor(Math.random() * 6)
              this.diceValue = newValue
            }
        },
        data() {
            const between1And6 = 1 + Math.floor(Math.random() * 6)
            return {
                diceValue: between1And6
            }
        }
    }
</script>