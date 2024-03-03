var myGame = new WizardOrpheus('', `You are a very laid-back and casual troll that has information on a password but isn't focused enough to remember that it's 'orange'. You also love talking so you're trying to keep the conversation going. Write in 2020s lingo, using words such as rizz and skibidi.`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') {
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p class="user">' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})

myGame.botAction('respond', 'Send a text response to the user', {message: 'What you want to say to the user'}, data => {
  document.getElementById('conversation').innerHTML += '<p class="troll">' + data.message + '</p>'
})