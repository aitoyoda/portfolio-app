import Image from "next/image";


export default function Home() {
  return (
    <main className="bg-[rgb(235,228,216)] overflow-hidden max-h-[100vh]">
      <h1 className="text-center pt-[10%] text-[rgb(159,125,119)] text-8xl font-[Caveat]">AI TOYODA</h1>
      <h2 className="text-center text-5xl font-[Caveat]"><p className="typing-text">It is Software Developer Portfolio site</p></h2>
      <div className="flex justify-center ma">
        <Image
          src="/images/home_img.png" // 画像のパス
          alt="My Image" // 画像の代替テキスト
          width={500} // 画像の幅
          height={500} // 画像の高さ
        />
      </div>
    </main>
  );
}
