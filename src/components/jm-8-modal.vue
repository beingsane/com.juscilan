<template>
<div id="modal1" class="modal">
    <div class="modal-content">
        <h4 >{{getValue.titulo}}</h4>
        <p> {{getValue.mensagem}}</p>
        <input id="senhaModal" v-show="inputvisible" autofocus type="password" v-model="senha" >
    </div>
    <div class="modal-footer">
        <button id="closeModal" class="modal-action modal-close waves-effect waves-green btn" @click="ok()" >Ok</button>
    </div>
</div>
</template>

<script>
export default {

    vuex:{
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
        this.data = this.getValue 
        console.log(this.getValue.msg)
    },

    methods:{
      ok(){

          if(this.tipo === 'DOWNLOAD'){
                if(!this.senha)
                return

                let address = "/arquivos/Juscilan_Moreto-11-98167-1595.pdf/" + this.senha;

                window.location = address;

                jQuery('#modal1').closeModal();
          }

          if(this.tipo === 'WARNING'){


          }



      }
    }

}
</script>