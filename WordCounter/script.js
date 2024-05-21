function countWords() {
    const textBox = document.getElementById('textBox');
    const wordCountDisplay = document.getElementById('wordCount');
    const text = textBox.value.trim();
    
    if (text === '') {
        wordCountDisplay.textContent = 0;
    } else {
        const words = text.split(/\s+/).filter(word => word.length > 0);
        wordCountDisplay.textContent = words.length;
    }
}
