import React from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 text-emerald-700" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "R", level: 65 }
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-700" />,
      title: "ML/AI Frameworks",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Transformers", level: 95 },
        { name: "LangChain", level: 90 },
        { name: "Scikit-learn", level: 80 }
      ]
    },
    {
      icon: <Cloud className="w-6 h-6 text-emerald-700" />,
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "AWS", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 75 }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6 text-emerald-700" />,
      title: "Specialized Skills",
      skills: [
        { name: "Natural Language Processing", level: 95 },
        { name: "Deep Learning", level: 90 },
        { name: "RAG Systems", level: 90 },
        { name: "Agent Development", level: 85 },
        { name: "Model Fine-tuning", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white scroll-animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI 연구와 개발에 필요한 다양한 기술 스택을 보유하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-emerald-700 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-emerald-600 to-emerald-700 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-emerald-700 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">핵심 전문 분야</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-3">자연어처리</h4>
                <ul className="text-emerald-100 space-y-1">
                  <li>• Text Classification</li>
                  <li>• Named Entity Recognition</li>
                  <li>• Sentiment Analysis</li>
                  <li>• Question Answering</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Agentic AI</h4>
                <ul className="text-emerald-100 space-y-1">
                  <li>• Multi-Agent Systems</li>
                  <li>• Agent Planning</li>
                  <li>• Tool Integration</li>
                  <li>• Autonomous Workflows</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">RAG Systems</h4>
                <ul className="text-emerald-100 space-y-1">
                  <li>• Vector Databases</li>
                  <li>• Embedding Models</li>
                  <li>• Retrieval Strategies</li>
                  <li>• Knowledge Graphs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;