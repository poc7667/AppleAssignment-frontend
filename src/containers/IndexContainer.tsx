import {connect} from "react-redux";
import Index from "../components/Index";

import {map, reduce, somethingElse, _} from 'underscore'
import axios from 'axios';
import {DataImport} from "../components/DataImport";
import {SERVER} from "../constants";


const mapStateToProps = (state: any) => state;

interface IAccount {
    id: string,
    username: string,
    password: string,
    group: string,
    orgType: string
}

interface IAccountGroup {
    name: string
}


export interface IndexProps extends IndexDispatchProps {
}

export interface IndexDispatchProps {
    loadRecords: Function

}


function handleUpdateLicenseResponse(dispatch, response){
    if(response.status == 422){
        dispatch({
            type: INVALID_LICENSE,
            payload:  response.data
        })
    }else if(response.status == 200){
        dispatch({
            type: UPDATE_LICENSE,
            payload:  response.data
        })
    }else{
        // Do nothing
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any): IndexDispatchProps => {
    return {
        loadRecords: () => {
            axios.get(`${SERVER.HOST}/api/v1/calculation_record`})
            .then(resp => {
                debugger

            }).catch((e) => {
                if(e.response){
                }else{
                    // network error
                }

            })
            dispatch({
                type: 'load_records',
                payload: null
            })
        }
    }
}

const IndexContainer=connect(
        mapStateToProps,
        mapDispatchToProps
    )(Index as any)

export default IndexContainer;
