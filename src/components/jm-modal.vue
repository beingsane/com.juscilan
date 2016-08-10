<template>
<div id="modal1" class="modal">
    <div class="modal-content">
        <h4 >Atenção</h4>
        <p>Por gentileza digite sua senha:</p>
        <input id="senhaModal" autofocus type="password" v-model="senha" >
    </div>
    <div class="modal-footer">
        <button id="closeModal" class="modal-action modal-close waves-effect waves-green btn" @click="baixar()" >Ok</button>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      senha: ''
    }
  },

    ready () {

        jQuery('#modal1').openModal();
    },

    methods:{
      baixar(){

        let address = "/arquivos/Juscilan_Moreto-11-98167-1595.pdf/" + this.senha;
        
        this.$http.get(address).then((response) => {
            this.$set('visitors', JSON.parse(response.body));
            
        }, (response) => {
            window.console.log('Erro ao realizar operação.');
        });        
        
        jQuery('#modal1').closeModal();
      }
    }

}
</script>