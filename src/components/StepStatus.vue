<template>
    <span>
        <span v-if="status === 1">complete</span>
        <span v-if="status === 2">warn</span>
        <span v-if="status === 3">error</span>
    </span>
</template>

<script>
export default {
    props:['status']
}
</script>

<style>

</style>