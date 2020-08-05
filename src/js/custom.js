// custom js file
var axios = require('axios');

(function(){

	let app = new Vue ({
		el: '#app',
		data: {
			newsData: false
		},
		methods: {
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
			},
			querySearch: function () {
				let query = document.getElementById('searchInput').value
				axios({
					method: 'get',
					url: 'http://newsapi.org/v2/top-headlines?' + 'q=' + query + '&' + 'apiKey=0ec38d938d324e70a359a09a2ff04048'
				})
				.then(function (response){
					app.newsData = false;
					app.newsData = response;
					console.log(response)
				});
			}
		}
	});


	function axiosCall () {
		axios({
			method: 'get',
			url: 'http://newsapi.org/v2/top-headlines?' + 'country=nz&' + 'apiKey=0ec38d938d324e70a359a09a2ff04048'
		})
		.then(function (response){
			app.newsData = response;
		});
	}

	axiosCall();

})(); // iffe ENDS
