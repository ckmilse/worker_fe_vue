
/*
    工具类：

        method: gethtmlToDom---- -个可转为dom的html字符串,暂时只能为一个dom元素
*/

// fetch('/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'Hubot',
//     login: 'hubot',
//   })
// })

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}


function parsePa(obj) {
    let tempArr = [];
    for(var i in obj) {
        tempArr.push( i + '=' + obj[i]);
    }
    return tempArr.join('&')
}
class workerApi {
    constructor() {
        // this.htmlStr = htmlStr;
        this.defaultConfig = {
            credentials: 'include', //跨域传cookie
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
               }
        }
    }
    postFetch(url, postData, opt) {
        console.log(opt);
        let config = Object.assign({}, this.defaultConfig, opt || {});
        if(typeof postData == 'string') {
            postData = JSON.parse(postData);
        }
        config.body = JSON.stringify(Object.assign({}, window.commonData || {}, postData));
        return window.fetch(url, config)
                .then(checkStatus)
                .then(parseJSON)
                .catch(function(error) {
                    console.log('request failed', error)
                })
    }
    getFetch(url, data, opt) {
        url = url + '?' + parsePa(data);
        return window.fetch(url, opt)
                .then(checkStatus)
                .then(parseJSON)
                .catch(function(error) {
                    console.log('request failed', error)
                })
    }
}


export default workerApi;

// import customName from './export-default';
