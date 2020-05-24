<template>
  <div>
    <component
      v-for="(step, index) in steps"
      :key="index"
      :is="steps[index].component"
      :next-step="nextStep"
      :current-step="currentStep.index"
      :index="index"
      @canProceed="proceed"
    ></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: {
        index: 0
      },
      canProceed: false
    };
  },
  props: {
    steps: {
      type: Array
    }
  },
  methods: {
    nextStep() {
      if(!this.canProceed) return;

      let lengthSteps = this.steps.length;

      if (lengthSteps - 1 === this.currentStep.index) return;

      this.canProceed = false;
      this.currentStep.index += 1;
    },
    isActive(index) {
      return this.currentStep.index === index;
    },
    proceed(value){
      this.canProceed = value;
    }
  },
  computed: {
    
  }
};
</script>

<style>
.step-item {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  transition: all 0.3s;
  background: white;
}

.step-item .step-title {
  height: 50px;
  background: white;
  font-size: 16px;
  text-align: left;
  line-height: 55px;
  color: #626060;
  padding-left: 18px;
  font-weight: bold;
}


.step-item .step-title.complete {
  background: #90ec90;
}

.step-item .step-title.warn {
  background: rgb(250, 210, 31);
}

.step-item .step-title.failure {
  background: rgb(251, 0, 0);
}

.step-item.step-active {
  width: 90%;
  box-shadow: 0px 6px 10px #d7d7d7;
}

.step-item .step-content{
  min-height: 80px;
  background: white;
}

</style>