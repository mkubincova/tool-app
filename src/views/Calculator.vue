<template>
  <div class="calculator">
    <h3>Type two numbers and choose an operator.</h3>
    <input v-model.number="num1" placeholder="First number" type="number">
    <select v-model="selected">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input v-model.number="num2" placeholder="Second number" type="number">
    <span>= {{calculation}} </span>
  </div>
</template>

<script>
    export default {
        data() {
            return {
               num1: "",
               selected: "",
               num2: ""
            }
        },
        computed: {
          calculation () {
            if(this.num1 && this.selected && this.num2){
              return eval(this.num1 + this.selected + this.num2) 
            }     
          }
        }
    }
</script>

<style scoped>
  input{
    margin: 10px;
    width: 120px;
    border: none;
    border-bottom: .5px solid #2c3e50;
  }

  input:focus{
    outline: none;
    border-bottom: .5px solid #42b983;
  }

</style>