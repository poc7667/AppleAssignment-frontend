import * as React from "react";
import {IndexProps} from "../containers/IndexContainer";
import NewRecord from "./NewRecord";
import Records from "./Records";


interface IndexState {
    showRegistrationForm: Boolean
    error: string
    password: string
    confirm_password: string
    email: string
}

class Index extends React.Component<IndexProps, Partial<IndexState>> {

    constructor(props) {
        super(props);
        this.state = {
            showRegistrationForm: false,
            email: '',
            password: '',
            confirm_password: '',
            error: null
        }
        if (this.props.indexStore.isAuthed == false) {
            this.props.loginUseToken();
        }
    }

    componentWillReceiveProps(nextProp) {
        if (this.props.indexStore.isAuthed == true && nextProp.indexStore.isAuthed == false) {
            this.setState({showRegistrationForm: false})
        }
    }

    switchToRegistration() {
        this.setState({showRegistrationForm: !this.state.showRegistrationForm})
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handlePassword(e) {
        if (e.target.value && e.target.value.length > 0 && this.state.confirm_password.length > 0
            && this.state.showRegistrationForm == true) {
            if (e.target.value != this.state.confirm_password) {
                this.setState({error: 'Passwords inconsistent'})
            } else {
                this.setState({error: null})
            }
        }
        this.setState({password: e.target.value})
    }

    handleConfirmPassword(e) {
        if (e.target.value && e.target.value.length > 0) {
            if (e.target.value != this.state.password) {
                this.setState({error: 'Passwords inconsistent'})
            } else {
                this.setState({error: null})
            }
        }
        this.setState({confirm_password: e.target.value})
    }

    register() {
        if (this.state.password != this.state.confirm_password) {
            this.setState({error: 'Passwords inconsistent'})
        } else {
            this.props.register({
                email: this.state.email,
                password: this.state.password
            })
        }
    }


    login() {
        if (this.state.password.length && this.state.email.length) {
            this.props.login({
                email: this.state.email,
                password: this.state.password
            })
        } else {
            this.setState({error: 'Required information is missing.'})
        }
    }

    renderHeader() {
        return (
            <div className="top-bar color-scheme-transparent">{/*------------------
START - Top Menu Controls
------------------*/}
                <div className="top-menu-controls">
                    <a href="#"
                       onClick={e => {
                           e.preventDefault();
                           this.props.logout();
                       }}
                    ><i className="os-icon os-icon-signs-11"/><span>Logout</span></a>
                </div>
            </div>
        )
    }

    renderLoginForm() {
        return (
            <div className="all-wrapper menu-side with-pattern">
                <div className="auth-box-w">
                    <div className="logo-w"><a href="index-2.html"><img alt src="img/logo-big.png"/></a></div>
                    {
                        this.state.error ?
                            <div className="alert alert-danger" role="alert">
                                <strong>{this.state.error} </strong></div>
                            :
                            null
                    }
                    {
                        this.props.indexStore.errorMessage ?
                            <div className="alert alert-danger" role="alert">
                                <strong>{this.props.indexStore.errorMessage} </strong></div>
                            :
                            null
                    }
                    <h4 className="auth-header">Login Form</h4>
                    <form action="#">
                        <div className="form-group"><label htmlFor>Username</label>
                            <input className="form-control"
                                   value={this.state.email}
                                   onChange={e => this.handleEmail(e)}
                                   placeholder="Enter your username"
                                   type="text"/>
                            <div className="pre-icon os-icon os-icon-user-male-circle"/>
                        </div>
                        <div className="form-group"><label htmlFor>Password</label>
                            <input className="form-control"
                                   value={this.state.password}
                                   onChange={e => this.handlePassword(e)}
                                   placeholder="Enter your password"
                                   type="password"/>
                            <div className="pre-icon os-icon os-icon-fingerprint"/>
                        </div>
                        <div className="buttons-w">
                            <button className="btn btn-primary"
                                    onClick={e => {
                                        this.login();
                                    }}
                            >Log in
                            </button>
                            <button className="btn btn-white" type="button" onClick={e => {
                                e.preventDefault();
                                this.switchToRegistration()
                            }}> Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


    renderRegistrationForm() {
        return (
            <div className="all-wrapper menu-side with-pattern">
                <div className="auth-box-w wider">
                    <div className="logo-w"><a href="index-2.html"><img alt src="img/logo-big.png"/></a></div>
                    {
                        this.state.error ?
                            <div className="alert alert-danger" role="alert">
                                <strong>{this.state.error} </strong></div>
                            :
                            null
                    }{
                    this.props.indexStore.errorMessage ?
                        <div className="alert alert-danger" role="alert">
                            <strong>{this.props.indexStore.errorMessage} </strong></div>
                        :
                        null
                }
                    <h4 className="auth-header">Create new account</h4>
                    <form action="#">
                        <div className="form-group"><label htmlFor> Email address</label>
                            <input className="form-control"
                                   value={this.state.email}
                                   onChange={e => this.handleEmail(e)}
                                   placeholder="Enter email"
                                   type="email"/>
                            <div className="pre-icon os-icon os-icon-email-2-at2"/>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group"><label htmlFor> Password</label>
                                    <input
                                        value={this.state.password}
                                        onChange={e => this.handlePassword(e)}
                                        className="form-control" placeholder="Password" type="password"/>
                                    <div className="pre-icon os-icon os-icon-fingerprint"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group"><label htmlFor>Confirm Password</label>
                                    <input
                                        value={this.state.confirm_password}
                                        onChange={e => this.handleConfirmPassword(e)}
                                        className="form-control" placeholder="Password" type="password"/></div>
                            </div>
                        </div>
                        <div className="buttons-w">
                            <button className="btn btn-primary" onClick={e => {
                                e.preventDefault();
                                this.register()
                            }}>Register Now
                            </button>
                            <button className="btn btn-white" onClick={e => {
                                e.preventDefault();
                                this.setState({showRegistrationForm: false})
                            }}>Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }

    renderContent() {
        return (

            [
                this.renderHeader(),
                <div className="content-i">
                    <div className="content-box">
                        <div className="row">
                            <NewRecord create_record={this.props.create_record} indexStore={this.props.indexStore}/>
                            <Records loadRecords={this.props.loadRecords} indexStore={this.props.indexStore}/>
                        </div>
                    </div>
                </div>
            ]

        )
    }

    render() {
        if (this.props.indexStore.isAuthed == false) {
            if (this.state.showRegistrationForm == false) {
                return this.renderLoginForm();
            } else {
                return this.renderRegistrationForm();
            }

        } else {
            return this.renderContent();
        }
    }
}

export default Index;