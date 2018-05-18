import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addToArticle } from '../../action/add_article';
import { Route} from 'react-router-dom';
import axios from 'axios';

class Article extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        axios.get('api/records/', {
            params: {
                userId: this.props.user.data.userId
            }
        }).then((response) => {
            this.setState(() => {
                return {
                    articles:  response.data
                }
            })
        }).catch((err) => {
            console.log(err.response.data);
        })
    }
    getTime(milisec) {
        let time = new Date(milisec);
        return time.toString();
    }
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
                        {this.state.articles.map((item, index) => {
                            return <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{this.getTime(item.startDate)}</td>
                                <td>@mdo</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const stateCurrent = (state) => ({user: state.authorization});
const dispatchCurrent = (dispatch) => {
  return {
    add: (item) => {
      dispatch(addToArticle(item))
    }
  }
}
export default connect(stateCurrent, dispatchCurrent)(Article);