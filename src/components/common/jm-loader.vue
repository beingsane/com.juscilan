<template>
    <div v-show="getValue.visible" class="center">
        <img src="/img/loading.gif" alt="Loading" title="Loading">        
    </div>
</template>

<script>

export default {

    name:'loader-component',

    vuex:{

       
        getters: {
            getValue : store => store.Loader,
        }
    },    

    data () {
        return {
            visible:false
        }
    },
}
</script>