// custom js file
var axios = require('axios');

(function(){


	// import Vue from 'vue/dist/vue.js';

	console.log('hello')

	let app = new Vue ({
		el: '#app',
		data: {
			topHeadlines: false,
      countryCode: 'us'
		}
	});

  console.log('boo')


	function axiosCall () {
		alert('working')
		console.log('working')
		axios({
			method: 'get',
			url: 'http://newsapi.org/v2/top-headlines?' + 'country=' + countryCode + '&' + 'apiKey=0ec38d938d324e70a359a09a2ff04048'
		})
		.then(function (response){
			app.topHeadlines = response
			console.log(app.topHeadlines)
		});
	}

	axiosCall()

})(); // iffe ENDS
