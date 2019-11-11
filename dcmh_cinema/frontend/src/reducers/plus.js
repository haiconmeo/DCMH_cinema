import val from './value-reducer';


export default function plus(state = val, action) {
    switch (action.type){
        case 'ADD':
            // state.val = state.val +1;
            var val = (state.val >=0) ? 8 : (state.value +1);
            return val;
        case 'SUB':
            var val = (state.val <=0) ? 0 : (state.value -1);
            return val;
        default:
            return state;
    }
}
