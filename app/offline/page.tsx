"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, ArrowLeft, BookOpen, Users, Clock, Download, Wifi, WifiOff, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function OfflinePage() {
  const [language, setLanguage] = useState<"so" | "en">("so")
  const [isOnline, setIsOnline] = useState(true)
  const [offlineContent, setOfflineContent] = useState<any[]>([])
  const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({})

  const content = {
    so: {
      title: "Qaybta Offline",
      subtitle: "Isticmaal app-ka internet la'aan",
      status: {
        online: "Waxaad ku xiran tahay internet",
        offline: "Internet ma jiro",
      },
      download: {
        title: "Soo dejiso Macluumaadka",
        description: "Soo dejiso qaybaha aad rabto si aad u isticmaasho internet la'aan",
        button: "Soo dejiso",
        downloading: "Waa la soo dejinayaa...",
        completed: "La soo dejiyay",
        failed: "Khalad ayaa dhacay",
      },
      offline: {
        title: "Macluumaadka Offline",
        description: "Waxa aad soo dejisay oo diyaar u ah isticmaalka",
        empty: "Wax lama soo dejin",
        emptyDesc: "Soo dejiso macluumaad si aad u isticmaasho internet la'aan",
      },
      sections: {
        religion: "Diinta",
        culture: "Dhaqanka",
        history: "Taariikhda",
      },
    },
    en: {
      title: "Offline Mode",
      subtitle: "Use the app without internet",
      status: {
        online: "You are connected to the internet",
        offline: "No internet connection",
      },
      download: {
        title: "Download Content",
        description: "Download sections you want to use offline",
        button: "Download",
        downloading: "Downloading...",
        completed: "Downloaded",
        failed: "Download failed",
      },
      offline: {
        title: "Offline Content",
        description: "Your downloaded content ready for offline use",
        empty: "No content downloaded",
        emptyDesc: "Download content to use it offline",
      },
      sections: {
        religion: "Religion",
        culture: "Culture",
        history: "History",
      },
    },
  }

  const currentContent = content[language]

  // Available sections for download
  const availableSections = [
    {
      id: "religion",
      name: currentContent.sections.religion,
      description: language === "so" ? "Qur'aan, Axaadiis iyo Casharro" : "Quran, Hadith and Lessons",
      icon: <BookOpen className="w-6 h-6" />,
      size: "15 MB",
      color: "yellow",
    },
    {
      id: "culture",
      name: currentContent.sections.culture,
      description: language === "so" ? "Maahmaahyo, Gabayo iyo Caadooyin" : "Proverbs, Poetry and Customs",
      icon: <Users className="w-6 h-6" />,
      size: "12 MB",
      color: "cyan",
    },
    {
      id: "history",
      name: currentContent.sections.history,
      description: language === "so" ? "Taariikhda iyo Goobaha" : "History and Historical Sites",
      icon: <Clock className="w-6 h-6" />,
      size: "18 MB",
      color: "yellow",
    },
  ]

  useEffect(() => {
    // Check online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }

    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    // Load offline content from localStorage
    const savedOfflineContent = localStorage.getItem("somali-heritage-offline")
    if (savedOfflineContent) {
      setOfflineContent(JSON.parse(savedOfflineContent))
    }

    return () => {
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [])

  const downloadSection = async (sectionId: string) => {
    setDownloadProgress((prev) => ({ ...prev, [sectionId]: 0 }))

    // Simulate download progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200))
      setDownloadProgress((prev) => ({ ...prev, [sectionId]: i }))
    }

    // Add to offline content
    const section = availableSections.find((s) => s.id === sectionId)
    if (section) {
      const newOfflineContent = [
        ...offlineContent,
        {
          ...section,
          downloadedAt: new Date().toISOString(),
          content: generateSampleContent(sectionId),
        },
      ]
      setOfflineContent(newOfflineContent)
      localStorage.setItem("somali-heritage-offline", JSON.stringify(newOfflineContent))
    }

    // Clear progress
    setTimeout(() => {
      setDownloadProgress((prev) => {
        const newProgress = { ...prev }
        delete newProgress[sectionId]
        return newProgress
      })
    }, 1000)
  }

  const generateSampleContent = (sectionId: string) => {
    // Generate sample offline content based on section
    switch (sectionId) {
      case "religion":
        return [
          { type: "quran", title: "Al-Fatiha", content: "The Opening Chapter" },
          { type: "hadith", title: "Hadith of Goodness", content: "Speak good or remain silent" },
        ]
      case "culture":
        return [
          { type: "proverb", title: "Wisdom Saying", content: "Every person boasts about what they know" },
          { type: "poetry", title: "Love of Country", content: "Patriotic poem by Hadraawi" },
        ]
      case "history":
        return [
          { type: "leader", title: "Sayid Mohamed", content: "Leader of the Dervish movement" },
          { type: "event", title: "Independence", content: "Somalia gained independence in 1960" },
        ]
      default:
        return []
    }
  }

  const removeOfflineContent = (sectionId: string) => {
    const updatedContent = offlineContent.filter((item) => item.id !== sectionId)
    setOfflineContent(updatedContent)
    localStorage.setItem("somali-heritage-offline", JSON.stringify(updatedContent))
  }

  const isDownloaded = (sectionId: string) => {
    return offlineContent.some((item) => item.id === sectionId)
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case "yellow":
        return "border-yellow-300 text-yellow-700 bg-yellow-50"
      case "cyan":
        return "border-cyan-300 text-cyan-700 bg-cyan-50"
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
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-black text-xl text-gray-900">{currentContent.title}</h1>
                <p className="text-sm text-gray-600 font-medium">{currentContent.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Online Status */}
            <div className="flex items-center gap-2">
              {isOnline ? (
                <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                  <Wifi className="w-3 h-3 mr-1" />
                  {language === "so" ? "Online" : "Online"}
                </Badge>
              ) : (
                <Badge variant="outline" className="border-red-300 text-red-700 bg-red-50">
                  <WifiOff className="w-3 h-3 mr-1" />
                  {language === "so" ? "Offline" : "Offline"}
                </Badge>
              )}
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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Connection Status */}
        <Card className={`mb-8 ${isOnline ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              {isOnline ? <Wifi className="w-6 h-6 text-green-600" /> : <WifiOff className="w-6 h-6 text-red-600" />}
              <div>
                <h3 className="font-black text-lg text-gray-900">
                  {isOnline ? currentContent.status.online : currentContent.status.offline}
                </h3>
                <p className="text-sm text-gray-600">
                  {isOnline
                    ? language === "so"
                      ? "Waxaad soo dejisan kartaa macluumaad cusub"
                      : "You can download new content"
                    : language === "so"
                      ? "Isticmaal macluumaadka aad soo dejisay"
                      : "Use your downloaded content"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Section */}
        {isOnline && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.download.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{currentContent.download.description}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {availableSections.map((section) => (
                <Card key={section.id} className="hover:shadow-lg transition-all duration-300 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${section.color}-600 to-${section.color}-700 rounded-lg flex items-center justify-center text-white`}
                        >
                          {section.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-black text-lg text-gray-900">{section.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{section.description}</p>
                          <Badge variant="secondary" className="text-xs">
                            {section.size}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {isDownloaded(section.id) ? (
                          <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                            {currentContent.download.completed}
                          </Badge>
                        ) : downloadProgress[section.id] !== undefined ? (
                          <div className="text-center">
                            <div className="w-16 h-16 relative">
                              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                                <path
                                  className="text-gray-300"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  fill="none"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                  className="text-yellow-600"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeDasharray={`${downloadProgress[section.id]}, 100`}
                                  strokeLinecap="round"
                                  fill="none"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xs font-semibold text-gray-700">
                                  {downloadProgress[section.id]}%
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Button
                            onClick={() => downloadSection(section.id)}
                            size="sm"
                            className="bg-yellow-600 hover:bg-yellow-700 text-white"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            {currentContent.download.button}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Offline Content */}
        <div>
          <div className="text-center mb-8">
            <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.offline.title}</h2>
            <p className="text-lg text-gray-600 mb-4">{currentContent.offline.description}</p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-600 to-yellow-600 mx-auto rounded-full"></div>
          </div>

          {offlineContent.length === 0 ? (
            <div className="text-center py-12">
              <Globe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-black text-xl text-gray-900 mb-2">{currentContent.offline.empty}</h3>
              <p className="text-gray-600">{currentContent.offline.emptyDesc}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {offlineContent.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 border-cyan-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${item.color}-600 to-${item.color}-700 rounded-lg flex items-center justify-center text-white`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-black text-lg text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <p className="text-xs text-gray-500">
                            {language === "so" ? "La soo dejiyay:" : "Downloaded:"}{" "}
                            {new Date(item.downloadedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                          {item.content.length} {language === "so" ? "shay" : "items"}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeOfflineContent(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
