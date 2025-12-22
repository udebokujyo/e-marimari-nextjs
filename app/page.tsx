"use client";
import React, { useState } from 'react';
import { Heart, Instagram, Twitter, Facebook, Menu, X, ArrowRight } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // TypeScript用に型注釈 (: React.FormEvent) を追加
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // 送信処理のシミュレーション
    setTimeout(() => {
      setFormStatus('success');
      alert('送信完了しました！（デモ）');
      setFormStatus('idle');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-[#252a34] font-rounded">
      {/* フォント設定 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800&display=swap');
        .font-rounded { font-family: 'M PLUS Rounded 1c', sans-serif; }
      `}</style>

      {/* --- Header --- */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-[#08d9d6]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold text-[#ff2e63] tracking-wider hover:opacity-80 transition">
            {/* size={28} -> w-7 h-7 (28px) */}
            <Heart className="fill-current w-7 h-7" />
            <span>e-marimari</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-lg">
            <a href="#news" className="hover:text-[#ff2e63] transition">NEWS</a>
            <a href="#blog" className="hover:text-[#ff2e63] transition">BLOG</a>
            <a href="#contact" className="hover:text-[#ff2e63] transition">CONTACT</a>
            <div className="flex gap-4 ml-4 border-l-2 border-gray-200 pl-4">
              {/* size={24} -> w-6 h-6 (24px) */}
              <a href="#" className="hover:text-[#08d9d6] hover:scale-110 transition duration-300"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-[#08d9d6] hover:scale-110 transition duration-300"><Twitter className="w-6 h-6" /></a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#ff2e63]" onClick={toggleMenu}>
            {/* size={32} -> w-8 h-8 (32px) */}
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 absolute w-full shadow-lg">
            <nav className="flex flex-col gap-4 font-bold text-center">
              <a href="#news" onClick={toggleMenu} className="py-2 hover:bg-gray-50 rounded text-[#ff2e63]">NEWS</a>
              <a href="#blog" onClick={toggleMenu} className="py-2 hover:bg-gray-50 rounded text-[#ff2e63]">BLOG</a>
              <a href="#contact" onClick={toggleMenu} className="py-2 hover:bg-gray-50 rounded text-[#ff2e63]">CONTACT</a>
              <div className="flex justify-center gap-6 pt-2">
                <a href="#"><Instagram className="text-gray-500 w-6 h-6" /></a>
                <a href="#"><Twitter className="text-gray-500 w-6 h-6" /></a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* --- Hero Section --- */}
      <section className="bg-[#ff2e63] text-white pt-20 pb-24 text-center rounded-b-[40px] md:rounded-b-[60px] shadow-lg relative overflow-hidden">
        {/* 装飾用サークル */}
        <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#08d9d6] opacity-30 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
            Create Your <br className="md:hidden"/>"Kawaii" Future!
          </h1>
          <p className="text-lg md:text-2xl font-bold mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            e-marimariは、あなたのビジネスと日常に<br/>
            ビビッドな彩りを加えるパートナーです。
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-white text-[#ff2e63] px-10 py-4 rounded-full font-extrabold text-lg shadow-[0_4px_0_#08d9d6] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none"
          >
            お問い合わせはこちら
            {/* size={20} -> w-5 h-5 (20px) */}
            <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </a>
        </div>
      </section>

      {/* --- Blog Section --- */}
      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ff2e63] inline-block relative">
              Latest Blog
              <span className="block w-full h-2 bg-[#08d9d6] mt-2 rounded-full opacity-60"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Item 1 */}
            <article className="bg-white border-2 border-[#08d9d6] rounded-2xl p-6 shadow-[5px_5px_0_#08d9d6] hover:shadow-[8px_8px_0_#ff2e63] hover:border-[#ff2e63] hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="text-sm font-bold text-gray-400 mb-2">2025.12.18</div>
              <h3 className="text-xl font-bold text-[#ff2e63] mb-3 group-hover:underline">ウェブサイトをリニューアルしました！</h3>
              <p className="text-sm leading-relaxed text-gray-600">e-marimariの公式サイトが新しくなりました。よりかわいく、使いやすく進化しています。</p>
            </article>

            {/* Blog Item 2 */}
            <article className="bg-white border-2 border-[#08d9d6] rounded-2xl p-6 shadow-[5px_5px_0_#08d9d6] hover:shadow-[8px_8px_0_#ff2e63] hover:border-[#ff2e63] hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="text-sm font-bold text-gray-400 mb-2">2025.12.15</div>
              <h3 className="text-xl font-bold text-[#ff2e63] mb-3 group-hover:underline">新しいプロジェクトが始動します</h3>
              <p className="text-sm leading-relaxed text-gray-600">来春に向けて、ワクワクするような新サービスの準備を進めています。お楽しみに！</p>
            </article>

            {/* Blog Item 3 */}
            <article className="bg-white border-2 border-[#08d9d6] rounded-2xl p-6 shadow-[5px_5px_0_#08d9d6] hover:shadow-[8px_8px_0_#ff2e63] hover:border-[#ff2e63] hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="text-sm font-bold text-gray-400 mb-2">2025.12.10</div>
              <h3 className="text-xl font-bold text-[#ff2e63] mb-3 group-hover:underline">オフィスにかわいい観葉植物が届きました</h3>
              <p className="text-sm leading-relaxed text-gray-600">オフィスの雰囲気が一気に明るくなりました。緑があると仕事も捗りますね。</p>
            </article>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 px-4 bg-[#fff0f5] mb-12 rounded-[40px] mx-4 md:mx-auto max-w-6xl">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ff2e63] inline-block relative">
              Contact Us
              <span className="block w-full h-2 bg-[#08d9d6] mt-2 rounded-full opacity-60"></span>
            </h2>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block font-bold text-[#ff2e63] mb-2">お名前</label>
                <input 
                  type="text" 
                  placeholder="例：まりまり 太郎" 
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#08d9d6] focus:bg-[#f0ffff] transition"
                />
              </div>
              <div>
                <label className="block font-bold text-[#ff2e63] mb-2">メールアドレス</label>
                <input 
                  type="email" 
                  placeholder="例：info@e-marimari.com" 
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#08d9d6] focus:bg-[#f0ffff] transition"
                />
              </div>
              <div>
                <label className="block font-bold text-[#ff2e63] mb-2">お問い合わせ内容</label>
                <textarea 
                  // 修正箇所: rows="5" -> rows={5} (TypeScriptでは数値型が必要)
                  rows={5}
                  placeholder="ご自由にご記入ください" 
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#08d9d6] focus:bg-[#f0ffff] transition"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full bg-[#ff2e63] text-white font-bold text-xl py-4 rounded-full shadow-[0_4px_0_#c70039] hover:opacity-90 active:shadow-none active:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? '送信中...' : '送信する'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#252a34] text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 mb-8">
            {/* Footer icons: size={28} -> w-7 h-7 (28px) */}
            <a href="#" className="hover:text-[#08d9d6] hover:scale-125 transition duration-300"><Instagram className="w-7 h-7" /></a>
            <a href="#" className="hover:text-[#08d9d6] hover:scale-125 transition duration-300"><Twitter className="w-7 h-7" /></a>
            <a href="#" className="hover:text-[#08d9d6] hover:scale-125 transition duration-300"><Facebook className="w-7 h-7" /></a>
          </div>
          <p className="font-bold opacity-80">&copy; 2025 e-marimari Inc. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;