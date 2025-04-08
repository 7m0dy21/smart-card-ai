
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card } from '@/components/ui/card';
import { 
  User, 
  ScanFace, 
  Timer, 
  FileVideo, 
  BrainCircuit, 
  ShieldCheck, 
  FileBarChart 
} from 'lucide-react';

const FeaturesOverview: React.FC = () => {
  const { language, translations } = useAppContext();

  const features = [
    {
      id: 'player-recognition',
      icon: <ScanFace size={32} className="text-referee-yellow" />,
      titleAr: 'التعرف على اللاعب',
      titleEn: 'Player Recognition',
      descriptionAr: 'تعرف على وجه اللاعب ورقم القميص عبر كاميرا البطاقة الذكية وتسجيل بياناته آلياً',
      descriptionEn: 'Recognize player face and jersey number through the smart card camera and automatically register their data'
    },
    {
      id: 'instant-analysis',
      icon: <BrainCircuit size={32} className="text-referee-yellow" />,
      titleAr: 'التحليل الفوري',
      titleEn: 'Instant Analysis',
      descriptionAr: 'تحليل فوري لمواضع الإصابة باستخدام الذكاء الاصطناعي وعرض نتائج فورية استناداً إلى أصول نظام التحكيم',
      descriptionEn: 'Instant analysis of injury positions using AI and displaying immediate results based on refereeing system principles'
    },
    {
      id: 'time-saving',
      icon: <Timer size={32} className="text-referee-yellow" />,
      titleAr: 'توفير الوقت',
      titleEn: 'Time Saving',
      descriptionAr: 'تقليل الوقت المستغرق في تحليل الحالات إلى أقل من ٣٠ ثانية بدلاً من ٥ دقائق مع نظام الفار التقليدي',
      descriptionEn: 'Reduce time spent analyzing cases to less than 30 seconds instead of 5 minutes with the traditional VAR system'
    },
    {
      id: 'final-report',
      icon: <FileBarChart size={32} className="text-referee-yellow" />,
      titleAr: 'التقرير النهائي',
      titleEn: 'Final Report',
      descriptionAr: 'إصدار تقرير شامل نهاية كل مباراة يتضمن الحالات والبطاقات ولقطات الفيديو والقرارات لأتمتة تقارير الحكام',
      descriptionEn: 'Generating a comprehensive report at the end of each match including cases, cards, video clips and decisions to automate referee reports'
    },
    {
      id: 'integrity',
      icon: <ShieldCheck size={32} className="text-referee-yellow" />,
      titleAr: 'نزاهة التحكيم',
      titleEn: 'Refereeing Integrity',
      descriptionAr: 'تعزيز نزاهة التحكيم وتقييم أداء الحكام بشكل موضوعي من خلال بيانات وتحليلات دقيقة',
      descriptionEn: 'Enhance refereeing integrity and evaluate referee performance objectively through accurate data and analytics'
    },
    {
      id: 'video-evidence',
      icon: <FileVideo size={32} className="text-referee-yellow" />,
      titleAr: 'أدلة مرئية',
      titleEn: 'Video Evidence',
      descriptionAr: 'توثيق لقطات الفيديو للحالات التحكيمية كدليل مرئي لدعم القرارات التحكيمية',
      descriptionEn: 'Document video clips of refereeing cases as visual evidence to support refereeing decisions'
    }
  ];

  return (
    <Card className="p-4 bg-black bg-opacity-30 border-0 my-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {language === 'ar' ? 'مميزات البطاقة الذكية' : 'Smart Card Features'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(feature => (
          <div key={feature.id} className="bg-referee-blue bg-opacity-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              {feature.icon}
              <h3 className="text-xl mr-2 font-medium">
                {language === 'ar' ? feature.titleAr : feature.titleEn}
              </h3>
            </div>
            <p className="text-gray-300">
              {language === 'ar' ? feature.descriptionAr : feature.descriptionEn}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FeaturesOverview;
