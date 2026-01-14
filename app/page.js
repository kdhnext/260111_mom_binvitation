import Image from "next/image";
import part1 from "../public/part1.png";
import part2 from "../public/part2.png";
import part3 from "../public/part3.png";
import part4 from "../public/part4.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f0] relative overflow-hidden">
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
            <p className="text-[#8b7355] text-md tracking-widest mb-2">
              - INVITATION -
            </p>
            <h1 className="text-3xl font-semibold text-[#5c4033] mb-3">
              생신 축하 초대장
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent mx-auto"></div>
          </div>

          {/* 이름 */}
          <div className="text-center mb-8">
            <h2 className="text-3xl gold-shimmer font-bold mb-2">
              정애순 여사님
            </h2>
            <p className="text-[#5c4033]">생신을 맞이하여</p>
            <p className="text-[#5c4033]">사랑하는 가족 여러분을</p>
            <p className="text-[#5c4033]">따뜻한 자리에 초대합니다</p>
          </div>

          {/* 구분선 */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-[#c9a227]"></div>
            <span className="text-[#c9a227]">&#10022;</span>
            <div className="w-16 h-px bg-[#c9a227]"></div>
          </div>

          {/* 날짜 정보 */}
          <div className="text-center mb-6 bg-[#faf7f0] py-6 px-4">
            <p className="text-[#8b7355] text-lg mb-2">DATE</p>
            <p className="text-xl font-semibold text-[#5c4033] mb-1">
              2026년 1월 24일
            </p>
            <p className="text-lg text-[#c9a227] font-medium">
              토요일 오후 4시
            </p>
          </div>

          {/* 장소 정보 */}
          <div className="text-center mb-8 bg-[#faf7f0] py-6 px-4">
            <p className="text-[#8b7355] text-lg mb-2">PLACE</p>
            <p className="text-xl font-semibold text-[#5c4033]">
              고흥수산
            </p>
            <p className="text-lg text-[#5c4033]">
              서울 영등포구 당산로45길 7 2층
            </p>
          </div>

          {/* 캐릭터 갤러리 2x2 */}
          <div className="grid grid-cols-2 gap-6 mb-8 max-w-xs mx-auto">
            <div
              className="animate-float flex justify-center"
              style={{ animationDelay: "0s" }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-lg">
                <Image
                  src={part1}
                  alt="캐릭터"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className="animate-float flex justify-center"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-lg">
                <Image
                  src={part2}
                  alt="캐릭터"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className="animate-float flex justify-center"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-lg">
                <Image
                  src={part3}
                  alt="캐릭터"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className="animate-float flex justify-center"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-lg">
                <Image
                  src={part4}
                  alt="캐릭터"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
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
              href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EB%8B%B9%EC%82%B0%EB%A1%9C45%EA%B8%B8%207"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-2xl transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              네이버 지도로 보기
            </a>
            <a
              href="https://map.kakao.com/?q=서울 영등포구 당산로45길 7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-2xl transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
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
          <div className="text-center mt-6 text-[#8b7355] text-md">
            <p>함께해 주셔서 감사합니다</p>
          </div>
        </div>
      </main>
    </div>
  );
}
