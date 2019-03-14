///<reference path="../constants.ts"/>

import {map, reduce, somethingElse, _} from 'underscore'

export interface IIndexReducerProps {

}

function initState() {
    return {

    }
}

export function IndexReducer(state: IIndexReducerProps = initState(), action) {
    let newAccounts = null;
    let foundAccount = null;
    let config = {}
    switch (action.type) {
        case 'load_records':

            return null;
            // return Object.assign({}, state, {})
        //     return Object.assign({}, state, {account_groups: action.payload})
        // case LOAD_ACCOUNTS:
        //     return Object.assign({}, state, {accounts: formalizeAccounts(action.payload)})
        // case ADD_ACCOUNT:
        //     newAccounts = state.accounts
        //     newAccounts.push(action.payload)
        //     saveToStorage(ACCOUNT_STORAGE_KEY, newAccounts)
        //     console.log(newAccounts)
        //     return Object.assign({}, state, {accounts: newAccounts})
        // case UPDATE_ACCOUNT:
        //     saveToStorage(ACCOUNT_STORAGE_KEY, action.payload)
        //     return Object.assign({}, state, {accounts: action.payload})
        // case LOAD_CONFIG:
        //     return Object.assign({}, state, {config: action.payload})
        //
        // case DELETE_ACCOUNT:
        //     foundAccount = _.find(state.accounts, function (o) {
        //         return o.username == action.payload.username;
        //     })
        //     newAccounts = _.without(state.accounts, foundAccount)
        //     saveToStorage(ACCOUNT_STORAGE_KEY, newAccounts)
        //     return Object.assign({}, state, {accounts: newAccounts})
        // case ADD_EXISTING_ACCOUNT_ERROR:
        //     return Object.assign({}, state, {errorMessage: 'The account has already existed'})
        // case ADD_ACCOUNT_GROUP:
        //     let account_groups = state.account_groups.slice()
        //     account_groups.push(action.payload)
        //     // save to storage
        //     saveToStorage(ACCOUNT_GROUP_STORAGE_KEY, account_groups)
        //     return Object.assign({}, state, {account_groups: account_groups})
        // case UPDATE_GROUPS:
        //     saveToStorage(ACCOUNT_GROUP_STORAGE_KEY, action.payload)
        //     return Object.assign({}, state, {account_groups: account_groups})
        // case UPDATE_SORTING_OPTION:
        //     config = Object.assign({}, state.config, {sorting: action.payload})
        //     console.log(config)
        //     saveToStorage(CONFIG_KEY, config)
        //     return Object.assign({}, state, {config: config})
        // case INCREASE_USAGE_COUNT:
        //     let accId = action.payload
        //     let currentTime = Date.now()
        //     if (accId in state.accounts) {
        //         state.account_usage[accId].push(currentTime)
        //     } else {
        //         state.account_usage[accId] = [currentTime]
        //     }
        //     foundAccount = _.find(state.accounts, function (o) {
        //         return o.id == accId;
        //     })
        //     foundAccount.lastAccessedAt = currentTime
        //     saveToStorage(ACCOUNT_STORAGE_KEY, state.accounts)
        //     return Object.assign({}, state)
        // case LOAD_LICENSE:
        //     let updatedLicense = Object.assign({}, state.license, updateLicenseStatus(action.payload))
        //     return Object.assign({}, state, {license: updatedLicense})
        // case UPDATE_LICENSE:
        //     let newLicense: ILicense = {
        //         active: (action.payload.status === VALID_LICENSE_STATUS) ? true : false,
        //         licenseCode: action.payload.license_code,
        //         expirationDate: action.payload.expiration_date,
        //         licenseType: action.payload.license_type,
        //         validated: true
        //     }
        //     newLicense = JSON.parse(JSON.stringify(newLicense)); // remove undefined value
        //     let license = Object.assign({}, state.license, newLicense)
        //     saveToStorage(LICENSE_KEY, license)
        //     let errorMessage = (newLicense.active) ? '': state.errorMessage
        //     return Object.assign({}, state, {license: license, errorMessage: errorMessage})
        // case INVALID_LICENSE:
        //     let message = action.payload.message
        //     let expiredLicense = Object.assign({}, state.license, {
        //         active: false,
        //         licenseCode: action.payload.license_code || state.license.licenseCode,
        //         expirationDate: action.payload.expired_date || state.license.expirationDate,
        //         validated: true
        //     })
        //     saveToStorage(LICENSE_KEY, expiredLicense)
        //     // let action.payload.expired_on
        //     return Object.assign({}, state, {errorMessage: message, license: expiredLicense})
        // case SAVE_CONFIG:
        //     config = Object.assign({}, state.config, action.payload)
        //     saveToStorage(CONFIG_KEY, config)
        //     return Object.assign({}, state, {config: config})
        default:
            return state;
    }
}

