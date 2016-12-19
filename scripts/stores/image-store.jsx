import Reflux from 'reflux';
import Api from '../utils/api';
import Actions from '../actions';

export default Reflux.createStore({
    listenables: [Actions],
    getImages: function(topicId){
        return Api.get('topics/'+topicId).then((json)=>{
            this.images = json.data;
            this.triggerChange();
        });
    },
    triggerChange: function(){
        this.trigger('change',this.images);
    }
});
