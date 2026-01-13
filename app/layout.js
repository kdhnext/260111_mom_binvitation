import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kdhnext.github.io/260111_mom_binvitation"),
  title: "정애순 여사님 생신 초대장",
  description: "2026년 1월 24일 토요일 오후 4시, 인천 서구 가정로 194에서 정애순 여사님의 생신을 축하합니다.",
  openGraph: {
    title: "정애순 여사님 생신 초대장",
    description: "2026년 1월 24일 토요일 오후 4시, 인천 서구 가정로 194",
    url: "https://kdhnext.github.io/260111_mom_binvitation",
    siteName: "생신 초대장",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "정애순 여사님 생신 초대장",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "정애순 여사님 생신 초대장",
    description: "2026년 1월 24일 토요일 오후 4시, 인천 서구 가정로 194",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
