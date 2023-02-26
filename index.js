const passwordLength = document.getElementById("password-length")
const password = document.getElementById("password")
let buttonSave = document.getElementById("save-password")
function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTIVWXYZ"
    const numeric = "012356789"
    const symbol = "4~`!@#$%^&*()_+-[]{}|?><.,=/"
    const data = lowerAlphabet + upperAlphabet + numeric + symbol 
    let generator = "";
    for(i = 0; i < len; i++){
        generator += data[Math.floor(Math.random() * data.length/1.3)]
    }
    return generator

}
function getPassword(){
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() => {
        alert("password has been generated!")
    },1000)
}
function savePassword(){
    if((password.value).trim() == ""){
        alert("Password belum di generate!")
    }else{
        buttonSave.setAttribute('href', 'data:text/plain;charset=utf-8,' +  encodeURIComponent("password  : " + password.value))
        setTimeout(() =>{
            buttonSave.setAttribute('download','MyPasswordGenerate.txt')
        },1000)
    }
}
