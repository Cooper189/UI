import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addMenu } from '../action/add_menu';
import { Link} from 'react-router-dom';
import axios from 'axios';

class MainMenu extends Component {
    componentDidMount() {
        axios.get('/api/test/').then((menu) => {
            this.props.add(menu.data); 
        })
    }
    render() {
        return (
            <nav className="navbar navbar-light" style={customElementStyle}>
                <ul className="nav justify-content-center">
                    {
                        this.props.menu.map((item) => {
                            return (
                                <li className="nav-item">
                                    <Link className="nav-link" to={`${item.url}`}>{item.type}</Link>
                                </li>
                            )
                        })
                    } 
                </ul>
           </nav>
        )
    }
}
const customElementStyle = {
    backgroundColor: '#e3f2fd'
}
const stateCurrent = (state) => ({menu: state.menu, user: state.authorization})
const dispatchCurrent = (dispatch) => {
    return {
        add: (menu) => {
            dispatch(addMenu(menu))
        }
    }
}
export default connect(stateCurrent, dispatchCurrent)(MainMenu)
