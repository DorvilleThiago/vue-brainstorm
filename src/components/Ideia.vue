<template>
    <div class="child-box">
        <p>{{  message  }}</p>
    </div>
</template>
<script setup lang="ts">
    defineProps<{
    message: string
    }>()
</script>
<style>
    .child-box {
        padding: 10px;
        background-color: #525252;
        border-radius: 15px;
        height: auto;
    }
</style>