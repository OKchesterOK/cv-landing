import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen bg-[#0e1628] text-white px-6 py-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">Ігор Іванов — Project Manager</h1>
        <p className="mb-6 text-lg text-gray-300">
          Шукаю можливість долучитися до команди, що працює над технологічними або інженерними рішеннями, важливими для країни.
          Прагну застосувати свій досвід в управлінні проєктами, технічній координації та аналітиці. Готовий до навчання та нових викликів.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-yellow-300">Досвід роботи</h2>
        <ul className="list-disc pl-5 text-gray-300">
          <li><strong>Project Manager, Playcus</strong> — серпень 2021 – теперішній час</li>
          <li><strong>QA Engineer, Playcus</strong> — травень 2019 – серпень 2021</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-yellow-300">Навички</h2>
        <p className="text-gray-300">Unity, Firebase, JSON, QA, AppLovin, GameAnalytics, Frontend базово</p>
      </div>
    </main>
  );
}
