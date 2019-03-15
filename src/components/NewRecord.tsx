import * as React from "react";
import {IndexProps} from "../containers/IndexContainer";

interface IndexState {
    inputPayload: String
}

class NewRecord extends React.Component<IndexProps, Partial<IndexState>> {

    constructor(props) {
        super(props);
        this.state = {
            inputPayload: ''
        }

    }

    handleInputString(e) {
        e.preventDefault()
        this.setState({inputPayload: e.target.value})
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
                            <div className="form-desc">
                                Tree expression example, e.g.: "1,2,3,#,#,4,5,#,#,#,#"
                                <ul>
                                    <li>Each node separate by ,</li>
                                    <li># represents null node</li>

                                </ul>
                            </div>
                            <img alt="" src="https://i.imgur.com/vFFI3ri.png"/>
                            <fieldset className="form-group">
                                <legend><span>Input your tree expression</span></legend>
                                {
                                    this.props.indexStore.errorMessage ?
                                        <div className="alert alert-danger" role="alert">
                                            <strong>{this.props.indexStore.errorMessage} </strong></div>
                                        :
                                        <div/>
                                }
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor=""> Input tree expression</label>
                                            <input className="form-control" placeholder="Expression"
                                                   value={this.state.inputPayload}
                                                   onChange={e => this.handleInputString(e)}
                                                   type="text"/>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                            <div className="form-buttons-w">
                                <button className="btn btn-primary"
                                        onClick={e => {
                                            e.preventDefault();
                                            this.props.create_record(this.state.inputPayload)
                                        }}
                                        type="submit">Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewRecord;