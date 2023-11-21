function getARandomMessage() {
    const greetings = [
        "Greetings",
        "Welcome",
        "Hello",
        "Salutations"
    ];
    const professions = [
        "tradesman",
        "salesman",
        "mailman",
        "whale man"
    ];
    const encouragements = [
        "keep it up!",
        "well done!",
        "good job",
        'we salute you'
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    const randomProfession = professions[Math.floor(Math.random() * professions.length)];
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];

    return `${randomGreeting} ${randomProfession}, ${randomEncouragement}`;
}

const message = getARandomMessage();
console.log(message);