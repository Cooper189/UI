import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addToArticle } from '../../action/add_article';
import { Route} from 'react-router-dom'

class Article extends Component {
    get header() {
        return <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
    }
    render() {
        return (
            <div className="col-9">
                <table className="table table-dark">
                    {this.header}
                    <tbody>
                        {this.props.some.map((item, index) => {
                            return <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item}</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        })}
                    </tbody>
                </table>
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
export default connect(stateCurrent, dispatchCurrent)(Article);