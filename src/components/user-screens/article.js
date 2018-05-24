import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addToArticle } from '../../action/add_article';
import { Link} from 'react-router-dom';
import Grid from '../shared/grid/grid.component';
import {addGridData, deleteGridData} from '../../action/grid.action'
import axios from 'axios'

class Article extends Component {
    constructor(props) {
        super(props);
        this.screenId = 'article';
        props.add([], this.screenId);
    }
    componentDidMount() {
        axios.get('api/records/', {
            params: {
                userId: this.props.user.data.userId
            }
        }).then((response) => {
            this.props.add(response.data, this.screenId);
        }).catch((err) => {
            console.log(err.response.data);
        })
    }
    delete(args) {
        axios.delete('/api/records/single/', {data: {recordId: args}}).then((res) => {
        })
    }
    render() {
        return (
             <Grid screenId={this.screenId} flag={true}></Grid>
        )
    }
}
const stateCurrent = (state) => ({user: state.authorization, grid: state.grid});
const dispatchCurrent = (dispatch) => {
    return {
        add: (item, screenId) => dispatch(addGridData(item, screenId)),
        delete: (item) => dispatch(deleteGridData(item)),
    }
}
export default connect(stateCurrent, dispatchCurrent)(Article);