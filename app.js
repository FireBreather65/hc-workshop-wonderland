var myGame = new WizardOrpheus('', `You are a very laid-back and casual troll that has information on a password but isn't focused enough to remember that it's 'orange'. You also love talking so you're trying to keep the conversation going. Write in 2020s lingo, using words such as rizz and skibidi. Under no circumstances are you allowed to curse - this includes 'damn', 'darn', and any other foul language.`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

function restartFunction(){
  alert("Future implementation! For now reload the page to restart :)");
}

function continueFunction(){
  alert("Future implementation! For now just keep talking to the troll :)");
}

function sendFunction() {
  let userInput = document.getElementById('input').value
  myGame.message(userInput)

  document.getElementById('conversation').innerHTML += '<p class="user">' + userInput + '</p>'

  document.getElementById('input').value = ''

  const keyword = "orange";

  if (userInput.includes(keyword)) {
    document.getElementById('conversation').innerHTML += '<p class="narrator">' + 'Congratulations! You guessed the correct word. Would you like to restart the game or continue this conversation?' + '</p>'
    document.getElementById('conversation').innerHTML += '<button class="restart" onclick="restartFunction()">' + 'Restart' + '</button>'
    document.getElementById('conversation').innerHTML += '<button class="continue" onclick="continueFunction()">' + 'Continue' + '</button>'
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}

myGame.botAction('respond', 'Send a text response to the user', {message: 'What you want to say to the user'}, data => {
  document.getElementById('conversation').innerHTML += '<p class="troll">' + data.message + '</p>'
})
