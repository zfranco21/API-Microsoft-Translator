async function translateText() {
    const inputText = document.getElementById('inputText').value;
    const targetLanguage = document.getElementById('targetLanguage').value; // Obtener el idioma seleccionado por el usuario

    // Determinar el idioma de origen y el idioma de destino dependiendo de la selección del usuario
    let sourceLanguage, destinationLanguage;
    if (targetLanguage === 'en') {
        sourceLanguage = 'es'; // Si el idioma de destino es inglés, el idioma de origen será español
        destinationLanguage = 'en';
    } else if (targetLanguage === 'es') {
        sourceLanguage = 'en'; // Si el idioma de destino es español, el idioma de origen será inglés
        destinationLanguage = 'es';
    } else {
        console.error('Invalid target language');
        return;
    }

    const translateUrl = `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&from=${sourceLanguage}&to=${destinationLanguage}`;
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
        const response = await fetch(translateUrl, options);
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
