"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ShippingInfoPage() {
  const [courier, setCourier] = useState("")
  const [trackingNumber, setTrackingNumber] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [memo, setMemo] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="container mx-auto px-4 lg:px-8 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-2">배송 안내</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          배송 관련 기본 정보를 입력하면 안내를 확인하실 수 있습니다. 실제 조회 기능은 예시이며, 입력하신 정보는 저장되지 않습니다.
        </p>

        <div className="rounded-xl border border-border bg-background/60 p-6 md:p-8 backdrop-blur">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">택배사</label>
                <Input
                  placeholder="예: 우체국, CJ대한통운, 로젠 등"
                  value={courier}
                  onChange={(e) => setCourier(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">운송장 번호</label>
                <Input
                  placeholder="하이픈 없이 입력"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">우편번호</label>
                <Input
                  placeholder="예: 06236"
                  inputMode="numeric"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <div className="hidden md:block" />
            </div>

            <div>
              <label className="mb-2 block text-sm text-muted-foreground">배송 요청사항 (선택)</label>
              <Textarea
                rows={4}
                placeholder="부재 시 문 앞에 두어주세요 등"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button type="submit" className="px-6">안내 확인</Button>
              <Button type="button" variant="outline" onClick={() => {
                setCourier("")
                setTrackingNumber("")
                setPostalCode("")
                setMemo("")
                setSubmitted(false)
              }}>초기화</Button>
            </div>
          </form>

          {submitted && (
            <div className="mt-8 rounded-lg border border-border bg-accent/30 p-5 text-sm leading-relaxed">
              <p className="mb-2">
                입력하신 정보로 배송 안내를 확인했습니다. 실제 배송 조회는 택배사 시스템과 연동되어야 하며, 현재 데모 페이지에서는 요약 안내만 제공합니다.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>택배사: <span className="font-medium">{courier || "미입력"}</span></li>
                <li>운송장 번호: <span className="font-medium">{trackingNumber || "미입력"}</span></li>
                <li>우편번호: <span className="font-medium">{postalCode || "미입력"}</span></li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                보다 정확한 배송 상태는 해당 택배사 웹사이트 또는 고객센터에서 확인해 주세요.
              </p>
            </div>
          )}
        </div>

        <div className="mt-10 text-sm text-muted-foreground space-y-2">
          <p>• 평균 배송기간: 결제 완료 후 1-3 영업일</p>
          <p>• 배송비: 3만원 이상 무료, 미만 3,000원</p>
          <p>• 도서산간 지역은 추가 배송비가 발생할 수 있습니다</p>
        </div>
      </section>
    </main>
  )
}


