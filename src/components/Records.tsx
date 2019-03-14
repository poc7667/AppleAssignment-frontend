import * as React from "react";
import {IndexProps} from "../containers/IndexContainer";

interface IndexState {
    showNewAccountModal: Boolean
    licenseExpired: Boolean
}

class Records extends React.Component<IndexProps, Partial<IndexState>> {

    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(nextProp) {

    }

    render() {
        return (
            <div className="col-lg-6">
                <div className="element-wrapper"><h6 className="element-header">Data Tables</h6>
                    <div className="element-box"><h5 className="form-header">Powerful Datatables</h5>
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
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                    </tr>

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