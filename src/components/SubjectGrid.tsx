import { Subject, Language } from '../data/curriculum';

export default function SubjectGrid({ subjects, language, onSelectSubject }: { subjects: Subject[], language: Language, onSelectSubject: (id: string) => void }) {
  const renderInline = (str: any) => {
    if (!str) return '';
    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language];
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjects.map(subject => {
          const totalLessons = subject.units.reduce((acc, unit) => acc + unit.lessons.length, 0);
          // Mock progress for UI demonstration
          const progress = Math.floor(Math.random() * 60) + 10; 
          
          return (
            <div 
              key={subject.id}
              onClick={() => onSelectSubject(subject.id)}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-brand-teal dark:hover:border-brand-teal relative overflow-hidden group"
            >
              <div className="text-4xl mb-4 w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                {subject.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-1 truncate text-brand-primary dark:text-white">{renderInline(subject.title)}</h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                {subject.units.length} {language === 'en' ? 'Units' : language === 'ml' ? 'യൂണിറ്റുകൾ' : 'Units / യൂണിറ്റുകൾ'} • {totalLessons} {language === 'en' ? 'Chapters' : language === 'ml' ? 'അധ്യായങ്ങൾ' : 'Chapters / അധ്യായങ്ങൾ'}
              </p>
              
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-sky transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
