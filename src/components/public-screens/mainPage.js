import React, {Component} from 'react';
import Grid from '../shared/grid/grid.component';
import axios from 'axios';
import { connect } from 'react-redux';
import {addGridData, deleteGridData} from '../../action/grid.action'


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.screenId = 'allRecords'
        props.add([], this.screenId);
    }
    componentDidMount() {
        axios.get('api/records/all/').then((response) => {
            this.props.add(response.data, this.screenId);
        })
    }
    render() {
        return (
            <div>
                <Grid screenId={this.screenId}></Grid>
            </div>
        )
    }
}
const stateCurrent = (state) => {
    return {
        grid: state
    };
}
const dispatchCurrent = (dispatch) => {
    return {
        add: (item, screenId) => dispatch(addGridData(item, screenId)),
        delete: (item) => dispatch(deleteGridData(item)),
    }
}
export default connect(stateCurrent, dispatchCurrent)(MainPage)
