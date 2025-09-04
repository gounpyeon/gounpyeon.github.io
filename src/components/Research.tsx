import React from 'react';
import { Cpu, Database, Zap, FileText } from 'lucide-react';

const Research: React.FC = () => {
  const researchAreas = [
    {
      icon: <Cpu className="w-8 h-8 text-emerald-700" />,
      title: "Agentic AI Systems",
      description: "자율적으로 동작하는 AI 에이전트 시스템 설계 및 구현",
      projects: ["Multi-Agent Planning Framework", "Autonomous Code Generation Agent"]
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-700" />,
      title: "RAG Systems",
      description: "검색 증강 생성 모델을 활용한 지식 기반 AI 시스템 연구",
      projects: ["Domain-Specific RAG Pipeline", "Multi-Modal Knowledge Base"]
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-700" />,
      title: "NLP Optimization",
      description: "대규모 언어모델의 효율성과 성능 최적화 연구",
      projects: ["Model Compression Techniques", "Inference Acceleration"]
    }
  ];

  return (
    <section id="research" className="py-20 bg-white scroll-animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Areas</h2>
          <div className="w-20 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            인공지능의 실용적 응용과 이론적 발전을 위한 연구를 수행하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {area.description}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  관련 프로젝트
                </h4>
                <ul className="space-y-2">
                  {area.projects.map((project, pIndex) => (
                    <li key={pIndex} className="text-sm text-gray-600 flex items-start">
                      <div className="w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">현재 연구 주제</h3>
            <p className="text-lg text-gray-700 mb-6">
              "Large Language Models를 활용한 Multi-Agent RAG 시스템의 효율성 최적화"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">연구 목표</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 다중 에이전트 간 효율적 협업 메커니즘 설계</li>
                  <li>• RAG 시스템의 검색 정확도 향상</li>
                  <li>• 실시간 추론 성능 최적화</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">기대 효과</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 지식 집약적 작업의 자동화</li>
                  <li>• 도메인 특화 AI 어시스턴트 개발</li>
                  <li>• 기업용 AI 솔루션의 실용성 증대</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;