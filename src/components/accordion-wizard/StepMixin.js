var mixin = {
    props: {
        nextStep: {
            type: Function
        },
        backStep: {
            type: Function
        },
        currentStep: {
            type: Number
        },
        index: {
            type: Number
        }
    },
    data: function () {
        return {
            status: 0
        }
    },
    methods: {
        complete() {
            this.status = 1;
        },
        warn() {
            this.status = 2;
        },
        fail() {
            this.status = 3;
        }
    }
}

export default mixin;