import Vue from 'vue'
import App from './App.vue'

import JmHead   from './components/jm-head.vue'
import JmBody   from './components/jm-body.vue'
import JmFooter from './components/jm-footer.vue'

new Vue({
  el: 'body',
  components: { JmHead,JmBody,JmFooter }
})
