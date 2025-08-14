"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowLeft, BookOpen, Users, Clock, Heart } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const [language, setLanguage] = useState<"so" | "en">("so")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const content = {
    so: {
      title: "Raadin",
      subtitle: "Raadi dhammaan macluumaadka app-ka",
      placeholder: "Qor waxa aad raadinayso...",
      noResults: "Wax lama helin",
      categories: {
        religion: "Diinta",
        culture: "Dhaqanka",
        history: "Taariikhda",
      },
      resultTypes: {
        quran: "Qur'aan",
        hadith: "Xadiis",
        lesson: "Cashar",
        proverb: "Maahmaah",
        poetry: "Gabay",
        custom: "Caado",
        leader: "Hogaamiye",
        event: "Dhacdo",
        site: "Goob",
      },
    },
    en: {
      title: "Search",
      subtitle: "Search all app content",
      placeholder: "Type what you're looking for...",
      noResults: "No results found",
      categories: {
        religion: "Religion",
        culture: "Culture",
        history: "History",
      },
      resultTypes: {
        quran: "Quran",
        hadith: "Hadith",
        lesson: "Lesson",
        proverb: "Proverb",
        poetry: "Poetry",
        custom: "Custom",
        leader: "Leader",
        event: "Event",
        site: "Site",
      },
    },
  }

  const currentContent = content[language]

  // Sample searchable content
  const allContent = [
    // Religion content
    {
      id: "quran-1",
      type: "quran",
      category: "religion",
      title: language === "so" ? "Al-Faatixah" : "The Opening",
      content:
        language === "so"
          ? "Surah Al-Faatixah - Suuradda ugu muhiimsan"
          : "Surah Al-Fatiha - The most important chapter",
      link: "/religion",
    },
    {
      id: "hadith-1",
      type: "hadith",
      category: "religion",
      title: language === "so" ? "Xadiiska Wanaagga" : "Hadith of Goodness",
      content:
        language === "so" ? "Qofkii rumaysta Allaah iyo maalinta dambe" : "Whoever believes in Allah and the Last Day",
      link: "/religion",
    },
    {
      id: "lesson-1",
      type: "lesson",
      category: "religion",
      title: language === "so" ? "Sifaadka Allaah" : "Names of Allah",
      content: language === "so" ? "Casharro ku saabsan sifaadka Allaah" : "Lessons about the attributes of Allah",
      link: "/religion",
    },
    // Culture content
    {
      id: "proverb-1",
      type: "proverb",
      category: "culture",
      title: language === "so" ? "Nin walba wuxuu ku faanaa wax uu yaqaan" : "Every person boasts about what they know",
      content: language === "so" ? "Maahmaah ku saabsan aqoonta iyo faanka" : "Proverb about knowledge and pride",
      link: "/culture",
    },
    {
      id: "poetry-1",
      type: "poetry",
      category: "culture",
      title: language === "so" ? "Jacaylka Dalka" : "Love of Country",
      content: language === "so" ? "Gabay wadani ah oo Hadraawi qoray" : "Patriotic poem by Hadraawi",
      link: "/culture",
    },
    {
      id: "custom-1",
      type: "custom",
      category: "culture",
      title: language === "so" ? "Aroos Soomaaliyeed" : "Somali Wedding",
      content: language === "so" ? "Caadooyinka aroosyada Soomaaliyeed" : "Somali wedding traditions and customs",
      link: "/culture",
    },
    // History content
    {
      id: "leader-1",
      type: "leader",
      category: "history",
      title: language === "so" ? "Sayid Maxamed Cabdille Xasan" : "Sayid Mohamed Abdille Hassan",
      content: language === "so" ? "Hogaamiyihii Daraawiishta" : "Leader of the Dervish movement",
      link: "/history",
    },
    {
      id: "event-1",
      type: "event",
      category: "history",
      title: language === "so" ? "Xorriyadda Soomaaliya" : "Somali Independence",
      content: language === "so" ? "1960 - Maalintii xorriyadda" : "1960 - Independence Day",
      link: "/history",
    },
    {
      id: "site-1",
      type: "site",
      category: "history",
      title: language === "so" ? "Laas Geel" : "Laas Geel",
      content: language === "so" ? "Sawirrada dhagaxa ee ugu da'da weyn" : "Ancient rock art paintings",
      link: "/history",
    },
  ]

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      return
    }

    setIsSearching(true)

    // Simulate search delay
    const searchTimeout = setTimeout(() => {
      const results = allContent.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setSearchResults(results)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(searchTimeout)
  }, [searchQuery, language])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "religion":
        return <BookOpen className="w-4 h-4" />
      case "culture":
        return <Users className="w-4 h-4" />
      case "history":
        return <Clock className="w-4 h-4" />
      default:
        return <Search className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "religion":
        return "border-yellow-300 text-yellow-700 bg-yellow-50"
      case "culture":
        return "border-cyan-300 text-cyan-700 bg-cyan-50"
      case "history":
        return "border-yellow-300 text-yellow-700 bg-yellow-50"
      default:
        return "border-gray-300 text-gray-700 bg-gray-50"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-yellow-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-yellow-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === "so" ? "Dib u noqo" : "Back"}
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-black text-xl text-gray-900">{currentContent.title}</h1>
                <p className="text-sm text-gray-600 font-medium">{currentContent.subtitle}</p>
              </div>
            </div>
          </div>

          <Button
            onClick={() => setLanguage(language === "so" ? "en" : "so")}
            variant="outline"
            size="sm"
            className="border-yellow-300 text-yellow-700 hover:bg-yellow-50"
          >
            {language === "so" ? "EN" : "SO"}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Search Input */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder={currentContent.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-4">
          {isSearching && (
            <div className="text-center py-8">
              <div className="animate-spin w-8 h-8 border-4 border-yellow-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">{language === "so" ? "Waa la raadinayaa..." : "Searching..."}</p>
            </div>
          )}

          {!isSearching && searchQuery && searchResults.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-black text-xl text-gray-900 mb-2">{currentContent.noResults}</h3>
              <p className="text-gray-600">
                {language === "so"
                  ? "Isku day erayyo kale ama hubi qoraalka"
                  : "Try different keywords or check your spelling"}
              </p>
            </div>
          )}

          {!isSearching && searchResults.length > 0 && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                {language === "so"
                  ? `${searchResults.length} natiiijo la helay`
                  : `${searchResults.length} results found`}
              </p>

              {searchResults.map((result) => (
                <Card key={result.id} className="hover:shadow-lg transition-all duration-300 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className={getCategoryColor(result.category)}>
                            {getCategoryIcon(result.category)}
                            <span className="ml-1">
                              {currentContent.categories[result.category as keyof typeof currentContent.categories]}
                            </span>
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {currentContent.resultTypes[result.type as keyof typeof currentContent.resultTypes]}
                          </Badge>
                        </div>
                        <h3 className="font-black text-lg text-gray-900 mb-2">{result.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{result.content}</p>
                        <Link href={result.link}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-yellow-300 text-yellow-700 hover:bg-yellow-50 bg-transparent"
                          >
                            {language === "so" ? "Fur" : "View"}
                          </Button>
                        </Link>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-red-500"
                        onClick={() => {
                          // Add to bookmarks functionality
                          console.log("Bookmark:", result.id)
                        }}
                      >
                        <Heart className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!searchQuery && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-black text-xl text-gray-900 mb-2">
                {language === "so" ? "Bilow Raadinta" : "Start Searching"}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === "so"
                  ? "Raadi Qur'aan, maahmaahyo, taariikhda iyo wax kale"
                  : "Search Quran, proverbs, history and more"}
              </p>

              {/* Quick Search Suggestions */}
              <div className="flex flex-wrap justify-center gap-2">
                {["Qur'aan", "Maahmaahyo", "Taariikhda", "Gabayo"].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(suggestion)}
                    className="border-cyan-300 text-cyan-700 hover:bg-cyan-50"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
