import React from 'react';
import { Brain, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-emerald-700" />,
      title: "AI Research",
      description: "자연어처리와 딥러닝을 중심으로 한 인공지능 연구"
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-700" />,
      title: "Specialized Focus",
      description: "Agentic AI 시스템과 RAG 기술에 대한 전문적 연구"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-700" />,
      title: "Collaboration",
      description: "연구실 프로젝트와 산학협력을 통한 실무 경험"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              AI와 자연어처리의 미래를 연구합니다
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              인공지능과 자연어처리 분야에서 혁신적인 연구를 수행하고 있는 석사과정생입니다. 
              특히 Agentic AI 시스템과 RAG(Retrieval-Augmented Generation) 기술에 집중하여, 
              더 지능적이고 실용적인 AI 솔루션을 개발하고 있습니다.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              최신 연구 동향을 파악하고 이론을 실제 애플리케이션에 적용하는 것을 좋아합니다. 
              오픈소스 기여와 지식 공유를 통해 AI 커뮤니티 발전에 기여하고자 합니다.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                Natural Language Processing
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                Agentic AI
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                RAG Systems
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0">
                  {highlight.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;