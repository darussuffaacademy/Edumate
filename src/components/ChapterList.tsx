import { Subject, Language } from '../data/curriculum';
import { ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';

export default function ChapterList({ subject, language, onSelectLesson, onBack }: { subject: Subject, language: Language, onSelectLesson: (id: string) => void, onBack: () => void }) {
  const renderInline = (str: any) => {
    if (!str) return '';
    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language];
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <button 
        onClick={onBack} 
        className="mb-8 text-brand-primary dark:text-slate-300 hover:text-brand-teal dark:hover:text-brand-teal font-bold flex items-center gap-2 transition-colors bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 w-fit"
      >
        <ArrowLeft className="w-4 h-4" /> 
        {language === 'en' ? 'Back to Subjects' : language === 'ml' ? 'വിഷയങ്ങളിലേക്ക് മടങ്ങുക' : 'Back to Subjects / വിഷയങ്ങളിലേക്ക് മടങ്ങുക'}
      </button>
      
      <div className="flex items-center gap-5 mb-10 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300">
        <div className="text-6xl w-20 h-20 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center shadow-inner">
          {subject.icon}
        </div>
        <div>
          <h2 className="font-display text-3xl font-extrabold text-brand-primary dark:text-white">{renderInline(subject.title)}</h2>
          <p className="text-slate-500 dark:text-slate-400 font-semibold mt-1">
            {subject.units.length} {language === 'en' ? 'Units' : language === 'ml' ? 'യൂണിറ്റുകൾ' : 'Units / യൂണിറ്റുകൾ'}
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {subject.units.map((unit, idx) => (
          <div key={unit.id} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300">
            <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-3 text-brand-primary dark:text-white">
              <span className="bg-slate-100 dark:bg-slate-700 text-brand-primary dark:text-slate-200 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                {idx + 1}
              </span>
              {renderInline(unit.title)}
            </h3>
            
            <div className="space-y-3 pl-11">
              {unit.lessons.map(lesson => (
                <div 
                  key={lesson.id}
                  onClick={() => onSelectLesson(lesson.id)} 
                  className="p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 hover:border-brand-teal dark:hover:border-brand-teal hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer flex justify-between items-center transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-brand-teal transition-colors" />
                    <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-brand-primary dark:group-hover:text-white transition-colors">
                      {renderInline(lesson.title)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700">
                    <Clock className="w-4 h-4" />
                    {lesson.estimated_time_mins} {language === 'en' ? 'mins' : language === 'ml' ? 'മിനിറ്റ്' : 'mins / മിനിറ്റ്'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
