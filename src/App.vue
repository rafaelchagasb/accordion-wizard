<template>
  <div id="app">
    <accordion-wizard :steps="steps" />
  </div>
</template>

<script>
import AccordionWizard from "./components/accordion-wizard/AccordionWizard.vue";
import Step1 from "./components/steps/Step1.vue";
import Step2 from "./components/steps/Step2.vue";
import Step3 from "./components/steps/Step3.vue";
import Step4 from "./components/steps/Step4.vue";

export default {
  name: "App",
  components: {
    AccordionWizard
  },
  data() {
    return {
      steps: [
        {
          component: Step1
        },
        {
          component: Step2
        },
        {
          component: Step3
        },
        {
          component: Step4
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background: rgb(233, 232, 232);
}


</style>

