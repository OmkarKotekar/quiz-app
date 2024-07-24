// pages/quizzes.js
import Link from 'next/link';

const quizzes = [
  {
    id: 'gk',
    title: 'General Knowledge Quiz',
    description: 'Test your general knowledge with this fun and challenging quiz.',
  },
  {
    id: 'science',
    title: 'Science Quiz',
    description: 'Explore the fascinating world of science with this quiz.',
  },
  {
    id: 'history',
    title: 'History Quiz',
    description: 'Learn about historical events and figures with this quiz.',
  },
  // Add more quizzes as needed
];

export default function Quizzes() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Quizzes</h1>
        <div className="space-y-8">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
              <p className="mb-4">{quiz.description}</p>
              <Link href={`/quizzes/${quiz.id}`}>
                <div className="bg-blue-600 text-white px-4 py-2 w-[105px] rounded-lg hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
                  Start Quiz
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
