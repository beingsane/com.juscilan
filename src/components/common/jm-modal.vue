<template>
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4 >{{getValue.titulo}}</h4>
            <p> {{getValue.mensagem}}</p>
            <input id="senhaModal" v-show="getValue.inputvisible" autofocus type="password" v-model="senha" >
        </div>
        <div class="modal-footer">
            <button id="closeModal" class="waves-effect waves-green btn" @click="ok()" v-show="getValue.btnokvivible" >Ok</button>
        </div>
    </div>
</template>

<script>
    
export default {

    name:'modal',
    vuex:{

        actions:{
            executa : function ({dispatch}) {
                this.$data.tipo = this.getValue.tipo
                let data = JSON.parse(JSON.stringify(this.$data));
                dispatch('OK_CLICK_MODAL',data, this)
            }
        },        
        getters: {
            getValue : store => store.Modal,
        }
    },
    data () {
        return {
        titulo: ''
        ,mensagem: ''
        ,tipo: ''
        ,senha:''
        ,inputvisible:true
        ,btnokvisible:false
        }
    },
    ready () {
        this.data = this.getValue 
    },
    methods:{
        ok(){
            this.executa()
        }
    }
}
</script>