<template>
    <!-- Modal Structure -->
    <div>
      <div id="contato" class="section" >
          <div class="row">
            <div class="col s12 center" >
                <h4>Formulário para contato</h4>
                <form class="col s12" >
                  <div class="row">
                      <div class="input-field col s12">
                        <input id="name"  type="text" class="validate" v-model="dados.name">
                        <label for="first_name">Nome</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                        <input id="email" type="text" class="validate" v-model="dados.email">
                        <label for="email">Email</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                        <input id="mensagem" type="text" class="validate" v-model="dados.mensagem">
                        <label for="first_name">Mensagem</label>
                      </div>
                  </div>
                  <div class="row"> 
                      <button @click="enviar($event)" class="btn waves-effect waves-light" 
                         name="action">Enviar<i class="material-icons right">send</i>
                      </button>
                  </div>
                </form>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {

    vuex:{
              actions:{
                  
                  executa : function ({dispatch}) {
                      let data = JSON.parse(JSON.stringify(this.$data.data));
                      dispatch('ATUALIZA_MODAL',data)
                      jQuery('#modal1').openModal();
                  }
              },

   },

  data () {
    return {

        data:{
            titulo: ''
            ,mensagem :''
            ,tipo :''
            ,inputvisible:false
        },
        
        dados:{
          name: ''
          ,email: ''
          ,mensagem: ''
          
        }

    }
  },

  methods:{

    enviar(event){
        
        event.preventDefault()

            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

        //Valida preenchimento
        if(this.dados.name === "" || this.dados.email === "" || this.dados.mensagem === ""){
            this.$data.data = {
                titulo: 'Atenção'
                ,mensagem :'Todos os campos são obrigatórios ;)'
                ,tipo :'WARNING'
                ,inputvisible:false
            }
            this.executa()
            return;            
        }            
        
        var dados = 'dados=' + JSON.stringify(this.dados);

        this.$http.post('/email',dados,config).then((response) => {
            this.$data.data = {
                titulo: 'Mensagem enviada'
                ,mensagem :'Logo, logo entro em contato ;)'
                ,tipo :'WARNING'
                ,inputvisible:false
            }
            this.executa()
            
        }, (response) => {
            this.$data.data = {
                titulo: 'Erro ao enviar'
                ,mensagem :'Por gentileza tente novamente ;('
                ,tipo :'WARNING'
                ,inputvisible:false
            }
            this.executa()
        });      
    }
  }
}
</script>