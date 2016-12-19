import React from 'react';
import Actions from '../actions';
import ImageStore from '../stores/image-store';
import Reflux from 'reflux';
import reactMixin from 'react-mixin';

class Topic extends React.Component{
    constructor(){
        super();
        this.state = {
            images: []
        };
    }

    componentWillMount(){
        Actions.getImages(this.props.params.id);
    }

    onChange(event, images){
        this.setState({images: images});
    }

    render(){
        return <div>
            ID: {this.props.params.id}
        </div>;
    }
}

reactMixin(Topic.prototype, Reflux.listenTo(ImageStore,'onChange'));

export default Topic;
