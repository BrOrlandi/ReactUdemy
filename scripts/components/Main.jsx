import React from 'react';
import Header from './Header';
import TopicList from './topic-list'

export default class Main extends React.Component {
    render(){
        return (
            <div>
                <Header />
                {this.content()}
            </div>
        );
    }
    content(){
        if(this.props.children){
            return this.props.children;
        }else{
            return <TopicList/>;
        }
    }
};
