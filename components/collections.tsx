import { Button } from "@/components/ui/button"

export function Collections() {
  const collections = [
    {
      title: "2024 봄/여름 컬렉션",
      description: "자연에서 영감을 받은 경쾌하고 우아한 디자인",
      image: "/spring-summer-fashion-collection-elegant.jpg",
    },
    {
      title: "시그니처 라인",
      description: "브랜드의 정체성을 담은 타임리스 피스",
      image: "/signature-fashion-line-minimal-elegant.jpg",
    },
    {
      title: "액세서리 컬렉션",
      description: "스타일을 완성하는 세련된 디테일",
      image: "/luxury-fashion-accessories-minimal.jpg",
    },
  ]

  return (
    <section id="collections" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-wide">컬렉션</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            각 시즌마다 새롭게 선보이는 ATELIER의 컬렉션
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 aspect-[4/5]">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-light mb-2 tracking-wide">{collection.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{collection.description}</p>
              <Button variant="link" className="p-0 h-auto text-foreground">
                자세히 보기 →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
