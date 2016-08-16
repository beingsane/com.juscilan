<template>
  <span id="forkongithub" class="hide-on-med-and-down"><a href="https://github.com/juscilan">Fork me on GitHub</a></span> 
  <nav class="white" id="nav">
      <div class="nav-wrapper container">
        <a id="logo-container" href="/" class="brand-logo"><img src="/img/foto.jpg" class="circle bordabranca" alt="Juscilan Moreto" title="Juscilan Moreto"></a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
            <li><a href="#" @click="AbreModal()">Curriculum em PDF</a></li>
            <li><a href="#contato" class="scrollSuave">Contato</a></li>
            <li><a href="#sobre" class="scrollSuave">  Sobre</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
            <li><a class="waves-effect waves-light" data-scroll="" href="#contato"><i class="material-icons left">email</i>Contato</a></li>
            <li><a class="waves-effect waves-light" data-scroll="" href="#sobre"><i class="material-icons left">face</i>Sobre</a></li>
        </ul>
      </div>
  </nav>   
</template>

<script>

import {scroll} from './jm-9-scrool'

export default {
    vuex:{
      actions:{
          AbreModal : function ({dispatch}) {
              let data = JSON.parse(JSON.stringify(this.$data.modal));
              dispatch('ATUALIZA_MODAL',data)
              jQuery('#modal1').openModal();
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
        }
      }
  },
  ready () {
      scroll("scrollSuave")
  },
  methods:{
    baixar(){
      jQuery('#modal1').openModal();
    }
  }  
}
</script>