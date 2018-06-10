import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addUser } from '../action/user';
import { Redirect} from 'react-router-dom';

class Registration extends Component {
    sendData() {
        const sendObj = {
            login: this.login.value,
	        name: this.username.value,
	        pass: this.pass.value,
	        email: this.mail.value
        }
        if (this.valueValidation) {
            axios.post('api/users/', sendObj).then((response) => {
                this.props.add(response.data); 
            }).catch((err) => {
                this.props.err(err.response.data);
            })
        }
    }
    get valueValidation() {
        return this.login.value && this.username.value && this.pass.value && this.mail.value
    }
    handleChange(e) {
        console.log(e.target.value, this.pass.value);
    }
    render() {
        if (this.props.user.data) {
            return (<Redirect to="/user" />)
        }
        return (
        <div className="container">
            <div className="col-lg-6">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                    </div>
                    <input type="text" 
                        className="form-control" 
                        ref={(username) => this.username = username} 
                        placeholder="Username"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Login</span>
                    </div>
                    <input type="text"
                        className="form-control" 
                        ref={(login) => this.login = login} 
                        aria-label="Amount (to the nearest dollar)"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" 
                        className="form-control" 
                        ref={(mail) => this.mail = mail} 
                        placeholder="Mail"/>
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                </div>

                <label for="basic-url">Your vanity Password</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Password</span>
                    </div>
                    <input type="text" 
                        className="form-control" 
                        ref={(pass) => this.pass = pass} 
                        id="basic-url" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Password</span>
                    </div>
                    <input type="text" 
                        className="form-control" 
                        id="basic-url" 
                        onChange={(e) => this.handleChange(e)} />
                </div>

            </div>
                <button type="button" className="btn btn-primary" onClick={() => this.sendData()}>Send</button>
           </div> 
        )
    }
}
const stateCurrent = (state) => ({user: state.authorization});
const dispatchCurrent = (dispatch) => {
  return {
    add: (item) => {
      dispatch(addUser(item))
    },
    err(err) {
        dispatch({type: 'ERR', err})
    }
  }
}
export default connect(stateCurrent, dispatchCurrent)(Registration)