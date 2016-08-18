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
import JmModal      from './components/jm-8-modal.vue'

import {state}      from './vuex/state'
import {mutations}  from './vuex/mutations'

Vue.use(VueResource)
Vue.use(Vuex)


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
