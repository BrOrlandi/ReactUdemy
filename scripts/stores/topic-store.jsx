import Api from '../utils/api';
import Reflux from 'reflux';
import Actions from '../actions';

export default Reflux.createStore({
    listenables: [Actions],
    getTopics: function(){
        return Api.get('topics/defaults').then((data)=>{
            this.topics = data.data;
            this.triggerChange();
        });
    },
    triggerChange: function(){
        this.trigger('change', this.topics);
    }
});
