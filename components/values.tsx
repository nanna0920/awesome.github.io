export function Values() {
  const values = [
    {
      number: "01",
      title: "지속 가능성",
      description: "환경을 생각하는 소재 선택과 생산 과정을 통해 지속 가능한 패션을 실현합니다",
    },
    {
      number: "02",
      title: "장인 정신",
      description: "숙련된 장인들의 손길로 완성되는 제품은 시간이 지나도 변하지 않는 가치를 지닙니다",
    },
    {
      number: "03",
      title: "혁신적 디자인",
      description: "전통과 현대의 조화를 통해 새로운 패션 트렌드를 제시합니다",
    },
  ]

  return (
    <section id="values" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-wide">우리의 가치</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            ATELIER가 추구하는 핵심 가치
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value) => (
            <div key={value.number} className="text-center">
              <div className="text-6xl md:text-7xl font-light text-muted-foreground/30 mb-4">{value.number}</div>
              <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
