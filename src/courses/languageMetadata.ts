import usFlag from 'flag-icons/flags/4x3/us.svg'
import zuFlag from 'flag-icons/flags/4x3/za.svg'
import cnFlag from 'flag-icons/flags/4x3/cn.svg'
import yiFlag from 'flag-icons/flags/4x3/il.svg'
import vnFlag from 'flag-icons/flags/4x3/vn.svg'
import uaFlag from 'flag-icons/flags/4x3/ua.svg'
import trFlag from 'flag-icons/flags/4x3/tr.svg'
import keFlag from 'flag-icons/flags/4x3/ke.svg'
import seFlag from 'flag-icons/flags/4x3/se.svg'
import ruFlag from 'flag-icons/flags/4x3/ru.svg'
import roFlag from 'flag-icons/flags/4x3/ro.svg'
import plFlag from 'flag-icons/flags/4x3/pl.svg'
import ptFlag from 'flag-icons/flags/4x3/pt.svg'
import navajoFlag from '../assets/flags/navajo.svg'
import nlFlag from 'flag-icons/flags/4x3/nl.svg'
import noFlag from 'flag-icons/flags/4x3/no.svg'
import vaFlag from 'flag-icons/flags/4x3/va.svg'
import krFlag from 'flag-icons/flags/4x3/kr.svg'
import klingonFlag from '../assets/flags/klingon.svg'
import jpFlag from 'flag-icons/flags/4x3/jp.svg'
import itFlag from 'flag-icons/flags/4x3/it.svg'
import idFlag from 'flag-icons/flags/4x3/id.svg'
import hwFlag from '../assets/flags/hawaii.svg'
import xxFlag from 'flag-icons/flags/4x3/xx.svg'
import huFlag from 'flag-icons/flags/4x3/hu.svg'
import htFlag from 'flag-icons/flags/4x3/ht.svg'
import inFlag from 'flag-icons/flags/4x3/in.svg'
import ilFlag from 'flag-icons/flags/4x3/il.svg'
import scFlag from 'flag-icons/flags/4x3/gb-sct.svg'
import ieFlag from 'flag-icons/flags/4x3/ie.svg'
import frFlag from 'flag-icons/flags/4x3/fr.svg'
import fiFlag from 'flag-icons/flags/4x3/fi.svg'
import esperantoFlag from '../assets/flags/esperanto.svg'
import esFlag from 'flag-icons/flags/4x3/es.svg'
import grFlag from 'flag-icons/flags/4x3/gr.svg'
import deFlag from 'flag-icons/flags/4x3/de.svg'
import dkFlag from 'flag-icons/flags/4x3/dk.svg'
import cyFlag from 'flag-icons/flags/4x3/gb-wls.svg'
import czFlag from 'flag-icons/flags/4x3/cz.svg'
import arabFlag from 'flag-icons/flags/4x3/arab.svg'
import caFlag from 'flag-icons/flags/4x3/es-ct.svg'
import thFlag from 'flag-icons/flags/4x3/th.svg'
import teFlag from 'flag-icons/flags/4x3/in.svg'
import phFlag from 'flag-icons/flags/4x3/ph.svg'
import bdFlag from 'flag-icons/flags/4x3/bd.svg'

export enum LanguageCode {
  English = 'en',
  EnglishIntermediate = 'ei',
  Zulu = 'zu',
  Chinese = 'zh',
  Yiddish = 'yi',
  Vietnamese = 'vi',
  Ukrainian = 'uk',
  Turkish = 'tr',
  Swahili = 'sw',
  Swedish = 'sv',
  Russian = 'ru',
  Romanian = 'ro',
  Polish = 'pl',
  Portuguese = 'pt',
  Navajo = 'nv',
  Dutch = 'nl',
  Norwegian = 'nb',
  Latin = 'la',
  Korean = 'ko',
  Klingon = 'kl',
  Japanese = 'ja',
  Italian = 'it',
  Indonesian = 'id',
  Hawaiian = 'hw',
  HighValyrian = 'hv',
  Hungarian = 'hu',
  HaitianCreole = 'ht',
  Hindi = 'hi',
  Hebrew = 'he',
  ScottishGaelic = 'gd',
  Irish = 'ga',
  French = 'fr',
  Finnish = 'fi',
  Esperanto = 'eo',
  Spanish = 'es',
  Greek = 'el',
  German = 'de',
  Danish = 'da',
  Welsh = 'cy',
  Czech = 'cs',
  Arabic = 'ar',
  Cantonese = 'zc',
  Catalan = 'ca',
  Thai = 'th',
  Telugu = 'te',
  Filipino = 'tl',
  Bengali = 'bn'
}

export const preferredLangOrdering: Partial<Record<LanguageCode, number>> = {
  [LanguageCode.English]: 1,
  [LanguageCode.Cantonese]: 2,
  [LanguageCode.Spanish]: 3,
  [LanguageCode.French]: 4,
  [LanguageCode.German]: 5,
  [LanguageCode.Italian]: 6,
  [LanguageCode.Japanese]: 7,
  [LanguageCode.Chinese]: 8,
  [LanguageCode.Russian]: 9,
  [LanguageCode.Korean]: 10,
  [LanguageCode.Portuguese]: 11,
  [LanguageCode.Arabic]: 12,
  [LanguageCode.Dutch]: 13,
  [LanguageCode.Swedish]: 14,
  [LanguageCode.Norwegian]: 15,
  [LanguageCode.Turkish]: 16,
  [LanguageCode.Polish]: 17,
  [LanguageCode.Irish]: 18,
  [LanguageCode.Greek]: 19,
  [LanguageCode.Hebrew]: 20,
  [LanguageCode.Danish]: 21,
  [LanguageCode.Hindi]: 22,
  [LanguageCode.Czech]: 23,
  [LanguageCode.Esperanto]: 24,
  [LanguageCode.Ukrainian]: 25,
  [LanguageCode.Welsh]: 26,
  [LanguageCode.Vietnamese]: 27,
  [LanguageCode.Hungarian]: 28,
  [LanguageCode.Swahili]: 29,
  [LanguageCode.Romanian]: 30,
  [LanguageCode.Indonesian]: 31,
  [LanguageCode.Hawaiian]: 32,
  [LanguageCode.Navajo]: 33,
  [LanguageCode.Klingon]: 34,
  [LanguageCode.HighValyrian]: 35,
  [LanguageCode.Latin]: 36,
  [LanguageCode.ScottishGaelic]: 37,
  [LanguageCode.Finnish]: 38,
  [LanguageCode.Yiddish]: 39,
  [LanguageCode.HaitianCreole]: 40,
  [LanguageCode.Zulu]: 41
}

export interface LangMetadata {
  nativeName: string
  flag: string
}

export const langMetadata: Record<LanguageCode, LangMetadata> = {
  [LanguageCode.English]: {
    nativeName: 'English',
    flag: usFlag
  },
  [LanguageCode.EnglishIntermediate]: {
    nativeName: 'Intermediate English',
    flag: usFlag
  },
  [LanguageCode.Zulu]: {
    nativeName: 'isiZulu',
    flag: zuFlag
  },
  [LanguageCode.Chinese]: {
    nativeName: '中文',
    flag: cnFlag
  },
  [LanguageCode.Yiddish]: {
    nativeName: 'ייִדיש',
    flag: yiFlag
  },
  [LanguageCode.Vietnamese]: {
    nativeName: 'Tiếng Việt',
    flag: vnFlag
  },
  [LanguageCode.Ukrainian]: {
    nativeName: 'Українська',
    flag: uaFlag
  },
  [LanguageCode.Turkish]: {
    nativeName: 'Türkçe',
    flag: trFlag
  },
  [LanguageCode.Swahili]: {
    nativeName: 'Kiswahili',
    flag: keFlag
  },
  [LanguageCode.Swedish]: {
    nativeName: 'Svenska',
    flag: seFlag
  },
  [LanguageCode.Russian]: {
    nativeName: 'Русский',
    flag: ruFlag
  },
  [LanguageCode.Romanian]: {
    nativeName: 'Română',
    flag: roFlag
  },
  [LanguageCode.Polish]: {
    nativeName: 'Polski',
    flag: plFlag
  },
  [LanguageCode.Portuguese]: {
    nativeName: 'Português',
    flag: ptFlag
  },
  [LanguageCode.Navajo]: {
    nativeName: 'Diné bizaad',
    flag: navajoFlag
  },
  [LanguageCode.Dutch]: {
    nativeName: 'Nederlands',
    flag: nlFlag
  },
  [LanguageCode.Norwegian]: {
    nativeName: 'Norsk Bokmål',
    flag: noFlag
  },
  [LanguageCode.Latin]: {
    nativeName: 'Latina',
    flag: vaFlag
  },
  [LanguageCode.Korean]: {
    nativeName: '한국어',
    flag: krFlag
  },
  [LanguageCode.Klingon]: {
    nativeName: 'tlhIngan Hol',
    flag: klingonFlag
  },
  [LanguageCode.Japanese]: {
    nativeName: '日本語',
    flag: jpFlag
  },
  [LanguageCode.Italian]: {
    nativeName: 'Italiano',
    flag: itFlag
  },
  [LanguageCode.Indonesian]: {
    nativeName: 'Bahasa Indonesia',
    flag: idFlag
  },
  [LanguageCode.Hawaiian]: {
    nativeName: 'ʻŌlelo Hawaiʻi',
    flag: hwFlag
  },
  [LanguageCode.HighValyrian]: {
    nativeName: 'Valyrio Māzis',
    flag: xxFlag // Placeholder
  },
  [LanguageCode.Hungarian]: {
    nativeName: 'Magyar',
    flag: huFlag
  },
  [LanguageCode.HaitianCreole]: {
    nativeName: 'Kreyòl Ayisyen',
    flag: htFlag
  },
  [LanguageCode.Hindi]: {
    nativeName: 'हिन्दी',
    flag: inFlag
  },
  [LanguageCode.Hebrew]: {
    nativeName: 'עברית',
    flag: ilFlag
  },
  [LanguageCode.ScottishGaelic]: {
    nativeName: 'Gàidhlig',
    flag: scFlag
  },
  [LanguageCode.Irish]: {
    nativeName: 'Gaeilge',
    flag: ieFlag
  },
  [LanguageCode.French]: {
    nativeName: 'Français',
    flag: frFlag
  },
  [LanguageCode.Finnish]: {
    nativeName: 'Suomi',
    flag: fiFlag
  },
  [LanguageCode.Esperanto]: {
    nativeName: 'Esperanto',
    flag: esperantoFlag
  },
  [LanguageCode.Spanish]: {
    nativeName: 'Español',
    flag: esFlag
  },
  [LanguageCode.Greek]: {
    nativeName: 'Ελληνικά',
    flag: grFlag
  },
  [LanguageCode.German]: {
    nativeName: 'Deutsch',
    flag: deFlag
  },
  [LanguageCode.Danish]: {
    nativeName: 'Dansk',
    flag: dkFlag
  },
  [LanguageCode.Welsh]: {
    nativeName: 'Cymraeg',
    flag: cyFlag
  },
  [LanguageCode.Czech]: {
    nativeName: 'Čeština',
    flag: czFlag
  },
  [LanguageCode.Arabic]: {
    nativeName: 'العربية',
    flag: arabFlag
  },
  [LanguageCode.Cantonese]: {
    nativeName: '中文 (粤语)',
    flag: cnFlag
  },
  [LanguageCode.Catalan]: {
    nativeName: 'Català',
    flag: caFlag
  },
  [LanguageCode.Thai]: {
    nativeName: 'ไทย',
    flag: thFlag
  },
  [LanguageCode.Telugu]: {
    nativeName: 'తెలుగు',
    flag: teFlag
  },
  [LanguageCode.Filipino]: {
    nativeName: 'Filipino',
    flag: phFlag
  },
  [LanguageCode.Bengali]: {
    nativeName: 'বাংলা',
    flag: bdFlag
  }
}
