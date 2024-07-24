// pages/quizzes/[id]/[question].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const quizData = {
  gk: {
    title: 'General Knowledge Quiz',
    description: 'Test your general knowledge with this fun and challenging quiz.',
    questions: [
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
      },
      // Add more questions as needed
    ],
  },
  science: {
    title: 'Science Quiz',
    description: 'Explore the fascinating world of science with this quiz.',
    questions: [
      {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'O2', 'CO2', 'NaCl'],
        answer: 'H2O',
      },
      // Add more questions as needed
    ],
  },
  history: {
    title: 'History Quiz',
    description: 'Learn about historical events and figures with this quiz.',
    questions: [
      {
        question: 'Who was the first president of the United States?',
        options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
        answer: 'George Washington',
      },
      {
        question: 'Who was the first president of the United States of America?',
        options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
        answer: 'George Washington',
      },
      {
        question: 'Who was the first president of the USA?',
        options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
        answer: 'George Washington',
      },
      // Add more questions as needed
    ],
  },
  // Add more quiz data as needed
};

export default function QuizQuestion() {
  const router = useRouter();
  const { id, question } = router.query;
  const quiz = quizData[id];
  const [answers, setAnswers] = useState([]);
  const [viewedQuestions, setViewedQuestions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Load saved answers and viewed questions from local storage or initialize them
    const savedAnswers = JSON.parse(localStorage.getItem(`quiz-${id}-answers`)) || [];
    const savedViewedQuestions = JSON.parse(localStorage.getItem(`quiz-${id}-viewedQuestions`)) || [];
    setAnswers(savedAnswers);
    setViewedQuestions(savedViewedQuestions);
  }, [id]);

  useEffect(() => {
    // Save answers and viewed questions to local storage whenever they change
    localStorage.setItem(`quiz-${id}-answers`, JSON.stringify(answers));
    localStorage.setItem(`quiz-${id}-viewedQuestions`, JSON.stringify(viewedQuestions));
  }, [answers, viewedQuestions, id]);

  useEffect(() => {
    // Mark the current question as viewed
    if (!viewedQuestions.includes(parseInt(question))) {
      setViewedQuestions([...viewedQuestions, parseInt(question)]);
    }
  }, [question, viewedQuestions]);

  if (!quiz || !quiz.questions[question]) {
    return <div className="min-h-screen bg-gray-100 py-8 text-center">Question not found</div>;
  }

  const currentQuestion = quiz.questions[question];
  const nextQuestion = parseInt(question) + 1;
  const hasNextQuestion = quiz.questions[nextQuestion];

  const handleAnswer = (option) => {
    const newAnswers = [...answers];
    newAnswers[question] = { question: currentQuestion.question, selected: option, correct: currentQuestion.answer };
    setAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    const score = answers.reduce((total, answer) => total + (answer.selected === answer.correct ? 1 : 0), 0);
    router.push({
      pathname: `/quizzes/${id}/score`,
      query: { score, total: quiz.questions.length }
    });
  };

  const getNavigationButtonColor = (index) => {
    if (answers[index]) {
      return 'bg-green-300';
    } else if (viewedQuestions.includes(index)) {
      return 'bg-red-300';
    } else {
      return 'bg-gray-200 hover:bg-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{quiz.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">{currentQuestion.question}</h2>
            <ul className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <li
                  key={index}
                  className={`p-4 rounded-lg shadow-lg cursor-pointer transition-colors duration-300 ${
                    answers[question] && answers[question].selected === option ? 'bg-blue-200' : 'bg-white hover:bg-gray-200'
                  }`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              {hasNextQuestion && !isSubmitted && (
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors duration-300"
                  onClick={() => router.push(`/quizzes/${id}/${nextQuestion}`)}
                >
                  Next Question
                </button>
              )}
              {!hasNextQuestion && !isSubmitted && (
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors duration-300"
                  onClick={handleSubmitQuiz}
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Navigate Questions</h2>
            <div className="grid grid-cols-3 gap-2">
              {quiz.questions.map((_, index) => (
                <Link key={index} href={`/quizzes/${id}/${index}`}>
                  <div
                    className={`p-2 rounded-lg text-center cursor-pointer transition-colors duration-300 ${getNavigationButtonColor(index)}`}
                  >
                    Q{index + 1}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
