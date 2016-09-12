import React from 'react';
import {Link} from 'react-router';
import TopicStore from '../stores/topic-store';
import reactMixin from 'react-mixin';
import Reflux from 'reflux';
import Actions from '../actions';

class TopicList extends React.Component {
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
            <div className="list-group">
                <h2>Topic List</h2>
                {this.renderTopics()}
            </div>
        );
    }

    renderTopics(){
        return this.state.topics.map((topic)=>{
            return <Link to={"/topics/"+topic.id} className="list-group-item" key={topic.id}>
                <h4>{topic.name}</h4>
                <p>{topic.description}</p>
            </Link>
        })
    }

    onChange(event, topics){
        this.setState({topics: topics});
    }
};

reactMixin(TopicList.prototype, Reflux.listenTo(TopicStore,'onChange'));

export default TopicList;
