// pages/quizzes/[id]/score.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function QuizScore() {
  const router = useRouter();
  const { id } = router.query;
  const [score, setScore] = useState(null);
  const [total, setTotal] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  useEffect(() => {
    if (router.query.score && router.query.total) {
      const score = parseInt(router.query.score, 10);
      const total = parseInt(router.query.total, 10);
      setScore(score);
      setTotal(total);
      setCorrectAnswers(score);
      setIncorrectAnswers(total - score);
    }
  }, [router.query]);

  if (score === null || total === null) {
    return <div className="min-h-screen bg-gray-100 py-8 text-center">Score not available</div>;
  }

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ['#4ade80', '#f87171'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Quiz Complete</h1>
        <p className="text-2xl mb-4">Your Score: {score} / {total}</p>
        <div className="flex justify-center items-center mb-8">
          <div className="w-64 h-64">
            <Pie data={data} />
          </div>
        </div>
        <Link href={`/quizzes`}>
          <div className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300">
            Back to Quizzes
          </div>
        </Link>
      </div>
    </div>
  );
}
