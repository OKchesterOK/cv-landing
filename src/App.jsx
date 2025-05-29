import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Download, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ua' ? 'en' : 'ua';
    i18n.changeLanguage(newLang);
  };

  const nextLang = i18n.language === 'ua' ? 'en' : 'ua';
  const buttonTitle = i18n.language === 'ua' ? t('switch_to_english') : t('switch_to_ukrainian');

  const currentPdfPath = i18n.language === 'ua' ? '/Ivanov_CV_UA.pdf' : '/Ivanov_CV_EN.pdf';
  const downloadFileName = i18n.language === 'ua' ? 'Ivanov_CV_UA.pdf' : 'Ivanov_CV_EN.pdf';

  return (
    <>
      {/* Floating Action Panel */}
      <div className="fixed top-6 right-6 z-50 flex flex-col space-y-2">
        <button 
          onClick={toggleLanguage} 
          className="bg-primary hover:bg-gray-700 text-white p-3 rounded shadow flex justify-center items-center border-2 border-gray-400"
          title={buttonTitle}
        >
          <Globe className="w-5 h-5" />
        </button>
        <a
          href={currentPdfPath}
          download={downloadFileName}
          className="bg-accent hover:bg-yellow-500 text-black p-3 rounded shadow flex justify-center items-center"
          title={t('download_pdf')}
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
      <main className="relative min-h-screen bg-[#0f172a] text-mainText font-sans">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {/* Left Panel */}
          <aside className="bg-primary p-6 shadow-md border-r border-[#1f2937]">
            <Section noLine>
              <div className="text-center mb-6">
                <img src="/ivanov_photo.png" alt={t('ivanov_name_last')} className="rounded-full w-40 h-40 object-cover mx-auto mb-4 border-2 border-gray-400 shadow-md" />
                <h1 className="text-3xl font-bold text-accent tracking-widest uppercase">{t('ivanov_name_first')}</h1>
                <p className="text-xl text-mainText tracking-widest uppercase">{t('ivanov_name_last')}</p>
                <p className="text-lg italic text-gray-400 tracking-widest">{t('project_manager_title')}</p>
              </div>
            </Section>
            
            <Section title={t('personal_data_title')}>
              <Info icon={<MapPin size={16} className="text-gray-400" />} value={t('location')} />
              <Info icon={<Phone size={16} className="text-gray-400" />} value={t('phone')} />
              <Info icon={<Mail size={16} className="text-gray-400" />} value={t('email')} />
              <Info icon={<Linkedin size={16} className="text-gray-400" />} value={<a href="https://www.linkedin.com/in/chesterok" target="_blank" rel="noopener noreferrer" className="underline">{t('linkedin_url')}</a>} />
            </Section>
            <Section title={t('objective_title')}>
              <p className="text-sm text-mainText">
                {t('objective_text')}
              </p>
            </Section>

            <Section title={t('professional_skills_title')}>
              <ul className="list-disc pl-6 text-sm text-mainText space-y-1">
                <li>{t('skill_project_workflow_management')}</li>
                <li>{t('skill_liveops_feature_management')}</li>
                <li>{t('skill_app_delivery_release_management')}</li>
                <li>{t('skill_product_analytics_monetization')}</li>
                <li>{t('skill_qa_testing')}</li>
                <li>{t('skill_content_tools_operations')}</li>
                <li>{t('skill_ux_research_competitor_analysis')}</li>
              </ul>
            </Section>

            <Section title={t('personal_qualities_title')}>
              <ul className="list-disc pl-6 text-sm text-mainText space-y-1">
                <li>{t('quality_self_organization_multitasking')}</li>
                <li>{t('quality_flexibility_rapid_changes')}</li>
                <li>{t('quality_attention_to_detail')}</li>
                <li>{t('quality_cross_functional_communication')}</li>
                <li>{t('quality_analytical_thinking')}</li>
                <li>{t('quality_process_optimization_automation')}</li>
              </ul>
            </Section>

            <Section title={t('interests_title')}>
              <ul className="list-disc pl-6 text-sm text-mainText space-y-1">
                <li>{t('interest_smart_home')}</li>
                <li>{t('interest_3d_printing')}</li>
                <li>{t('interest_aviation')}</li>
                <li>{t('interest_table_tennis')}</li>
                <li>{t('interest_cinema')}</li>
                <li>{t('interest_video_games')}</li>
                <li>{t('interest_bar_culture')}</li>
              </ul>
            </Section>

            <Section title={t('languages_title')}>
              <Skill label={t('language_ukrainian')} level={t('language_native')} />
              <Skill label={t('language_english')} level={t('language_pre_intermediate')} />
            </Section>
          </aside>

          {/* Right Panel */}
          <section className="md:col-span-2 space-y-10 bg-primary p-6 shadow-md">
            <Section title={t('work_experience_title')}>
              <ListItem 
                title={t('experience_pm_title')} 
                subtitle={t('experience_pm_company')} 
                date={t('experience_pm_date')} 
                bullets={[
                  t('experience_pm_bullet1'),
                  t('experience_pm_bullet2'),
                  t('experience_pm_bullet3'),
                  t('experience_pm_bullet4'),
                  t('experience_pm_bullet5'),
                  t('experience_pm_bullet6'),
                  t('experience_pm_bullet7')
                ]} 
              />

              <ListItem 
                title={t('experience_qa_title')} 
                subtitle={t('experience_qa_company')} 
                date={t('experience_qa_date')} 
                bullets={[
                  t('experience_qa_bullet1'),
                  t('experience_qa_bullet2'),
                  t('experience_qa_bullet3'),
                  t('experience_qa_bullet4')
                ]} 
              />

              <ListItem 
                title={t('experience_frontend_title')} 
                subtitle={t('experience_frontend_company')} 
                date={t('experience_frontend_date')} 
                bullets={[
                  t('experience_frontend_bullet1'),
                  t('experience_frontend_bullet2'),
                  t('experience_frontend_bullet3'),
                  t('experience_frontend_bullet4')
                ]} 
              />

              <ListItem 
                title={t('experience_bar_manager_title')} 
                subtitle={t('experience_bar_manager_company')} 
                date={t('experience_bar_manager_date')} 
                bullets={[]} 
              />
            </Section>

            <Section title={t('education_qualifications_title')}>
              <ListItem 
                title={t('education_master_pilot_title')} 
                subtitle={t('education_master_pilot_university')} 
                date={t('education_master_pilot_date')} 
                bullets={[
                  t('education_master_pilot_bullet1'),
                  t('education_master_pilot_bullet2')
                ]} 
              />

              <ListItem 
                title={t('education_junior_lieutenant_title')} 
                subtitle={t('education_junior_lieutenant_university')} 
                date={t('education_junior_lieutenant_date')} 
                bullets={[
                  t('education_junior_lieutenant_bullet1'),
                  t('education_junior_lieutenant_bullet2')
                ]} 
              />

              <ListItem 
                title={t('education_bachelor_aeron_title')} 
                subtitle={t('education_bachelor_aeron_university')} 
                date={t('education_bachelor_aeron_date')} 
                bullets={[
                  t('education_bachelor_aeron_bullet1')
                ]} 
              />

              <ListItem 
                title={t('education_bachelor_electronics_title')} 
                subtitle={t('education_bachelor_electronics_university')} 
                date={t('education_bachelor_electronics_date')} 
                bullets={[
                  t('education_bachelor_electronics_bullet1')
                ]} 
              />

              <ListItem 
                title={t('education_high_school_title')} 
                subtitle={t('education_high_school_university')} 
                date={t('education_high_school_date')} 
                bullets={[
                  t('education_high_school_bullet1')
                ]} 
              />
            </Section>

            <Section title={t('aviation_experience_title')}>
              <p className="text-sm italic text-gray-400 mb-4">
                {t('aviation_experience_description')}
              </p>
              <ListItem title={t('aviation_licenses_title')} bullets={[
                t('aviation_license_cpl'),
                t('aviation_license_ppl')
              ]} />
              <ListItem title={t('flight_hours_title')}>
                <div className="text-sm text-mainText">
                  <div className="flex gap-6">
                    <ul className="list-disc pl-6 text-sm text-mainText space-y-1">
                      <li>{t('flight_hours_total')}</li>
                      <li>{t('flight_hours_multi_engine')}</li>
                      <li>{t('flight_hours_single_engine')}</li>
                      <li>{t('flight_hours_pic')}</li>
                      <li>{t('flight_hours_simulator')}</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>{t('flight_hours_total_value')}</li>
                      <li>{t('flight_hours_multi_engine_value')}</li>
                      <li>{t('flight_hours_single_engine_value')}</li>
                      <li>{t('flight_hours_pic_value')}</li>
                      <li>{t('flight_hours_simulator_value')}</li>
                    </ul>
                  </div>
                </div>
              </ListItem>
            </Section>
          </section>
        </div>
      </main>
    </>
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