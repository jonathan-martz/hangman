export default {
    state: {
        title: 'Startseite',
        suffix: 'Hangman'
    },
    mutations: {
        'seo-prepare': function(state,data){
            if(data.title){
                this.commit('head-change-title', data.title)
            }
            if(data.description){
                this.commit('head-change-description', data.description)
            }
        },
        'head-change-title': function(state, name){
            document.title = name + ' - ' + state.suffix;
            state.title = name;
        },
        'head-change-description': function(state, description){
            let meta = document.querySelector('meta[name="description"]');
            if(!meta){
                var link = document.createElement('meta');
                link.setAttribute('name', 'description');
                link.setAttribute('content', description);
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            else{
                meta.content = description;
            }
            
            state.description = description;
        }
    }
};
