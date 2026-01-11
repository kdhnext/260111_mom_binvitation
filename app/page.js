import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f0] relative overflow-hidden">
      {/* 좌측 사이드 이미지 */}
      <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 space-y-6 z-10">
        <div className="animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-xl">
            <Image src="/mom2_1.png" alt="캐릭터" width={112} height={112} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="animate-float" style={{ animationDelay: '0.7s' }}>
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-xl ml-4">
            <Image src="/mom2_3.png" alt="캐릭터" width={96} height={96} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* 우측 사이드 이미지 */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 space-y-6 z-10">
        <div className="animate-float" style={{ animationDelay: '0.3s' }}>
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-xl ml-4">
            <Image src="/mom2_2.png" alt="캐릭터" width={96} height={96} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-xl">
            <Image src="/mom2_4.png" alt="캐릭터" width={112} height={112} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="max-w-lg mx-auto px-6 py-12 relative z-20">
        {/* 클래식 카드 */}
        <div className="bg-white classic-border p-8 shadow-2xl animate-fade-in-up">
          {/* 상단 장식 */}
          <div className="text-center mb-6">
            <span className="ornament">&#10053;</span>
            <span className="ornament mx-2">&#10053;</span>
            <span className="ornament">&#10053;</span>
          </div>

          {/* 헤더 */}
          <div className="text-center mb-8">
            <p className="text-[#8b7355] text-sm tracking-widest mb-2">- INVITATION -</p>
            <h1 className="text-3xl font-semibold text-[#5c4033] mb-3">
              생신 축하 초대장
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent mx-auto"></div>
          </div>

          {/* 이름 */}
          <div className="text-center mb-8">
            <h2 className="text-2xl gold-shimmer font-bold mb-2">정애순 여사님</h2>
            <p className="text-[#5c4033]">의 생신을 맞이하여</p>
            <p className="text-[#5c4033]">가족 여러분을 초대합니다</p>
          </div>

          {/* 구분선 */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-[#c9a227]"></div>
            <span className="text-[#c9a227]">&#10022;</span>
            <div className="w-16 h-px bg-[#c9a227]"></div>
          </div>

          {/* 날짜 정보 */}
          <div className="text-center mb-6 bg-[#faf7f0] py-6 px-4">
            <p className="text-[#8b7355] text-sm mb-2">DATE</p>
            <p className="text-2xl font-semibold text-[#5c4033] mb-1">2026년 1월 24일</p>
            <p className="text-lg text-[#c9a227] font-medium">토요일 오후 4시</p>
          </div>

          {/* 장소 정보 */}
          <div className="text-center mb-8 bg-[#faf7f0] py-6 px-4">
            <p className="text-[#8b7355] text-sm mb-2">PLACE</p>
            <p className="text-2xl font-semibold text-[#5c4033] mb-2">봄설 당산점</p>
            <p className="text-[#8b7355] text-sm leading-relaxed">
              서울 영등포구 당산로 205<br/>
              2층 206~208호
            </p>
          </div>

          {/* 캐릭터 갤러리 */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#c9a227] shadow-md">
                <Image src="/mom2_1.png" alt="캐릭터" width={64} height={64} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#c9a227] shadow-md">
                <Image src="/mom2_2.png" alt="캐릭터" width={64} height={64} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#c9a227] shadow-md">
                <Image src="/mom2_3.png" alt="캐릭터" width={64} height={64} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#c9a227] shadow-md">
                <Image src="/mom2_4.png" alt="캐릭터" width={64} height={64} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#c9a227]"></div>
            <span className="text-[#c9a227]">&#10022;</span>
            <div className="w-16 h-px bg-[#c9a227]"></div>
          </div>

          {/* 지도 버튼 */}
          <div className="space-y-3">
            <a
              href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EB%8B%B9%EC%82%B0%EB%A1%9C%20205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-2xl transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              네이버 지도로 보기
            </a>
            <a
              href="https://map.kakao.com/?q=서울 영등포구 당산로 205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-2xl transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              카카오맵으로 보기
            </a>
          </div>

          {/* 하단 장식 */}
          <div className="text-center mt-8">
            <span className="ornament">&#10053;</span>
            <span className="ornament mx-2">&#10053;</span>
            <span className="ornament">&#10053;</span>
          </div>

          {/* 푸터 */}
          <div className="text-center mt-6 text-[#8b7355] text-sm">
            <p>함께해 주셔서 감사합니다</p>
          </div>
        </div>
      </main>
    </div>
  );
}
