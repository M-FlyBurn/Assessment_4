const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

app.listen(4000, () => console.log("Server running on 4000"));

//===============================FEATURE 1================================================//
const complimentButton = querySelector('#get-a-comipliment')
complimentArray = ['You always bring others happiness.', 'You are admired by everyone for your talent and ability.','You are the master of every situation.','You are open-minded','You are solid and dependable.']


const giveCompliment = (arr)=>{
    const randomCompliment = Math.floor(Math.random() * arr.length)
    const compliment = arr[randomCompliment]
    return compliment
}
const getCompliment = giveCompliment(complimentArray)

complimentButton.addEventListener('click', giveCompliment)