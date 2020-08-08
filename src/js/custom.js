// custom js file
var axios = require('axios');

(function(){

	let newsCont = document.getElementById('newsContainer');

	let dataObj = {
		articleOpen: false,
		totalResults: false,
		country: 'us',
		category: 'business'
	};

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
				if (dataObj.articleOpen == true) {
					dataObj.articleOpen = false;
					newsBlocks[item].lastChild.lastChild.classList.remove('showArticle');
				} else if (dataObj.articleOpen == false) {
					dataObj.articleOpen = true;
					newsBlocks[item].lastChild.lastChild.classList.add('showArticle');
				}
			},
			// categorising Articles by Country
			countrySelector: function (country) {
				dataObj.country = country
				axiosCall();
			},
			// categorising Articles by Topic
			catagorySelector: function (catagory) {
				dataObj.category = catagory
				axiosCall();
			}
		}
	});

//   function getLocation () {
//     if (navigator.geolocation) {
//       // Getting the geolocation of the user and calling the updateData function
//       navigator.geolocation.getCurrentPosition(testLoc)
// 			return
//     } else {
//       console.log('not working')
//     }
//   }
//
// getLocation()
//
// function testLoc (position) {
// 	console.log(position.coords.latitude)
// 	console.log(position.coords.longitude)
// }

	function axiosCall () {
		axios({
			method: 'get',
			url: 'http://newsapi.org/v2/top-headlines?country=' + dataObj.country + '&category=' + dataObj.category + '&apiKey=0ec38d938d324e70a359a09a2ff04048'
		})
		.then(function (response){
			app.newsData = response;
			app.news = response.data.articles;
		});
	}

})(); // iffe ENDS
