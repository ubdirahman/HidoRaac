"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Clock, Search, Bookmark, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [language, setLanguage] = useState<"so" | "en">("so")

  const content = {
    so: {
      title: "Dhaxalka Soomaaliyeed",
      subtitle: "Baro Qur'aanka, Dhaqanka iyo Taariikhda",
      welcome: "Ku soo dhawoow bogga dhaxalka Soomaaliyeed",
      sections: {
        religion: {
          title: "Diinta",
          description: "Qur'aan, Axaadiis iyo Casharro Diini ah",
        },
        culture: {
          title: "Dhaqanka",
          description: "Maahmaahyo, Gabayo iyo Caadooyin",
        },
        history: {
          title: "Taariikhda",
          description: "Taariikhda Soomaaliyeed iyo Goobaha Muhiimka ah",
        },
      },
      features: {
        search: "Raadin",
        bookmark: "Calaamadee",
        offline: "Offline",
      },
    },
    en: {
      title: "Somali Heritage",
      subtitle: "Explore the Rich Tapestry of Somali Culture",
      welcome: "Welcome to the Somali Heritage App",
      sections: {
        religion: {
          title: "Religion",
          description: "Quran, Hadith and Islamic Teachings",
        },
        culture: {
          title: "Culture",
          description: "Proverbs, Poetry and Traditions",
        },
        history: {
          title: "History",
          description: "Somali History and Historical Sites",
        },
      },
      features: {
        search: "Search",
        bookmark: "Bookmark",
        offline: "Offline",
      },
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-yellow-200 sticky top-0 z-50">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-black text-lg text-gray-900">{currentContent.title}</h1>
              <p className="text-xs text-gray-600 font-medium">{currentContent.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              onClick={() => setLanguage(language === "so" ? "en" : "so")}
              variant="outline"
              size="sm"
              className="border-yellow-300 text-yellow-700 hover:bg-yellow-50 text-xs px-3"
            >
              {language === "so" ? "EN" : "SO"}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="font-black text-2xl text-gray-900 mb-4 leading-tight">{currentContent.welcome}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Sections */}
        <div className="space-y-6 mb-12">
          {/* Religion Section */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-yellow-200 hover:border-yellow-300 bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">{currentContent.sections.religion.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {currentContent.sections.religion.description}
              </p>
              <Link href="/religion">
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold">
                  {language === "so" ? "Fur" : "Explore"}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Culture Section */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-cyan-200 hover:border-cyan-300 bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">{currentContent.sections.culture.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {currentContent.sections.culture.description}
              </p>
              <Link href="/culture">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
                  {language === "so" ? "Fur" : "Explore"}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* History Section */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-yellow-200 hover:border-yellow-300 bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">{currentContent.sections.history.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {currentContent.sections.history.description}
              </p>
              <Link href="/history">
                <Button className="w-full bg-gradient-to-r from-yellow-600 to-cyan-600 hover:from-yellow-700 hover:to-cyan-700 text-white font-semibold">
                  {language === "so" ? "Fur" : "Explore"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200">
          <h3 className="font-black text-xl text-gray-900 mb-6 text-center">
            {language === "so" ? "Faa'iidooyin Kale" : "Additional Features"}
          </h3>
          <div className="space-y-4">
            <Link href="/search">
              <div className="text-center hover:bg-yellow-50 p-4 rounded-lg transition-colors cursor-pointer">
                <Search className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">{currentContent.features.search}</h4>
                <p className="text-xs text-gray-600">
                  {language === "so" ? "Raadi macluumaad kasta" : "Find any content quickly"}
                </p>
              </div>
            </Link>
            <Link href="/bookmarks">
              <div className="text-center hover:bg-cyan-50 p-4 rounded-lg transition-colors cursor-pointer">
                <Bookmark className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">{currentContent.features.bookmark}</h4>
                <p className="text-xs text-gray-600">
                  {language === "so" ? "Kaydi waxa aad jeceshahay" : "Save your favorite content"}
                </p>
              </div>
            </Link>
            <Link href="/offline">
              <div className="text-center hover:bg-yellow-50 p-4 rounded-lg transition-colors cursor-pointer">
                <Globe className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">{currentContent.features.offline}</h4>
                <p className="text-xs text-gray-600">
                  {language === "so" ? "Isticmaal internet la'aan" : "Access content offline"}
                </p>
              </div>
            </Link>
            <Link href="/about">
              <div className="text-center hover:bg-yellow-50 p-4 rounded-lg transition-colors cursor-pointer">
                <Users className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">{language === "so" ? "Ku Saabsan" : "About"}</h4>
                <p className="text-xs text-gray-600">
                  {language === "so" ? "Baro sameeyaha app-ka" : "Learn about the app creator"}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="px-4 text-center">
          <p className="text-gray-400 text-xs mb-2">
            {language === "so"
              ? "© 2024 Dhaxalka Soomaaliyeed. Dhammaan xuquuqda way dhowran yihiin."
              : "© 2024 Somali Heritage. All rights reserved."}
          </p>
          <p className="text-gray-500 text-xs">
            {language === "so" ? "Waxaa sameeyay Abdirahman Afrah Hassan" : "Created by Abdirahman Afrah Hassan"}
          </p>
        </div>
      </footer>
    </div>
  )
}
