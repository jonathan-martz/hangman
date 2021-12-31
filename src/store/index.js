import { createStore } from 'vuex'
import moduleBreadcrumb from '@/store/modules/breadcrumb.js';
import moduleSeo from '@/store/modules/seo.js';
import moduleHangman from '@/store/modules/hangman.js';
import moduleMessages from '@/store/modules/messages.js';

const store = createStore({
    modules: {
        seo: moduleSeo,
        hangman: moduleHangman,
        messages: moduleMessages,
        breadcrumb: moduleBreadcrumb,
    }
})

export default store;