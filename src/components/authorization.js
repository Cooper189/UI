import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addUser } from '../action/user';
import { Redirect} from 'react-router-dom';

class Authorization extends Component {
    checkAdd() {
        let send = {
            login: this._login.value,
            pass: this._pass.value
        }
        axios.post('api/login/', send).then((response) => {
            this.props.add(response.data); 
        }).catch((err) => {
            this.props.err(err.response.data);
        })
    }
    render() {
        if (this.props.user.data) {
            return (<Redirect to="/user" />)
        }
        return (
            <div>
                <div className="container">
                <div className="row justify-content-md-center">
                <div class="form-group row">
                    <label className="col-2 col-form-label">Login</label>
                    <div className="col-10">
                        <input className="form-control" type="text" ref={(input) => this._login = input} />
                    </div>
                </div>
                <div class="form-group row">
                    <label className="col-2 col-form-label">Pass</label>
                    <div className="col-10">
                        <input className="form-control" type="password" ref={(input) => this._pass = input} />
                    </div>
                </div>
                {this.props.user.err ? <div class="alert alert-danger" role="alert">
                        <strong>Oh snap!</strong> {this.props.user.err}
                    </div> : null}
                <button type="button" className="btn btn-primary" onClick={this.checkAdd.bind(this)}>Primary</button>
                </div>
                </div>
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
export default connect(stateCurrent, dispatchCurrent)(Authorization)