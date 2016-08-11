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
  data () {
    return {
        
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
        
        var dados = 'dados=' + JSON.stringify(this.dados);

        this.$http.post('/email',dados,config).then((response) => {
            window.console.log('foi.');
            
        }, (response) => {
            window.console.log('Erro ao realizar operação.');
        });      
    }
  }
}
</script>