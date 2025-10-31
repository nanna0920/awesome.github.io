import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/elegant-fashion-clothing-store-interior-minimal.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide text-balance">
          세련된 스타일과
          <br />
          품질의 만남
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          ATELIER는 시대를 초월한 디자인과 최상의 품질로
          <br className="hidden sm:block" />
          당신의 일상에 특별함을 더합니다
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-foreground hover:bg-white/90 text-base tracking-wide">
            컬렉션 보기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground text-base tracking-wide bg-transparent"
          >
            브랜드 스토리
          </Button>
        </div>
      </div>
    </section>
  )
}
