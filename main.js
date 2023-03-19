const rQuotes = document.getElementById("quote");
const ranAuth = document.getElementById("author1");
const copies = document.getElementById("copies");
const tweeter = document.getElementById("tweet");
// const ranQuotes = document.querySelector("texts"),
// quoteBtn = document.querySelector("buttons");
// authorName = document.querySelector("buttons");
// ranQuotes.innerText = ``
const api_url = "https://api.quotable.io/random";

// async function getquote(url){
// 	const response = await fetch(url);
// 	var data = await response.json();
// 	console.log(data);
// 	rQuotes.innerHTML = data.content;
// 	ranAuth.innerHTML = data.author;


// let copy = navigator.clipboard.writeText(url.data.content)
// tweeter.addEventListener("click", () => {
// 	let tweeterUrl = `https://twitter.com/intent/tweet?url=${copy}`;
// 	window.open(tweeterUrl, "_blank");
// });
// }
let getquote = (url) => {
fetch(url).then(res => res.json())
	.then((result) => { 
	console.log(result);
	rQuotes.innerText = result.content;
	ranAuth.innerText = result.author;
});

copies.addEventListener("click", () => {
	navigator.clipboard.writeText(   rQuotes.innerText) , confirm("copied")
});

tweeter.addEventListener("click", () => {
	let tweeterUrl = `https://twitter.com/intent/tweet?url=${rQuotes.innerText}`;
	window.open(tweeterUrl, "_blank");
});
}
getquote(api_url);
// window.addEventListener("load", quotes);
// quoteBtn.addEventListener("click", quotes);
