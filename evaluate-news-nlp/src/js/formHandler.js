export const handleSubmit = async (event) => {
    event.preventDefault();
  
    const url = document.getElementById('url').value;
    if (!url) {
      alert('Please enter a URL');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8081/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
  
      const data = await response.json();
      document.getElementById('results').innerHTML = `
        <p>Polarity: ${data.score_tag}</p>
        <p>Subjectivity: ${data.subjectivity}</p>
        <p>Text: ${data.sentence_list[0].text}</p>
      `;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  