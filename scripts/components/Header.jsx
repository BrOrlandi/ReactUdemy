import React from 'react';
import {Link} from 'react-router';
import TopicStore from '../stores/topic-store';
import Reflux from 'reflux';
import Actions from '../actions';
import reactMixin from 'react-mixin';

class Header extends React.Component {

    constructor(){
        super();
        this.state = {
            topics: []
        };
    }

    componentWillMount(){
        Actions.getTopics();
    }

    render(){
        return (
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        IMGUR Browser
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        {this.renderTopics()}
                    </ul>
                </div>
            </nav>
        );
    }

    renderTopics(){
        return this.state.topics.slice(0,5).map((topic) => {
            return <li key={topic.id}>
                <Link activeClassName="active" to={"topics/"+topic.id}>
                    {topic.name}
                </Link>
            </li>
        })
    }

    onChange(event, topics){
        this.setState({topics: topics});
    }
};

reactMixin(Header.prototype, Reflux.listenTo(TopicStore,'onChange'));

export default Header;
