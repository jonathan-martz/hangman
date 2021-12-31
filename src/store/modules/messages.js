export default {
    state: {
        items: []
    },
    mutations: {
        "message-add": function (state,data) {
            state.items.push(data);
        },
        "messages-reset": function (state) {
            state.items = [];
        }
    }
};