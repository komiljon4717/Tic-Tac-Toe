let divs = document.querySelectorAll('.cell')
let gameStatus = document.querySelector('.game--status')
let restart = document.querySelector('.game--restart')

let allBox = ['', '', '', '', '', '', '', '', '']

restart.onclick = () => {
    divs.forEach(div => div.innerHTML = '')
    allBox = ['', '', '', '', '', '', '', '', '']
    gameStatus.textContent = ''
}

function palyerWon() {
    gameStatus.textContent = "Siz yutdingiz"
}

function laptopWon() {
    gameStatus.textContent = "Siz yutqazdingiz"
}

function draw() {
    gameStatus.textContent = "Durrang bo'ldi. Durrang qanaqa rang o'zi?"
}

function chack() {

    if (
        allBox[0] == 'x'&& allBox[1] == 'x' && allBox[2] == 'x' || allBox[3] == 'x'&& allBox[4] == 'x' && allBox[5] == 'x' ||
        allBox[6] == 'x'&& allBox[7] == 'x' && allBox[8] == 'x' || allBox[0] == 'x'&& allBox[3] == 'x' && allBox[6] == 'x' ||
        allBox[1] == 'x'&& allBox[4] == 'x' && allBox[7] == 'x' || allBox[2] == 'x'&& allBox[5] == 'x' && allBox[8] == 'x' ||
        allBox[0] == 'x'&& allBox[4] == 'x' && allBox[8] == 'x' || allBox[2] == 'x'&& allBox[4] == 'x' && allBox[6] == 'x' 
    ) {
        palyerWon()
    }

    if (
        allBox[0] == 'o'&& allBox[1] == 'o' && allBox[2] == 'o' || allBox[3] == 'o'&& allBox[4] == 'o' && allBox[5] == 'o' ||
        allBox[6] == 'o'&& allBox[7] == 'o' && allBox[8] == 'o' || allBox[0] == 'o'&& allBox[3] == 'o' && allBox[6] == 'o' ||
        allBox[1] == 'o'&& allBox[4] == 'o' && allBox[7] == 'o' || allBox[2] == 'o'&& allBox[5] == 'o' && allBox[8] == 'o' ||
        allBox[0] == 'o'&& allBox[4] == 'o' && allBox[8] == 'o' || allBox[2] == 'o'&& allBox[4] == 'o' && allBox[6] == 'o' 
    ) {
        laptopWon()
    }
    
    return
}

for (let div of divs) {
    div.onclick = () =>{
        let index = div.getAttribute('data-cell-index')
        let count = 0
        if (!allBox[index]) {

            let random = Math.round(Math.random() * 8)

            for (const a of allBox) {
                if (a) {
                    count++
                }
            }

            if (count > 6) {
                allBox[index] = 'x'
                divs[index].textContent = 'X'
                console.log("Hi");
                chack()
                gameStatus.textContent = "Durrang bo'ldi. Durrang qanaqa rang o'zi?"
                
            }else{
                while (random == index || random < 0 || allBox[random]) {
                random = Math.round(Math.random() * 8)
            }
            }
            
            
            
            allBox[index] = 'x'
            divs[index].textContent = 'X'
            chack()
            allBox[random] = 'o'
            divs[random].textContent = 'O'
            chack()

        }else{
            alert('Bitta box faqat bir marta bosiladii')
        }
    }
}



















