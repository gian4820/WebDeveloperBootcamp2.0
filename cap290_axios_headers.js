const button = document.querySelector('button')
const jokes = document.querySelector('#jokes')

const addNewJoke = async()=>{
    const jokeText = await getDadJoke();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}

const getDadJoke = async()=>{
    try{
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanharzdadjoke.com/', config)
        return res.data.joke;
    }catch(e){
        return "No Jockes available!"
    }
}

button.addEventListener('click', addNewJoke)

