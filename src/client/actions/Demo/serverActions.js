import { readData } from '../../api';
import { START, DONE, ERROR, parseAction, wrapPromise } from '../reduxActionsSequence/reduxActionsUtils.js';

const FETCH_SERVER_DATA = 'FETCH_SERVER_DATA';

export function fetchServerData() {
    return (dispatch, getState) => wrapPromise(FETCH_SERVER_DATA, dispatch, () => {
        return readData()
            .then( response => {
                return response.list;
            });
    });
}

export default function(state = {}, action = {
    type: 'UNKNOWN'
}) {
    const {type, stage, payload} = parseAction(action);
    if (type === FETCH_SERVER_DATA) {
        if (stage === START) {
            const serverData = Object.assign({}, state.serverData, {
                fetching: {
                    status: 'loading',
                    errorText: '',
                    error: false
                },
                list: []
            });
            state = Object.assign({}, state, { serverData: serverData });
            return state;
        }
        if (stage === DONE) {
            const serverData = Object.assign({}, state.serverData, {
                fetching: {
                    status: 'done',
                    errorText: '',
                    error: false
                },
                list: action.payload
            });
            state = Object.assign({}, state, { serverData: serverData });
            return state;
        }
        if (stage === ERROR) {
            const serverData = Object.assign({}, state.serverData, {
                fetching: {
                    status: 'done',
                    errorText: !!action.payload.message ? action.payload.message : 'Error: no message',
                    error: true
                },
                list: []
            });
            state = Object.assign({}, state, { serverData: serverData });
            return state;
        }
    }

    return state;
}
