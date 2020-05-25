<template>
    <span class="icon-title">
        <span v-if="status === 1"><check-icon></check-icon></span>
        <span v-if="status === 2"><alert-icon></alert-icon></span>
        <span v-if="status === 3"><close-icon></close-icon></span>
    </span>
</template>

<script>
import CheckIcon from 'vue-material-design-icons/Check.vue';
import AlertIcon from 'vue-material-design-icons/Alert.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';

export default {
    props:['status'],
    components: { CheckIcon, AlertIcon, CloseIcon }
}
</script>

<style scoped>

.icon-title{
    padding: 5px 10px;
    float: right;
}

</style>