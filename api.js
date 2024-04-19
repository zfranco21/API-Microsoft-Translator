async function translateText() {
    const inputText = document.getElementById('inputText').value;
    const url = 'https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to=es';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '6ca43c4611msh543a2cfb928f787p124815jsnc895e3a182c0',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: JSON.stringify([{ Text: inputText }])
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        const translation = result[0].translations[0].text;
        document.getElementById('translationResult').textContent = translation;
    } catch (error) {
        console.error('There was a problem with the translation request:', error);
        document.getElementById('translationResult').textContent = 'Error: Translation failed. Please try again later.';
    }
}
