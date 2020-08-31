<template>
  <div class="faq">
    <h3>Frequently asked questions:</h3>
    <ul>
      <li v-for="(data, index) in faq" :key="index">
        <p class="question">{{index + 1}}. {{data.question}}</p>
        <p>{{data.answer}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
          return{
            faq: [
              {question: "How old are you?", answer: "I'm 10 years old."}, 
              {question: "What's your favorite color?", answer: "My favorite color is purple."}
            ]
          }
            
        }
    }
</script>

<style scoped>
  ul{
    padding: 0;
  }
  li{
    margin: 30px 0;
  }
  p{
    margin: 0;
  }
  .question {
    font-weight: bold;
    padding-bottom: 5px;
  }
</style>