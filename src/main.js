import Vue          from 'vue'
import VueResource  from 'vue-resource'
import Vuex         from 'vuex'

import JmNav        from './components/jm-1-nav.vue'
import JmTopBanner  from './components/jm-2-top-banner.vue'
import JmColluns    from './components/jm-3-colluns.vue'
import JmMidBanner  from './components/jm-4-mid-banner.vue'
import JmContact    from './components/jm-5-contact.vue'
import JmFootBanner from './components/jm-6-foot-banner.vue'
import JmFooter     from './components/jm-7-footer.vue'
import Modal        from './components/jm-8-modal.vue'

Vue.use(VueResource)
Vue.use(Vuex)

export const state = {

   Modal:{}
}

//Define duas matations (Aconselhável separar num arquivo a parte)
export const mutations = {

    ATUALIZA_MODAL (state, obj) {
      state.Modal = obj
    },
    OK_CLICK (state, obj) {
          state.Modal = obj
          
          if(obj.tipo === 'DOWNLOAD'){
                
                if(obj.senha === '')
                    return
                   
                let address = "/arquivos/Juscilan_Moreto-11-98167-1595.pdf/" + obj.senha;
                window.location = address;
                state.Modal.senha =''

          }
    },    
}

new Vue({
  el: 'body',
  components: { 
                  JmNav
                  ,JmTopBanner 
                  ,JmColluns
                  ,JmMidBanner
                  ,JmContact
                  ,JmFootBanner
                  ,JmFooter
                  ,Modal        
              }
  
  ,store:  new Vuex.Store({
                            state,
                            mutations,
                            strict: true // impede que altere o state diretamente, retirar em produção (Afeta Performance)
                        })
})
