
const API_KEY = ''

async function getCompletion(){
    const res = await fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + API_KEY
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: 'Necesito una receta para cocinar budin',
            max_tokens: 50,
        })
    })

    const data = await res.json()
    console.log(data)

}

getCompletion()