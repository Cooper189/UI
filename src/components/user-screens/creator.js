import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addToArticle } from '../../action/add_article';

class Creator extends Component {
    addArticle() {
        this.props.add(this._input.value);
    }
    render() {
        return (
            <div className="col-3">              
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                    </div>
                    <input type="text" ref={(input) => this._input = input}
                            className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"  />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button onClick={this.addArticle.bind(this)}> Add </button>
            </div>
        )
    }
}
const stateCurrent = (state) => ({some: state.article});
const dispatchCurrent = (dispatch) => {
  return {
    add: (item) => {
      dispatch(addToArticle(item))
    }
  }
}
export default connect(stateCurrent, dispatchCurrent)(Creator)