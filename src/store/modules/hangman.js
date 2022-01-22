export default {
    state: {
        question: 'Wie ist mein Name',
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
        errors: 0,
        success: 0
    },
    mutations: {
        "show": function (state, item) {
            state.letters[item] = true;
            if (state.result.includes(item)) {
                state.success += (state.result.match(new RegExp(item, 'g')) || []).length
            }
            else {
                state.errors++;
                if (state.errors == state.result.length) {
                    state.status = 'lost';
                }
            }

            if (state.result.length == state.success) {

                state.status = 'won';
            }
        }
    }
};