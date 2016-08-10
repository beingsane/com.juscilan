<template>
      <!-- parte controlada pelo ng -->
      <div id="corpo" ng-app="myapp" onscroll="function(){alert('12');}">
         <div ng-controller="MyController">
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
            <h5 class="header center teal-text text-lighten hide-on-med-and-down">{ www.juscilan.com }</h5>
            <div id="index-banner" class="parallax-container">
               <div class="section no-pad-bot">
                  <div class="container">
                     <div class="row center " style="margin-top:85px">
                        <h5 class="header col s12 light-image center">Desenvolvimento</h5>
                        <h5 class="header col s12 light-image center">de soluções  </h5>
                        <h5 class="header col s12 light-image center">em software.</h5>
                     </div>
                     <br><br>
                  </div>
               </div>
               <div class="parallax"><img src="../../img/background3.jpg" alt=""></div>
            </div>
            <h5 class="header center teal-text text-lighten ">"think before, then do."</h5>
            <div class="container">
               <div class="section">
               </div>
               <div class="section">
                  <!--   Icon Section   -->
                  <div class="row">
                     <div class="col s12 m4">
                        <div class="icon-block">
                           <h2 class="center black-text"><i class="material-icons">phonelink_ring</i></h2>
                           <h5 class="center">Aplicativos Mobile</h5>
                           <p class="light">Desenvolvimento de apps Android <a href="https://play.google.com/store/apps/developer?id=Juscilan+Moreto" >Google&copy</a> utilizando a linguagem Java&copy AsyncTask com integração de Api´s em json, otimizando consumo de banda e recursos do device.</p>
                        </div>
                     </div>
                     <div class="col s12 m4">
                        <div class="icon-block">
                           <h2 class="center black-text"><i class="material-icons">shopping_cart</i></h2>
                           <h5 class="center">E-commerce</h5>
                           <p class="light">Experiências em manutenção de ERP com integração da parte de faturamento e emissão de Nfe. Consumo e disponibilização de serviços e webservices, tanto <b>SOAP</b> <br> &ltXML&gt quanto <b>RESTful</b> {json}.</p>
                        </div>
                     </div>
                     <div class="col s12 m4">
                        <div class="icon-block">
                           <h2 class="center black-text"><i class="material-icons">comment</i></h2>
                           <h5 class="center">Artigos</h5>
                           <p class="light">
                              <a href="https://www.linkedin.com/pulse/import%C3%A2ncia-de-se-ter-um-site-responsivo-juscilan-moreto?trk=pulse_spock-articles">A importância de um site responsivo.</a>
                              <br>
                              <a href="https://www.linkedin.com/pulse/efici%C3%AAncia-x-efic%C3%A1cia-mais-um-round-juscilan-moreto?trk=pulse_spock-articles">Eficiência X Eficácia - Mais um round!</a>
                              <br>
                              <a href="https://medium.com/@Juscilan/nodejs-com-socket-io-e-arduino-30f4922566f9#.wq254047d"> NodeJs Socket Arduino </a>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="parallax-container valign-wrapper">
               <div class="section no-pad-bot">
                  <div class="container">
                     <div class="row center">
                        <h5 class="header col s12 light-image center">Front End/UX : {Html5,Css,JS,Jquery,Angular,Gulp...}</h5>
                     </div>
                  </div>
               </div>
               <div class="parallax"><img src="../../img/background2.jpg" alt=""></div>
            </div>
            <div id="contato" class="container">
               <!-- Modal Structure -->
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
            </div>
            <div class="parallax-container valign-wrapper">
               <div class="section no-pad-bot">
                  <div class="container">
                     <div class="row center">
                        <h5 class="header col s12 light-image">Back End:{SqlServer,Oracle,MongoDB,Asp.NET MVC,Node,Python}</h5>
                     </div>
                  </div>
               </div>
               <div class="parallax"><img src="../../img/background1.jpg" alt=""></div>
            </div>
            
            <!--  Scripts -->
            <!-- build:js -->
            <script src="../../js/jquery-2.1.1.min.js"></script>
            <script src="../../js/materialize.js"></script>
            <script src="../../js/init.js"></script>
            <script src="../../js/angular.min.js"></script>
            <script src="../../js/angular.mod.js"></script>
            <!-- endbuild -->
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