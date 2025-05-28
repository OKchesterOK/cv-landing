import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen bg-[#0c1220] text-white px-4 py-10 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Panel */}
        <aside className="bg-[#0f1a2f] p-6 rounded-xl shadow-md">
          <img src="/ivanov_photo.png" alt="Ігор Іванов" className="rounded-lg w-full object-cover mb-6" />

          <Section title="ОСОБИСТІ ДАНІ">
            <Info label="📍 " value="Київ, Україна" />
            <Info label="📞" value="+38 (093) 168 20 38" />
            <Info label="✉️" value="igor.ivanov.89@gmail.com" />
            <Info label="🔗" value={<a href="https://www.linkedin.com/in/chesterok" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">linkedin.com/in/chesterok</a>} />
          </Section>

          <Section title="НАВИЧКИ">
            <Skill label="Організація роботи команд" level={5} />
            <Skill label="Управління проєктами" level={5} />
            <Skill label="Технічні знання" level={4} />
            <Skill label="Аналітика" level={4} />
          </Section>

          <Section title="МОВИ">
            <Skill label="Українська" level={5} />
            <Skill label="Англійська" level={3} />
          </Section>
        </aside>

        {/* Right Panel */}
        <section className="md:col-span-2 space-y-10">

          <Section noLine>
            <div className="text-left mb-6">
              <h1 className="text-4xl font-bold text-yellow-400">ІВАНОВ</h1>
              <p className="text-2xl text-gray-300 tracking-widest">ІГОР АНДРІЙОВИЧ</p>
            </div>
          </Section>
          
          <Section title="МЕТА">
            <p className="text-sm text-gray-300">
              Шукаю можливість долучитися до команди, що працює над технологічними або інженерними рішеннями,
              важливими для країни. Прагну застосувати свій досвід в управлінні проєктами, технічній координації
              та аналітиці. Готовий розвиватися, швидко навчатись і вкладати зусилля у нові напрями.
            </p>
          </Section>
          
          <Section title="ДОСВІД РОБОТИ">
            <ListItem title="Project Manager" subtitle="Playcus, м. Київ — серпень 2021 – теперішній час" bullets={[
              'Ведення понад 11 ігрових проєктів (Google Play, Apple Store, Microsoft Store, Amazon)',
              'Напрями: Coloring, Hypercasual, Bingo',
              'Unity, Firebase, AppsFlyer, GameAnalytics',
              'A/B тестування, релізи'
            ]} />
            <ListItem title="Manual QA Engineer" subtitle="Playcus, м. Київ — травень 2019 – серпень 2021" bullets={[
              'Тестування ігор для мультиплатформ',
              'Тест-кейси, баг-трекинг'
            ]} />
            <ListItem title="Junior Front-End Developer" subtitle="Edgica, м. Київ — травень 2017 – жовтень 2017" bullets={['HTML, CSS, JS, адаптивна верстка']} />
            <ListItem title="Бар-менеджер / Бармен (фриланс)" subtitle="м. Київ — 2014 – теперішній час (епізодично)" bullets={[]} />
          </Section>

          <Section title="ОСВІТА І КВАЛІФІКАЦІЇ">
            <ListItem title="Магістр з льотної експлуатації повітряних суден" subtitle="Кіровоградська Льотна Академія НАУ, м. Кропивницький (вер 2013 — чер 2014)" bullets={[
              'Спеціальність: Льотна експлуатація повітряних суден',
              'Професійна кваліфікація: Пілот (літака)'
            ]} />
            <ListItem title="Молодший лейтенант" subtitle="Кіровоградська Льотна Академія НАУ, м. Кропивницький (вер 2011 — чер 2013)" bullets={[
              'Спеціальність: Пілот військово-транспортної авіації',
              'ВОС 061400: Бойове застосування авіаційних військових частин і підрозділів військово-транспортної авіації'
            ]} />
            <ListItem title="Бакалавр з аеронавігації" subtitle="Кіровоградська Льотна Академія НАУ, м. Кропивницький (вер 2010 — чер 2013)" bullets={[
              'Спеціальність: Аеронавігація'
            ]} />
            <ListItem title="Бакалавр з електроніки" subtitle="Національний авіаційний університет, м. Київ (вер 2006 — чер 2010)" bullets={[
              'Спеціальність: Обладнання повітряних суден (без диплому)'
            ]} />
            <ListItem title="Повна середня освіта" subtitle="Ліцей «Універсум», м. Київ (вер 2002 — чер 2006)" bullets={[
              'Профіль: фізико-математичний'
            ]} />
          </Section>

          <Section title="АВІАЦІЙНИЙ ДОСВІД">
            <ListItem title="Ліцензії" bullets={[
              'Свідотство комерційного пілота (CPL): СА №012698 (08.08.2013)',
              'Свідоцтво приватного пілота (PPL): РА №011521 (02.02.2012)'
            ]} />
            <ListItem title="Загальний наліт" subtitle="168 год 03 хв" bullets={[
              'Однодвигунний літак: 117 год 45 хв',
              'Багатодвигунний літак: 50 год 18 хв'
            ]} />
            <ListItem title="Типи ПС" bullets={[
              'Diamond DA42',
              'Аеропракт А-22',
              'Tecnam P2002-JF',
              'Aquila AT01',
              'НАРП-1'
            ]} />
            <ListItem title="Тренажерна підготовка" subtitle="Кіровоградська Льотна Академія НАУ, м. Кропивницький" bullets={[
              'Л-410 (25 год)',
              'АН-2 (30 год)'
            ]} />
            <ListItem title="Сертифікати" bullets={[
              'Ведення радіомовлення англійською мовою',
              'Авіахімроботи'
            ]} />
          </Section>

          <Section title="ДОДАТКОВО">
            <ul className="list-disc pl-6 text-sm text-gray-300 space-y-1">
              <li>Готовність до навчання та адаптації</li>
              <li>Вміння працювати як у технічних, так і креативних командах</li>
              <li>Автоматизація будинку: Home Assistant, ESPHome, Node-RED</li>
            </ul>
          </Section>
        </section>
      </div>
    </main>
  );
}

function Section({ title, children, noLine = false }) {
  return (
    <div className="mb-6">
      <h2
        className={`text-xl font-semibold text-yellow-300 mb-2 ${noLine ? '' : 'border-b border-yellow-800 pb-1'}`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function Info({ label, value }) {
  return <p className="text-sm text-gray-300"><span className="mr-1">{label}</span>{value}</p>;
}

function Skill({ label, level }) {
  return (
    <div className="mb-1">
      <p className="text-sm text-gray-300 mb-0.5">{label}</p>
      <div className="h-1 bg-gray-700 rounded-full">
        <div className={`h-1 bg-yellow-400 rounded-full`} style={{ width: `${level * 20}%` }}></div>
      </div>
    </div>
  );
}

function ListItem({ title, subtitle, bullets }) {
  return (
    <div className="mb-5">
      <p className="text-md text-yellow-100 font-semibold">{title}</p>
      <p className="text-sm italic text-gray-400 mb-1">{subtitle}</p>
      {bullets.length > 0 && (
        <ul className="list-disc pl-6 text-sm text-gray-300 space-y-1">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </div>
  );
}
