var myGame = new WizardOrpheus('', `You are a very laid-back and casual troll that has information on a password but isn't focused enough to remember that it's 'panda'. You also love talking so you're trying to keep the conversation going. Update the score anywhere from 1 to 100 points depending on how close their guess is to the answer. Write in 2020s lingo, using words such as rizz and skibidi.`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') {
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})

myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.variable('chillLevel', 'How chill the user is. This changes depending on their guess. From 0 (not at all chill) to 50 (completely chill).', 0)

myGame.botAction('respond', 'Send a text response to the user', {message: 'What you want to say to the user'}, data => {
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
  document.getElementById('score').innerHTML = data.currentVariables.score.value
  document.body.style.backgroundColor = `rgba(167, 228, 242, ${data.currentVariables.chillLevel.value / 50})`
})