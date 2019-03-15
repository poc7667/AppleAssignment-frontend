import * as React from "react";
import {IndexProps} from "../containers/IndexContainer";

interface IndexState {
    records: Array<any>
}

class Records extends React.Component<IndexProps, Partial<IndexState>> {

    constructor(props) {
        super(props);
        this.props.loadRecords()
    }

    render() {
        return (
            <div className="col-lg-6">
                <div className="element-wrapper"><h6 className="element-header">Evaluated Results</h6>
                    <div className="element-box"><h5 className="form-header"></h5>
                        <div className="form-desc">
                            <div className="table-responsive">
                                <table id="dataTable1" width="100%" className="table table-striped table-lightfont">
                                    <thead>
                                    <tr>
                                        <th>Expression</th>
                                        <th>Path</th>
                                        <th>Result</th>
                                    </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                        <th>Expression</th>
                                        <th>Path</th>
                                        <th>Result</th>
                                    </tr>
                                    </tfoot>
                                    <tbody>
                                    {
                                        this.props.indexStore.records.map( item =>{
                                            return (
                                                <tr>
                                                    <td>{item.input}</td>
                                                    <td>{item.path}</td>
                                                    <td>{item.result}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Records;