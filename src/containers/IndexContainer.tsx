import {connect} from "react-redux";
import Index from "../components/Index";
import * as Cookies from "js-cookie";
import {map, reduce, somethingElse, _} from 'underscore'
import axios from 'axios';
import {SERVER} from "../constants";
import {IIndexReducerProps} from "../reducers/IndexReducer";

const mapStateToProps = (state: any) => state;

export interface IndexDispatchProps {
    create_record: Function
    register: Function
    login: Function
    loginUseToken: Function
    logout: Function
    loadRecords: Function
}


export interface IndexProps extends IndexDispatchProps {
    indexStore: IIndexReducerProps,
}

const mapDispatchToProps = (dispatch: any, ownProps: any): IndexDispatchProps => {
    const REST_API_END_POINT = `${SERVER.API_END_POINT}/api/v1/calculation_record`;
    const REGISTER_END_POINT = `${SERVER.API_END_POINT}/users`;
    const LOGIN_END_POINT = `${SERVER.API_END_POINT}/sessions`;
    return {
        register: (payload: any) => {
            axios.post(REGISTER_END_POINT, {user: payload}).then(resp => {
                if(resp.data.auth_token){
                    dispatch({
                        type: 'verified'
                    })
                    Cookies.set('auth_token', resp.data.auth_token, {expires: 1});
                }else{
                    dispatch({
                        type: 'failed_to_register'
                    })
                }

            }).catch((e) => {
                dispatch({
                    type: 'failed_to_register'
                })
            })
        },
        loginUseToken: () => {
            let auth_token = Cookies.get('auth_token');
            if (auth_token) {
                axios.post(LOGIN_END_POINT, {session: {id: auth_token}}).then(resp => {
                    if (resp.status === 200 || resp.status === 201) {
                        dispatch({
                            type: 'verified'
                        })
                    }
                }).catch((e) => {
                    try {
                        if (e.response && e.response.data && e.response.data.input[0]) {
                            dispatch({
                                type: 'failed_to_create',
                                payload: e.response.data.input[0]
                            })
                        }
                    } catch (e) {
                        dispatch({
                            type: 'failed_to_create',
                            payload: 'Unknown error.'
                        })
                    }
                })
            }
        },

        logout: () => {
            Cookies.remove('auth_token');
            dispatch({
                type: 'logout'
            })
        },

        login: (payload: any) => {
            let sessions = payload
            axios.post(LOGIN_END_POINT, sessions).then(resp => {
                if (resp.data.auth_token) {
                    dispatch({
                        type: 'verified'
                    })
                    Cookies.set('auth_token', resp.data.auth_token, {expires: 1});
                } else {
                    dispatch({
                        type: 'failed_to_login'
                    })
                }
            }).catch((e) => {

                try {
                    if (e.response && e.response.data && e.response.data.input[0]) {
                        dispatch({
                            type: 'failed_to_create',
                            payload: e.response.data.input[0]
                        })
                    }
                } catch (e) {
                    dispatch({
                        type: 'failed_to_create',
                        payload: 'Unknown error.'
                    })
                }

            })
        },
        create_record: (payload: any) => {
            axios.post(REST_API_END_POINT, {record: {input: payload}}).then(resp => {
                dispatch({
                    type: 'create_record',
                    payload: resp.data
                })
            }).catch((e) => {

                try {
                    if (e.response && e.response.data && e.response.data.input[0]) {
                        dispatch({
                            type: 'failed_to_create',
                            payload: e.response.data.input[0]
                        })
                    }
                } catch (e) {
                    dispatch({
                        type: 'failed_to_create',
                        payload: 'Unknown error.'
                    })
                }

            })
        },
        loadRecords: () => {
            axios.get(REST_API_END_POINT).then(resp => {
                dispatch({
                    type: 'load_records',
                    payload: resp.data
                })
            }).catch((e) => {
                dispatch({
                    type: 'failed_to_create',
                    payload: 'Unknown error.'
                })
            })

        }
    }
}

const IndexContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index as any)

export default IndexContainer;
