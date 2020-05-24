<template>
  <div class="step-item" v-bind:class="{ 'step-active': active }">
    <div class="title">
      <slot name="title"></slot>
    </div>

    <div class="content" v-if="active">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepBase",
  
  computed: {
    active: {
      get(){
        return this.indexStep === this.index;
      }
    }
  },
  data() {
    return { 
      indexStep: this.currentStep,
    canContinue: false };
  }
};
</script>

<style>
</style>