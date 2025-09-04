import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "석사 과정 (M.S.)",
      major: "인공지능학과",
      school: "서울대학교",
      period: "2023.03 - 2025.02 (예정)",
      location: "서울, 대한민국",
      gpa: "4.2/4.3",
      thesis: "Large Language Models를 활용한 Multi-Agent RAG 시스템 연구",
      highlights: [
        "자연어처리 연구실 (NLP Lab) 소속",
        "교내 AI 학술대회 최우수상 수상",
        "BK21 우수학생 장학금 수여"
      ]
    },
    {
      degree: "학사 (B.S.)",
      major: "컴퓨터공학과",
      school: "연세대학교",
      period: "2019.03 - 2023.02",
      location: "서울, 대한민국",
      gpa: "3.8/4.0",
      thesis: "딥러닝을 활용한 감정 분석 시스템 구현",
      highlights: [
        "Magna Cum Laude 졸업",
        "컴퓨터공학과 학술동아리 회장",
        "AI 관련 과목 평균 A+ 취득"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 scroll-animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-emerald-700 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <GraduationCap className="w-6 h-6 text-emerald-700" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="text-emerald-700 font-semibold text-lg">
                    GPA: {edu.gpa}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {edu.major}
                    </h4>
                    <p className="text-gray-600 text-lg">{edu.school}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-2">논문 주제:</h5>
                  <p className="text-gray-700 italic">{edu.thesis}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">주요 성과:</h5>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;