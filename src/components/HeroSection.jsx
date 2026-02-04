import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");
  const currentCard = floatingCards[activeTab];

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
      0;
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,346,0.15),transparent 40%)`,
        }}
      />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto text-center lg:text-center relative w-full ">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 text-center lg:text-left lg:gap-12 relative">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300">
                Introducing CodeFlex AI
              </span>
            </div>
            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Code Faster
              </span>
              <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Build Better
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                With CodeFlex AI
              </span>
            </h1>
            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
              Accelerate your development workflow with intelligent code
              completion, automated testing, and smart debugging. Ship
              production-ready code 10x faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className=" group cursor-pointer flex items-center justify-center space-x-2 font-semibold bg-gradient-to-b from-blue-600 to-blue-400 py-3 px-6 sm:text-base sm:py-4 rounded-lg transition-all duration-300 hover:scale-102">
                <span>Start Coding Free</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className=" group cursor-pointer flex items-center justify-center space-x-2 font-semibold backdrop-blur-sm border-white/10 bg-white/5 py-3 px-6 sm:text-base sm:py-4 rounded-lg transition-all duration-300 hover:bg-white/10">
                <div className="bg-white/10 p-2 rounded-full group-h duration-300 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          <div className="relative order-2 w-full">
            <div className="relative border bg-white/5 border-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl w-full p-3 sm:p-4 shadow-2xl">
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">
                {/* IDE HEADER */}
                <div className="flex items-center justify-between py-2 px-3 sm:px-4 sm:py-3 bg-white/5 border-b backdrop-blur-sm border-white/10">
                  <div className="flex space-x-2 items-center">
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      CodeFlex AI
                    </span>
                  </div>
                  <ChevronDown className="text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("App.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "App.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"} text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      App.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Hero.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Hero.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"} text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      Hero.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Navbar.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Navbar.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"} text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      Navbar.jsx
                    </button>
                  </div>
                  <div className="relative overflow-hidden flex-grow">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHeight: "1.4",
                        height: "100%",
                        border: "solid 1px #3c3c3c",
                        textAlign : "left",
                      }}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div
                className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 p-4 rounded-xl backdrop-blur-xl border-white/20 shadow-2xl ${currentCard.bgColor} `}
              >
                <div className="flex space-x-2 items-center mb-2">
                  <div
                    className={`w-6 h-6 ${currentCard.iconColor} flex items-center justify-center text-sm font-bold`}
                  >
                    {currentCard.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${currentCard.textColor}`}
                  >
                    {currentCard.title}
                  </span>
                </div>
                <div
                  className={`text-sm text-left ${currentCard.contentColor}`}
                >
                  {currentCard.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
