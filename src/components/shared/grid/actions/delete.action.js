import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {deleteGridData, addGridData} from '../../../../action/grid.action';


class Delete extends Component {
    deleteElement() {
        axios.delete('/api/records/single/', {data: {recordId: this.props.recordId}}).then((res) => {
            const temp = this.props.grid[this.props.screenId].filter((el) => {
                return el.recordId !== this.props.recordId
            })
            this.props.add(temp, this.props.screenId);
        })
    }
    render() {
        return (
            <button type="button" onClick={this.deleteElement.bind(this)}>{this.props.name}</button>
        )
    }
}

const stateCurrent = (state) => {
    return {
        grid: state.grid
    };
}
const dispatchCurrent = (dispatch) => {
    return {
        add: (item, screenId) => dispatch(addGridData(item, screenId)),        
        delete: (screenId) => dispatch(deleteGridData(screenId)),
    }
}
export default connect(stateCurrent, dispatchCurrent)(Delete)