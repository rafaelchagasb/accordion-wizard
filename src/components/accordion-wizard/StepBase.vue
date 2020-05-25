<template>
  <div class="step-item" v-bind:class="{ 'step-active': active }">
    <div class="step-title" v-bind:class="{ 'complete': status == 1 , 'warn': status == 2, 'failure': status == 3}">
      <slot name="title"></slot>

      <step-status :status="status" />
    </div>

    <div class="step-content" v-if="active">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import StepStatus from './StepStatus';

export default {
  name: "StepBase",
  components: { StepStatus },
  props: {
    currentStep: {
      type: Number
    },
    index: {
      type: Number
    },
    status: {
      type: Number
    }
  },
  computed: {
    active: {
      get(){
        return this.currentStep === this.index;
      }
    }
  },
};
</script>

<style scoped>

  .step-item .step-title.complete {
    background: #90EC90;
  }

  .step-item .step-title.warn {
    background: #ECEC90;
  }

  .step-item .step-title.failure {
    background: #EC9090;
  }

  .step-content{
    padding: 10px;
  }

</style>