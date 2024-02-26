// Gala is the only repeat question and 'L' is the only repeat answer (only the first 2 options are showing up)

const startBtn = document.getElementById('startBtn')


const words = [
    {
        id: 1,
        word: "gala",
        display: 'GA A',
        missingLetter: 'L',
        letterOptions: ['A', 'L', 'Q', 'Y']
    },
    {
        id: 2,
        word: 'school',
        display: 'SC OOL',
        missingLetter: 'H',
        letterOptions: ['M', 'T', 'H', 'B']
    },
    {
        id:3,
        word:'park',
        display:'PA K',
        missingLetter: 'R',
        letterOptions:['O', 'X', 'R', 'W']
    },
    {
        id:4,
        word:'computer',
        display:'COMPUT R',
        missingLetter:'E',
        letterOptions:['K','F','Z','E']
    },
    {
        id:5,
        word:'bus',
        display:'B S',
        missingLetter:'U',
        letterOptions:['I','G','V','U']
    }
]
const word = document.getElementById("word")

const getData =(arr)=> {
    let idx = Math.floor(Math.random() * arr.length) + 1;

    let data;

    for (let i = 0; i < arr.length; i++) {
        if (idx == arr[i].id) {
            data = arr[i]
        }
    }
    return data
}

const displayText = (arr)=> {
    let data = getData(arr)
    console.log(data)

    document.getElementById('word').innerText = data.display
    // document.getElementById('letterChoices').innerText = data.letterOptions
    console.log(data.letterOptions)
    buildLetterChoices(data, data.letterOptions)
}

startBtn.addEventListener('click', ()=> {
    displayText(words)  
})
        
    const buildLetterChoices =(data, arr)=> {
        console.log(arr)
        for (let i = 0; i < arr.length; i++ ){
            let letter = arr[i]
            // console.log(letters)
            const letterChoices = document.getElementById('letterChoices')
            const letterDiv = document.createElement('div')
            letterDiv.dataset.letters = "option"
            letterDiv.classList.add('letters')
            letterDiv.setAttribute('id', `option${letterOptions.indexOf("option") + 1}`)
            letterDiv.innerText = letter
            letterChoices.appendChild(letterDiv)
            letterDiv.addEventListener('click', ()=> selectLetter(letter, i))
            // letterOptions.forEach(letter => {
            //     // console.log(letterDiv);
                
            //     // I'm trying to figure out how I  can break up my letters into the correct element instead of it giving me all my letter options at once.
            // }
        }
    }
    const selectLetter =(el, idx)=> {
    const resultDisplay = document.getElementById('result')
    let result
    let correctLetter = words[idx].missingLetter
    let selectedLetter = el.innerText 
    
    if (correctLetter == selectedLetter){
        result = true;
    } else {
        result = false;
    }
    
    if(result) {
        resultDisplay.innerText = "Your outfit is giving!"
        setTimeout(()=> {
            removeWord(word)
        }, 2000)
    
        getNewWord(words)
        displayText(words, 'display') 
        buildLetterChoices(idx)
    } else {
        resultDisplay.innerText = "Your outfit is giving nothing at all, try again."
    }
    
    }
    const removeWord =(word)=> { 
    word.innerText = ''
    document.getElementById('letterChoices').innerText = ''
    getNewWord(words)
    }
    
    const getNewWord =(arr)=> {
        let idx = 0 
    displayText(arr, idx, "display")
    buildLetterChoices(idx)
        console.log(buildLetterChoices)
    }
    buildLetterChoices()
    
    // THANK YOU SO MUCH FOR HELPING ME WITH MY JAVASCRIPT DJ DADDYBUG , MS.LORRAINE , DHON, JAUWAUN & JARISSA<3
    
    



