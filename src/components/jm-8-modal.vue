<template>
<div id="modal1" class="modal">
    <div class="modal-content">
        <h4 >{{getValue.titulo}}</h4>
        <p> {{getValue.mensagem}}</p>
        <input id="senhaModal" v-show="getValue.inputvisible" autofocus type="password" v-model="senha" >
    </div>
    <div class="modal-footer">
        <button id="closeModal" class="modal-action modal-close waves-effect waves-green btn" @click="ok()" >Ok</button>
    </div>
</div>
</template>

<script>
export default {

    vuex:{

              actions:{
                  
                  executa : function ({dispatch}) {
                      let data = JSON.parse(JSON.stringify(this.$data));
                      dispatch('OK_CLICK',data)
                  }
              },        
                getters: {
                    getValue : store => store.Modal
                
                }
            }
  ,
  data () {
    return {
      titulo: ''
      ,mensagem: ''
      ,tipo: ''
      ,senha:''
      ,inputvisible:true
    }
  },

    ready () {
        this.senha = ''
        this.data = this.getValue 
    },

    methods:{
      ok(){

          this.executa()

          if(this.getValue.tipo === 'DOWNLOAD'){
                
                if(!this.senha)
                    return

                let address = "/arquivos/Juscilan_Moreto-11-98167-1595.pdf/" + this.senha;

                window.location = address;
          }

          jQuery('#modal1').closeModal();
s      }
    }

}
</script>