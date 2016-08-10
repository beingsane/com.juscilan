<template>

  <span id="forkongithub" class="hide-on-med-and-down"><a href="https://github.com/juscilan">Fork me on GitHub</a></span> 
  <nav class="white">
      <div class="nav-wrapper container">
        <a id="logo-container" href="/" class="brand-logo"><img src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/7/005/08d/09b/109529d.jpg" class="circle bordabranca" alt="Juscilan Moreto" title="Juscilan Moreto"></a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
            <li><a ng-href="#"  ng-click="myData.cv(item, $event)">Curriculum em PDF</a></li>
            <li><a ng-href="/##contato" ng-click="myData.novoContato(item, $event)">Contato</a></li>
            <li><a ng-href="/##sobre"  ng-click="myData.sobre(item, $event)">Sobre</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
            <li><a ng-href="/##contato" ng-click="myData.novoContato(item, $event)">Contato</a></li>
            <li><a ng-href="/##sobre"  ng-click="myData.sobre(item, $event)">Sobre</a></li>
        </ul>
      </div>
  </nav>   

</template>


<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>