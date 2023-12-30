enum Game {
    CRICKET,
    BADMINTON,
    FOOTBALL,
    CHESS,
    TENNIS,
    QUIZ
}

import { User } from "./Users";


export class Learn {
    cricket: string;
    badminton: string;
    football: string;
    chess: string;
    tennis: string;
    quiz: string;
    constructor(cricket: string, badminton: string, football: string, chess: string, tennis: string, quiz: string ){
        this.cricket = cricket;
        this.badminton = badminton;
        this.football = football;
        this.chess = chess;
        this.tennis = tennis;
        this.quiz = quiz;
    }

    learnGame = (game) => {
        return game;
    }
}
