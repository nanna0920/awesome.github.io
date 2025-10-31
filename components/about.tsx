export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide text-balance">
              시대를 초월한
              <br />
              아름다움을 만듭니다
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>ATELIER는 2010년 서울에서 시작된 패션 브랜드로, 시대를 초월한 디자인과 최상의 품질을 추구합니다.</p>
              <p>우리는 단순히 옷을 만드는 것이 아니라, 착용하는 사람의 개성과 가치를 표현하는 매개체를 창조합니다.</p>
              <p>
                지속 가능한 소재 선택부터 윤리적인 생산 과정까지, 모든 단계에서 책임감 있는 선택을 실천하고 있습니다.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] lg:aspect-square">
            <img src="/fashion-atelier-workspace-elegant-minimal.jpg" alt="ATELIER 작업실" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
