import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(fas,faUserSecret,faTwitter)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

