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
            return Object.assign({}, state, {records: action.payload})
        case 'login':
            debugger
            return Object.assign({}, state, {records: action.payload})
        case 'register':
            debugger
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

