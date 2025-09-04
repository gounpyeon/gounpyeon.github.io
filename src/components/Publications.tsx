import React from 'react';
import { FileText, Award, Users, Calendar } from 'lucide-react';
import { awards } from '../data/awards';

const Publications: React.FC = () => {
  const publications = [
    {
      title: "Enhancing Multi-Agent Collaboration in RAG Systems: A Novel Approach to Knowledge Integration",
      authors: ["김지민", "박민수", "이해영"],
      venue: "AAAI 2024 (Under Review)",
      year: "2024",
      type: "Conference Paper",
      status: "Under Review",
      abstract: "본 연구는 다중 에이전트 환경에서 RAG 시스템의 협업 메커니즘을 개선하여 지식 통합의 효율성을 높이는 새로운 접근 방법을 제시합니다.",
      link: "#"
    },
    {
      title: "Korean Language Model Fine-tuning for Domain-Specific Question Answering",
      authors: ["김지민", "최영석"],
      venue: "한국정보과학회 학술대회",
      year: "2024",
      type: "Conference Paper",
      status: "Published",
      abstract: "도메인 특화 질의응답을 위한 한국어 언어모델 파인튜닝 기법에 대한 연구입니다. 법률, 의료, 금융 도메인에서 높은 성능을 달성했습니다.",
      link: "#"
    },
    {
      title: "A Survey on Retrieval-Augmented Generation: Challenges and Future Directions",
      authors: ["김지민"],
      venue: "AI 연구 저널",
      year: "2023",
      type: "Journal Paper",
      status: "Published",
      abstract: "검색 증강 생성 모델의 현황과 과제, 향후 연구 방향에 대한 포괄적인 설문 연구입니다.",
      link: "#"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-white scroll-animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications & Awards</h2>
          <div className="w-20 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            연구 성과와 학술적 기여를 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Publications */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <FileText className="w-6 h-6 text-emerald-700 mr-3" />
              논문 및 출판물
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-900 leading-tight">
                      {pub.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pub.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center text-sm text-gray-600 mb-3 gap-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {pub.authors.join(', ')}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {pub.year}
                    </div>
                  </div>
                  
                  <p className="text-emerald-700 font-medium mb-3">{pub.venue}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{pub.abstract}</p>
                  
                  <a
                    href={pub.link}
                    className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    논문 보기
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-6 h-6 text-emerald-700 mr-3" />
              수상 및 장학금
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {award.title}
                      </h4>
                      <p className="text-emerald-700 font-medium mb-2">
                        {award.organization} • {award.year}
                      </p>
                      <p className="text-gray-700 text-sm">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">연구 통계</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">출판 논문</span>
                  <span className="font-semibold text-emerald-700">3편</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">진행 중인 연구</span>
                  <span className="font-semibold text-emerald-700">2개</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">협업 프로젝트</span>
                  <span className="font-semibold text-emerald-700">5개</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">평균 인용 수</span>
                  <span className="font-semibold text-emerald-700">12회</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;