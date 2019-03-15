import {connect} from "react-redux";
import Index from "../components/Index";

import {map, reduce, somethingElse, _} from 'underscore'
import axios from 'axios';
import {SERVER} from "../constants";
import {IIndexReducerProps} from "../reducers/IndexReducer";

const mapStateToProps = (state: any) => state;

export interface IndexDispatchProps {
    create_record: Function
    register: Function
    login: Function
    loadRecords: Function

}]

export interface IndexProps extends IndexDispatchProps {
    indexStore: IIndexReducerProps,
}

const mapDispatchToProps = (dispatch: any, ownProps: any): IndexDispatchProps => {
    const REST_API_END_POINT = `${SERVER.API_END_POINT}/api/v1/calculation_record`;
    const REGISTER_END_POINT = `${SERVER.API_END_POINT}/users`;
    const LOGIN_END_POINT = `${SERVER.API_END_POINT}/sessions`;
    return {
        register: (payload:any) => {
            axios.post(REGISTER_END_POINT, {user: payload}).then(resp => {
                dispatch({
                    type: 'register',
                    payload: resp.data
                })
            }).catch((e) => {
                dispatch({
                    type: 'failed_to_create',
                    payload: 'Unknown error.'
                })

            })
        },
        login: (payload:any) => {
            axios.post(REST_API_END_POINT, {payload}).then(resp => {
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
        create_record: (payload:any) => {
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
