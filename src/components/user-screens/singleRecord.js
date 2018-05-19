import React, {Component} from 'react';
import axios from 'axios';

export default class SingleRecord extends Component {
    constructor() {
        super();
        this.state = {
            single: {}
        }
    }
    componentDidMount() {
        this.componentData
    }
    get componentData() {
        axios.get('/api/records/single/', {params: {recordId: this.props.match.params.recordId}}).then((response) => {
            this.setState(() => {
               return {
                   single:response.data
                }
            })
        })
    }
    put() {
        let send = {
            recordId: this.props.match.params.recordId, 
            title: this._input.value,
            article: this._article.value
        }
        axios.put('/api/records/single/', send).then((res)=> {
            this.componentData
        })
    }
    render() {
        return (
            <div>
                {
                  this.state.single.title ? <div>
                  <input type="text" defaultValue={this.state.single.title} ref={(input) => this._input = input} />
                  <textarea rows="4" defaultValue={this.state.single.article} ref={(article) => this._article = article}></textarea>
                    <button type="button" onClick={this.put.bind(this)}>Send</button></div> : null
                }  
            </div>
        )
    }
}