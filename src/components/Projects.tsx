import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Multi-Agent RAG System",
      description: "여러 AI 에이전트가 협업하는 검색 증강 생성 시스템. 복잡한 질의에 대해 각 에이전트가 전문 분야별로 정보를 검색하고 종합하여 답변을 생성합니다.",
      tech: ["Python", "LangChain", "ChromaDB", "OpenAI API", "FastAPI"],
      github: "https://github.com/example/multi-agent-rag",
      demo: "https://demo.example.com",
      featured: true,
      image: "https://images.pexels.com/photos/8636606/pexels-photo-8636606.jpeg"
    },
    {
      title: "Korean NLP Preprocessing Pipeline",
      description: "한국어 자연어처리를 위한 전처리 파이프라인. 형태소 분석, 개체명 인식, 감정 분석 등을 포함한 종합적인 한국어 텍스트 처리 도구입니다.",
      tech: ["Python", "KoNLPy", "PyTorch", "Transformers", "Docker"],
      github: "https://github.com/example/korean-nlp-pipeline",
      demo: null,
      featured: true,
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg"
    },
    {
      title: "Intelligent Document Q&A",
      description: "문서 내용을 이해하고 질의응답하는 AI 시스템. PDF, Word 등 다양한 문서 형식을 지원하며, 문맥을 고려한 정확한 답변을 제공합니다.",
      tech: ["Python", "Streamlit", "FAISS", "Sentence-BERT"],
      github: "https://github.com/example/doc-qa-system",
      demo: "https://doc-qa.streamlit.app",
      featured: false,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      title: "AI Code Review Assistant",
      description: "코드 리뷰를 자동화하는 AI 도구. 버그 탐지, 코드 품질 평가, 개선 제안 등을 제공하여 개발자의 생산성을 향상시킵니다.",
      tech: ["Python", "CodeBERT", "GitHub API", "Flask"],
      github: "https://github.com/example/ai-code-reviewer",
      demo: null,
      featured: false,
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 scroll-animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            실제 문제 해결을 위한 AI 시스템과 도구들을 개발하고 있습니다.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Star className="w-6 h-6 text-yellow-500 mr-3" />
            주요 프로젝트
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-emerald-700 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-emerald-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">기타 프로젝트</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-emerald-700 transition-colors"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-emerald-700 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;