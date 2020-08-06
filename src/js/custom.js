// custom js file
var axios = require('axios');

(function(){

	let booleans = {
		articleOpen: false,
		totalResults: false
	};

	let articleArr = [];

	let app = new Vue ({
		el: '#app',
		data: {
			newsData: false,
			news: false
		},
		created: function () {
			axiosCall()
		},
		methods: {
			searchApiCall: function (query) {
				axios({
					method: 'get',
					url: 'http://newsapi.org/v2/everything?q=' + query + '&apiKey=0ec38d938d324e70a359a09a2ff04048'
				})
				.then(function (response){
					app.news = response.data.articles;
					app.newsData = response;
					app.$forceUpdate();

				});
			},
			articleFullView: function (item) {
				let newsBlocks = document.getElementsByClassName('newsBlock');
				if (booleans.articleOpen == true) {
					booleans.articleOpen = false;
					newsBlocks[item].lastChild.lastChild.classList.remove('showArticle');
				} else if (booleans.articleOpen == false) {
					booleans.articleOpen = true;
					newsBlocks[item].lastChild.lastChild.classList.add('showArticle');
				}
			}
		}
	});

	function axiosCall () {
		axios({
			method: 'get',
			url: 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=0ec38d938d324e70a359a09a2ff04048'
		})
		.then(function (response){
			if (response.data.totalResults > 20) {
				booleans.totalResults = 20
			} else {
				booleans.totalResults = response.data.totalResults
			}
			app.newsData = response;
			app.news = response.data.articles
		});
	}

})(); // iffe ENDS
