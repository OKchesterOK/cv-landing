import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen bg-[#0c1220] text-white px-4 py-10 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Panel */}
        <aside className="bg-[#0f1a2f] p-6 rounded-xl shadow-md">
          <Section noLine>
            <div className="text-left mb-6">
              <h1 className="text-4xl font-bold text-yellow-400">ІВАНОВ</h1>
              <p className="text-2xl text-gray-300 tracking-widest">ІГОР АНДРІЙОВИЧ</p>
            </div>
          </Section>
          
          <img src="/ivanov_photo.png" alt="Ігор Іванов" className="rounded-lg w-full object-cover mb-6" />

          <Section title="МЕТА">
            <p className="text-sm text-gray-300">
              Шукаю можливість долучитися до команди, що працює над
              технологічними або інженерними рішеннями, важливими для країни.
              Прагну застосувати свій наявний досвід в управлінні проєктами, технічній
              координації та аналітиці, а також здобуті знання в авіаційній галузі.
              Готовий розвиватися, швидко навчатись і вкладати зусилля у нові
              напрями. Відкритий до нових викликів, особливо якщо результат моєї
              роботи зможе принести реальну користь суспільству або допомогти
              Збройним Силам України.
            </p>
          </Section>

          <Section title="ОСОБИСТІ ДАНІ">
            <Info icon={<MapPin size={16} className="text-yellow-400" />} value="Київ, Україна" />
            <Info icon={<Phone size={16} className="text-yellow-400" />} value="+38 (093) 168 20 38" />
            <Info icon={<Mail size={16} className="text-yellow-400" />} value="igor.ivanov.89@gmail.com" />
            <Info icon={<Linkedin size={16} className="text-yellow-400" />} value={<a href="https://www.linkedin.com/in/chesterok" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/chesterok</a>} />
          </Section>
          
          <Section title="НАВИЧКИ">
            <Skill label="Управління проєктами та задачами" />
            <Skill label="Кросфункціональна комунікація" />
            <Skill label="Увага до деталей" level={4} />
            <Skill label="Оптимізація процесів та автоматизація" />
            <Skill label="Аналітичне мислення" />
            <Skill label="Самоорганізація та мультизадачність" />
            <Skill label="Гнучкість в умовах швидких змін" />
          </Section>

          <Section title="МОВИ">
            <Skill label="Українська" level={5} />
            <Skill label="Англійська" level={3} />
          </Section>
        </aside>

        {/* Right Panel */}
        <section className="md:col-span-2 space-y-10">

          
          
          
          
          <Section title="ДОСВІД РОБОТИ">
            <ListItem title="Project Manager" 
              subtitle="Playcus, м. Київ" 
              date="сер 2021 – теперішній час"
              bullets={[
              'Ведення 11+ мобільних ігрових проєктів на платформах: App Store, Google Play, Amazon, Microsoft Store',
              'Заведення та публікація застосунків: метадані, підписки, IAP, тощо',
              'Налаштування LiveOps: Firebase Remote Config, A/B тести, промо',
              'Управління контентом: пошук, обробка, заливка на CDN, перевірка в грі',
              'Робота з аналітикою: Firebase, AppsFlyer, AppLovin, GameAnalytics, devtodev (воронки, події, креші)',
              'Ведення бордів Asana: планування релізів, автоматизації, контроль задач команди',
              'Аналіз конкурентів: UI/UX-ресерч, адаптація фіч у Miro'
            ]} />
            <ListItem title="Manual QA Engineer" 
              subtitle="Playcus, м. Київ" 
              date="тра 2019 – сер 2021"
              bullets={[
              'Тестування мобільних ігор на iOS, Android, Windows, Amazon, macOS',
              'Створення тест-кейсів, чек-листів, репортинг, перевірка фіч',
              'Підтримка гравців (HelpScout), перевірка звернень',
              'Участь у прийманні контенту, A/B тестів, реліз-кандидатів'
            ]} />
            <ListItem 
              title="Junior Front-End Developer" 
              subtitle="Edgica, м. Київ" 
              date="тра 2017 – жов 2017"
              bullets={[
                'Участь у верстці вебсторінок за макетами (HTML5, CSS3, адаптивна розмітка)',
                'Базова інтеграція JavaScript-скриптів, робота з формами та простою логікою',
                'Тестування кросбраузерної сумісності, оптимізація для мобільних пристроїв',
                'Робота в команді з дизайнером та бекенд-розробником'
              ]} />
            <ListItem 
              title="Бар-менеджер / Бармен (фриланс)" 
              subtitle="м. Київ" 
              date="2014 – теперішній час (епізодично)"
              bullets={[]} 
            />
          </Section>

          <Section title="ОСВІТА І КВАЛІФІКАЦІЇ">
            
            <ListItem 
              title="Магістр з льотної експлуатації повітряних суден" 
              subtitle="Кіровоградська Льотна Академія НАУ, м. Кропивницький"
              date="вер 2013 — чер 2014"
              bullets={[
              'Спеціальність: Льотна експлуатація повітряних суден',
              'Професійна кваліфікація: Пілот (літака)'
            ]} />
            
            <ListItem 
              title="Молодший лейтенант" 
              subtitle="Кіровоградська Льотна Академія НАУ, м. Кропивницький" 
              date="вер 2011 — чер 2013"
              bullets={[
              'Спеціальність: Пілот військово-транспортної авіації',
              'ВОС 061400: Бойове застосування авіаційних військових частин і підрозділів військово-транспортної авіації'
            ]} />
            
            <ListItem 
              title="Бакалавр з аеронавігації" 
              subtitle="Кіровоградська Льотна Академія НАУ, м. Кропивницький" 
              date="вер 2010 — чер 2013"
              bullets={[
              'Спеціальність: Аеронавігація'
            ]} />
            
            <ListItem 
              title="Бакалавр з електроніки" 
              subtitle="Національний авіаційний університет, м. Київ" 
              date="вер 2006 — чер 2010"
              bullets={[
              'Спеціальність: Обладнання повітряних суден (без диплому)'
            ]} />
            
            <ListItem 
              title="Повна середня освіта" 
              subtitle="Ліцей «Універсум», м. Київ" 
              date="вер 2002 — чер 2006"
              bullets={[
              'Профіль: фізико-математичний'
            ]} />
            
          </Section>

          <Section title="АВІАЦІЙНИЙ ДОСВІД">
            
            <p className="text-sm text-gray-400 mb-4">
              Загальний досвід навчання та виконання польотів на малих повітряних суднах, включаючи нічні вильоти та польоти за приладами.
            </p>

            <ListItem 
              title="Ліцензії" 
              bullets={[
              'Свідоцтво комерційного пілота (CPL): СА №012698 (08.08.2013)',
              'Свідоцтво приватного пілота (PPL): РА №011521 (02.02.2012)'
            ]} />
            
{/*             <ListItem title="Наліт та типи ПС">
              <span className="text-sm italic text-gray-400 mt-1">
                  Льотна підготовка, загальний наліт <span className="text-white font-semibold">160 год 35 хв</span>
              </span>
              <ul className="list-disc pl-6 text-sm text-gray-300 space-y-1">
                <li>Diamond DA42 — 50 год 18 хв</li>
                <li>Tecnam P2002-JF — 1 год 00 хв</li>
                <li>Aquila AT01 — 66 год 30 хв</li>
                <li>НАРП-1 — 40 год 03 хв</li>
              </ul>
              <span className="text-sm italic text-gray-400">
                  Тренажерна підготовка
              </span>
               <ul className="list-disc pl-6 text-sm text-gray-300 space-y-1">
                <li>Л-410 — 25 год 00 хв</li>
                <li>АН-2 — 30 год 00 хв</li>
              </ul>
            </ListItem> */}

            <ListItem title="Наліт та типи ПС">
              <span className="text-sm italic text-gray-400 mb-1">
                  Льотна підготовка, загальний наліт <span className="font-semibold">160 год 35 хв</span>
              </span>
              <div className="text-sm text-gray-300">
                <div className="flex gap-6">
                  <ul className="list-disc pl-6 text-sm text-gray-300 space-y-1">
                    <li>Diamond DA42</li>
                    <li>Tecnam P2002-JF</li>
                    <li>Aquila AT01</li>
                    <li>НАРП-1</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>50 год 18 хв</li>
                    <li>1 год 00 хв</li>
                    <li>66 год 30 хв</li>
                    <li>40 год 03 хв</li>
                  </ul>
                </div>
              </div>
              <span className="text-sm italic text-gray-400 mt-1">
                  Тренажерна підготовка, загальний наліт <span className="font-semibold">55 год 00 хв</span>
              </span>
              <div className="text-sm text-gray-300">
                <div className="flex gap-6">
                  <ul className="list-disc pl-6 text-sm text-gray-300 space-y-1">
                    <li>Л-410</li>
                    <li>АН-2</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>25 год 00 хв</li>
                    <li>30 год 00 хв</li>
                  </ul>
                </div>
              </div>
            </ListItem>
            
{/*             <ListItem 
              title="Сертифікати" 
              bullets={[
              'Ведення радіомовлення англійською мовою',
              'Авіахімроботи'
            ]} /> */}
            
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

function Info({ icon, value }) {
  return (
    <div className="flex items-start gap-3 mb-2">
      <div className="pt-0.5">{icon}</div>
      <p className="text-sm text-gray-300 leading-snug">{value}</p>
    </div>
  );
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

function ListItem({ title, subtitle, date, bullets, children }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-start gap-4">
        <p className="text-md text-yellow-100 font-semibold">{title}</p>
        {date && (
          <p className="text-sm italic text-gray-400 whitespace-nowrap">{date}</p>
        )}
      </div>
      {subtitle && (
        <p className="text-sm italic text-gray-400 mb-1">{subtitle}</p>
      )}
      {bullets?.length > 0 && (
        <ul className="list-disc pl-6 text-sm text-gray-300 space-y-1">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      {children}
    </div>
  );
}
