import React, {useState} from "react";
import "./Quiz.css";

function TeacherQuiz() {

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
            text: "Sikap yang harus kita lakukan ketika seorang anak memberitahu bahwa dia dibully adalah...",
            options: [
                {id: 0, text: "Menghargai dan berterimakasih karena sudah melapor", isCorrect: true},
                {id: 1, text: "Meyakinkan bahwa itu salahnya", isCorrect: false},
                {id: 2, text: "Tidak Menunjukkan empati", isCorrect: false},
                {id: 3, text: "Mengabaikan aduan", isCorrect: false},
            ]
        },
        {
            text: "Suatu tindakan agresif dapat dikategorikan sebagai bullying jika, kecuali...",
            options: [
                {id: 0, text: "Pelaku dan korban sama-sama kuat", isCorrect: true},
                {id: 1, text: "Dilakukan secara sengaja", isCorrect: false},
                {id: 2, text: "Ada ketidak seimbangan kekuatan", isCorrect: false},
                {id: 3, text: "Ada pengulangan", isCorrect: false},
            ]
        },
        {
            text: "Tindakan agresif yang muncul karena adanya ketimpangan dalam kekuatan/kekuasaan yang nyata maupun hanya berupa persepsi merupakan pengertian dari...",
            options: [
                {id: 0, text: "Bipolar", isCorrect: false},
                {id: 1, text: "Bullying", isCorrect: true},
                {id: 2, text: "Tawuran", isCorrect: false},
                {id: 3, text: "Vandalisme", isCorrect: false},
            ]
        },
        {
            text: "Hal yang perlu dihindari ketika berbicara dengan pelaku maupun korban bullying, kecuali...",
            options: [
                {id: 0, text: "Menyalahkan", isCorrect: false},
                {id: 1, text: "Mengkritik", isCorrect: false},
                {id: 2, text: "Meneriaki", isCorrect: false},
                {id: 3, text: "Menenangkan", isCorrect: true},
            ]
        },
        {
            text: "Berikut pengkategorian bullying menurut Sherri Gordon, kecuali...",
            options: [
                {id: 0, text: "Physical Bullying", isCorrect: false},
                {id: 1, text: "Verbal Bullying", isCorrect: false},
                {id: 2, text: "Formal Bullying", isCorrect: true},
                {id: 3, text: "Relational Aggression", isCorrect: false},
            ]
        },
    ]

    const optionClicked = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinalResults(true);
        }
        
    }

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
    }

    return (
        <div className="Quiz">
            <h1 className="quiz-jdl">Quiz</h1>
            <h2 className="current-score">Current Score: {score}</h2>

            {showFinalResults ? (
                <div className="nilai">
                    <h1>Score</h1>
                    <h2>{score} out of {questions.length} correct - ({(score/questions.length)*100}%)</h2>
                    <button onClick={() => restartQuiz()}>Restart Quiz</button>
                </div>
            ) : (
                <div className="question-card">
                    <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
                    <h3 className="soal">{questions[currentQuestion].text}</h3>

                    <ul className="choice">
                        {questions[currentQuestion].options.map((option) => {
                            return (
                                <li onClick={() => optionClicked(option.isCorrect)} className="multiple-choice" key={option.id}>{option.text}</li>
                            )
                        })}
                    </ul>

                </div>
            )}
            
        </div>
    );
};

export default TeacherQuiz;