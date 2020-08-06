// custom js file
var axios = require('axios');

(function(){


	// console.log(test)

	// newBlock.innerHtml =
	// <img v-bind:src="newsData.data.articles[0].urlToImage">
	// <div class="textCont">
	// 	<h2>{{newsData.data.articles[0].title}}</h2>
	// 	<h3>{{newsData.data.articles[0].author}} <span class="date">{{newsData.data.articles[0].publishedAt}}</span></h3>
	// 	<p class="article">{{newsData.data.articles[0].description}}</p>
	// </div>;

	// function createArticleBlock (num) {
	//
	// }
	//
	// createArticleBlock(0)
	// initialAxiosCall();

	let booleans = {
		articleOpen: false,
		totalResults: false
	};

	let articleArr = [];

	let app = new Vue ({
		el: '#app',
		data: {
			newsData: false
			// totalResults: false
		},
		created: function () {
			axiosCall()
			setTimeout(function (){
				// createArticleBlock(booleans.totalResults);
				num = booleans.totalResults
				// console.log('createart')
				// console.log(num);
				let newsCont = document.getElementById('newsContainer');
				for (var i = 0; i < num; i++) {
					let newBlock = document.createElement('DIV');
					let newImg = document.createElement('IMG');
					let newTextCont = document.createElement('DIV');
					let newTitle = document.createElement('H2');
					let newAuthor = document.createElement('H3');
					let newDesc = document.createElement('P');

					// newBlock.setAttribute('v-on:click', 'articleFullView(' + i + ')');
					newBlock.setAttribute('id', 'article-' + i);
					articleArr.push(newBlock)
					newImg.setAttribute('src', app.newsData.data.articles[i].urlToImage);
					newBlock.classList.add('newsBlock');
					newTextCont.classList.add('textCont');
					newDesc.classList.add('article');
					newTitle.textContent = app.newsData.data.articles[i].title;
					newAuthor.textContent = app.newsData.data.articles[i].author;
					newDesc.textContent = app.newsData.data.articles[i].description;
					newsCont.appendChild(newBlock);
					newBlock.appendChild(newImg);
					newBlock.appendChild(newTextCont);
					newTextCont.appendChild(newAuthor);
					newTextCont.appendChild(newTitle);
					newTextCont.appendChild(newDesc);
				}
				console.log(articleArr)
				addListeners()
			}, 1000)
		},
		methods: {
			// articleFullView: function (num) {
			// 	console.log(num)
			// 	let newsBlocks = document.getElementsByClassName('newsBlock');
			// 	if (booleans.articleOpen == true) {
			// 		booleans.articleOpen = false;
			// 		newsBlocks[num].lastChild.lastChild.classList.remove('showArticle');
			// 	} else if (booleans.articleOpen == false) {
			// 		booleans.articleOpen = true;
			// 		newsBlocks[num].lastChild.lastChild.classList.add('showArticle');
			// 	}
			// }
			// querySearch: function () {
			// 	let query = document.getElementById('searchInput').value;
			// 	axios({
			// 		method: 'get',
			// 		url: 'http://newsapi.org/v2/top-headlines?' + 'q=' + query + '&' + 'apiKey=0ec38d938d324e70a359a09a2ff04048'
			// 	})
			// 	.then(function (response){
			// 		app.newsData = false;
			// 		app.newsData = response;
			// 	});
			// }
		}
	});

function articleFullView (num) {
	console.log(num)
	let newsBlocks = document.getElementsByClassName('newsBlock');
	if (booleans.articleOpen == true) {
		booleans.articleOpen = false;
		newsBlocks[num].lastChild.lastChild.classList.remove('showArticle');
	} else if (booleans.articleOpen == false) {
		booleans.articleOpen = true;
		newsBlocks[num].lastChild.lastChild.classList.add('showArticle');
	}
}

function addListeners () {
	for (var i = 0; i < articleArr.length; i++) {
		let num = articleArr[i].id.replace('article-', '')
		articleArr[i].addEventListener('click', function() {articleFullView(num)}, false)
	}
}
	// function initialAxiosCall () {
	// 	axios({
	// 		method: 'get',
	// 		url: 'http://newsapi.org/v2/top-headlines?' + 'country=nz&' + 'apiKey=0ec38d938d324e70a359a09a2ff04048'
	// 	})
	// 	.then(function (response){
	// 		console.log(response.data.totalResults)
	// 		booleans.totalResults = response.data.totalResults
	// 	});
	// }

	function axiosCall () {
		axios({
			method: 'get',
			url: 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=0ec38d938d324e70a359a09a2ff04048'
		})
		.then(function (response){
			console.log(response.data.totalResults)
			if (response.data.totalResults > 20) {
				booleans.totalResults = 20
			} else {
				booleans.totalResults = response.data.totalResults
			}
			app.newsData = response;
			console.log(app.newsData)
		});
	}



	// Vue.component('component-article', {
	// 	template: `
	// 	<div class="newsBlock" v-on:click="articleFullView(0)">
	// 		<img v-bind:src="newsData.data.articles[0].urlToImage">
	// 		<div class="textCont">
	// 			<h2>HELLO {{newsData.data.articles[0].title}}</h2>
	// 			<h3>{{newsData.data.articles[0].author}} <span class="date">{{newsData.data.articles[0].publishedAt}}</span></h3>
	// 			<p class="article">{{newsData.data.articles[0].description}}</p>
	// 		</div>
	// 	</div>
	// 	`
	// })

})(); // iffe ENDS
