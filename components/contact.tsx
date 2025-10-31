"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-wide">문의하기</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              궁금하신 점이나 협업 제안이 있으시다면
              <br className="hidden sm:block" />
              언제든지 연락 주시기 바랍니다
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="이름"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="이메일"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="메시지"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[150px] resize-none"
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full text-base tracking-wide">
              메시지 보내기
            </Button>
          </form>

          <div className="mt-12 pt-12 border-t border-border text-center space-y-2">
            <p className="text-muted-foreground">
              <strong className="text-foreground">이메일:</strong> contact@atelier.com
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">전화:</strong> +82 2-1234-5678
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">주소:</strong> 서울특별시 강남구 청담동 123-45
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
