"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Heart, Sparkles, ArrowLeft, BookOpen, Music, Crown, Gift } from "lucide-react"
import Link from "next/link"

export default function CulturePage() {
  const [language, setLanguage] = useState<"so" | "en">("so")

  const content = {
    so: {
      title: "Dhaqanka Soomaaliyeed",
      subtitle: "Maahmaahyo, Gabayo iyo Caadooyin",
      tabs: {
        proverbs: "Maahmaahyo",
        poetry: "Gabayo",
        customs: "Caadooyin",
        traditions: "Dhaqamada",
      },
      sections: {
        proverbs: {
          title: "Maahmaahyada Soomaaliyeed",
          subtitle: "Xigmadda Dadkeenna",
        },
        poetry: {
          title: "Gabayada iyo Suugaanta",
          subtitle: "Farshaxanka Afkeenna",
        },
        customs: {
          title: "Caadooyinka Dhaqameed",
          subtitle: "Hidaha iyo Dhaqamada",
        },
        traditions: {
          title: "Dhaqamada Asalka ah",
          subtitle: "Hidaha Qaaliga ah",
        },
      },
    },
    en: {
      title: "Somali Culture",
      subtitle: "Proverbs, Poetry and Traditions",
      tabs: {
        proverbs: "Proverbs",
        poetry: "Poetry",
        customs: "Customs",
        traditions: "Traditions",
      },
      sections: {
        proverbs: {
          title: "Somali Proverbs",
          subtitle: "Wisdom of Our People",
        },
        poetry: {
          title: "Poetry and Literature",
          subtitle: "The Art of Our Language",
        },
        customs: {
          title: "Cultural Customs",
          subtitle: "Heritage and Traditions",
        },
        traditions: {
          title: "Ancient Traditions",
          subtitle: "Sacred Heritage",
        },
      },
    },
  }

  const currentContent = content[language]

  // Sample proverbs data
  const proverbs = [
    {
      id: 1,
      somali: "Nin walba wuxuu ku faanaa wax uu yaqaan.",
      english: "Every person boasts about what they know.",
      meaning:
        language === "so"
          ? "Qof walba wuxuu ku faanaa aqoonta uu leeyahay, laakiin waa in uu si hoose u sheego."
          : "Everyone takes pride in their knowledge, but should express it with humility.",
      category: language === "so" ? "Aqoon" : "Knowledge",
    },
    {
      id: 2,
      somali: "Geed la jaray dabaysha ayaa lagu gartaa.",
      english: "A fallen tree is known by its sound.",
      meaning:
        language === "so"
          ? "Markii qof weyn dhinto ama wax weyn dhaco, dadka oo dhan way ogaadaan."
          : "When something significant happens or someone important passes, everyone knows about it.",
      category: language === "so" ? "Bulshada" : "Society",
    },
    {
      id: 3,
      somali: "Caano la cabbo kama dhadhamin.",
      english: "Milk that is drunk does not spill.",
      meaning:
        language === "so"
          ? "Wixii la isticmaalo ama la faa'iidaysto kama lumo."
          : "What is used or benefited from is not wasted.",
      category: language === "so" ? "Faa'iido" : "Benefit",
    },
  ]

  // Sample poetry data
  const poems = [
    {
      id: 1,
      title: language === "so" ? "Jacaylka Dalka" : "Love of Country",
      author: "Maxamed Ibraahim Warsame 'Hadraawi'",
      excerpt:
        language === "so"
          ? "Dalkaygii hooyo, dhulkaygii aabbaha ahaa\nDhalatay oo ku koray, dhiigaygana ku daadshay"
          : "My motherland, the soil of my fathers\nWhere I was born and raised, where my blood was shed",
      type: language === "so" ? "Gabay Wadani" : "Patriotic Poetry",
      year: "1975",
    },
    {
      id: 2,
      title: language === "so" ? "Barwaaqada Beeraha" : "The Abundance of Farms",
      author: "Cabdillaahi Suldaan 'Timacade'",
      excerpt:
        language === "so"
          ? "Beeraha barwaaqada leh, biyaha socda\nBadbaadada dadka, barakada Allaah"
          : "The abundant farms, the flowing waters\nThe salvation of people, the blessing of Allah",
      type: language === "so" ? "Gabay Dhaqameed" : "Cultural Poetry",
      year: "1960",
    },
  ]

  // Sample customs data
  const customs = [
    {
      id: 1,
      name: language === "so" ? "Aroos Soomaaliyeed" : "Somali Wedding",
      description:
        language === "so"
          ? "Aroosyada Soomaaliyeed waxay qaataan dhowr maalmood, waxaana lagu qabtaa dhaqamo iyo caadooyin qurux badan."
          : "Somali weddings span several days and feature beautiful traditions and customs.",
      traditions: [
        language === "so" ? "Meher bixinta" : "Dowry ceremony",
        language === "so" ? "Henna gacmaha" : "Henna application",
        language === "so" ? "Dhaanto iyo cayaar" : "Traditional dance",
        language === "so" ? "Cunto dhaqameed" : "Traditional food",
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: language === "so" ? "Dhalashada Ilmaha" : "Child Birth Celebration",
      description:
        language === "so"
          ? "Markii ilmo cusub dhasho, waxaa la qabtaa xaflad lagu soo dhaweynayo ilmaha cusub."
          : "When a new child is born, a celebration is held to welcome the new baby.",
      traditions: [
        language === "so" ? "Magac bixinta" : "Naming ceremony",
        language === "so" ? "Caqiiqada" : "Aqiqah sacrifice",
        language === "so" ? "Ducada" : "Prayers",
        language === "so" ? "Cunto wadaag" : "Communal feast",
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: language === "so" ? "Ciidaha" : "Eid Celebrations",
      description:
        language === "so"
          ? "Ciidaha Islaamka waxaa lagu dabaaldegaa dhaqamo gaar ah oo Soomaaliyeed."
          : "Islamic holidays are celebrated with special Somali traditions.",
      traditions: [
        language === "so" ? "Dhar cusub" : "New clothes",
        language === "so" ? "Cunto gaar ah" : "Special foods",
        language === "so" ? "Booqashada ehelka" : "Family visits",
        language === "so" ? "Sadaqada" : "Charity giving",
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

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
                <Users className="w-6 h-6 text-white" />
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
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="proverbs" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="proverbs" className="font-semibold">
              {currentContent.tabs.proverbs}
            </TabsTrigger>
            <TabsTrigger value="poetry" className="font-semibold">
              {currentContent.tabs.poetry}
            </TabsTrigger>
            <TabsTrigger value="customs" className="font-semibold">
              {currentContent.tabs.customs}
            </TabsTrigger>
            <TabsTrigger value="traditions" className="font-semibold">
              {currentContent.tabs.traditions}
            </TabsTrigger>
          </TabsList>

          {/* Proverbs Tab */}
          <TabsContent value="proverbs" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.proverbs.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{currentContent.sections.proverbs.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-600 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {proverbs.map((proverb) => (
                <Card
                  key={proverb.id}
                  className="hover:shadow-lg transition-all duration-300 border-cyan-200 bg-gradient-to-r from-cyan-50 to-white"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-3 bg-cyan-100 text-cyan-800">
                          {proverb.category}
                        </Badge>
                        <blockquote className="text-xl font-black text-gray-900 mb-3 leading-relaxed">
                          "{proverb.somali}"
                        </blockquote>
                        <p className="text-lg text-gray-700 italic mb-4">"{proverb.english}"</p>
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <p className="text-gray-800 leading-relaxed">
                            <span className="font-semibold text-yellow-700">
                              {language === "so" ? "Macnaha:" : "Meaning:"}
                            </span>{" "}
                            {proverb.meaning}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Poetry Tab */}
          <TabsContent value="poetry" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.poetry.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{currentContent.sections.poetry.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-600 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {poems.map((poem) => (
                <Card
                  key={poem.id}
                  className="hover:shadow-lg transition-all duration-300 border-yellow-200 bg-gradient-to-br from-yellow-50 to-white"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Music className="w-5 h-5 text-yellow-600" />
                      <Badge variant="outline" className="border-yellow-300 text-yellow-700">
                        {poem.type}
                      </Badge>
                      <span className="text-sm text-gray-500 ml-auto">{poem.year}</span>
                    </div>
                    <CardTitle className="text-xl font-black text-gray-900">{poem.title}</CardTitle>
                    <p className="text-sm text-gray-600 font-medium">by {poem.author}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <blockquote className="text-gray-800 leading-relaxed mb-4 p-4 bg-white/50 rounded-lg border-l-4 border-yellow-400 italic">
                      {poem.excerpt}
                    </blockquote>
                    <Button
                      variant="outline"
                      className="w-full border-yellow-300 text-yellow-700 hover:bg-yellow-50 bg-transparent"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      {language === "so" ? "Akhri oo dhan" : "Read Full"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Customs Tab */}
          <TabsContent value="customs" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.customs.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{currentContent.sections.customs.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-600 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              {customs.map((custom) => (
                <Card
                  key={custom.id}
                  className="hover:shadow-lg transition-all duration-300 border-cyan-200 overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={custom.image || "/placeholder.svg"}
                        alt={custom.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Crown className="w-6 h-6 text-cyan-600" />
                        <h3 className="font-black text-2xl text-gray-900">{custom.name}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">{custom.description}</p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Gift className="w-4 h-4 text-yellow-600" />
                          {language === "so" ? "Caadooyinka:" : "Traditions:"}
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {custom.traditions.map((tradition, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                              {tradition}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Traditions Tab */}
          <TabsContent value="traditions" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.traditions.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{currentContent.sections.traditions.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-600 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Values */}
              <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-black text-gray-900">
                    <Heart className="w-5 h-5 text-yellow-600" />
                    {language === "so" ? "Qiyamka Dhaqameed" : "Cultural Values"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-gray-900">
                        {language === "so" ? "Sharaf iyo Karaamad" : "Honor and Dignity"}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === "so"
                          ? "Sharafta qoyska iyo shakhsiga waa muhiim"
                          : "Family and personal honor are paramount"}
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border-l-4 border-cyan-400">
                      <h4 className="font-semibold text-gray-900">
                        {language === "so" ? "Wadajir iyo Walaaltinimo" : "Unity and Brotherhood"}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === "so"
                          ? "Bulshada waxay ku dhisan tahay wadajir"
                          : "Society is built on collective unity"}
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-gray-900">{language === "so" ? "Martiqaad" : "Hospitality"}</h4>
                      <p className="text-sm text-gray-600">
                        {language === "so"
                          ? "Martida soo dhaweynta waa dhaqan muhiim ah"
                          : "Welcoming guests is a sacred tradition"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Traditional Practices */}
              <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-black text-gray-900">
                    <Sparkles className="w-5 h-5 text-cyan-600" />
                    {language === "so" ? "Dhaqamada Asalka ah" : "Ancient Practices"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border-l-4 border-cyan-400">
                      <h4 className="font-semibold text-gray-900">
                        {language === "so" ? "Xeer iyo Garsoor" : "Traditional Law"}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === "so"
                          ? "Nidaamka xeerka dhaqameed ee garsoorka"
                          : "Traditional legal and justice system"}
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-gray-900">
                        {language === "so" ? "Gabayada iyo Hees" : "Poetry and Songs"}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === "so" ? "Dhaqanka afka iyo suugaanta" : "Oral tradition and literary culture"}
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border-l-4 border-cyan-400">
                      <h4 className="font-semibold text-gray-900">
                        {language === "so" ? "Xoolaha iyo Reer Guuraaga" : "Livestock and Nomadism"}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === "so"
                          ? "Dhaqanka reer guuraaga iyo xoolaha"
                          : "Nomadic lifestyle and livestock culture"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
