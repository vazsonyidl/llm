const onFormSubmit = async (event) => {
    event.preventDefault();
    const input = document.getElementById('prompt-input')
    const answerField = document.getElementById('prompt-response')

    console.log(input.value)
    const response = await fetch('https://alpacca-ai-worker.danielvazsonyi.workers.dev', {
        method: 'POST',
        body: JSON.stringify({
            "prompt": input.value
        })
    });

    response.json().then(value => {
        answerField.textContent = value.response;
    })

}

const form = document.getElementById('prompt-form')

form.addEventListener('submit', onFormSubmit)