"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { BookOpen, Play, Pause, Clock, Calendar, Heart, ArrowLeft, Download, Star, Search } from "lucide-react"
import Link from "next/link"

export default function ReligionPage() {
  const [language, setLanguage] = useState<"so" | "en">("so")
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const content = {
    so: {
      title: "Diinta Islaamka",
      subtitle: "Qur'aan, Axaadiis iyo Casharro Diini ah",
      tabs: {
        quran: "Qur'aan",
        lessons: "Cashar",
        schedule: "Jadwal",
        hadith: "Axaadiis",
      },
      sections: {
        quran: {
          title: "Qur'aanka Kariimka - 114 Suuradood",
          recitations: "Akhris",
          tafsir: "Tafsiir",
          search: "Raadi suurad...",
        },
        lessons: {
          title: "Casharro Diini ah",
          video: "Muuqaal",
          audio: "Codka",
        },
        schedule: {
          title: "Jadwalka Cibaadada",
          prayer: "Salaadda",
          fasting: "Soonka",
        },
        hadith: {
          title: "Axaadiiska Nabiga SCW",
        },
      },
    },
    en: {
      title: "Islamic Religion",
      subtitle: "Quran, Hadith and Islamic Teachings",
      tabs: {
        quran: "Quran",
        lessons: "Lessons",
        schedule: "Schedule",
        hadith: "Hadith",
      },
      sections: {
        quran: {
          title: "The Holy Quran - 114 Chapters",
          recitations: "Recitations",
          tafsir: "Tafsir",
          search: "Search chapters...",
        },
        lessons: {
          title: "Islamic Lessons",
          video: "Video",
          audio: "Audio",
        },
        schedule: {
          title: "Worship Schedule",
          prayer: "Prayer Times",
          fasting: "Fasting",
        },
        hadith: {
          title: "Prophetic Traditions",
        },
      },
    },
  }

  const currentContent = content[language]

  const quranChapters = [
    {
      id: 1,
      nameAr: "الفاتحة",
      nameSo: "Al-Faatixah",
      nameEn: "The Opening",
      verses: 7,
      audio: "001-fatiha.mp3",
      revelation: "Makkah",
    },
    {
      id: 2,
      nameAr: "البقرة",
      nameSo: "Al-Baqarah",
      nameEn: "The Cow",
      verses: 286,
      audio: "002-baqarah.mp3",
      revelation: "Madinah",
    },
    {
      id: 3,
      nameAr: "آل عمران",
      nameSo: "Aal-Cimraan",
      nameEn: "Family of Imran",
      verses: 200,
      audio: "003-imran.mp3",
      revelation: "Madinah",
    },
    {
      id: 4,
      nameAr: "النساء",
      nameSo: "An-Nisaa",
      nameEn: "The Women",
      verses: 176,
      audio: "004-nisa.mp3",
      revelation: "Madinah",
    },
    {
      id: 5,
      nameAr: "المائدة",
      nameSo: "Al-Maa'idah",
      nameEn: "The Table Spread",
      verses: 120,
      audio: "005-maidah.mp3",
      revelation: "Madinah",
    },
    {
      id: 6,
      nameAr: "الأنعام",
      nameSo: "Al-An'aam",
      nameEn: "The Cattle",
      verses: 165,
      audio: "006-anam.mp3",
      revelation: "Makkah",
    },
    {
      id: 7,
      nameAr: "الأعراف",
      nameSo: "Al-A'raaf",
      nameEn: "The Heights",
      verses: 206,
      audio: "007-araf.mp3",
      revelation: "Makkah",
    },
    {
      id: 8,
      nameAr: "الأنفال",
      nameSo: "Al-Anfaal",
      nameEn: "The Spoils of War",
      verses: 75,
      audio: "008-anfal.mp3",
      revelation: "Madinah",
    },
    {
      id: 9,
      nameAr: "التوبة",
      nameSo: "At-Tawbah",
      nameEn: "The Repentance",
      verses: 129,
      audio: "009-tawbah.mp3",
      revelation: "Madinah",
    },
    {
      id: 10,
      nameAr: "يونس",
      nameSo: "Yuunus",
      nameEn: "Jonah",
      verses: 109,
      audio: "010-yunus.mp3",
      revelation: "Makkah",
    },
    { id: 11, nameAr: "هود", nameSo: "Huud", nameEn: "Hud", verses: 123, audio: "011-hud.mp3", revelation: "Makkah" },
    {
      id: 12,
      nameAr: "يوسف",
      nameSo: "Yuusuf",
      nameEn: "Joseph",
      verses: 111,
      audio: "012-yusuf.mp3",
      revelation: "Makkah",
    },
    {
      id: 13,
      nameAr: "الرعد",
      nameSo: "Ar-Ra'd",
      nameEn: "The Thunder",
      verses: 43,
      audio: "013-rad.mp3",
      revelation: "Madinah",
    },
    {
      id: 14,
      nameAr: "إبراهيم",
      nameSo: "Ibraahiim",
      nameEn: "Abraham",
      verses: 52,
      audio: "014-ibrahim.mp3",
      revelation: "Makkah",
    },
    {
      id: 15,
      nameAr: "الحجر",
      nameSo: "Al-Xijr",
      nameEn: "The Rocky Tract",
      verses: 99,
      audio: "015-hijr.mp3",
      revelation: "Makkah",
    },
    {
      id: 16,
      nameAr: "النحل",
      nameSo: "An-Naxl",
      nameEn: "The Bee",
      verses: 128,
      audio: "016-nahl.mp3",
      revelation: "Makkah",
    },
    {
      id: 17,
      nameAr: "الإسراء",
      nameSo: "Al-Israa",
      nameEn: "The Night Journey",
      verses: 111,
      audio: "017-isra.mp3",
      revelation: "Makkah",
    },
    {
      id: 18,
      nameAr: "الكهف",
      nameSo: "Al-Kahf",
      nameEn: "The Cave",
      verses: 110,
      audio: "018-kahf.mp3",
      revelation: "Makkah",
    },
    {
      id: 19,
      nameAr: "مريم",
      nameSo: "Maryam",
      nameEn: "Mary",
      verses: 98,
      audio: "019-maryam.mp3",
      revelation: "Makkah",
    },
    {
      id: 20,
      nameAr: "طه",
      nameSo: "Taa-Haa",
      nameEn: "Ta-Ha",
      verses: 135,
      audio: "020-taha.mp3",
      revelation: "Makkah",
    },
    {
      id: 21,
      nameAr: "الأنبياء",
      nameSo: "Al-Anbiyaa",
      nameEn: "The Prophets",
      verses: 112,
      audio: "021-anbiya.mp3",
      revelation: "Makkah",
    },
    {
      id: 22,
      nameAr: "الحج",
      nameSo: "Al-Xajj",
      nameEn: "The Pilgrimage",
      verses: 78,
      audio: "022-hajj.mp3",
      revelation: "Madinah",
    },
    {
      id: 23,
      nameAr: "المؤمنون",
      nameSo: "Al-Mu'minuun",
      nameEn: "The Believers",
      verses: 118,
      audio: "023-muminun.mp3",
      revelation: "Makkah",
    },
    {
      id: 24,
      nameAr: "النور",
      nameSo: "An-Nuur",
      nameEn: "The Light",
      verses: 64,
      audio: "024-nur.mp3",
      revelation: "Madinah",
    },
    {
      id: 25,
      nameAr: "الفرقان",
      nameSo: "Al-Furqaan",
      nameEn: "The Criterion",
      verses: 77,
      audio: "025-furqan.mp3",
      revelation: "Makkah",
    },
    {
      id: 26,
      nameAr: "الشعراء",
      nameSo: "Ash-Shu'araa",
      nameEn: "The Poets",
      verses: 227,
      audio: "026-shuara.mp3",
      revelation: "Makkah",
    },
    {
      id: 27,
      nameAr: "النمل",
      nameSo: "An-Naml",
      nameEn: "The Ant",
      verses: 93,
      audio: "027-naml.mp3",
      revelation: "Makkah",
    },
    {
      id: 28,
      nameAr: "القصص",
      nameSo: "Al-Qasas",
      nameEn: "The Stories",
      verses: 88,
      audio: "028-qasas.mp3",
      revelation: "Makkah",
    },
    {
      id: 29,
      nameAr: "العنكبوت",
      nameSo: "Al-'Ankabuut",
      nameEn: "The Spider",
      verses: 69,
      audio: "029-ankabut.mp3",
      revelation: "Makkah",
    },
    {
      id: 30,
      nameAr: "الروم",
      nameSo: "Ar-Ruum",
      nameEn: "The Romans",
      verses: 60,
      audio: "030-rum.mp3",
      revelation: "Makkah",
    },
    {
      id: 31,
      nameAr: "لقمان",
      nameSo: "Luqmaan",
      nameEn: "Luqman",
      verses: 34,
      audio: "031-luqman.mp3",
      revelation: "Makkah",
    },
    {
      id: 32,
      nameAr: "السجدة",
      nameSo: "As-Sajdah",
      nameEn: "The Prostration",
      verses: 30,
      audio: "032-sajdah.mp3",
      revelation: "Makkah",
    },
    {
      id: 33,
      nameAr: "الأحزاب",
      nameSo: "Al-Axzaab",
      nameEn: "The Clans",
      verses: 73,
      audio: "033-ahzab.mp3",
      revelation: "Madinah",
    },
    {
      id: 34,
      nameAr: "سبأ",
      nameSo: "Saba'",
      nameEn: "Sheba",
      verses: 54,
      audio: "034-saba.mp3",
      revelation: "Makkah",
    },
    {
      id: 35,
      nameAr: "فاطر",
      nameSo: "Faatir",
      nameEn: "Originator",
      verses: 45,
      audio: "035-fatir.mp3",
      revelation: "Makkah",
    },
    {
      id: 36,
      nameAr: "يس",
      nameSo: "Yaa-Siin",
      nameEn: "Ya Sin",
      verses: 83,
      audio: "036-yasin.mp3",
      revelation: "Makkah",
    },
    {
      id: 37,
      nameAr: "الصافات",
      nameSo: "As-Saaffaat",
      nameEn: "Those Who Set The Ranks",
      verses: 182,
      audio: "037-saffat.mp3",
      revelation: "Makkah",
    },
    {
      id: 38,
      nameAr: "ص",
      nameSo: "Saad",
      nameEn: "The Letter Sad",
      verses: 88,
      audio: "038-sad.mp3",
      revelation: "Makkah",
    },
    {
      id: 39,
      nameAr: "الزمر",
      nameSo: "Az-Zumar",
      nameEn: "The Troops",
      verses: 75,
      audio: "039-zumar.mp3",
      revelation: "Makkah",
    },
    {
      id: 40,
      nameAr: "غافر",
      nameSo: "Ghaafir",
      nameEn: "The Forgiver",
      verses: 85,
      audio: "040-ghafir.mp3",
      revelation: "Makkah",
    },
    {
      id: 41,
      nameAr: "فصلت",
      nameSo: "Fussilat",
      nameEn: "Explained In Detail",
      verses: 54,
      audio: "041-fussilat.mp3",
      revelation: "Makkah",
    },
    {
      id: 42,
      nameAr: "الشورى",
      nameSo: "Ash-Shuuraa",
      nameEn: "The Consultation",
      verses: 53,
      audio: "042-shura.mp3",
      revelation: "Makkah",
    },
    {
      id: 43,
      nameAr: "الزخرف",
      nameSo: "Az-Zukhruf",
      nameEn: "The Ornaments of Gold",
      verses: 89,
      audio: "043-zukhruf.mp3",
      revelation: "Makkah",
    },
    {
      id: 44,
      nameAr: "الدخان",
      nameSo: "Ad-Dukhaan",
      nameEn: "The Smoke",
      verses: 59,
      audio: "044-dukhan.mp3",
      revelation: "Makkah",
    },
    {
      id: 45,
      nameAr: "الجاثية",
      nameSo: "Al-Jaathiyah",
      nameEn: "The Crouching",
      verses: 37,
      audio: "045-jathiya.mp3",
      revelation: "Makkah",
    },
    {
      id: 46,
      nameAr: "الأحقاف",
      nameSo: "Al-Axqaaf",
      nameEn: "The Wind-Curved Sandhills",
      verses: 35,
      audio: "046-ahqaf.mp3",
      revelation: "Makkah",
    },
    {
      id: 47,
      nameAr: "محمد",
      nameSo: "Muxammad",
      nameEn: "Muhammad",
      verses: 38,
      audio: "047-muhammad.mp3",
      revelation: "Madinah",
    },
    {
      id: 48,
      nameAr: "الفتح",
      nameSo: "Al-Fatx",
      nameEn: "The Victory",
      verses: 29,
      audio: "048-fath.mp3",
      revelation: "Madinah",
    },
    {
      id: 49,
      nameAr: "الحجرات",
      nameSo: "Al-Xujuraat",
      nameEn: "The Rooms",
      verses: 18,
      audio: "049-hujurat.mp3",
      revelation: "Madinah",
    },
    {
      id: 50,
      nameAr: "ق",
      nameSo: "Qaaf",
      nameEn: "The Letter Qaf",
      verses: 45,
      audio: "050-qaf.mp3",
      revelation: "Makkah",
    },
    {
      id: 51,
      nameAr: "الذاريات",
      nameSo: "Adh-Dhaariyaat",
      nameEn: "The Winnowing Winds",
      verses: 60,
      audio: "051-dhariyat.mp3",
      revelation: "Makkah",
    },
    {
      id: 52,
      nameAr: "الطور",
      nameSo: "At-Tuur",
      nameEn: "The Mount",
      verses: 49,
      audio: "052-tur.mp3",
      revelation: "Makkah",
    },
    {
      id: 53,
      nameAr: "النجم",
      nameSo: "An-Najm",
      nameEn: "The Star",
      verses: 62,
      audio: "053-najm.mp3",
      revelation: "Makkah",
    },
    {
      id: 54,
      nameAr: "القمر",
      nameSo: "Al-Qamar",
      nameEn: "The Moon",
      verses: 55,
      audio: "054-qamar.mp3",
      revelation: "Makkah",
    },
    {
      id: 55,
      nameAr: "الرحمن",
      nameSo: "Ar-Raxmaan",
      nameEn: "The Beneficent",
      verses: 78,
      audio: "055-rahman.mp3",
      revelation: "Madinah",
    },
    {
      id: 56,
      nameAr: "الواقعة",
      nameSo: "Al-Waaqi'ah",
      nameEn: "The Inevitable",
      verses: 96,
      audio: "056-waqia.mp3",
      revelation: "Makkah",
    },
    {
      id: 57,
      nameAr: "الحديد",
      nameSo: "Al-Xadiid",
      nameEn: "The Iron",
      verses: 29,
      audio: "057-hadid.mp3",
      revelation: "Madinah",
    },
    {
      id: 58,
      nameAr: "المجادلة",
      nameSo: "Al-Mujaadilah",
      nameEn: "The Pleading Woman",
      verses: 22,
      audio: "058-mujadila.mp3",
      revelation: "Madinah",
    },
    {
      id: 59,
      nameAr: "الحشر",
      nameSo: "Al-Xashr",
      nameEn: "The Exile",
      verses: 24,
      audio: "059-hashr.mp3",
      revelation: "Madinah",
    },
    {
      id: 60,
      nameAr: "الممتحنة",
      nameSo: "Al-Mumtaxinah",
      nameEn: "She That Is To Be Examined",
      verses: 13,
      audio: "060-mumtahina.mp3",
      revelation: "Madinah",
    },
    {
      id: 61,
      nameAr: "الصف",
      nameSo: "As-Saff",
      nameEn: "The Ranks",
      verses: 14,
      audio: "061-saff.mp3",
      revelation: "Madinah",
    },
    {
      id: 62,
      nameAr: "الجمعة",
      nameSo: "Al-Jumu'ah",
      nameEn: "The Congregation",
      verses: 11,
      audio: "062-jumua.mp3",
      revelation: "Madinah",
    },
    {
      id: 63,
      nameAr: "المنافقون",
      nameSo: "Al-Munaafiquun",
      nameEn: "The Hypocrites",
      verses: 11,
      audio: "063-munafiqun.mp3",
      revelation: "Madinah",
    },
    {
      id: 64,
      nameAr: "التغابن",
      nameSo: "At-Taghaabun",
      nameEn: "The Mutual Disillusion",
      verses: 18,
      audio: "064-taghabun.mp3",
      revelation: "Madinah",
    },
    {
      id: 65,
      nameAr: "الطلاق",
      nameSo: "At-Talaaq",
      nameEn: "The Divorce",
      verses: 12,
      audio: "065-talaq.mp3",
      revelation: "Madinah",
    },
    {
      id: 66,
      nameAr: "التحريم",
      nameSo: "At-Taxriim",
      nameEn: "The Prohibition",
      verses: 12,
      audio: "066-tahrim.mp3",
      revelation: "Madinah",
    },
    {
      id: 67,
      nameAr: "الملك",
      nameSo: "Al-Mulk",
      nameEn: "The Sovereignty",
      verses: 30,
      audio: "067-mulk.mp3",
      revelation: "Makkah",
    },
    {
      id: 68,
      nameAr: "القلم",
      nameSo: "Al-Qalam",
      nameEn: "The Pen",
      verses: 52,
      audio: "068-qalam.mp3",
      revelation: "Makkah",
    },
    {
      id: 69,
      nameAr: "الحاقة",
      nameSo: "Al-Xaaqqah",
      nameEn: "The Reality",
      verses: 52,
      audio: "069-haqqa.mp3",
      revelation: "Makkah",
    },
    {
      id: 70,
      nameAr: "المعارج",
      nameSo: "Al-Ma'aarij",
      nameEn: "The Ascending Stairways",
      verses: 44,
      audio: "070-maarij.mp3",
      revelation: "Makkah",
    },
    { id: 71, nameAr: "نوح", nameSo: "Nuux", nameEn: "Noah", verses: 28, audio: "071-nuh.mp3", revelation: "Makkah" },
    {
      id: 72,
      nameAr: "الجن",
      nameSo: "Al-Jinn",
      nameEn: "The Jinn",
      verses: 28,
      audio: "072-jinn.mp3",
      revelation: "Makkah",
    },
    {
      id: 73,
      nameAr: "المزمل",
      nameSo: "Al-Muzzammil",
      nameEn: "The Enshrouded One",
      verses: 20,
      audio: "073-muzzammil.mp3",
      revelation: "Makkah",
    },
    {
      id: 74,
      nameAr: "المدثر",
      nameSo: "Al-Muddaththir",
      nameEn: "The Cloaked One",
      verses: 56,
      audio: "074-muddathir.mp3",
      revelation: "Makkah",
    },
    {
      id: 75,
      nameAr: "القيامة",
      nameSo: "Al-Qiyaamah",
      nameEn: "The Resurrection",
      verses: 40,
      audio: "075-qiyama.mp3",
      revelation: "Makkah",
    },
    {
      id: 76,
      nameAr: "الإنسان",
      nameSo: "Al-Insaan",
      nameEn: "The Man",
      verses: 31,
      audio: "076-insan.mp3",
      revelation: "Madinah",
    },
    {
      id: 77,
      nameAr: "المرسلات",
      nameSo: "Al-Mursalaat",
      nameEn: "The Emissaries",
      verses: 50,
      audio: "077-mursalat.mp3",
      revelation: "Makkah",
    },
    {
      id: 78,
      nameAr: "النبأ",
      nameSo: "An-Naba'",
      nameEn: "The Tidings",
      verses: 40,
      audio: "078-naba.mp3",
      revelation: "Makkah",
    },
    {
      id: 79,
      nameAr: "النازعات",
      nameSo: "An-Naazi'aat",
      nameEn: "Those Who Drag Forth",
      verses: 46,
      audio: "079-naziat.mp3",
      revelation: "Makkah",
    },
    {
      id: 80,
      nameAr: "عبس",
      nameSo: "'Abasa",
      nameEn: "He Frowned",
      verses: 42,
      audio: "080-abasa.mp3",
      revelation: "Makkah",
    },
    {
      id: 81,
      nameAr: "التكوير",
      nameSo: "At-Takwiir",
      nameEn: "The Overthrowing",
      verses: 29,
      audio: "081-takwir.mp3",
      revelation: "Makkah",
    },
    {
      id: 82,
      nameAr: "الانفطار",
      nameSo: "Al-Infitaar",
      nameEn: "The Cleaving",
      verses: 19,
      audio: "082-infitar.mp3",
      revelation: "Makkah",
    },
    {
      id: 83,
      nameAr: "المطففين",
      nameSo: "Al-Mutaffifiin",
      nameEn: "The Defrauding",
      verses: 36,
      audio: "083-mutaffifin.mp3",
      revelation: "Makkah",
    },
    {
      id: 84,
      nameAr: "الانشقاق",
      nameSo: "Al-Inshiqaaq",
      nameEn: "The Splitting Open",
      verses: 25,
      audio: "084-inshiqaq.mp3",
      revelation: "Makkah",
    },
    {
      id: 85,
      nameAr: "البروج",
      nameSo: "Al-Buruuj",
      nameEn: "The Mansions of Stars",
      verses: 22,
      audio: "085-buruj.mp3",
      revelation: "Makkah",
    },
    {
      id: 86,
      nameAr: "الطارق",
      nameSo: "At-Taariq",
      nameEn: "The Morning Star",
      verses: 17,
      audio: "086-tariq.mp3",
      revelation: "Makkah",
    },
    {
      id: 87,
      nameAr: "الأعلى",
      nameSo: "Al-A'laa",
      nameEn: "The Most High",
      verses: 19,
      audio: "087-ala.mp3",
      revelation: "Makkah",
    },
    {
      id: 88,
      nameAr: "الغاشية",
      nameSo: "Al-Ghaashiyah",
      nameEn: "The Overwhelming",
      verses: 26,
      audio: "088-ghashiya.mp3",
      revelation: "Makkah",
    },
    {
      id: 89,
      nameAr: "الفجر",
      nameSo: "Al-Fajr",
      nameEn: "The Dawn",
      verses: 30,
      audio: "089-fajr.mp3",
      revelation: "Makkah",
    },
    {
      id: 90,
      nameAr: "البلد",
      nameSo: "Al-Balad",
      nameEn: "The City",
      verses: 20,
      audio: "090-balad.mp3",
      revelation: "Makkah",
    },
    {
      id: 91,
      nameAr: "الشمس",
      nameSo: "Ash-Shams",
      nameEn: "The Sun",
      verses: 15,
      audio: "091-shams.mp3",
      revelation: "Makkah",
    },
    {
      id: 92,
      nameAr: "الليل",
      nameSo: "Al-Layl",
      nameEn: "The Night",
      verses: 21,
      audio: "092-layl.mp3",
      revelation: "Makkah",
    },
    {
      id: 93,
      nameAr: "الضحى",
      nameSo: "Ad-Duxaa",
      nameEn: "The Morning Hours",
      verses: 11,
      audio: "093-duha.mp3",
      revelation: "Makkah",
    },
    {
      id: 94,
      nameAr: "الشرح",
      nameSo: "Ash-Sharx",
      nameEn: "The Relief",
      verses: 8,
      audio: "094-sharh.mp3",
      revelation: "Makkah",
    },
    {
      id: 95,
      nameAr: "التين",
      nameSo: "At-Tiin",
      nameEn: "The Fig",
      verses: 8,
      audio: "095-tin.mp3",
      revelation: "Makkah",
    },
    {
      id: 96,
      nameAr: "العلق",
      nameSo: "Al-'Alaq",
      nameEn: "The Clot",
      verses: 19,
      audio: "096-alaq.mp3",
      revelation: "Makkah",
    },
    {
      id: 97,
      nameAr: "القدر",
      nameSo: "Al-Qadr",
      nameEn: "The Power",
      verses: 5,
      audio: "097-qadr.mp3",
      revelation: "Makkah",
    },
    {
      id: 98,
      nameAr: "البينة",
      nameSo: "Al-Bayyinah",
      nameEn: "The Clear Proof",
      verses: 8,
      audio: "098-bayyina.mp3",
      revelation: "Madinah",
    },
    {
      id: 99,
      nameAr: "الزلزلة",
      nameSo: "Az-Zalzalah",
      nameEn: "The Earthquake",
      verses: 8,
      audio: "099-zalzala.mp3",
      revelation: "Madinah",
    },
    {
      id: 100,
      nameAr: "العاديات",
      nameSo: "Al-'Aadiyaat",
      nameEn: "The Courser",
      verses: 11,
      audio: "100-adiyat.mp3",
      revelation: "Makkah",
    },
    {
      id: 101,
      nameAr: "القارعة",
      nameSo: "Al-Qaari'ah",
      nameEn: "The Calamity",
      verses: 11,
      audio: "101-qaria.mp3",
      revelation: "Makkah",
    },
    {
      id: 102,
      nameAr: "التكاثر",
      nameSo: "At-Takaathur",
      nameEn: "The Rivalry In World Increase",
      verses: 8,
      audio: "102-takathur.mp3",
      revelation: "Makkah",
    },
    {
      id: 103,
      nameAr: "العصر",
      nameSo: "Al-'Asr",
      nameEn: "The Declining Day",
      verses: 3,
      audio: "103-asr.mp3",
      revelation: "Makkah",
    },
    {
      id: 104,
      nameAr: "الهمزة",
      nameSo: "Al-Humazah",
      nameEn: "The Traducer",
      verses: 9,
      audio: "104-humaza.mp3",
      revelation: "Makkah",
    },
    {
      id: 105,
      nameAr: "الفيل",
      nameSo: "Al-Fiil",
      nameEn: "The Elephant",
      verses: 5,
      audio: "105-fil.mp3",
      revelation: "Makkah",
    },
    {
      id: 106,
      nameAr: "قريش",
      nameSo: "Quraysh",
      nameEn: "Quraysh",
      verses: 4,
      audio: "106-quraish.mp3",
      revelation: "Makkah",
    },
    {
      id: 107,
      nameAr: "الماعون",
      nameSo: "Al-Maa'uun",
      nameEn: "The Small Kindnesses",
      verses: 7,
      audio: "107-maun.mp3",
      revelation: "Makkah",
    },
    {
      id: 108,
      nameAr: "الكوثر",
      nameSo: "Al-Kawthar",
      nameEn: "The Abundance",
      verses: 3,
      audio: "108-kawthar.mp3",
      revelation: "Makkah",
    },
    {
      id: 109,
      nameAr: "الكافرون",
      nameSo: "Al-Kaafiroon",
      nameEn: "The Disbelievers",
      verses: 6,
      audio: "109-kafirun.mp3",
      revelation: "Makkah",
    },
    {
      id: 110,
      nameAr: "النصر",
      nameSo: "An-Nasr",
      nameEn: "The Divine Support",
      verses: 3,
      audio: "110-nasr.mp3",
      revelation: "Madinah",
    },
    {
      id: 111,
      nameAr: "المسد",
      nameSo: "Al-Masad",
      nameEn: "The Palm Fiber",
      verses: 5,
      audio: "111-masad.mp3",
      revelation: "Makkah",
    },
    {
      id: 112,
      nameAr: "الإخلاص",
      nameSo: "Al-Ikhlaas",
      nameEn: "The Sincerity",
      verses: 4,
      audio: "112-ikhlas.mp3",
      revelation: "Makkah",
    },
    {
      id: 113,
      nameAr: "الفلق",
      nameSo: "Al-Falaq",
      nameEn: "The Daybreak",
      verses: 5,
      audio: "113-falaq.mp3",
      revelation: "Makkah",
    },
    {
      id: 114,
      nameAr: "الناس",
      nameSo: "An-Naas",
      nameEn: "Mankind",
      verses: 6,
      audio: "114-nas.mp3",
      revelation: "Makkah",
    },
  ]

  const filteredChapters = quranChapters.filter(
    (chapter) =>
      chapter.nameAr.includes(searchTerm) ||
      chapter.nameSo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.id.toString().includes(searchTerm),
  )

  // Sample prayer times
  const prayerTimes = [
    { name: language === "so" ? "Subax" : "Fajr", time: "5:30 AM", passed: true },
    { name: language === "so" ? "Duhur" : "Dhuhr", time: "12:45 PM", passed: true },
    { name: language === "so" ? "Casar" : "Asr", time: "3:20 PM", passed: false },
    { name: language === "so" ? "Maghrib" : "Maghrib", time: "6:15 PM", passed: false },
    { name: language === "so" ? "Cishaa" : "Isha", time: "7:45 PM", passed: false },
  ]

  const lessons = [
    {
      id: 1,
      title: language === "so" ? "Sifaadka Allaah" : "Names of Allah",
      duration: "15:30",
      type: "video",
      instructor: "Sheikh Ahmed",
    },
    {
      id: 2,
      title: language === "so" ? "Salaadda iyo Faa'iidadeeda" : "Prayer and Its Benefits",
      duration: "22:15",
      type: "audio",
      instructor: "Sheikh Fatima",
    },
    {
      id: 3,
      title: language === "so" ? "Akhlaaqa Muslimka" : "Muslim Character",
      duration: "18:45",
      type: "video",
      instructor: "Sheikh Omar",
    },
  ]

  const toggleAudio = (audioId: string) => {
    setPlayingAudio(playingAudio === audioId ? null : audioId)
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
                <BookOpen className="w-6 h-6 text-white" />
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
        <Tabs defaultValue="quran" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="quran" className="font-semibold">
              {currentContent.tabs.quran}
            </TabsTrigger>
            <TabsTrigger value="lessons" className="font-semibold">
              {currentContent.tabs.lessons}
            </TabsTrigger>
            <TabsTrigger value="schedule" className="font-semibold">
              {currentContent.tabs.schedule}
            </TabsTrigger>
            <TabsTrigger value="hadith" className="font-semibold">
              {currentContent.tabs.hadith}
            </TabsTrigger>
          </TabsList>

          {/* Quran Tab */}
          <TabsContent value="quran" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.quran.title}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder={currentContent.sections.quran.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-yellow-300 focus:border-yellow-500"
                />
              </div>
            </div>

            <div className="grid gap-4 max-h-96 overflow-y-auto">
              {filteredChapters.map((chapter) => (
                <Card key={chapter.id} className="hover:shadow-lg transition-all duration-300 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center text-white font-bold">
                          {chapter.id}
                        </div>
                        <div>
                          <h3 className="font-black text-lg text-gray-900">{chapter.nameAr}</h3>
                          <p className="text-gray-600 font-medium">
                            {language === "so" ? chapter.nameSo : chapter.nameEn}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>
                              {chapter.verses} {language === "so" ? "aayad" : "verses"}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {chapter.revelation === "Makkah"
                                ? language === "so"
                                  ? "Makki"
                                  : "Meccan"
                                : language === "so"
                                  ? "Madani"
                                  : "Medinan"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleAudio(chapter.audio)}
                          className="border-yellow-300 text-yellow-700 hover:bg-yellow-50"
                        >
                          {playingAudio === chapter.audio ? (
                            <Pause className="w-4 h-4 mr-1" />
                          ) : (
                            <Play className="w-4 h-4 mr-1" />
                          )}
                          {language === "so" ? "Dhageyso" : "Listen"}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-yellow-700">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {language === "so" ? "Akhri" : "Read"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredChapters.length === 0 && searchTerm && (
              <div className="text-center py-8">
                <p className="text-gray-500">{language === "so" ? "Ma jiro suurad la helo" : "No chapters found"}</p>
              </div>
            )}
          </TabsContent>

          {/* Lessons Tab */}
          <TabsContent value="lessons" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.lessons.title}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {lessons.map((lesson) => (
                <Card key={lesson.id} className="hover:shadow-lg transition-all duration-300 border-cyan-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant={lesson.type === "video" ? "default" : "secondary"} className="mb-2">
                        {lesson.type === "video"
                          ? currentContent.sections.lessons.video
                          : currentContent.sections.lessons.audio}
                      </Badge>
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    </div>
                    <CardTitle className="text-lg font-black text-gray-900">{lesson.title}</CardTitle>
                    <p className="text-sm text-gray-600">by {lesson.instructor}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2">
                      <Button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white">
                        <Play className="w-4 h-4 mr-2" />
                        {language === "so" ? "Bilow" : "Play"}
                      </Button>
                      <Button variant="outline" size="sm" className="border-cyan-300 text-cyan-700 bg-transparent">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-cyan-300 text-cyan-700 bg-transparent">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.schedule.title}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-black text-gray-900">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    {currentContent.sections.schedule.prayer}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {prayerTimes.map((prayer, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        prayer.passed ? "bg-gray-100 text-gray-500" : "bg-yellow-50 text-gray-900"
                      }`}
                    >
                      <span className="font-semibold">{prayer.name}</span>
                      <span className="font-mono">{prayer.time}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-cyan-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-black text-gray-900">
                    <Calendar className="w-5 h-5 text-cyan-600" />
                    {language === "so" ? "Taariikhda Islaamka" : "Islamic Calendar"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-6 bg-cyan-50 rounded-lg">
                    <div className="text-2xl font-black text-gray-900 mb-2">15</div>
                    <div className="text-lg font-semibold text-cyan-700 mb-1">
                      {language === "so" ? "Rabii' Al-Awwal" : "Rabi' al-Awwal"}
                    </div>
                    <div className="text-sm text-gray-600">1446 AH</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{language === "so" ? "Bisha dambe:" : "Next month:"}</span>
                      <span className="font-semibold">{language === "so" ? "Rabii' Al-Aakhir" : "Rabi' al-Thani"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Hadith Tab */}
          <TabsContent value="hadith" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-black text-3xl text-gray-900 mb-2">{currentContent.sections.hadith.title}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed text-gray-800 mb-4 font-medium">
                        {language === "so"
                          ? '"Qofkii rumaysta Allaah iyo maalinta dambe, ha ku hadlo wax wanaagsan ama ha aamusan."'
                          : '"Whoever believes in Allah and the Last Day should speak good or remain silent."'}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-semibold">{language === "so" ? "Xadiiska:" : "Source:"}</span>
                        <span>Bukhari & Muslim</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cyan-200 bg-gradient-to-r from-cyan-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed text-gray-800 mb-4 font-medium">
                        {language === "so"
                          ? '"Allaah wuxuu jecel yahay qofka shaqeeya markuu shaqo qabto inuu si fiican u qabto."'
                          : '"Allah loves, when one of you does a job, that he does it with excellence."'}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-semibold">{language === "so" ? "Xadiiska:" : "Source:"}</span>
                        <span>Bayhaqi</span>
                      </div>
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
