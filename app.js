const takePasswordbutton = document.getElementById('takePasswordBtn')
takePasswordbutton.addEventListener('click', showResult)

const copyButton = document.getElementById('copyButton')

const placeForPassword = document.getElementById('placeForPassword')

let lengthPassword = document.getElementById('length_password')
let showPassword = document.getElementById('showPassword')

function showResult() {
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'
  let numbers = '0123456789'
  let symbols = '#$%^&*/?!№@:;-_()+=<>{}[]"'

  let allSymbols = letters.concat(numbers, symbols) // соединили всё в одну строку

  let listSymbols = Array.from(allSymbols) // создали список

  let passwordLength = lengthPassword.value

  let listSymbolsForPassword = []

  if (8 <= passwordLength && passwordLength <= 20) {
    let i = 0
    while (i < passwordLength) {
      let symbol = Math.floor(Math.random() * listSymbols.length)
      listSymbolsForPassword.push(listSymbols[symbol])
      i++
    }

    let myPassword = listSymbolsForPassword.join('')
    showPassword.value = myPassword

    placeForPassword.style.display = 'block'

    copyButton.onclick = function () {
      showPassword.select()
      document.execCommand('copy')
    }
  } else {
    placeForPassword.style.display = 'none'
    lengthPassword.value = ''
    lengthPassword.placeholder = 'Введите число от 8 до 20!'
  }
}
