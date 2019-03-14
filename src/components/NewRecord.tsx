import * as React from "react";
import {IndexProps} from "../containers/IndexContainer";


interface IndexState {
    showNewAccountModal: Boolean
    licenseExpired: Boolean
}

class NewRecord extends React.Component<IndexProps, Partial<IndexState>> {

    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(nextProp) {

    }

    render() {
        // @ts-ignore
        // @ts-ignore
        return (
            <div className="col-lg-6">

                <div className="element-wrapper">
                    <h6 className="element-header">Binary tree expression</h6>
                    <div className="element-box">
                        <form>
                            {/*<h5 className="form-header">Default Layout</h5>*/}
                            <div className="form-desc"> Tree expression example, e.g.: ",1,2,3,#,#,4,5,#,#,#,#"
                            </div>
                            <fieldset className="form-group">
                                <legend><span>Input your tree expression</span></legend>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor=""> Input tree expression</label>
                                            <input className="form-control" placeholder="Expression" type="text" />
                                        </div>
                                    </div>

                                </div>

                            </fieldset>
                            <div className="form-buttons-w">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    )
    }
    }

    export default NewRecord;