<template>
  <div id="topbanner">
    <h5 class="header center teal-text text-lighten hide-on-med-and-down">  
      <i class="fa fa-whatsapp"></i> <a href="tel:{{telefone}}">{{telefone}}</a>
    </h5>
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
        <div class="parallax"><img src="/img/topo.jpg" alt="think before, then do."></div>
    </div>
    <h5 class="header center teal-text text-lighten hide-on-med-and-down">"think before, then do."</h5>
    <h5 class="header center teal-text text-lighten hide-on-med-and-up">  
      <i class="fa fa-whatsapp"></i> 
      <a href="tel:{{telefone}}">{{telefone}}</a>
      <br>
      <div v-show="anglevisible">
        <a href="#collumns" class="scrollSuave">
          <i id="angle-down" class="fa fa-angle-down black-text " style="font-size:48px" > </i>
        </a>
      </div>
    </h5> 
   <div>        
</template>

<script>

import {blink}      from './common/jm-blink'
import {scrolltop}  from './common/jm-scroll'


export default {
  data () {
    return {
      telefone:'11 98167-1595'
      , anglevisible:true
    }
  },
  ready(){
    
    blink('angle-down')

    let self = this

    scrolltop((top)=>{
      if(top > 50){
          this.$data.anglevisible=false  
      }else{
          this.$data.anglevisible=true
      }
        
    })


  }
}
</script>