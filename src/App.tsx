import { useState } from 'react';
import LandingPage from './components/LandingPage';
import StudentDashboard from './components/StudentDashboard';
import { Language } from './data/curriculum';
import { ThemeProvider } from './components/ThemeProvider';
import { TextSizeProvider } from './components/TextSizeProvider';

export default function App() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('bilingual');

  return (
    <ThemeProvider>
      <TextSizeProvider>
        {!selectedClass ? (
          <LandingPage onSelectClass={setSelectedClass} language={language} setLanguage={setLanguage} />
        ) : (
          <StudentDashboard 
            selectedClass={selectedClass}
            language={language} 
            setLanguage={setLanguage} 
            onChangeClass={() => setSelectedClass(null)} 
          />
        )}
      </TextSizeProvider>
    </ThemeProvider>
  );
}
