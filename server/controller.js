module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["You always bring others happiness.", "You are admired by everyone for your talent and ability.","You are the master of every situation.","You are open-minded","You are solid and dependable."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}