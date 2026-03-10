import { useState } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { sslcCurriculum, Language } from '../../data/curriculum';
import ChapterList from '../../components/ChapterList';
import { malayalamIISamplePapers } from '../../data/malayalam_ii_sample_paper';
import FormatsView from '../../components/FormatsView';

export default function SubjectHome() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { language } = useOutletContext<{ language: Language }>();
  const [activeTab, setActiveTab] = useState<'lessons' | 'samplePaper' | 'formats'>('lessons');
  const [selectedPaperIndex, setSelectedPaperIndex] = useState(0);

  const subject = sslcCurriculum.find(s => s.id === subjectId);

  if (!subject) return <div>Subject not found</div>;

  const handleSelectLesson = (id: string) => {
    navigate(`/sslc/${subjectId}/${id}`);
  };

  const handleBack = () => {
    navigate('/sslc');
  };

  const renderInline = (str: any) => {
    if (!str) return '';
    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language];
  };

  return (
    <div className="p-2 sm:p-4 md:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-6 sm:mb-10 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300">
        <div className="text-4xl sm:text-6xl w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 dark:bg-slate-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner">
          {subject.icon}
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-display text-xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">{renderInline(subject.title)}</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold mt-1">
            {subject.units.length} {language === 'en' ? 'Units' : language === 'ml' ? 'യൂണിറ്റുകൾ' : 'Units / യൂണിറ്റുകൾ'}
          </p>
        </div>
      </div>

      {/* Tabs */}
      {subjectId === 'sub-malayalam-ii' && (
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-6">
          <button
            onClick={() => setActiveTab('lessons')}
            className={`px-3 sm:px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-colors ${activeTab === 'lessons' ? 'bg-brand-primary text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}`}
          >
            {language === 'en' ? 'Lessons' : 'പാഠങ്ങൾ'}
          </button>
          <button
            onClick={() => setActiveTab('samplePaper')}
            className={`px-3 sm:px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-colors ${activeTab === 'samplePaper' ? 'bg-brand-primary text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}`}
          >
            {language === 'en' ? 'Sample Question Paper' : 'മാതൃകാ ചോദ്യപേപ്പർ'}
          </button>
          <button
            onClick={() => setActiveTab('formats')}
            className={`px-3 sm:px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-colors ${activeTab === 'formats' ? 'bg-brand-primary text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'}`}
          >
            {language === 'en' ? 'Formats' : 'ഫോർമാറ്റുകൾ'}
          </button>
        </div>
      )}

      {/* Content */}
      {activeTab === 'lessons' ? (
        <ChapterList subject={subject} language={language} onSelectLesson={handleSelectLesson} onBack={handleBack} showHeader={false} />
      ) : activeTab === 'samplePaper' ? (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {malayalamIISamplePapers.map((paper, index) => (
              <button
                key={paper.id}
                onClick={() => setSelectedPaperIndex(index)}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${selectedPaperIndex === index ? 'bg-brand-teal text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'}`}
              >
                {language === 'en' ? `Paper ${index + 1}` : `പേപ്പർ ${index + 1}`}
              </button>
            ))}
          </div>
          <SamplePaperView paper={malayalamIISamplePapers[selectedPaperIndex]} language={language} />
        </div>
      ) : (
        <FormatsView />
      )}
    </div>

  );
}

function SamplePaperView({ paper, language }: { paper: any, language: Language }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const renderInline = (str: any) => {
    if (!str) return '';
    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language];
  };

  let currentQuestionNumber = 1;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-brand-primary dark:text-white">{renderInline(paper.title)}</h2>
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-4 py-2 bg-brand-teal text-white rounded-lg font-bold"
        >
          {showAnswers ? (language === 'en' ? 'Hide Answers' : 'ഉത്തരങ്ങൾ മറയ്ക്കുക') : (language === 'en' ? 'Show Answers' : 'ഉത്തരങ്ങൾ കാണിക്കുക')}
        </button>
      </div>
      
      {paper.sections.map((section: any) => {
        const startNumber = currentQuestionNumber;
        currentQuestionNumber += section.questions.length;
        
        return (
          <div key={section.id} className="mb-8">
            <h3 className="text-xl font-bold mb-2 text-brand-primary dark:text-white">{renderInline(section.title)}</h3>
            <p className="text-slate-500 mb-4">{renderInline(section.description)}</p>
            <div className="space-y-6">
              {section.questions.map((q: any, index: number) => (
                <div key={q.id} className="border-b pb-4">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    <span className="mr-2">{startNumber + index}.</span>
                    {renderInline(q.question)}
                  </p>
                  {showAnswers && (
                    <p className="mt-2 text-brand-teal font-medium">{renderInline(q.answer)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
