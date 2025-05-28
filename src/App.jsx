import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen bg-[#0e1628] text-white px-6 py-12 font-sans">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <aside>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-2">ІВАНОВ ІГОР АНДРІЙОВИЧ</h2>
            <p className="text-sm text-gray-400">Project Manager</p>
            <p className="text-sm text-gray-400">Київ, Україна</p>
            <p className="text-sm mt-2">📞 +38 (093) 168 20 38</p>
            <p className="text-sm">📧 igor.ivanov.89@gmail.com</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-yellow-300">Навички</h3>
            <ul className="list-disc pl-5 text-sm mt-2 text-gray-300 space-y-1">
              <li>Управління командами, техдокументація</li>
              <li>Asana, Wrike, Unity, Firebase, JSON</li>
              <li>QA-процеси</li>
              <li>AppLovin, GameAnalytics, AppsFlyer</li>
              <li>HTML / CSS / JS — базово</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-yellow-300">Мови</h3>
            <p className="text-sm text-gray-300 mt-2">Українська — рідна</p>
            <p className="text-sm text-gray-300">Англійська — Pre-Intermediate</p>
          </div>
        </aside>

        <section className="md:col-span-2 space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Мета</h3>
            <p className="text-sm text-gray-300">
              Шукаю можливість долучитися до команди, що працює над технологічними або інженерними рішеннями, важливими для країни.
              Прагну застосувати свій досвід в управлінні проєктами, технічній координації та аналітиці.
              Готовий розвиватися, швидко навчатись і вкладати зусилля у нові напрями.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Досвід роботи</h3>
            <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
              <li><strong>Project Manager</strong>, Playcus (серпень 2021 – теперішній час)</li>
              <li><strong>Manual QA Engineer</strong>, Playcus (травень 2019 – серпень 2021)</li>
              <li><strong>Junior Front-End Developer</strong>, Edgica (травень 2017 – жовтень 2017)</li>
              <li><strong>Бар-менеджер / Бармен</strong> (фриланс, 2014 – теперішній час, епізодично)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Освіта</h3>
            <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
              <li>Державна льотна академія України — Магістр (2014), Бакалавр (2012)</li>
              <li>Національний авіаційний університет — 2006–2010 (без диплому)</li>
              <li>Ліцей "Універсум" при КПІ — 2006</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Авіаційний досвід</h3>
            <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
              <li>Свідоцтво комерційного пілота (СА №012698, 2013)</li>
              <li>Свідоцтво приватного пілота (РА №011521, 2012)</li>
              <li>Наліт: понад 165 годин</li>
              <li>Типи ПС: NARP-1, Aquila AT01, Tecnam P2002-JF, Diamond DA42</li>
              <li>Тренажери: АН-2 (30 год), Л-410 (25 год)</li>
              <li>Молодший лейтенант запасу, ВОС 061400</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Додатково</h3>
            <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
              <li>Готовність до навчання та адаптації</li>
              <li>Вміння працювати як у технічних, так і креативних командах</li>
              <li>Розумний дім: Home Assistant, ESPHome, Node-RED</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
