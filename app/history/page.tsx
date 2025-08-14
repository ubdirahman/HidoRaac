"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Crown, Sword, MapPin, ArrowLeft, Calendar, Users, Flag, Download, BookOpen, Star } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  const [language, setLanguage] = useState<"so" | "en">("so")

  const content = {
    so: {
      title: "Taariikhda Soomaaliyeed",
      subtitle: "Taariikh Buuxda: Bilowgii ilaa Maanta",
      tabs: {
        leaders: "Hogaamiyayaal",
        events: "Dhacdooyin",
        sites: "Goobaha",
        timeline: "Jadwalka",
        books: "Buugaag",
      },
      sections: {
        leaders: {
          title: "Hogaamiyayaasha Soomaaliyeed",
          subtitle: "Dhammaan Madaxdii Soomaaliya Maamulayay",
        },
        events: {
          title: "Dhacdooyinka Taariikhiga ah",
          subtitle: "Dhammaan Waqtiyada Muhiimka ah",
        },
        sites: {
          title: "Goobaha Taariikhiga ah",
          subtitle: "Dhammaan Meelaha Muhiimka ah",
        },
        timeline: {
          title: "Jadwalka Taariikhda Buuxda",
          subtitle: "3000 BC - 2024 AD",
        },
        books: {
          title: "Buugaagta Taariikhda",
          subtitle: "Download & Akhri",
        },
      },
    },
    en: {
      title: "Complete Somali History",
      subtitle: "From Ancient Times to Present Day",
      tabs: {
        leaders: "Leaders",
        events: "Events",
        sites: "Sites",
        timeline: "Timeline",
        books: "Books",
      },
      sections: {
        leaders: {
          title: "All Somali Leaders",
          subtitle: "Every Leader Who Ruled Somalia",
        },
        events: {
          title: "All Historical Events",
          subtitle: "Every Major Historical Moment",
        },
        sites: {
          title: "All Historical Sites",
          subtitle: "Every Important Historical Location",
        },
        timeline: {
          title: "Complete Historical Timeline",
          subtitle: "3000 BC - 2024 AD",
        },
        books: {
          title: "Historical Books",
          subtitle: "Download & Read",
        },
      },
    },
  }

  const currentContent = content[language]

  const leaders = [
    // Ancient Period
    {
      id: 1,
      name: "Boqor Fakr ad-Din",
      title: language === "so" ? "Boqorka Zeila" : "Sultan of Zeila",
      period: "1285-1328",
      era: language === "so" ? "Qarniga 13aad" : "13th Century",
      description:
        language === "so"
          ? "Boqorkii ugu horreeyay ee Soomaalida ee la yaqaan, aasaasay Saldanadda Ifat."
          : "First known Somali ruler, founder of the Ifat Sultanate.",
      achievements: [
        language === "so" ? "Aasaasay Saldanadda Ifat" : "Founded Ifat Sultanate",
        language === "so" ? "Dhisay magaalada Zeila" : "Built the city of Zeila",
        language === "so" ? "Horumariay ganacsiga" : "Advanced trade",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Boqor Sabr ad-Din II",
      title: language === "so" ? "Boqorka Adal" : "Sultan of Adal",
      period: "1415-1422",
      era: language === "so" ? "Qarniga 15aad" : "15th Century",
      description:
        language === "so"
          ? "Boqorkii Saldanadda Adal ee ka horyimid Boqortooyada Itoobiya."
          : "Sultan of Adal Sultanate who resisted the Ethiopian Empire.",
      achievements: [
        language === "so" ? "Difaacay xuduudaha Soomaalida" : "Defended Somali borders",
        language === "so" ? "Xoojiyay ciidamada" : "Strengthened military",
        language === "so" ? "Dhisay qalcado" : "Built fortifications",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Axmed Gurey (Axmed ibn Ibrahim)",
      title: language === "so" ? "Imaamka Adal" : "Imam of Adal",
      period: "1506-1543",
      era: language === "so" ? "Qarniga 16aad" : "16th Century",
      description:
        language === "so"
          ? "Hogaamiyihii caan ahaa ee Saldanadda Adal, ka guuleystay dagaallo badan oo ka dhanka ah Itoobiya."
          : "Famous leader of Adal Sultanate who won many battles against Ethiopia.",
      achievements: [
        language === "so" ? "Qabsaday qaybo ka mid ah Itoobiya" : "Conquered parts of Ethiopia",
        language === "so" ? "Midoobay qabaa'ilka Soomaalida" : "United Somali clans",
        language === "so" ? "Faafiyay Islaamka" : "Spread Islam",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    // Ajuran Period
    {
      id: 4,
      name: "Garaad Ajuuraan",
      title: language === "so" ? "Aasaasaha Boqortooyada Ajuuraan" : "Founder of Ajuran Empire",
      period: "1200-1300",
      era: language === "so" ? "Qarniga 13aad" : "13th Century",
      description:
        language === "so"
          ? "Aasaasay Boqortooyada Ajuuraan, mid ka mid ah dawladihii ugu xoogga badnaa Bariga Afrika."
          : "Founded the Ajuran Empire, one of the most powerful states in East Africa.",
      achievements: [
        language === "so" ? "Dhisay nidaamka biyaha" : "Built water systems",
        language === "so" ? "Aasaasay ciidamada badda" : "Established naval forces",
        language === "so" ? "Maamulay ganacsiga" : "Controlled trade",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    // Geledi Period
    {
      id: 5,
      name: "Suldaan Yusuf Mahamud",
      title: language === "so" ? "Suldaanka Geledi" : "Sultan of Geledi",
      period: "1798-1848",
      era: language === "so" ? "Qarniga 19aad" : "19th Century",
      description:
        language === "so"
          ? "Suldaankii ugu xoogga badnaa Saldanadda Geledi, maamulay gobolka Koonfurta Soomaaliya."
          : "Most powerful Sultan of Geledi Sultanate, ruled southern Somalia.",
      achievements: [
        language === "so" ? "Xoojiyay maamulka" : "Strengthened administration",
        language === "so" ? "Horumariay beeraha" : "Advanced agriculture",
        language === "so" ? "Difaacay gumaysiga" : "Resisted colonialism",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    // Dervish Period
    {
      id: 6,
      name: "Sayid Maxamed Cabdille Xasan",
      title: language === "so" ? "Sayidka Daraawiishta" : "The Dervish Leader",
      period: "1856-1920",
      era: language === "so" ? "Qarniga 19-20aad" : "19th-20th Century",
      description:
        language === "so"
          ? "Hogaamiyihii ururka Daraawiishta ee ka horyimid gumaysigii Ingiriiska, Talyaaniga iyo Itoobiya."
          : "Leader of the Dervish movement who resisted British, Italian, and Ethiopian colonialism.",
      achievements: [
        language === "so" ? "Aasaasay Dawladda Daraawiishta" : "Founded the Dervish State",
        language === "so" ? "20 sano oo dagaal ah" : "20 years of warfare",
        language === "so" ? "Qoray gabayo caan ah" : "Composed famous poetry",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 7,
      name: "Xaawo Taako",
      title: language === "so" ? "Haweeneyda Geesiga ah" : "The Brave Woman",
      period: "1920-1948",
      era: language === "so" ? "Qarniga 20aad" : "20th Century",
      description:
        language === "so"
          ? "Haweeneydii ugu horeysay ee ka soo horjeeda gumaysiga Talyaaniga ee Soomaaliya."
          : "The first woman to openly resist Italian colonialism in Somalia.",
      achievements: [
        language === "so" ? "Hoggaamintay mudaaharaadyo" : "Led demonstrations",
        language === "so" ? "Dhiirigelisay haweenka" : "Inspired women",
        language === "so" ? "Ahayd calanka xorriyadda" : "Symbol of freedom",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    // Independence Era
    {
      id: 8,
      name: "Aadan Cabdulle Cusmaan",
      title: language === "so" ? "Madaxweynihii Kowaad" : "First President",
      period: "1908-1981",
      era: language === "so" ? "Xorriyadda" : "Independence Era",
      description:
        language === "so"
          ? "Madaxweynihii kowaad ee Jamhuuriyadda Soomaaliya markii ay xorriyadda heshay 1960."
          : "The first President of the Somali Republic when it gained independence in 1960.",
      achievements: [
        language === "so" ? "Midowgii Koonfur iyo Waqooyi" : "United South and North",
        language === "so" ? "Aasaasay hay'adaha dawladda" : "Established government institutions",
        language === "so" ? "Horumariyay waxbarashada" : "Advanced education",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 9,
      name: "Cabdirashiid Cali Sharma'arke",
      title: language === "so" ? "Madaxweynihii Labaad" : "Second President",
      period: "1919-1969",
      era: language === "so" ? "Xorriyadda" : "Independence Era",
      description:
        language === "so"
          ? "Madaxweynihii labaad ee Soomaaliya, horumariyay dhaqaalaha iyo siyaasadda."
          : "Second President of Somalia, advanced economy and politics.",
      achievements: [
        language === "so" ? "Xoojiyay dhaqaalaha" : "Strengthened economy",
        language === "so" ? "Horumariay waddooyinka" : "Developed infrastructure",
        language === "so" ? "Dhisay iskuulada" : "Built schools",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    // Military Era
    {
      id: 10,
      name: "Maxamed Siyaad Barre",
      title: language === "so" ? "Madaxweynihii Saddexaad" : "Third President",
      period: "1919-1995",
      era: language === "so" ? "Xilligii Milatari" : "Military Era",
      description:
        language === "so"
          ? "Madaxweynihii saddexaad ee Soomaaliya, maamulay dalka 21 sano (1969-1991)."
          : "Third President of Somalia, ruled the country for 21 years (1969-1991).",
      achievements: [
        language === "so" ? "Dhisay waddooyinka" : "Built roads",
        language === "so" ? "Horumariay waxbarashada" : "Advanced education",
        language === "so" ? "Aasaasay qoraalka Soomaaliga" : "Established Somali script",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    // Modern Era
    {
      id: 11,
      name: "Maxamed Siyaad Samatar",
      title: language === "so" ? "Ra'iisul Wasaaraha" : "Prime Minister",
      period: "1926-2016",
      era: language === "so" ? "Casriga" : "Modern Era",
      description:
        language === "so"
          ? "Ra'iisul Wasaarihii ugu mudada dheeraa ee Soomaaliya."
          : "Longest serving Prime Minister of Somalia.",
      achievements: [
        language === "so" ? "Maamulay dhaqaalaha" : "Managed economy",
        language === "so" ? "Horumariay caafimaadka" : "Advanced healthcare",
        language === "so" ? "Dhisay jaamacadaha" : "Built universities",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 12,
      name: "Maxamed Cabdullahi Maxamed",
      title: language === "so" ? "Madaxweyne Ku-meel-gaar" : "Transitional President",
      period: "1934-",
      era: language === "so" ? "Casriga" : "Modern Era",
      description:
        language === "so"
          ? "Madaxweynihii ku-meel-gaarka ahaa ee Dawladda Federaalka."
          : "Transitional President of the Federal Government.",
      achievements: [
        language === "so" ? "Dib-u-dhisay dawladda" : "Rebuilt government",
        language === "so" ? "Nabadgelyo sameeyay" : "Established peace",
        language === "so" ? "Midoobay qabaa'ilka" : "United clans",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 13,
      name: "Xasan Sheekh Maxamuud",
      title: language === "so" ? "Madaxweynaha 8aad" : "8th President",
      period: "1955-",
      era: language === "so" ? "Casriga" : "Modern Era",
      description:
        language === "so"
          ? "Madaxweynaha siddeedaad ee Soomaaliya, doorashada 2012."
          : "Eighth President of Somalia, elected in 2012.",
      achievements: [
        language === "so" ? "Xoojiyay amniga" : "Strengthened security",
        language === "so" ? "Horumariay dhaqaalaha" : "Advanced economy",
        language === "so" ? "Dhisay xiriirka caalamiga ah" : "Built international relations",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 14,
      name: "Maxamed Cabdullahi Farmaajo",
      title: language === "so" ? "Madaxweynaha 9aad" : "9th President",
      period: "1962-",
      era: language === "so" ? "Casriga" : "Modern Era",
      description:
        language === "so"
          ? "Madaxweynaha sagaalaad ee Soomaaliya, doorashada 2017."
          : "Ninth President of Somalia, elected in 2017.",
      achievements: [
        language === "so" ? "La dagaallamay musuqmaasuqa" : "Fought corruption",
        language === "so" ? "Xoojiyay ciidamada" : "Strengthened military",
        language === "so" ? "Horumariay kaabayaasha" : "Developed infrastructure",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 15,
      name: "Xasan Sheekh Maxamuud",
      title: language === "so" ? "Madaxweynaha Xaadirka ah" : "Current President",
      period: "1955-",
      era: language === "so" ? "2022-Hadda" : "2022-Present",
      description:
        language === "so"
          ? "Madaxweynaha xaadirka ah ee Soomaaliya, mar labaad loo doortay 2022."
          : "Current President of Somalia, re-elected in 2022.",
      achievements: [
        language === "so" ? "Dib-u-dhisay dawladda" : "Rebuilt government",
        language === "so" ? "Xoojiyay nabadda" : "Strengthened peace",
        language === "so" ? "Horumariay dhaqaalaha" : "Advanced economy",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const events = [
    {
      id: 1,
      title: language === "so" ? "Aasaaska Saldanadda Ifat" : "Foundation of Ifat Sultanate",
      date: "1285",
      type: language === "so" ? "Aasaas" : "Foundation",
      description:
        language === "so"
          ? "Aasaaska saldanadda ugu horreysay ee Soomaalida, Saldanadda Ifat."
          : "Foundation of the first Somali sultanate, the Ifat Sultanate.",
      significance:
        language === "so" ? "Bilaabay taariikhda dawladnimada Soomaalida." : "Began the history of Somali statehood.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: language === "so" ? "Boqortooyada Ajuuraan" : "Ajuran Empire",
      date: "1200-1700",
      type: language === "so" ? "Boqortooyo" : "Empire",
      description:
        language === "so"
          ? "Xilligii ugu xoogga badnaa ee Boqortooyada Ajuuraan oo maamulaysay Koonfurta Soomaaliya."
          : "The peak period of the Ajuran Empire that ruled southern Somalia.",
      significance:
        language === "so"
          ? "Mid ka mid ah dawladihii ugu xoogga badnaa Bariga Afrika."
          : "One of the most powerful states in East Africa.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: language === "so" ? "Dagaalladii Axmed Gurey" : "Ahmad Gurey's Wars",
      date: "1529-1543",
      type: language === "so" ? "Dagaal" : "War",
      description:
        language === "so"
          ? "Dagaalladii Axmed Gurey ka dhanka ah Boqortooyada Itoobiya."
          : "Ahmad Gurey's wars against the Ethiopian Empire.",
      significance:
        language === "so"
          ? "Saamayn weyn ku yeeshay taariikhda Geeska Afrika."
          : "Major impact on the history of the Horn of Africa.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: language === "so" ? "Imtixaanka Portugaal" : "Portuguese Expedition",
      date: "1499-1507",
      type: language === "so" ? "Safarad" : "Expedition",
      description:
        language === "so"
          ? "Safarkii Vasco da Gama iyo la kulankii Soomaalida."
          : "Vasco da Gama's expedition and encounter with Somalis.",
      significance:
        language === "so"
          ? "Markii ugu horreysay ee Yurubta la kulanto Soomaalida."
          : "First encounter between Europeans and Somalis.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: language === "so" ? "Gumaysiga Yurub" : "European Colonization",
      date: "1884-1960",
      type: language === "so" ? "Gumaysi" : "Colonization",
      description:
        language === "so"
          ? "Bilowgii gumaysiga Ingiriiska, Talyaaniga iyo Faransiiska ee Soomaaliya."
          : "Beginning of British, Italian, and French colonization of Somalia.",
      significance:
        language === "so"
          ? "Qayb-u-qayb u kala qaybiyay dhulka Soomaalida."
          : "Divided Somali territories into different colonies.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: language === "so" ? "Dagaalka Daraawiishta" : "Dervish Wars",
      date: "1899-1920",
      type: language === "so" ? "Dagaal" : "War",
      description:
        language === "so"
          ? "21 sano oo dagaal ah oo Daraawiishtu kula jirtay gumaysiga."
          : "21 years of warfare between Dervishes and colonial powers.",
      significance:
        language === "so"
          ? "Iska caabbinta ugu dheeraa ee taariikhda Afrika."
          : "Longest resistance in African history.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      title: language === "so" ? "Xorriyadda Soomaaliya" : "Somali Independence",
      date: "1960-07-01",
      type: language === "so" ? "Xorriyadda" : "Independence",
      description:
        language === "so"
          ? "Maalintii Soomaaliya xorriyadda ka heshay gumaysigii Ingiriiska iyo Talyaaniga."
          : "The day Somalia gained independence from British and Italian colonial rule.",
      significance:
        language === "so"
          ? "Bilaabay xilligii cusub ee Jamhuuriyadda Soomaaliya."
          : "Marked the beginning of the new era of the Somali Republic.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      title: language === "so" ? "Kacaankii Oktoobar" : "October Revolution",
      date: "1969-10-21",
      type: language === "so" ? "Kacaan" : "Revolution",
      description:
        language === "so" ? "Afgembigii militariga ee Maxamed Siyaad Barre." : "Military coup by Mohamed Siad Barre.",
      significance: language === "so" ? "Bilaabay xilligii maamulka militariga." : "Began the era of military rule.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 9,
      title: language === "so" ? "Dagaalkii Ogaadeeniya" : "Ogaden War",
      date: "1977-1978",
      type: language === "so" ? "Dagaal" : "War",
      description:
        language === "so"
          ? "Dagaalkii u dhexeeyay Soomaaliya iyo Itoobiya oo ku saabsanaa gobolka Ogaadeeniya."
          : "The war between Somalia and Ethiopia over the Ogaden region.",
      significance:
        language === "so"
          ? "Saameyn weyn ku yeeshay siyaasadda gudaha iyo dibadda."
          : "Had major impact on domestic and foreign policy.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 10,
      title: language === "so" ? "Dagaalkii Sokeeye" : "Civil War",
      date: "1991-2012",
      type: language === "so" ? "Dagaal Sokeeye" : "Civil War",
      description:
        language === "so"
          ? "Dagaalkii sokeeye ee ka dhacay Soomaaliya ka dib dhicii dawladdii."
          : "The civil war that occurred in Somalia after the fall of the government.",
      significance:
        language === "so" ? "Xilli adag oo taariikhda Soomaaliya ah." : "A difficult period in Somali history.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 11,
      title: language === "so" ? "Heshiiskii Carta" : "Carta Agreement",
      date: "2000-08-13",
      type: language === "so" ? "Heshiis" : "Agreement",
      description:
        language === "so"
          ? "Heshiiskii nabadda ee lagu dhisay Dawladda Federaalka Soomaaliya."
          : "The peace agreement that established the Transitional Federal Government of Somalia.",
      significance:
        language === "so"
          ? "Tilmaan muhiim ah oo loo marayo dib-u-dhiska dawladda."
          : "Important milestone towards rebuilding the government.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 12,
      title: language === "so" ? "Doorashada 2012" : "2012 Elections",
      date: "2012-09-10",
      type: language === "so" ? "Doorasho" : "Election",
      description:
        language === "so"
          ? "Doorashadii ugu horreysay ee ka dhacda Soomaaliya muddo 20 sano ah."
          : "The first election held in Somalia in 20 years.",
      significance: language === "so" ? "Dib-u-bilaabay nidaamka dimuqraadiyadda." : "Restarted the democratic system.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const sites = [
    {
      id: 1,
      name: language === "so" ? "Laas Geel" : "Laas Geel",
      location: language === "so" ? "Waqooyi Galbeed, Soomaaliya" : "Northwest Somalia",
      period: language === "so" ? "9,000-3,000 sano ka hor" : "9,000-3,000 years ago",
      description:
        language === "so"
          ? "Goobta sawirrada dhagaxa ee ugu da'da weyn Bariga Afrika, oo ay ku jiraan sawirro lo' iyo dad."
          : "One of the oldest rock art sites in East Africa, featuring paintings of cattle and humans.",
      significance:
        language === "so"
          ? "Cadeynta ugu horreysa ee nolosha reer guuraaga Soomaalida."
          : "Earliest evidence of Somali pastoral life.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 2,
      name: language === "so" ? "Magaalada Zeila" : "City of Zeila",
      location: language === "so" ? "Waqooyi Galbeed" : "Northwest Coast",
      period: language === "so" ? "Qarnigii 7aad-19aad" : "7th-19th Century",
      description:
        language === "so"
          ? "Magaalo ganacsato oo caan ah oo ahayd xudunta ganacsiga Badda Cas iyo Gacanka Cadmeed."
          : "Famous trading city that was the center of Red Sea and Gulf of Aden commerce.",
      significance:
        language === "so"
          ? "Iridka ugu muhiimsan ee ganacsiga iyo faafinta Islaamka."
          : "Most important gateway for trade and spread of Islam.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 3,
      name: language === "so" ? "Magaalada Berbera" : "City of Berbera",
      location: language === "so" ? "Waqooyi Galbeed" : "Northwest Coast",
      period: language === "so" ? "Qarnigii 1aad-20aad" : "1st-20th Century",
      description:
        language === "so"
          ? "Magaalo taariikhi ah oo ahayd xudunta ganacsiga iyo maraakiibta."
          : "Historic city that was the center of trade and shipping.",
      significance:
        language === "so" ? "Dekedda ugu muhiimsan ee Waqooyi Soomaaliya." : "Most important port of Northern Somalia.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 4,
      name: language === "so" ? "Magaalada Muqdisho" : "City of Mogadishu",
      location: language === "so" ? "Koonfur Soomaaliya" : "Southern Somalia",
      period: language === "so" ? "Qarnigii 10aad-Hadda" : "10th Century-Present",
      description:
        language === "so"
          ? "Caasimadda Soomaaliya iyo magaalada ugu weyn, taariikh dheer leh."
          : "Capital of Somalia and largest city, with a long history.",
      significance:
        language === "so"
          ? "Xudunta siyaasadda iyo dhaqaalaha Soomaaliya."
          : "Political and economic center of Somalia.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 5,
      name: language === "so" ? "Qalcadda Garesa" : "Garesa Fort",
      location: language === "so" ? "Koonfur Soomaaliya" : "Southern Somalia",
      period: language === "so" ? "Qarnigii 16aad" : "16th Century",
      description:
        language === "so"
          ? "Qalcad taariikhi ah oo dhisan qarnigii 16aad, oo muujinaysa naqshadaha dhismaha Soomaalida."
          : "Historic fort built in the 16th century, showcasing Somali architectural designs.",
      significance:
        language === "so"
          ? "Tusaale fiican oo ka mid ah farshaxanka dhismaha Soomaalida."
          : "Excellent example of Somali architectural artistry.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 6,
      name: language === "so" ? "Magaalada Marka" : "City of Merca",
      location: language === "so" ? "Koonfur Soomaaliya" : "Southern Somalia",
      period: language === "so" ? "Qarnigii 12aad-Hadda" : "12th Century-Present",
      description:
        language === "so"
          ? "Magaalo taariikhi ah oo caan ku ah dhaqankeeda iyo suugaanteeda."
          : "Historic city famous for its culture and literature.",
      significance:
        language === "so" ? "Xudunta dhaqanka iyo suugaanta Soomaalida." : "Center of Somali culture and literature.",
      image: "/placeholder.svg?height=250&width=350",
    },
  ]

  const timeline = [
    { year: "3000 BCE", event: language === "so" ? "Sawirrada Laas Geel" : "Laas Geel Rock Art" },
    { year: "2000 BCE", event: language === "so" ? "Reer guuraaga hore" : "Early Pastoralists" },
    { year: "1000 BCE", event: language === "so" ? "Ganacsiga Badda Cas" : "Red Sea Trade" },
    { year: "100 CE", event: language === "so" ? "Magaalooyinka Ganacsiga" : "Trading Cities" },
    { year: "700 CE", event: language === "so" ? "Islaamka Soomaaliya" : "Islam in Somalia" },
    { year: "1200", event: language === "so" ? "Boqortooyada Ajuuraan" : "Ajuran Sultanate" },
    { year: "1285", event: language === "so" ? "Saldanadda Ifat" : "Ifat Sultanate" },
    { year: "1415", event: language === "so" ? "Saldanadda Adal" : "Adal Sultanate" },
    { year: "1529", event: language === "so" ? "Dagaalladii Axmed Gurey" : "Ahmad Gurey's Wars" },
    { year: "1700", event: language === "so" ? "Saldanadda Geledi" : "Geledi Sultanate" },
    { year: "1884", event: language === "so" ? "Gumaysiga Yurub" : "European Colonization" },
    { year: "1899", event: language === "so" ? "Dagaalka Daraawiishta" : "Dervish Wars Begin" },
    { year: "1920", event: language === "so" ? "Dhimashada Sayidka" : "Death of the Sayid" },
    { year: "1960", event: language === "so" ? "Xorriyadda" : "Independence" },
    { year: "1969", event: language === "so" ? "Kacaankii Oktoobar" : "October Revolution" },
    { year: "1977", event: language === "so" ? "Dagaalkii Ogaadeeniya" : "Ogaden War" },
    { year: "1991", event: language === "so" ? "Dagaalkii Sokeeye" : "Civil War Begins" },
    { year: "2000", event: language === "so" ? "Heshiiskii Carta" : "Carta Agreement" },
    { year: "2012", event: language === "so" ? "Doorashada Kowaad" : "First Elections" },
    { year: "2017", event: language === "so" ? "Doorashada Farmaajo" : "Farmajo Election" },
    { year: "2022", event: language === "so" ? "Doorashada Xasan Sheekh" : "Hassan Sheikh Re-election" },
    { year: "2024", event: language === "so" ? "Maanta" : "Present Day" },
  ]

  const books = [
    {
      id: 1,
      title: language === "so" ? "Taariikhda Buuxda ee Soomaaliya" : "Complete History of Somalia",
      author: language === "so" ? "Dhawr Qoraa" : "Multiple Authors",
      pages: 450,
      description:
        language === "so"
          ? "Buug buuxda oo ka hadlaya taariikhda Soomaaliya laga bilaabo 3000 BC ilaa 2024."
          : "Complete book covering Somali history from 3000 BC to 2024.",
      topics: [
        language === "so" ? "Taariikhda Hore" : "Ancient History",
        language === "so" ? "Saldanadaha" : "Sultanates",
        language === "so" ? "Gumaysiga" : "Colonialism",
        language === "so" ? "Xorriyadda" : "Independence",
        language === "so" ? "Casriga" : "Modern Era",
      ],
      image: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: language === "so" ? "Hogaamiyayaasha Soomaaliyeed" : "Somali Leaders",
      author: language === "so" ? "Maxamed Cali Axmed" : "Mohamed Ali Ahmed",
      pages: 320,
      description:
        language === "so"
          ? "Buug ka hadlaya dhammaan madaxdii Soomaaliya maamulayay."
          : "Book about all leaders who ruled Somalia.",
      topics: [
        language === "so" ? "Boqorrada Hore" : "Ancient Kings",
        language === "so" ? "Saldanadaha" : "Sultans",
        language === "so" ? "Madaxweynayaasha" : "Presidents",
        language === "so" ? "Ra'iisul Wasaarayaasha" : "Prime Ministers",
      ],
      image: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: language === "so" ? "Dagaalladii Daraawiishta" : "The Dervish Wars",
      author: language === "so" ? "Cabdullahi Qarshe" : "Abdullahi Qarshe",
      pages: 280,
      description:
        language === "so"
          ? "Buug faahfaahsan oo ka hadlaya 21 sannadood ee dagaalka Daraawiishta."
          : "Detailed book about the 21 years of Dervish warfare.",
      topics: [
        language === "so" ? "Sayidka" : "The Sayid",
        language === "so" ? "Dagaalladii" : "The Wars",
        language === "so" ? "Gabayada" : "Poetry",
        language === "so" ? "Guulaha" : "Victories",
      ],
      image: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 4,
      title: language === "so" ? "Xorriyadda Soomaaliya" : "Somali Independence",
      author: language === "so" ? "Faarax Cali Sugulle" : "Farah Ali Sugule",
      pages: 200,
      description:
        language === "so"
          ? "Buug ka hadlaya halka Soomaaliya xorriyadda ka heshay."
          : "Book about how Somalia gained independence.",
      topics: [
        language === "so" ? "Halganka Xorriyadda" : "Independence Struggle",
        language === "so" ? "Midowga" : "Unification",
        language === "so" ? "Doorashada Kowaad" : "First Elections",
        language === "so" ? "Dawladnimada" : "Statehood",
      ],
      image: "/placeholder.svg?height=300&width=200",
    },
  ]

  const handleDownload = (bookTitle: string) => {
    const content = `
# ${bookTitle}

## ${language === "so" ? "Hordhac" : "Introduction"}
${
  language === "so"
    ? "Buuggan wuxuu ka hadlayaa taariikhda dheer ee Soomaaliya..."
    : "This book covers the long history of Somalia..."
}

## ${language === "so" ? "Cutubka 1aad: Taariikhda Hore" : "Chapter 1: Ancient History"}
${
  language === "so"
    ? "Soomaalidu waxay lahaayeen taariikh dheer oo dhan 5000 sano ah..."
    : "Somalis have had a long history spanning 5000 years..."
}

## ${language === "so" ? "Cutubka 2aad: Saldanadaha" : "Chapter 2: The Sultanates"}
${
  language === "so"
    ? "Saldanadaha Soomaalida waxay bilaabmeen qarnigii 13aad..."
    : "Somali sultanates began in the 13th century..."
}

## ${language === "so" ? "Cutubka 3aad: Gumaysiga" : "Chapter 3: Colonial Period"}
${language === "so" ? "Gumaysiga Yurubtu wuxuu bilaabmay 1884..." : "European colonialism began in 1884..."}

## ${language === "so" ? "Cutubka 4aad: Xorriyadda" : "Chapter 4: Independence"}
${language === "so" ? "Soomaaliya xorriyadda waxay heshay 1960..." : "Somalia gained independence in 1960..."}

## ${language === "so" ? "Cutubka 5aad: Casriga" : "Chapter 5: Modern Era"}
${language === "so" ? "Casriga Soomaaliya wuxuu bilaabmay 1960..." : "Modern Somalia began in 1960..."}
    `

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${bookTitle.replace(/\s+/g, "_")}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
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
                <Clock className="w-6 h-6 text-white" />
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
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="leaders" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="leaders" className="font-semibold">
              {currentContent.tabs.leaders}
            </TabsTrigger>
            <TabsTrigger value="events" className="font-semibold">
              {currentContent.tabs.events}
            </TabsTrigger>
            <TabsTrigger value="sites" className="font-semibold">
              {currentContent.tabs.sites}
            </TabsTrigger>
            <TabsTrigger value="timeline" className="font-semibold">
              {currentContent.tabs.timeline}
            </TabsTrigger>
            <TabsTrigger value="books" className="font-semibold">
              {currentContent.tabs.books}
            </TabsTrigger>
          </TabsList>

          {/* Leaders Tab */}
          <TabsContent value="leaders" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.leaders.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{currentContent.sections.leaders.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            {["Qarniga 13aad", "Qarniga 19-20aad", "Xorriyadda", "Xilligii Milatari", "Casriga"].map((era) => (
              <div key={era} className="mb-12">
                <h3 className="font-black text-2xl text-gray-800 mb-6 flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-600" />
                  {era}
                </h3>
                <div className="space-y-8">
                  {leaders
                    .filter((leader) => leader.era === era)
                    .map((leader) => (
                      <Card
                        key={leader.id}
                        className="hover:shadow-lg transition-all duration-300 border-yellow-200 overflow-hidden"
                      >
                        <div className="md:flex">
                          <div className="md:w-1/4 p-6 bg-gradient-to-br from-yellow-50 to-cyan-50 flex items-center justify-center">
                            <img
                              src={leader.image || "/placeholder.svg"}
                              alt={leader.name}
                              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                          </div>
                          <div className="md:w-3/4 p-8">
                            <div className="flex items-center gap-3 mb-4">
                              <Crown className="w-6 h-6 text-yellow-600" />
                              <div>
                                <h3 className="font-black text-2xl text-gray-900">{leader.name}</h3>
                                <p className="text-lg text-yellow-700 font-semibold">{leader.title}</p>
                                <p className="text-sm text-gray-500">{leader.period}</p>
                              </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">{leader.description}</p>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <Flag className="w-4 h-4 text-cyan-600" />
                                {language === "so" ? "Guulaha Muhiimka ah:" : "Key Achievements:"}
                              </h4>
                              <div className="grid md:grid-cols-3 gap-2">
                                {leader.achievements.map((achievement, index) => (
                                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    {achievement}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.events.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{currentContent.sections.events.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              {events.map((event) => (
                <Card
                  key={event.id}
                  className="hover:shadow-lg transition-all duration-300 border-cyan-200 overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Sword className="w-6 h-6 text-cyan-600" />
                        <div>
                          <Badge variant="outline" className="border-cyan-300 text-cyan-700 mb-2">
                            {event.type}
                          </Badge>
                          <h3 className="font-black text-2xl text-gray-900">{event.title}</h3>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">{event.description}</p>
                      <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
                        <p className="text-gray-800">
                          <span className="font-semibold text-cyan-700">
                            {language === "so" ? "Muhiimadda:" : "Significance:"}
                          </span>{" "}
                          {event.significance}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sites Tab */}
          <TabsContent value="sites" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.sites.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{currentContent.sections.sites.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sites.map((site) => (
                <Card
                  key={site.id}
                  className="hover:shadow-lg transition-all duration-300 border-yellow-200 overflow-hidden"
                >
                  <div className="relative">
                    <img src={site.image || "/placeholder.svg"} alt={site.name} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-600 text-white">{site.period}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-yellow-600" />
                      <div>
                        <h3 className="font-black text-xl text-gray-900">{site.name}</h3>
                        <p className="text-sm text-gray-500">{site.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{site.description}</p>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-gray-800 text-sm">
                        <span className="font-semibold text-yellow-700">
                          {language === "so" ? "Muhiimadda:" : "Significance:"}
                        </span>{" "}
                        {site.significance}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.timeline.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{currentContent.sections.timeline.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-cyan-400"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center gap-6">
                    {/* Timeline dot */}
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xs z-10">
                      {item.year.split(" ")[0]}
                    </div>
                    {/* Content */}
                    <Card className="flex-1 border-yellow-200 bg-gradient-to-r from-yellow-50 to-white">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-black text-lg text-gray-900">{item.event}</h3>
                            <p className="text-sm text-gray-600">{item.year}</p>
                          </div>
                          <Users className="w-6 h-6 text-yellow-600" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="books" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.books.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{currentContent.sections.books.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {books.map((book) => (
                <Card
                  key={book.id}
                  className="hover:shadow-lg transition-all duration-300 border-yellow-200 overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 p-6 bg-gradient-to-br from-yellow-50 to-cyan-50 flex items-center justify-center">
                      <img
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        className="w-32 h-40 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-6 h-6 text-yellow-600" />
                        <div>
                          <h3 className="font-black text-xl text-gray-900">{book.title}</h3>
                          <p className="text-sm text-gray-600">{book.author}</p>
                          <p className="text-xs text-gray-500">
                            {book.pages} {language === "so" ? "bog" : "pages"}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm">{book.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          {language === "so" ? "Mawduucyada:" : "Topics:"}
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {book.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-yellow-300 text-yellow-700">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button
                        onClick={() => handleDownload(book.title)}
                        className="w-full bg-gradient-to-r from-yellow-600 to-cyan-600 hover:from-yellow-700 hover:to-cyan-700 text-white"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {language === "so" ? "Soo Dejiso" : "Download"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
