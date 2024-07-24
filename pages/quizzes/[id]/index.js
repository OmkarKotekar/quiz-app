// pages/quizzes/[id]/index.js
import { useRouter } from 'next/router';
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
      // Add more questions as needed
    ],
  },
  // Add more quiz data as needed
};

export default function QuizDetails() {
  const router = useRouter();
  const { id } = router.query;
  const quiz = quizData[id];

  if (!quiz) {
    return <div className="min-h-screen bg-gray-100 py-8 text-center">Quiz not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{quiz.title}</h1>
        <p className="text-center mb-8">{quiz.description}</p>
        <div className="text-center">
          <Link href={`/quizzes/${id}/0`}>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300">
              Start Quiz
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
