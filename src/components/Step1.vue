<template>
  <div class="step-item" v-bind:class="{ 'step-active': active }">
    <div class="step-title" v-bind:class="{ 'complete': status == 1 , 'warn': status == 2, 'failure': status == 3}">
      Step 1 

      <step-status :status="status" />
    </div>

    <div class="step-content" v-if="active">
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
    </div>
  </div>
</template>

<script>

import StepMixin from './StepMixin';

import StepStatus from './StepStatus';

export default {
  name: "Step2",
  components: { StepStatus },
  mixins: [ StepMixin ],
  props: {
    nextStep: {
      type: Function
    },
    currentStep: {
      type: Number
    },
    index: {
      type: Number
    }
  },
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
  computed: {
    active() {
      return this.currentStep === this.index;
    }
  },
  mounted() {
    this.canContinue = true;
  }
};
</script>