import { Users, Activity, BookOpen, AlertCircle, BarChart3, Settings } from 'lucide-react';
import { Language } from '../data/curriculum';

export default function TeacherDashboard({ language }: { language: Language }) {
  const stats = [
    { label: language === 'en' ? 'Total Students' : 'ആകെ വിദ്യാർത്ഥികൾ', value: '142', icon: Users, color: 'bg-blue-500' },
    { label: language === 'en' ? 'Avg. Completion' : 'ശരാശരി പൂർത്തീകരണം', value: '78%', icon: Activity, color: 'bg-emerald-500' },
    { label: language === 'en' ? 'Active Lessons' : 'സജീവ പാഠങ്ങൾ', value: '12', icon: BookOpen, color: 'bg-indigo-500' },
    { label: language === 'en' ? 'Needs Attention' : 'ശ്രദ്ധിക്കേണ്ടവ', value: '8', icon: AlertCircle, color: 'bg-rose-500' },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
              {language === 'en' ? 'Teacher Dashboard' : 'അധ്യാപക ഡാഷ്‌ബോർഡ്'}
            </h1>
            <p className="text-slate-500">
              {language === 'en' ? 'Overview of Class 10 Science performance.' : 'പത്താം ക്ലാസ് സയൻസ് പ്രകടനത്തിന്റെ അവലോകനം.'}
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <Settings className="w-4 h-4" />
            {language === 'en' ? 'Manage Class' : 'ക്ലാസ് നിയന്ത്രിക്കുക'}
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-inner`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-500" />
                {language === 'en' ? 'Class Performance: Photosynthesis' : 'ക്ലാസ് പ്രകടനം: ഫോട്ടോസിന്തസിസ്'}
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* Dummy progress bars */}
                {[
                  { name: 'Concept Mastery', score: 85 },
                  { name: 'Virtual Lab Completion', score: 62 },
                  { name: 'Quiz Average', score: 74 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">{item.name}</span>
                      <span className="text-slate-500">{item.score}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-indigo-500 h-2.5 rounded-full" 
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions / Alerts */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">
                {language === 'en' ? 'Needs Attention' : 'ശ്രദ്ധിക്കേണ്ടവ'}
              </h2>
            </div>
            <div className="p-0">
              <ul className="divide-y divide-slate-100">
                {[
                  { student: 'Rahul M.', issue: 'Failed Quiz 2 times', time: '2h ago' },
                  { student: 'Sneha K.', issue: 'Missed Virtual Lab', time: '1d ago' },
                  { student: 'Arjun P.', issue: 'Low engagement score', time: '2d ago' },
                ].map((alert, idx) => (
                  <li key={idx} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 text-sm">{alert.student}</span>
                      <span className="text-xs text-slate-400">{alert.time}</span>
                    </div>
                    <p className="text-sm text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {alert.issue}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
