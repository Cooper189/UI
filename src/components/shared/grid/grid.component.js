import React, {Component} from 'react';
import axios from 'axios';
import {deleteGridData} from '../../../action/grid.action';
import { connect } from 'react-redux';
import Delete from './actions/delete.action';
import { Link} from 'react-router-dom';

class Grid extends Component {
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
            <div>
                <h1>Hello world!</h1>
                <table className="table table-dark">
                    {this.header}
                 <tbody>
                    {this.props.grid[this.props.screenId].map((item, index) => {
                        return <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.title}</td>
                        <td>{this.getTime(item.startDate)}</td>
                        <td>
                        {   // TODO delete after actions will finish
                            // <div>
                            //     <button onClick={() => this.props.method(item.title)}>sdf</button>
                            // </div>
                            this.props.flag ? <span>
                                <Link to={`user/record/${item.recordId}`}>{item.recordId}</Link>
                                <Delete name={'Delete'} screenId={this.props.screenId} recordId={item.recordId}></Delete>
                            </span> : null
                        }
                        </td>
                    </tr>
                    })}
                 </tbody>
             </table>
            </div>
        )
    }
    componentWillUnmount() {
        this.props.delete(this.props.screenId);
    }
}
const stateCurrent = (state) => {
    return {
        grid: state.grid
    };
}
const dispatchCurrent = (dispatch) => {
    return {
        delete: (screenId) => dispatch(deleteGridData(screenId)),
    }
}
export default connect(stateCurrent, dispatchCurrent)(Grid)