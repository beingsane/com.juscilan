<template>
<div id="modal1" class="modal">
    <div class="modal-content">
        <h4 >{{myData.modalCabecalho}}</h4>
        <p>{{myData.modalCorpo}}</p>
        <input id="senhaModal" autofocus type="password" ng-show="myData.vlPasswordVisivel" ng-model="myData.vlPassword" >
    </div>
    <div class="modal-footer">
        <button id="closeModal" type="submit" class="modal-action modal-close waves-effect waves-green btn" ng-click="myData.ok(item, $event)">Ok</button>
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