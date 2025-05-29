import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-mainText font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {/* Left Panel */}
        <aside className="bg-primary p-6 shadow-md border-r border-[#1f2937]">
          <Section noLine>
            <div className="text-center mb-6">
              <img src="/ivanov_photo.png" alt="Ігор Іванов" className="rounded-full w-40 h-40 object-cover mx-auto mb-4 border-2 border-gray-400 shadow-md" />
              <h1 className="text-3xl font-bold text-accent tracking-widest uppercase">ІВАНОВ</h1>
              <p className="text-xl text-mainText tracking-widest uppercase">ІГОР АНДРІЙОВИЧ</p>
              <p className="text-lg italic text-gray-400 tracking-widest">Project Manager</p>
            </div>
          </Section>
          <Section title="ОСОБИСТІ ДАНІ">
            <Info icon={<MapPin size={16} className="text-gray-400" />} value="Київ, Україна" />
            <Info icon={<Phone size={16} className="text-gray-400" />} value="+38 (093) 168 20 38" />
            <Info icon={<Mail size={16} className="text-gray-400" />} value="igor.ivanov.89@gmail.com" />
            <Info icon={<Linkedin size={16} className="text-gray-400" />} value={<a href="https://www.linkedin.com/in/chesterok" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/chesterok</a>} />
          </Section>
          <Section title="МЕТА">
            <p className="text-sm text-mainText">
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

          <Section title="ПРОФЕСІЙНІ НАВИЧКИ">
            <ul className="list-disc pl-6 text-sm text-mainText space-y-1">
              <li>Project & Workflow Management</li>
              <li>LiveOps & Feature Management</li>
              <li>App Delivery & Release Management</li>
              <li>Product Analytics & Monetization</li>
              <li>QA & Testing</li>
              <li>Content & Tools Operations</li>
              <li>UX Research & Competitor Analysis</li>
            </ul>
          </Section>

          <Section title="ОСОБИСТІ ЯКОСТІ">
            <ul className="list-disc pl-6 text-sm text-mainText space-y-1">
              <li>Самоорганізація та мультизадачність</li>
              <li>Гнучкість в умовах швидких змін</li>
              <li>Увага до деталей</li>
              <li>Кросфункціональна комунікація</li>
              <li>Аналітичне мислення</li>
              <li>Оптимізація процесів та автоматизація</li>
            </ul>
          </Section>

          <Section title="ІНТЕРЕСИ">
            <ul className="list-disc pl-6 text-sm text-mainText space-y-1">
              <li>Розумний будинок</li>
              <li>3D друк</li>
              <li>Авіація</li>
              <li>Настільний теніс</li>
              <li>Кінематограф</li>
              <li>Відеоігри</li>
              <li>Барна культура</li>
            </ul>
          </Section>

          <Section title="МОВИ">
            <Skill label="Українська" level="Рідна мова" />
            <Skill label="Англійська" level="Pre-Intermediate" />
          </Section>
        </aside>

        {/* Right Panel */}
        <section className="md:col-span-2 space-y-10 bg-primary p-6 shadow-md">
          <Section title="ДОСВІД РОБОТИ">
            <ListItem title="Project Manager" subtitle="Playcus, м. Київ" date="сер 2021 – теперішній час" bullets={[
              'Ведення 11+ мобільних ігрових проєктів на платформах: App Store, Google Play, Amazon, Microsoft Store',
              'Заведення та публікація застосунків: метадані, підписки, IAP, тощо',
              'Налаштування LiveOps: Firebase Remote Config, A/B тести, промо',
              'Управління контентом: пошук, обробка, заливка на CDN, перевірка в грі',
              'Робота з аналітикою: Firebase, AppsFlyer, AppLovin, GameAnalytics, devtodev (воронки, події, креші)',
              'Ведення бордів Asana: планування релізів, автоматизації, контроль задач команди',
              'Аналіз конкурентів: UI/UX-ресерч, адаптація фіч у Miro'
            ]} />

            <ListItem title="Manual QA Engineer" subtitle="Playcus, м. Київ" date="тра 2019 – сер 2021" bullets={[
              'Тестування мобільних ігор на iOS, Android, Windows, Amazon, macOS',
              'Створення тест-кейсів, чек-листів, репортинг, перевірка фіч',
              'Підтримка гравців (HelpScout), перевірка звернень',
              'Участь у прийманні контенту, A/B тестів, реліз-кандидатів'
            ]} />

            <ListItem title="Junior Front-End Developer" subtitle="Edgica, м. Київ" date="тра 2017 – жов 2017" bullets={[
              'Участь у верстці вебсторінок за макетами (HTML5, CSS3, адаптивна розмітка)',
              'Базова інтеграція JavaScript-скриптів, робота з формами та простою логікою',
              'Тестування кросбраузерної сумісності, оптимізація для мобільних пристроїв',
              'Робота в команді з дизайнером та бекенд-розробником'
            ]} />

            <ListItem title="Бар-менеджер / Бармен (фриланс)" subtitle="м. Київ" date="2014 – теперішній час (епізодично)" bullets={[]} />
          </Section>

          <Section title="ОСВІТА І КВАЛІФІКАЦІЇ">
            <ListItem title="Магістр з льотної експлуатації повітряних суден" subtitle="Кіровоградська Льотна Академія НАУ, м. Кропивницький" date="вер 2013 — чер 2014" bullets={[
              'Спеціальність: Льотна експлуатація повітряних суден',
              'Професійна кваліфікація: Пілот (літака)'
            ]} />

            <ListItem title="Молодший лейтенант" subtitle="Кіровоградська Льотна Академія НАУ, м. Кропивницький" date="вер 2011 — чер 2013" bullets={[
              'Спеціальність: Пілот військово-транспортної авіації',
              'ВОС 061400: Бойове застосування авіаційних військових частин і підрозділів військово-транспортної авіації'
            ]} />

            <ListItem title="Бакалавр з аеронавігації" subtitle="Кіровоградська Льотна Академія НАУ, м. Кропивницький" date="вер 2010 — чер 2013" bullets={[
              'Спеціальність: Аеронавігація'
            ]} />

            <ListItem title="Бакалавр з електроніки" subtitle="Національний авіаційний університет, м. Київ" date="вер 2006 — чер 2010" bullets={[
              'Спеціальність: Обладнання повітряних суден (без диплому)'
            ]} />

            <ListItem title="Повна середня освіта" subtitle="Ліцей «Універсум», м. Київ" date="вер 2002 — чер 2006" bullets={[
              'Профіль: фізико-математичний'
            ]} />
          </Section>

          <Section title="АВІАЦІЙНИЙ ДОСВІД">
            <p className="text-sm italic text-gray-400 mb-4">
              Загальний досвід навчання та виконання польотів на малих повітряних суднах, включаючи нічні вильоти та польоти за приладами.
            </p>
            <ListItem title="Ліцензії" bullets={[
              'Свідоцтво комерційного пілота (CPL)',
              'Свідоцтво приватного пілота (PPL)'
            ]} />
            <ListItem title="Наліт годин">
              <div className="text-sm text-mainText">
                <div className="flex gap-6">
                  <ul className="list-disc pl-6 text-sm text-mainText space-y-1">
                    <li>Загальний час:</li>
                    <li>Багатодвигунний:</li>
                    <li>Однодвигунний:</li>
                    <li>В якості КПС:</li>
                    <li>Тренажер:</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>160 год 51 хв</li>
                    <li>50 год 18 хв</li>
                    <li>107 год 33 хв</li>
                    <li>144 год 51 хв</li>
                    <li>55 год 00 хв</li>
                  </ul>
                </div>
              </div>
            </ListItem>
          </Section>
        </section>
      </div>
    </main>
  );
}

function Section({ title, children, noLine = false, icon = null }) {
  return (
    <div className="mb-6">
      <h2 className={`text-xl font-semibold text-accent mb-2 flex items-center gap-2 ${noLine ? '' : 'border-b border-[#1f2937] pb-1'}`}>
        {icon && <span className="text-accent">{icon}</span>}
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
      <p className="text-sm text-mainText leading-snug">{value}</p>
    </div>
  );
}

function Skill({ label, level }) {
  return (
    <div className="flex justify-between text-sm text-mainText mb-1">
      <span>{label}</span>
      <span>{level}</span>
    </div>
  );
}

function ListItem({ title, subtitle, date, bullets, children }) {
  return (
    <div className="mb-5">
      <p className="text-md text-mainText font-semibold">{title}</p>

      {(subtitle || date) && (
        <div className="flex justify-between items-start gap-4">
          {subtitle && (
            <p className="text-sm italic text-gray-400 mb-1">{subtitle}</p>
          )}
          {date && (
            <p className="text-sm italic text-gray-400 whitespace-nowrap">{date}</p>
          )}
        </div>
      )}

      {bullets?.length > 0 && (
        <ul className="list-disc pl-6 text-sm text-mainText space-y-1">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      {children}
    </div>
  );
}