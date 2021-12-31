export default {
    state: {
        result: 'jonathan',
        letters: {
            a: false,
            b: false,
            c: false,
            d: false,
            e: false,
            f: false,
            g: false,
            h: false,
            i: false,
            j: false,
            k: false,
            l: false,
            m: false,
            n: false,
            o: false,
            p: false,
            q: false,
            r: false,
            s: false,
            t: false,
            u: false,
            v: false,
            w: false,
            y: false,
            x: false,
            z: false,
        },
        errors: 0
    },
    mutations: {
        "show": function (state, item) {
            if(state.result.includes(item)){
                state.letters[item] = true;
            }
            else{
                state.errors++;
            }
        }
    }
};