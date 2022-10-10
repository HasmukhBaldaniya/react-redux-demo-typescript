import { useReducer, useState } from 'react';

const initialState = {
    count: 0
}

const reducerHandler = (state: any, action: any) => {
    switch(action.type) {
        case 'add': 
            return {...state, count: state.count + 1};
        
        case 'sub':
            return {...state, count: state.count + 1};
        
        default :
            console.log('no type matched');
            return state;
    }
}

const useCounter = () => {
    // const [count, setCount] = useState(0);
    const [ state, dispatch ] = useReducer(reducerHandler, initialState);

    const addCount = () => {
        //setCount(count + 1);
        dispatch({type: 'add'});
    }

    const subCount = () => {
       // setCount(count - 1);
       dispatch({type: 'sub'});
    }

    const addCountByNum = (num: number) => {
       // setCount(count + num);
    }

    return { state, addCount, subCount, addCountByNum };
}

export default useCounter;