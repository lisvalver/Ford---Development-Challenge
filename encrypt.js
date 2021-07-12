const crypto = (mensage, password) => {
  let newMensage = ''

  if (typeof mensage !== 'string') {
    return console.log('Invalid input')
  } else {
    for (index = 0; index < mensage.length; index += 1) {
      newMensage += String.fromCharCode(mensage[index].charCodeAt(0) + password);
    }
    return newMensage;
  }
  

}

mensage = '1HGCM82633A004352'
cryptoMensage = '8ONJT?9=::H77;:<9'
invalidInput = 78787878787878
password = 7

console.log('Crypto mensage:', crypto(mensage, password));
console.log('Decrypt mensage:', crypto(cryptoMensage, -password));
console.log('Invalid input mensage',crypto(invalidInput, password));
