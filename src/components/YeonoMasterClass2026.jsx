import React, { useState } from 'react';
import {
  HardHat,
  Cpu,
  Scale,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// 구글 폼 URL - 실제 URL로 교체하세요
const GOOGLE_FORM_URL = "https://forms.gle/ZoYnbbLbM5mkwcBd7";


const YeonoMasterClass2026 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openGoogleForm = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-50/30 to-slate-100 font-sans text-slate-800">
      {/* Navigation - Liquid Glass */}
      <nav className="fixed w-full z-50 bg-white/40 backdrop-blur-2xl border-b border-white/50 shadow-lg shadow-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-2xl font-bold text-purple-700 tracking-tight">여노</span>
              <span className="ml-2 text-sm font-medium text-slate-500 border-l border-slate-300/50 pl-2">교육기획위원회</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-purple-700 font-medium transition-all duration-300">시리즈 소개</button>
              <button onClick={() => scrollToSection('vol1')} className="text-slate-600 hover:text-purple-700 font-medium transition-all duration-300">Vol.1 건설업</button>
              <button onClick={() => scrollToSection('roadmap')} className="text-slate-600 hover:text-purple-700 font-medium transition-all duration-300">연간 로드맵</button>
              <button
                onClick={openGoogleForm}
                className="bg-purple-600/90 backdrop-blur-sm text-white px-6 py-2.5 rounded-2xl font-medium hover:bg-purple-700/90 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 border border-purple-400/30"
              >
                수강 신청하기
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-purple-700 p-2 rounded-xl bg-white/50 backdrop-blur-sm">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Liquid Glass */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/60 backdrop-blur-2xl border-t border-white/30">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 hover:bg-white/50 hover:text-purple-700 rounded-xl transition-all">시리즈 소개</button>
              <button onClick={() => scrollToSection('vol1')} className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 hover:bg-white/50 hover:text-purple-700 rounded-xl transition-all">Vol.1 건설업</button>
              <button onClick={() => scrollToSection('roadmap')} className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 hover:bg-white/50 hover:text-purple-700 rounded-xl transition-all">연간 로드맵</button>
              <button onClick={openGoogleForm} className="block w-full text-center px-4 py-3 text-base font-medium bg-purple-600/90 text-white rounded-xl mt-2">수강 신청하기</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Enhanced Glass */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-teal-50/30 -z-10"></div>
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/40 to-purple-400/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-200/40 to-cyan-300/20 rounded-full blur-[80px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-5 py-2.5 rounded-2xl bg-white/60 backdrop-blur-xl text-purple-700 text-sm font-semibold mb-8 border border-white/50 shadow-lg shadow-purple-500/10">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
            2026 여노 회원 역량 강화 프로젝트
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            기본기를 넘어,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600">
              대체 불가능한 전문가로
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
            건설업 신고부터 AI 활용, 조사 심의 실무까지.<br />
            노무사의 성장을 위한 2026년 마스터 클래스가 시작됩니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('vol1')}
              className="px-8 py-4 bg-purple-600/90 backdrop-blur-sm text-white rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center border border-purple-400/30"
            >
              Vol.1 건설업 바로가기 <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="px-8 py-4 bg-white/70 backdrop-blur-xl text-slate-700 border border-white/50 rounded-2xl font-bold text-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center shadow-lg shadow-slate-500/10"
            >
              연간 커리큘럼 보기
            </button>
          </div>
        </div>
      </section>

      {/* Series Philosophy (About) - Glass Cards */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-slate-50/50 -z-10"></div>
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-purple-200/30 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-teal-200/30 rounded-full blur-[60px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">사각지대 없는 실무, 여노가 채웁니다</h2>
            <p className="mt-4 text-slate-600">어렵고 복잡해서 피했던 영역이 오히려 기회가 됩니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/50 hover:border-purple-200/50 transition-all duration-500 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/10 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400/80 to-purple-600/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <HardHat size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Niche: 틈새 공략</h3>
              <p className="text-slate-600">건설업, 성평등임금공시제 등 누구나 알지만 제대로 알기 힘든 특수 분야를 깊이 있게 파고듭니다.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/50 hover:border-teal-200/50 transition-all duration-500 shadow-xl shadow-teal-500/5 hover:shadow-2xl hover:shadow-teal-500/10 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400/80 to-teal-600/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                <Cpu size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Future: 미래 역량</h3>
              <p className="text-slate-600">AI를 활용한 업무 효율화부터 변화하는 노동 환경에 적응하는 실전 도구를 제공합니다.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/50 hover:border-indigo-200/50 transition-all duration-500 shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/10 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400/80 to-indigo-600/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                <Scale size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Core: 핵심 가치</h3>
              <p className="text-slate-600">직장 내 괴롭힘·성희롱 조사 심의 등 여노의 정체성과 직결되는 고유한 전문성을 강화합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vol.1 Spotlight Section - Dark Glass */}
      <section id="vol1" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-teal-400/20 backdrop-blur-sm text-teal-300 text-xs font-bold uppercase tracking-wider rounded-xl mb-4 border border-teal-400/30">
                Upcoming · 3월 개강
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                Vol.1 건설업과 4대보험<br />
                <span className="text-slate-400">가장 복잡한 신고 완전 정복</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                건설 현장의 숨은 조력자인 여성 실무자들의 고민을 해결하고,
                일용직과 노무제공자 관리의 핵심을 꿰뚫습니다.
                이 강의 하나로 4대 보험 신고의 흐름이 보입니다.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <CheckCircle2 className="text-teal-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="block text-white">건설업 구조 이해</strong>
                    <span className="text-sm text-slate-400">본사 vs 현장 분리 적용의 이유와 실무적용</span>
                  </div>
                </div>
                <div className="flex items-start bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <CheckCircle2 className="text-teal-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="block text-white">고난도 신고 실무</strong>
                    <span className="text-sm text-slate-400">보수총액신고, 근로내용확인신고, 확정정산 대응</span>
                  </div>
                </div>
                <div className="flex items-start bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <CheckCircle2 className="text-teal-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="block text-white">사각지대 없는 상담</strong>
                    <span className="text-sm text-slate-400">일용직·노무제공자(특고) 권리 구제 포인트</span>
                  </div>
                </div>
              </div>

              <button
                onClick={openGoogleForm}
                className="bg-teal-400/90 backdrop-blur-sm hover:bg-teal-300/90 text-slate-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-teal-500/20 hover:shadow-2xl hover:shadow-teal-500/30 border border-teal-300/30"
              >
                Vol.1 수강신청 바로가기
              </button>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-slate-400 text-sm block">강사</span>
                    <span className="text-white font-bold text-lg">조다미 노무사</span>
                    <span className="text-slate-500 text-sm ml-2">(교육기획위원장)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-sm block">일시</span>
                    <span className="text-white font-bold">2026. 03. OO (토)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <span className="text-teal-400 text-xs font-bold block mb-1">Part 1</span>
                    <h4 className="text-white font-bold">왜 건설업만 유별난가?</h4>
                    <p className="text-slate-400 text-sm mt-1">하도급 구조와 보험료 정산의 기초</p>
                  </div>
                  <div className="bg-teal-400/10 backdrop-blur-sm p-5 rounded-2xl border border-teal-400/30 shadow-lg shadow-teal-500/10">
                    <span className="text-teal-400 text-xs font-bold block mb-1">Part 2 (핵심)</span>
                    <h4 className="text-white font-bold">실무자가 주도하는 4대 보험</h4>
                    <p className="text-slate-400 text-sm mt-1">돈(보험료)과 사람(일용직) 관리의 A to Z</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <span className="text-teal-400 text-xs font-bold block mb-1">Part 3</span>
                    <h4 className="text-white font-bold">변화하는 노동, 노무제공자</h4>
                    <p className="text-slate-400 text-sm mt-1">특고 입직 신고와 최신 이슈</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Roadmap - Glass Timeline */}
      <section id="roadmap" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-purple-50/30 -z-10"></div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-teal-200/30 rounded-full blur-[80px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">2026 전문가 역량 강화 로드맵</h2>
            <p className="mt-4 text-slate-600">올해 여노와 함께라면 이 모든 것을 마스터할 수 있습니다.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 via-teal-200 to-slate-200 rounded-full"></div>

            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative flex flex-col lg:flex-row items-center lg:justify-between group">
                <div className="lg:w-5/12 order-2 lg:order-1 lg:text-right p-6">
                  <span className="inline-block px-4 py-1.5 bg-purple-100/80 backdrop-blur-sm text-purple-700 text-xs font-bold rounded-xl mb-2 border border-purple-200/50">Track 1 · 상반기</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">건설업 4대 보험 & 신고 실무</h3>
                  <p className="text-slate-600">가장 까다로운 건설 일용직 신고를 통해 노동법의 사각지대를 이해하는 기초 과정</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl border-4 border-white shadow-xl shadow-purple-500/30 z-10 flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div className="lg:w-5/12 order-3 lg:order-3 p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-purple-500/5 border border-white/50 group-hover:shadow-2xl group-hover:shadow-purple-500/10 transition-all duration-300">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center"><ChevronRight size={16} className="text-purple-500 mr-2" /> 건설업 본사/현장 분리 적용</li>
                    <li className="flex items-center"><ChevronRight size={16} className="text-purple-500 mr-2" /> 근로내용확인신고 & 보수총액</li>
                  </ul>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative flex flex-col lg:flex-row items-center lg:justify-between group">
                <div className="lg:w-5/12 order-3 lg:order-1 p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-teal-500/5 border border-white/50 group-hover:shadow-2xl group-hover:shadow-teal-500/10 transition-all duration-300">
                   <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center"><ChevronRight size={16} className="text-teal-500 mr-2" /> 조사보고서 초안 자동 작성</li>
                    <li className="flex items-center"><ChevronRight size={16} className="text-teal-500 mr-2" /> 상담 일지 정리 프롬프트</li>
                  </ul>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl border-4 border-white shadow-xl shadow-teal-500/30 z-10 flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div className="lg:w-5/12 order-2 lg:order-3 p-6">
                  <span className="inline-block px-4 py-1.5 bg-teal-100/80 backdrop-blur-sm text-teal-700 text-xs font-bold rounded-xl mb-2 border border-teal-200/50">Track 2 · 5-6월</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">AI 노무 실무 2.0: 심화편</h3>
                  <p className="text-slate-600">단순 소개를 넘어, 실제 업무 시간을 획기적으로 줄여주는 AI 활용 마스터 클래스</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex flex-col lg:flex-row items-center lg:justify-between group">
                <div className="lg:w-5/12 order-2 lg:order-1 lg:text-right p-6">
                  <span className="inline-block px-4 py-1.5 bg-indigo-100/80 backdrop-blur-sm text-indigo-700 text-xs font-bold rounded-xl mb-2 border border-indigo-200/50">Track 1 · 8월</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">성평등임금공시제 실무</h3>
                  <p className="text-slate-600">신입 회원 필수! 차별화된 기업 자문을 위한 ESG 노동 및 공시제 데이터 분석</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-2xl border-4 border-white shadow-xl shadow-indigo-500/30 z-10 flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div className="lg:w-5/12 order-3 lg:order-3 p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-indigo-500/5 border border-white/50 group-hover:shadow-2xl group-hover:shadow-indigo-500/10 transition-all duration-300">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center"><ChevronRight size={16} className="text-indigo-500 mr-2" /> 공시제 도입 배경 및 지표 해석</li>
                    <li className="flex items-center"><ChevronRight size={16} className="text-indigo-500 mr-2" /> 성별 임금 격차 분석 리포팅</li>
                  </ul>
                </div>
              </div>

               {/* Item 4 */}
               <div className="relative flex flex-col lg:flex-row items-center lg:justify-between group">
                <div className="lg:w-5/12 order-3 lg:order-1 p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-500/5 border border-white/50 group-hover:shadow-2xl group-hover:shadow-slate-500/10 transition-all duration-300">
                   <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center"><ChevronRight size={16} className="text-slate-500 mr-2" /> 피해자 중심 인터뷰 기법</li>
                    <li className="flex items-center"><ChevronRight size={16} className="text-slate-500 mr-2" /> 2차 가해 없는 조사 및 심의 운영</li>
                  </ul>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl border-4 border-white shadow-xl shadow-slate-500/30 z-10 flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div className="lg:w-5/12 order-2 lg:order-3 p-6">
                  <span className="inline-block px-4 py-1.5 bg-slate-200/80 backdrop-blur-sm text-slate-700 text-xs font-bold rounded-xl mb-2 border border-slate-300/50">Track 3 · 10월 (Main)</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">괴롭힘·성희롱 조사 심의 전문가</h3>
                  <p className="text-slate-600">단순 법리를 넘어 사실확정과 심의위원회 운영까지, 여노의 노하우가 집약된 핵심 과정</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Glass */}
      <section className="relative py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 -z-10"></div>
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px]"></div>

        <div className="max-w-4xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-6">지금, 여노와 함께 성장하세요</h2>
          <p className="text-purple-200 mb-10 text-lg leading-relaxed">
            2026년, 당신의 전문성은 더 깊어지고 시야는 더 넓어질 것입니다.<br />
            교육기획위원회가 준비한 첫 번째 강의를 놓치지 마세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={openGoogleForm}
              className="bg-white/90 backdrop-blur-sm text-purple-900 font-bold py-4 px-8 rounded-2xl hover:bg-white transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-2xl border border-white/50"
            >
              Vol.1 건설업 수강신청
            </button>
            <button
              onClick={openGoogleForm}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              교육 알림 신청하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Dark Glass */}
      <footer className="relative py-12 text-slate-400 text-sm overflow-hidden">
        <div className="absolute inset-0 bg-slate-950 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-slate-200 font-bold text-lg block mb-1">여성노동법률지원센터</span>
            <span>교육기획위원회 (위원장: 조다미)</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-300">홈페이지</a>
            <a href="#" className="hover:text-white transition-colors duration-300">문의하기</a>
            <a href="#" className="hover:text-white transition-colors duration-300">회원가입</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YeonoMasterClass2026;
