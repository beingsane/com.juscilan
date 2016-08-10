<template>
    <!-- Modal Structure -->
    <div>
      <div id="contato" class="section" >
          <div class="row">
            <div class="col s12 center" >
                <h3><i class="mdi-content-send black-text"></i></h3>
                <h4>Contato</h4>
                <form class="col s12" >
                  <div class="row">
                      <div class="input-field col s12">
                        <input id="name"  type="text" class="validate" v-model="name">
                        <label for="first_name">Nome</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                        <input id="email" type="text" class="validate" v-model="email">
                        <label for="email">Email</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                        <input id="mensagem" type="text" class="validate" v-model="mensagem">
                        <label for="first_name">Mensagem</label>
                      </div>
                  </div>
                  <div class="row"> 
                      <button @click="enviar()" class="btn waves-effect waves-light" 
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
      name: ''
      ,email: ''
      ,mensagem: ''
    }
  },

  methods:{

    enviar(){

        var dados = 'dados=' + JSON.stringify(this.data);

        this.$http.post('/counter',dados).then((response) => {
            window.console.log(response.body);
            
        }, (response) => {
            window.console.log('Erro ao realizar operação.');
        });      

    }
  }
}
</script>