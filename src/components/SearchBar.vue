<template>
    <section>
        <input v-model="inputValue" type="text" class="search">
        <button v-on:click="handleClick" class="button">Adicionar</button>
    </section>
</template>
<style>
    .search {
        width: 500px;
        height: 40px;
        border-radius: 15px;
        background-color: rgb(82, 82, 82);
        color: white;
        padding: 10px;
        font-size: 20px;
        font-weight: 500;
    }
    .search{
        border: none;
        outline: none;
    }
    .button {
        margin-top: 20px;
        width: 150px;
        height: 37px;
        background-color: #41B883;
        color: white;
        font-weight: 600;
        font-size: 16px;
        border-radius: 12px;
        cursor: pointer;
        border: none;
        transition: all 0.1s ease-in-out;
    }
    .button:hover {
        box-shadow: 0px 0px 15px #41B883;
    }
</style>
<script lang="ts">

import { useStore } from 'vuex';
import { ref } from 'vue';

export default {

    setup() {
        const store = useStore();
        const inputValue = ref('');

        const handleClick = () => {
            if (inputValue.value.length == 0) {
                return
            }
            store.commit('addIdea', inputValue.value)
            console.log(store.state.ideias)
            inputValue.value = '';
        }
        return {
            handleClick, inputValue
        }
    }

}

</script>