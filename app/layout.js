import "./globals.css";

export const metadata = {
  title: "정애순 여사님 생신 초대장",
  description: "정애순 여사님의 생신을 축하합니다",
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
