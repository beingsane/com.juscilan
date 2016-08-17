<template>
    <h5 class="header center teal-text text-lighten hide-on-med-and-down">  
      <i class="fa fa-whatsapp"></i> {{telefone}}
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
        <div class="parallax"><img src="/img/topo.jpg" alt=""></div>
    </div>
    <h5 class="header center teal-text text-lighten hide-on-med-and-down">"think before, then do."</h5>
    <h5 class="header center teal-text text-lighten hide-on-med-and-up">  
      <i class="fa fa-whatsapp"></i> {{telefone}}
      <br>
      <i id="angle-down" class="fa fa-angle-down black-text" style="font-size:48px" > </i>
    </h5>        
</template>

<script>

import {blink} from './jm-10-blink'

export default {
  data () {
    return {
      telefone:'11 98167-1595'
    }
  },
  ready(){
    blink('angle-down')
    //jQuery('#angle-down').blink();
  }
}
</script>