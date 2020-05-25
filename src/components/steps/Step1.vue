<template>
  <step-base :current-step="currentStep" :index="index" :status="status">
    <template v-slot:title>
      Step1
    </template>
    <template v-slot:default>
      <pre>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
        make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum
      </pre>
      <button @click="goNext">
        Next
      </button>
    </template>1
  </step-base>
</template>

<script>

import StepMixin from '../accordion-wizard/StepMixin';
import StepBase from '../accordion-wizard/StepBase';

export default {
  name: "Step1",
  components: { StepBase },
  mixins: [ StepMixin ],
  data() {
    return {
      canContinue: false
    };
  },
  methods: {
    goNext() {
      this.$emit("canProceed", this.canContinue);
      this.nextStep();
      this.complete();
    }
  },
  mounted() {
    this.canContinue = true;
  }
};
</script>