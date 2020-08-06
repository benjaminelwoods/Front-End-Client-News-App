// custom js file
var axios = require('axios');

(function(){

	let app = new Vue ({
		el: '#app',
		data: {
			topHeadlines: false,
			country: 'us',
			catagory: 'business',
		},
		methods: {
			 // categorising Articles by Country
			nzArticleSelector: function () {
				app.country = 'nz'
				axiosCall();
			},

			ukArticleSelector: function () {
				app.country = 'gb'
				axiosCall();
			},

			auArticleSelector: function () {
				app.country = 'au'
				axiosCall();
			},

			caArticleSelector: function () {
				app.country = 'ca'
				axiosCall();
			},
			// categorising Articles by Topic

			business: function () {
				app.catagory = 'business'
				axiosCall();
			},

			entertainment: function () {
				app.catagory = 'entertainment'
				axiosCall();
			},

			general: function () {
				app.catagory = 'general'
				axiosCall();
			},

			health: function () {
				app.catagory = 'health'
				axiosCall();
			},

			science: function () {
				app.catagory = 'science'
				axiosCall();
			},

			sports: function () {
				app.catagory = 'sports'
				axiosCall();
			},

			technology: function () {
				app.catagory = 'technology'
				axiosCall();
			},

			articleFullView: function (num) {
				const backBtn = document.getElementById('backButton');
				let newsBlocks = document.getElementsByClassName('newsBlock');
				backBtn.classList.remove('hideBtn');

				for (var i = 0; i < newsBlocks.length; i++) {
					newsBlocks[i].classList.add('hideMe');
				}
				newsBlocks[num].classList.remove('hideMe');
				newsBlocks[num].classList.add('fullView');
				newsBlocks[num].lastChild.lastChild.classList.add('showArticle')
			},
			normalView: function () {
				const backBtn = document.getElementById('backButton');
				let newsBlocks = document.getElementsByClassName('newsBlock');

				backBtn.classList.add('hideBtn');

				for (var i = 0; i < newsBlocks.length; i++) {
					newsBlocks[i].classList.remove('hideMe');
				}
				let fullViewBlock = document.getElementsByClassName('fullView');
				fullViewBlock[0].classList.add('hideAnim');
				fullViewBlock[0].lastChild.lastChild.classList.remove('showArticle')
				setTimeout(function(){
					fullViewBlock[0].classList.remove('hideAnim');
					fullViewBlock[0].classList.remove('fullView');
				}, 400);
			}
		}
	});


	function axiosCall () {
		axios({
			method: 'get',
			url: 'http://newsapi.org/v2/top-headlines?country=' + app.country + '&category=' + app.catagory + '&apiKey=0ec38d938d324e70a359a09a2ff04048'
		})
		.then(function (response){
			app.topHeadlines = response;
			console.log(response);
		});
	}

	axiosCall();



	// console.log(newsBlocks)
	//
	// for (var i = 0; i < 5; i++) {
	// 	console.log(i)
	// }
	//
	// console.log(newsBlocks)
	//
	// for (var i = 0; i < 15; i++) {
	// 	// newsBlocks[i].addEventListener('click', newsFullView)
	// 	console.log('heeeeeelo');
	// }
	//
	// function newsFullView () {
	// 	console.log('working')
	// }

})(); // iffe ENDS
