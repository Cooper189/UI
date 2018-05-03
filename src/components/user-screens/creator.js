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
                <input ref={(input) => this._input = input} />
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