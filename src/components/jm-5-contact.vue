<template>
    <!-- Modal Structure -->
    <div id="contato">
      <div  class="section" >
          <div class="row">
            <div class="col s12 center" >
                <h5>Formulário para contato:</h5>
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
                      <h6><a class="black-text" href="mailto:juscilan@gmail.com">Ou pelo email: juscilan@gmail.com</a></h6>
                  </div>
                  <div class="row"> 
                      <button @click="enviar($event)" class="btn waves-effect waves-light" 
                         name="action">Enviar<i class="material-icons right">send</i>
                      </button>
                  </div>

                </form>
                <div class="center"><a class="black-text scrollSuave" href="#nav">Voltar ao topo</a></div>
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
                let data = JSON.parse(JSON.stringify(this.$data));
                dispatch('ATUALIZA_MODAL',data)
                jQuery('#modal1').openModal();
            }
        },

   },

  data () {
    return {
            titulo: ''
            ,mensagem :''
            ,tipo :'WARNING'
            ,inputvisible:false
            ,senha:''
            ,dados:{
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

            if(this.$data.dados.name === "" || this.$data.dados.email === "" || this.$data.dados.mensagem === ""){
                this.$data = {
                    titulo: 'Atenção'
                    ,mensagem :'Todos os campos são obrigatórios ;)'
                    ,tipo :'WARNING'
                    ,inputvisible:false
                    ,dados:this.$data.dados
                }
                this.executa()
                return;            
            }            
        
            var dados = 'dados=' + JSON.stringify(this.$data.dados);

            this.$http.post('/email',dados,config).then((response) => {
                this.$data = {
                    titulo: 'Mensagem enviada'
                    ,mensagem :'Logo, logo entro em contato :)'
                    ,tipo :'WARNING'
                    ,inputvisible:false
                    ,dados:this.$data.dados
                }
                this.executa()
                this.$data.dados = {}
                
            }, (response) => {
                this.$data = {
                    titulo: 'Erro ao enviar'
                    ,mensagem :'Por gentileza tente novamente :('
                    ,tipo :'WARNING'
                    ,inputvisible:false
                    ,dados:this.$data.dados
                }
                this.executa()
            });      
        }
    }
}
</script>