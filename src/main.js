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
import JmModal        from './components/jm-8-modal.vue'

Vue.use(VueResource)
Vue.use(Vuex)

export const state = {

   Modal:{}
}

export const mutations = {

    ATUALIZA_MODAL (state, obj) {
      state.Modal = obj
    },
    
    OK_CLICK_MODAL (state, obj) {

        state.Modal = obj

        if(obj.tipo === 'DOWNLOAD'){
            
            if(obj.senha === ''){
                state.Modal.titulo      =  'Atenção'
                state.Modal.mensagem    =   'A senha é obrigatória :('
                state.Modal.tipo        =   'WARNING'
                state.Modal.inputvisible=   false            

                return
            }

            Vue.http.get('/arquivos/' + obj.senha).then((response) => {
                
                let objRetorno = response.body
                
                if(objRetorno == 'Erro'){
                    
                    state.Modal.titulo      =  'Atenção'
                    state.Modal.mensagem    =   'A senha digitada é inválida :('
                    state.Modal.tipo        =   'WARNING'
                    state.Modal.senha ='' 
                    state.Modal.inputvisible=   false

                    return
                }    

                let address = "/arquivos/Juscilan_Moreto-11-98167-1595.pdf/" + obj.senha;
                window.location = address;
                state.Modal.senha ='' 
                state.Modal.tipo        =   'WARNING'
                jQuery('#modal1').closeModal();                  
                    
                }, (response) => {
                    window.console.log('Erro ao realizar operação.');
            });
        }

        else if(obj.tipo === 'WARNING'){
            jQuery('#modal1').closeModal();
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
                  ,JmModal        
              }
  
  ,store:  new Vuex.Store({
                            state,
                            mutations,
                            //strict: true 
                        })
})
