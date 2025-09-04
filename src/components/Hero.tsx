import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-6 shadow-xl object-cover border-4 border-white"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            김지민
            <span className="text-emerald-700">.</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-6">
            AI Researcher & NLP Specialist
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            자연어처리와 Agentic AI 시스템을 연구하는 석사과정생입니다. 
            RAG 시스템과 지능형 에이전트 개발에 특화되어 있으며, 
            실용적인 AI 솔루션 구축에 열정을 가지고 있습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Download className="w-4 h-4 inline-block mr-2" />
              Resume 다운로드
            </button>
            <button
              onClick={scrollToAbout}
              className="border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 hover:text-white transition-all duration-300"
            >
              더 알아보기
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-emerald-700 hover:text-emerald-800">
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;