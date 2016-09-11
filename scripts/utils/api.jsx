import 'whatwg-fetch';
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '20f38848237fad9';

export default window.api = {
    get: function(url){
        return fetch(rootUrl+url,{
            headers: {
                'Authorization': 'Client-ID '+apiKey
            }
        }).then((resp)=>{
            return resp.json();
        });
    }
}
