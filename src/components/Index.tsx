import * as React from "react";
import {IndexProps} from "../containers/IndexContainer";
import NewRecord from "./NewRecord";
import Records from "./Records";


interface IndexState {
    showNewAccountModal: Boolean
    licenseExpired: Boolean
}

class Index extends React.Component<IndexProps, Partial<IndexState>> {

    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(nextProp) {

    }

    render() {
        return (
            <div className="row">
                <NewRecord />
                <Records />
            </div>

        )
    }
}

export default Index;