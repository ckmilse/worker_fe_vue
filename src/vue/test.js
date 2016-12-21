import workerApi  from './../commonjs/workerApi.js';
console.log(workerApi);
module.exports = {
    data: function () {
        console.log('324about');
        var apiService = new workerApi();
        apiService.postFetch('{{testApi}}', {ck:3453})
            .then(function(res) {
                console.log(res);
            });
             return {
                 page: 'about--data'
             }
         }
};
