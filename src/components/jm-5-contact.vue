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
                        <input id="name"  type="text" class="validate" ng-model="myData.name">
                        <label for="first_name">Nome</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                        <input id="email" type="text" class="validate" ng-model="myData.email">
                        <label for="email">Email</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                        <input id="mensagem" type="text" class="validate" ng-model="myData.mensagem">
                        <label for="first_name">Mensagem</label>
                      </div>
                  </div>
                  <div class="row"> 
                      <button ng-click="myData.doClick(item, $event)" class="btn waves-effect waves-light" 
                        type="submit" name="action">Enviar<i class="material-icons right">send</i>
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
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
</script>