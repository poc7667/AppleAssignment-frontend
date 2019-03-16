///<reference path="../constants.ts"/>

export interface IIndexReducerProps {
    records: Array<any>
    isAuthed: boolean
    errorMessage: string
}

function initState(): IIndexReducerProps {
    return {
        records: [],
        isAuthed: false,
        errorMessage: null
    }
}

export function IndexReducer(state: IIndexReducerProps = initState(), action) {
    let records = null;
    switch (action.type) {
        case 'load_records':
            return Object.assign({}, state, {records: action.payload, errorMessage: null})
        case 'verified':
            return Object.assign({}, state, {isAuthed: true, errorMessage: null})
        case 'logout':
            return Object.assign({}, state, {isAuthed: false, errorMessage: null})
        case 'login':
            return Object.assign({}, state, {records: action.payload, errorMessage: null})
        case 'failed_to_login':
            return Object.assign({}, state, {errorMessage: 'Incorrect email or password.'})
        case 'failed_to_register':
            return Object.assign({}, state, {errorMessage: 'This account has been taken.'})
        case 'register':
            return Object.assign({}, state, {records: action.payload})
        case 'create_record':
            records = state.records.slice()
            records.unshift(action.payload)
            return Object.assign({}, state, {records: records, errorMessage: null})
        case 'failed_to_create':
            return Object.assign({}, state, {errorMessage: action.payload})
        default:
            return state;
    }
}

