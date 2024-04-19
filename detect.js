const url = 'https://microsoft-translator-text.p.rapidapi.com/Detect?api-version=3.0';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '6ca43c4611msh543a2cfb928f787p124815jsnc895e3a182c0',
		'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
	},
	body: [
		{
			Text: 'Ich würde wirklich gern Ihr Auto um den Block fahren ein paar Mal.'
		}
	]
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}