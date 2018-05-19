import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addToArticle } from '../../action/add_article';
import axios from 'axios';

class Creator extends Component {
    addArticle() {
        let send = {
            userId:this.props.user.userId,
            title: this._input.value,
            article: this._description.value
        }
        console.log(send);
        axios.post('/api/records/', send).then((res) => {
            this._input.value = '';
            this._description.value = '';
            this.alert = true;
            this.forceUpdate();
        })
    }
    render() {
        return (
            <div className="col-3">              
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Title</span>
                    </div>
                    <input type="text" ref={(input) => this._input = input}
                            className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"  />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Article</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={(text) => this._description = text}></textarea>
                </div>
                <button className="btn btn-success" onClick={this.addArticle.bind(this)}> Add article </button>
                {this.alert ? <div class="alert alert-success" role="alert">
                    <strong>Well done!</strong>
                    </div> : null}
            </div>
        )
    }
}
const stateCurrent = (state) => ({user: state.authorization.data});
const dispatchCurrent = (dispatch) => {
  return {
    add: (item) => {
      dispatch(addToArticle(item))
    }
  }
}
export default connect(stateCurrent, dispatchCurrent)(Creator)