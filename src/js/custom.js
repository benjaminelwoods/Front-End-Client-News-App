// custom js file
var axios = require('axios');

(function(){


	// import Vue from 'vue/dist/vue.js';

	// console.log('hello')

	let app = new Vue ({
		el: '#app',
		data: {
			topHeadlines: false
		}
	});


	function axiosCall () {
		// alert('working')
		console.log('working');
		axios({
			method: 'get',
			url: 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=0ec38d938d324e70a359a09a2ff04048'
		})
		.then(function (response){
			app.topHeadlines = response;
		});
	}

	axiosCall();

	let newsBlocks = document.getElementsByClassName('newsBlock');

	// console.log(newsBlocks)

	for (var i = 0; i < newsBlocks.length; i++) {
		// newsBlocks[i].addEventListener('click', newsFullView)
		console.log('heeeeeelo');
	}

	// function newsFullView () {
	// 	console.log('working')
	// }

})(); // iffe ENDS
