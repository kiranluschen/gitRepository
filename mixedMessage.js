 //function for returning a random message
 
 function getRandomMessage() {

    //An Array of messages
    const message = ['Order 465 not able to be processed', 
                'Function failed to execute', 
                'Button activated',
                'Activation, deactivated' ];

    //A variable that randomly picks a number between 0 and the amount of messages there are
    const randomIndex = Math.floor(Math.random() * message.length);

    //returns the message
    return message[randomIndex];
 };

 const randomMessage = getRandomMessage();
 console.log(randomMessage);
 
 

