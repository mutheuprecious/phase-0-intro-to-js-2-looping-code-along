// Code your solutions in this file
const thankYouMessages = [];
const writeCards = (names,event) => {
  for (let i = 0; i < names.length; i++){
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    thankYouMessages.push(message);
  }
  return thankYouMessages;
}

const countDown = (value)=>{
  let i = value;
  while(i>=0){
    console.log(i);
    i--
  }
}