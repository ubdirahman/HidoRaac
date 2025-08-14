"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bookmark, ArrowLeft, BookOpen, Users, Clock, Trash2 } from "lucide-react"
import Link from "next/link"

export default function BookmarksPage() {
  const [language, setLanguage] = useState<"so" | "en">("so")
  const [bookmarks, setBookmarks] = useState<any[]>([])

  const content = {
    so: {
      title: "Calaamadaha",
      subtitle: "Waxa aad kaydiday",
      empty: "Wax lama kaydin",
      emptyDesc: "Calaamadee waxa aad jeceshahay si aad halkan uga aragto",
      remove: "Ka saar",
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
      title: "Bookmarks",
      subtitle: "Your saved content",
      empty: "No bookmarks yet",
      emptyDesc: "Bookmark your favorite content to see it here",
      remove: "Remove",
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

  // Sample bookmarked content
  const sampleBookmarks = [
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
      dateAdded: "2024-01-15",
    },
    {
      id: "proverb-1",
      type: "proverb",
      category: "culture",
      title: language === "so" ? "Nin walba wuxuu ku faanaa wax uu yaqaan" : "Every person boasts about what they know",
      content: language === "so" ? "Maahmaah ku saabsan aqoonta iyo faanka" : "Proverb about knowledge and pride",
      link: "/culture",
      dateAdded: "2024-01-14",
    },
    {
      id: "leader-1",
      type: "leader",
      category: "history",
      title: language === "so" ? "Sayid Maxamed Cabdille Xasan" : "Sayid Mohamed Abdille Hassan",
      content: language === "so" ? "Hogaamiyihii Daraawiishta" : "Leader of the Dervish movement",
      link: "/history",
      dateAdded: "2024-01-13",
    },
  ]

  useEffect(() => {
    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem("somali-heritage-bookmarks")
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks))
    } else {
      // Set sample bookmarks for demo
      setBookmarks(sampleBookmarks)
      localStorage.setItem("somali-heritage-bookmarks", JSON.stringify(sampleBookmarks))
    }
  }, [language])

  const removeBookmark = (bookmarkId: string) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== bookmarkId)
    setBookmarks(updatedBookmarks)
    localStorage.setItem("somali-heritage-bookmarks", JSON.stringify(updatedBookmarks))
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "religion":
        return <BookOpen className="w-4 h-4" />
      case "culture":
        return <Users className="w-4 h-4" />
      case "history":
        return <Clock className="w-4 h-4" />
      default:
        return <Bookmark className="w-4 h-4" />
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-cyan-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-cyan-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === "so" ? "Dib u noqo" : "Back"}
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center">
                <Bookmark className="w-6 h-6 text-white" />
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
            className="border-cyan-300 text-cyan-700 hover:bg-cyan-50"
          >
            {language === "so" ? "EN" : "SO"}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {bookmarks.length === 0 ? (
          <div className="text-center py-16">
            <Bookmark className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="font-black text-2xl text-gray-900 mb-2">{currentContent.empty}</h3>
            <p className="text-gray-600 mb-8">{currentContent.emptyDesc}</p>
            <Link href="/search">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                {language === "so" ? "Bilow Raadinta" : "Start Searching"}
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">
                {language === "so" ? `${bookmarks.length} calaamad la kaydiray` : `${bookmarks.length} bookmarks saved`}
              </p>
            </div>

            {bookmarks.map((bookmark) => (
              <Card key={bookmark.id} className="hover:shadow-lg transition-all duration-300 border-cyan-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className={getCategoryColor(bookmark.category)}>
                          {getCategoryIcon(bookmark.category)}
                          <span className="ml-1">
                            {currentContent.categories[bookmark.category as keyof typeof currentContent.categories]}
                          </span>
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {currentContent.resultTypes[bookmark.type as keyof typeof currentContent.resultTypes]}
                        </Badge>
                      </div>
                      <h3 className="font-black text-lg text-gray-900 mb-2">{bookmark.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{bookmark.content}</p>
                      <div className="flex items-center gap-3">
                        <Link href={bookmark.link}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-cyan-300 text-cyan-700 hover:bg-cyan-50 bg-transparent"
                          >
                            {language === "so" ? "Fur" : "View"}
                          </Button>
                        </Link>
                        <p className="text-xs text-gray-500">
                          {language === "so" ? "La kaydiray:" : "Saved:"} {bookmark.dateAdded}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => removeBookmark(bookmark.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
