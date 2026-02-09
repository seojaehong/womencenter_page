import React, { useState } from 'react';
import {
  HardHat,
  Cpu,
  Scale,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Mail,
  ExternalLink,
  Check,
  Copy,
  Send,
  AppWindow // 웹메일 아이콘용
} from 'lucide-react';

const GOOGLE_FORM_URL = "https://forms.gle/ZoYnbbLbM5mkwcBd7";
const YEONO_HOMEPAGE_URL = "https://yeono.org/";
const CONTACT_EMAIL = "yeonocenter@naver.com";

const YeonoMasterClass2026 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 모달 및 복사 상태 관리
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openGoogleForm = () => window.open(GOOGLE_FORM_URL, '_blank');
  const openHomepage = () => window.open(YEONO_HOMEPAGE_URL, '_blank');

  // 문의하기 모달 열기
  const handleContactOpen = () => {
    setIsContactModalOpen(true);
    setIsCopied(false);
    setIsMenuOpen(false);
  };

  // 1. 주소 복사
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  // 2. 기본 메일 앱 열기 (Outlook, Mac Mail, Mobile)
  const handleMailTo = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  };

  // 3. 네이버 메일 쓰기 창 바로 열기
  const handleNaverMail = () => {
    window.open(`https://mail.naver.com/write/popup?to=${CONTACT_EMAIL}`, '_blank');
  };

  // 4. 지메일(Gmail) 쓰기 창 바로 열기
  const handleGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-[Pretendard] text-slate-800 selection:bg-purple-200 selection:text-purple-900">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-2 shadow-lg shadow-purple-500/20 group-hover:bg-purple-700 transition-colors">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">여노</span>
              <span className="ml-2 text-sm font-semibold text-slate-500 border-l border-slate-300 pl-2">교육기획위원회</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1 items-center">
              <button onClick={() => scrollToSection('about')} className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-purple-700 hover:bg-slate-100 rounded-lg transition-all">시리즈 소개</button>
              <button onClick={() => scrollToSection('vol1')} className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-purple-700 hover:bg-slate-100 rounded-lg transition-all">Vol.1 건설업</button>
              <button onClick={() => scrollToSection('roadmap')} className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-purple-700 hover:bg-slate-100 rounded-lg transition-all">로드맵</button>
              
              <div className="h-4 w-px bg-slate-300 mx-2"></div>

              <button onClick={openHomepage} className="px-3 py-2 text-sm font-semibold text-slate-500 hover:text-purple-700 transition-colors flex items-center gap-1">
                홈페이지 <ExternalLink size={14} />
              </button>
              <button onClick={handleContactOpen} className="px-3 py-2 text-sm font-semibold text-slate-500 hover:text-purple-700 transition-colors flex items-center gap-1">
                문의하기 <Mail size={14} />
              </button>

              <div className="pl-2">
                <button
                  onClick={openGoogleForm}
                  className="bg-slate-900 hover:bg-purple-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-1 group"
                >
                  수강 신청 <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-purple-700 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full z-50">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">시리즈 소개</button>
              <button onClick={() => scrollToSection('vol1')} className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">Vol.1 건설업</button>
              <button onClick={() => scrollToSection('roadmap')} className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">연간 로드맵</button>
              <div className="border-t border-slate-100 my-2"></div>
              <button onClick={openHomepage} className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-500 hover:bg-slate-50 rounded-lg flex items-center gap-2"><ExternalLink size={16}/> 홈페이지</button>
              <button onClick={handleContactOpen} className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-500 hover:bg-slate-50 rounded-lg flex items-center gap-2"><Mail size={16}/> 문의하기</button>
              <button onClick={openGoogleForm} className="w-full mt-4 bg-purple-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-200">수강 신청하기</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-slate-50 -z-10"></div>
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-purple-700 text-sm font-bold mb-8 border border-purple-100 shadow-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2 animate-pulse"></span>
            2026 여노 회원 역량 강화 프로젝트
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.2] mb-6 tracking-tight">
            기본기를 넘어,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">
              대체 불가능한 전문가로
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed font-medium">
            건설업 신고부터 AI 활용, 조사 심의 실무까지.<br />
            노무사의 성장을 위한 2026년 마스터 클래스가 시작됩니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('vol1')}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Vol.1 건설업 바로가기 <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-slate-200/50"
            >
              연간 커리큘럼 보기
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">사각지대 없는 실무, 여노가 채웁니다</h2>
            <p className="text-lg text-slate-600">어렵고 복잡해서 피했던 영역이 오히려 기회가 됩니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: HardHat, 
                color: "purple", 
                title: "Niche: 틈새 공략", 
                desc: "건설업, 성평등임금공시제 등 누구나 알지만 제대로 알기 힘든 특수 분야를 깊이 있게 파고듭니다." 
              },
              { 
                icon: Cpu, 
                color: "teal", 
                title: "Future: 미래 역량", 
                desc: "AI를 활용한 업무 효율화부터 변화하는 노동 환경에 적응하는 실전 도구를 제공합니다." 
              },
              { 
                icon: Scale, 
                color: "indigo", 
                title: "Core: 핵심 가치", 
                desc: "직장 내 괴롭힘·성희롱 조사 심의 등 여노의 정체성과 직결되는 고유한 전문성을 강화합니다." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-purple-100 hover:bg-white hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group">
                <div className={`w-14 h-14 bg-${item.color}-100 rounded-2xl flex items-center justify-center text-${item.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vol.1 Spotlight */}
      <section id="vol1" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-teal-500/20 text-teal-300 text-sm font-bold rounded-full mb-6 border border-teal-500/30">
                Upcoming · 3월 개강
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                Vol.1 건설업과 4대보험<br />
                <span className="text-slate-400">가장 복잡한 신고 기초 파악</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
                건설 현장의 숨은 조력자인 실무자들의 고민을 해결하고,
                일용직과 노무제공자 관리의 핵심을 꿰뚫습니다.
                이 강의 하나로 4대 보험 신고의 흐름이 보입니다.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  { title: "건설업 구조 이해", desc: "본사 vs 현장 분리 적용의 이유와 실무적용" },
                  { title: "고난도 신고 실무의 기초", desc: "보수총액신고, 근로내용확인신고, 확정정산 대응" },
                  { title: "사각지대 없는 상담", desc: "일용직·노무제공자(특고) 권리 구제 포인트" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="text-teal-400 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <strong className="block text-white text-lg mb-1">{item.title}</strong>
                      <span className="text-slate-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={openGoogleForm} className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2">
                Vol.1 수강신청 바로가기 <ArrowRight className="w-5 h-5"/>
              </button>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700">
                  <div>
                    <span className="text-slate-400 text-sm block mb-1">강사</span>
                    <span className="text-white font-bold text-xl">조다미 노무사</span>
                    <span className="text-teal-400 text-sm font-medium ml-2">교육기획위원장</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-sm block mb-1">일시</span>
                    <span className="text-white font-bold text-lg">2026. 3. 14. (토) 13:00 - 16:00 </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 p-5 rounded-2xl border border-slate-600/50">
                    <span className="text-teal-400 text-xs font-bold block mb-2">Part 1</span>
                    <h4 className="text-white font-bold text-lg">왜 건설업만 유별난가?</h4>
                    <p className="text-slate-300 text-sm mt-1">하도급 구조와 보험료 정산의 기초</p>
                  </div>
                  <div className="bg-teal-500/10 p-5 rounded-2xl border border-teal-500/20">
                    <span className="text-teal-400 text-xs font-bold block mb-2">Part 2 (핵심)</span>
                    <h4 className="text-white font-bold text-lg">실무자가 주도하는 4대 보험</h4>
                    <p className="text-slate-300 text-sm mt-1">돈(보험료)과 사람(일용직) 관리의 A to Z</p>
                  </div>
                  <div className="bg-slate-700/50 p-5 rounded-2xl border border-slate-600/50">
                    <span className="text-teal-400 text-xs font-bold block mb-2">Part 3</span>
                    <h4 className="text-white font-bold text-lg">변화하는 노동, 노무제공자</h4>
                    <p className="text-slate-300 text-sm mt-1">특고 입직 신고와 최신 이슈</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">2026 전문가 역량 강화 로드맵</h2>
            <p className="text-lg text-slate-600">올해 여노와 함께라면 이 모든 것을 마스터할 수 있습니다.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 rounded-full"></div>
            <div className="space-y-16">
              {[
                {
                  id: 1,
                  track: "Track 1 · 상반기",
                  color: "purple",
                  title: "건설업 4대 보험 & 신고 실무",
                  desc: "가장 까다로운 건설 일용직 신고를 통해 노동법의 사각지대를 이해하는 기초 과정",
                  details: ["건설업 본사/현장 분리 적용", "근로내용확인신고 & 보수총액"]
                },
                {
                  id: 2,
                  track: "Track 2 · 5-6월",
                  color: "teal",
                  title: "AI 노무 실무 2.0: 심화편",
                  desc: "단순 소개를 넘어, 실제 업무 시간을 획기적으로 줄여주는 AI 활용 마스터 클래스",
                  details: ["조사보고서 초안 자동 작성", "상담 일지 정리 프롬프트"]
                },
                {
                  id: 3,
                  track: "Track 1 · 8월",
                  color: "indigo",
                  title: "성평등임금공시제 실무",
                  desc: "신입 회원 필수! 차별화된 기업 자문을 위한 ESG 노동 및 공시제 데이터 분석",
                  details: ["공시제 도입 배경 및 지표 해석", "성별 임금 격차 분석 리포팅"]
                },
                {
                  id: 4,
                  track: "Track 3 · 10월 (Main)",
                  color: "slate",
                  title: "괴롭힘·성희롱 조사 심의 전문가",
                  desc: "단순 법리를 넘어 사실확정과 심의위원회 운영까지, 여노의 노하우가 집약된 핵심 과정",
                  details: ["피해자 중심 인터뷰 기법", "2차 가해 없는 조사 및 심의 운영"]
                }
              ].map((item, index) => (
                <div key={item.id} className={`relative flex flex-col lg:flex-row items-center lg:justify-between group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:w-5/12 p-6 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <span className={`inline-block px-3 py-1 bg-${item.color}-100 text-${item.color}-700 text-xs font-bold rounded-lg mb-3`}>{item.track}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 font-medium">{item.desc}</p>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-${item.color}-500 shadow-lg z-10 flex items-center justify-center mb-6 lg:mb-0 hidden lg:flex`}>
                    <span className={`text-${item.color}-600 font-bold`}>{item.id}</span>
                  </div>
                  <div className="lg:w-5/12 w-full p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                    <ul className="space-y-3">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-slate-700 font-medium">
                          <ChevronRight size={18} className={`text-${item.color}-500 mr-2 flex-shrink-0`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="text-slate-900 font-bold text-lg block mb-1">여성노동법률지원센터</span>
              <span className="text-slate-500 font-medium">교육기획위원회 (위원장: 조다미)</span>
              <p className="text-slate-400 text-sm mt-2">Copyright © 2026 YEONO. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={openHomepage} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-sm font-bold transition-colors">
                공식 홈페이지
              </button>
              <button onClick={handleContactOpen} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-sm font-bold transition-colors">
                교육 문의하기
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ▼▼▼ BIG TECH STYLE CONTACT MODAL ▼▼▼ */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsContactModalOpen(false)}></div>
          
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">무엇을 도와드릴까요?</h3>
              <p className="text-purple-100 text-sm mt-1">교육 관련 문의사항을 남겨주세요.</p>
            </div>
            
            <div className="p-6 space-y-4">
              {/* 이메일 주소 표시 */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                <p className="text-sm text-slate-500 mb-1">공식 이메일</p>
                <p className="text-lg font-bold text-slate-800 font-mono tracking-wide">{CONTACT_EMAIL}</p>
              </div>

              {/* 1. 주소 복사 & 기본 앱 */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleCopy}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${isCopied ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-100 hover:border-purple-200 hover:bg-purple-50'}`}
                >
                  {isCopied ? <Check size={24} className="mb-2" /> : <Copy size={24} className="mb-2 text-slate-400" />}
                  <span className="font-bold text-sm">{isCopied ? '복사 완료!' : '주소 복사'}</span>
                </button>

                <button 
                  onClick={handleMailTo}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-slate-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-200"
                >
                  <Send size={24} className="mb-2 text-slate-400" />
                  <span className="font-bold text-sm text-slate-700">메일 앱 열기</span>
                </button>
              </div>
              
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                <div className="relative flex justify-czenter text-xs"><span className="bg-white px-2 text-slate-400">이메일로 문의하기</span></div>
              </div>

              {/* 2. 웹메일 바로가기 (네이버 / 지메일) */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleNaverMail}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#03C75A]/10 text-[#03C75A] hover:bg-[#03C75A]/20 transition-colors font-bold text-sm"
                >
                  <AppWindow size={16} /> 네이버 메일
                </button>
                <button 
                  onClick={handleGmail}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#EA4335]/10 text-[#EA4335] hover:bg-[#EA4335]/20 transition-colors font-bold text-sm"
                >
                  <AppWindow size={16} /> Gmail
                </button>
              </div>

              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="w-full py-3 text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default YeonoMasterClass2026;
