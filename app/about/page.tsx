"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, Heart, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [language, setLanguage] = useState<"so" | "en">("so")

  const content = {
    so: {
      title: "Ku Saabsan",
      creator: "Sameeyaha App-ka",
      name: "Abdirahman Afrah Hassan",
      role: "Full Stack Developer & Sameeyaha App-ka",
      bio: "Waxaan ahay software engineer oo xiisaynaya dhaxalka Soomaaliyeed iyo teknoolajiyada casriga ah. App-kan waxaan u sameeyay si aan u kaydiyo oo u baahiyo dhaqankeenna qaaliga ah, diinteenna, iyo taariikhdeenna.",
      mission: "Ujeedada Iga",
      missionText:
        "Waxaan rajeynayaa in app-kan uu noqdo meel ay dadka Soomaaliyeed ku bartaan dhaxalkooda, ku xoojiyaan aqoontooda diini, kuna fahmaan taariikhda qaaliga ah ee ummadooda.",
      skills: "Xirfadaha Teknoolajiyada",
      contact: "Xiriir",
      thanks: "Mahadsanid",
      thanksText:
        "Mahadsanid adiga oo isticmaalaya app-kan. Waxaan rajeynayaa in uu kuu faa'iideysto barashada dhaxalka Soomaaliyeed.",
      back: "Dib u noqo",
    },
    en: {
      title: "About",
      creator: "App Creator",
      name: "Abdirahman Afrah Hassan",
      role: "Full Stack Developer & App Creator",
      bio: "I am a passionate software engineer dedicated to preserving and sharing Somali heritage through modern technology. I created this app to serve as a comprehensive resource for our rich culture, religion, and history.",
      mission: "My Mission",
      missionText:
        "I aim to make this app a central hub where Somali people can learn about their heritage, strengthen their religious knowledge, and understand the rich history of their nation.",
      skills: "Technical Skills",
      contact: "Contact",
      thanks: "Thank You",
      thanksText:
        "Thank you for using this app. I hope it serves you well in learning about our beautiful Somali heritage.",
      back: "Go Back",
    },
  }

  const currentContent = content[language]

  const skills = ["React & Next.js", "TypeScript", "Node.js", "Mobile Development", "UI/UX Design", "Database Design"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-yellow-200 sticky top-0 z-50">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {currentContent.back}
            </Button>
          </Link>

          <h1 className="font-black text-lg text-gray-900">{currentContent.title}</h1>

          <Button
            onClick={() => setLanguage(language === "so" ? "en" : "so")}
            variant="outline"
            size="sm"
            className="border-yellow-300 text-yellow-700 hover:bg-yellow-50 text-xs px-3"
          >
            {language === "so" ? "EN" : "SO"}
          </Button>
        </div>
      </header>

      <main className="px-4 py-8">
        {/* Creator Profile */}
        <Card className="mb-8 border-yellow-200 bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-br from-yellow-600 to-cyan-600">
              <img
                src="/images/profile-abdirahman.jpg"
                alt="Abdirahman Afrah Hassan"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-black text-2xl text-gray-900 mb-2">{currentContent.name}</h2>
            <p className="text-yellow-600 font-semibold mb-4">{currentContent.role}</p>
            <p className="text-gray-600 leading-relaxed text-sm">{currentContent.bio}</p>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card className="mb-8 border-cyan-200 bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-cyan-600" />
              <h3 className="font-black text-xl text-gray-900">{currentContent.mission}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">{currentContent.missionText}</p>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="mb-8 border-yellow-200 bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-yellow-600" />
              <h3 className="font-black text-xl text-gray-900">{currentContent.skills}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="bg-yellow-50 rounded-lg p-3 text-center">
                  <span className="text-gray-700 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8 border-cyan-200 bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-cyan-600" />
              <h3 className="font-black text-xl text-gray-900">{currentContent.contact}</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 text-sm">abdirahman.afrah@email.com</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Github className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 text-sm">github.com/abdirahman-afrah</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Linkedin className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 text-sm">linkedin.com/in/abdirahman-afrah</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Thank You Message */}
        <Card className="border-yellow-200 bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <h3 className="font-black text-xl text-gray-900 mb-4">{currentContent.thanks}</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">{currentContent.thanksText}</p>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
