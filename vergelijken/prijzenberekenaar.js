// Super geheime code!!!! Die eigenlijk best wel makkelijk is bedankt voor codeacademy om mij javascript uit te leggen voor deze opdracht dit was een van mijn allereerste keren javascript en het was best lastig soms
// Gebruikt de api van coinmarketcap om de top 10 coins te vinden met ook de gegevens er achter
const coinMarketCap = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
let app = new Vue({
	el: '#app',
	data: { coins: [] },
	methods: {
// Slaat de coinnaam op als A en plaatst dan A achter de link zodat het icoontje geladen word.
		getCoins: function() {
			axios
				.get(coinMarketCap)
				.then(a => {
					this.coins = a.data
				})
		},
// De opgeslagen A word nu achter de url geplakt zodat hhet goede plaatje er komt
		getCoinImage: a =>
			`https://files.coinmarketcap.com/static/img/coins/16x16/${a}.png`,
	},
// opent de functie
	created: function() {
		this.getCoins()
	}
})
// Hier stond een script om elke paar seconden te refreshen alleen vond de api van coinmarketcap dat niet leuk.
