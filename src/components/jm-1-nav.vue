<template>
  <span id="forkongithub" class="hide-on-med-and-down"><a href="https://github.com/juscilan">Fork me on GitHub</a></span> 
  <div class="navbar-fixed" id="nav"> 
    <nav class="white">
        <div class="nav-wrapper container">
          
          <a id="logo-container" href="#nav" class="brand-logo scrollSuave"><img src="/img/foto.jpg" class="circle bordabranca" alt="Juscilan Moreto" title="Juscilan Moreto"></a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          
          <ul class="right hide-on-med-and-down">
              <li><a href="#nav"      class="scrollSuave">Início</a></li>
              <li><a href="#" @click="AbreModal()">Currículo em PDF</a></li>
              <li><a href="#contato"  class="scrollSuave">Contato</a></li>
              <li><a href="#sobre"    class="scrollSuave">Sobre</a></li>
          </ul>
          
          <ul class="side-nav" id="mobile-demo" >
              <li><a @click="hide()"      class="waves-effect waves-light scrollSuave" href="#nav" >    <i class="material-icons left material-icons-align" >store</i>Início</a></li>
              <li><a @click="AbreModal()" class="waves-effect waves-light scrollSuave" href="#nav" >    <i class="material-icons left material-icons-align" >assignment_ind</i>Currículo PDF</a></li>
              <li><a @click="hide()"      class="waves-effect waves-light scrollSuave" href="#contato" ><i class="material-icons left material-icons-align" >email</i>Contato</a></li>
              <li><a @click="hide()"      class="waves-effect waves-light scrollSuave" href="#sobre" >  <i class="material-icons left material-icons-align" >face</i>Sobre</a></li>
          </ul>
        </div>
    </nav>
  </div>   
</template>

<script>

import {scroll} from './common/jm-scroll'

export default {
    vuex:{
      actions:{
          AbreModal : function ({dispatch}) {
              let data = JSON.parse(JSON.stringify(this.$data.modal));
              dispatch('ATUALIZA_MODAL',data)
              jQuery('#modal1').openModal();
              jQuery('.button-collapse').sideNav('hide');

          }
      },
      getters: {
          getValue : store => store.Modal
      }              
    },
    data () {
      return {
        modal:{
          titulo: 'Atenção'
          ,mensagem :'Por gentileza digite sua senha:'
          ,tipo :'DOWNLOAD'
          ,inputvisible:true
          ,senha:''
          ,btnokvisible:true
        }
      }
  },
  ready () {
      scroll("scrollSuave")
  },
  methods:{
    baixar(){
      jQuery('#modal1').openModal();
    },
    hide(){
      jQuery('.button-collapse').sideNav('hide');
    }
  }  
}
</script>