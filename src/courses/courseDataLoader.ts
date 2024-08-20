import type { DuolingoCourse } from './duolingoCourse'
import type { LanguageCode } from './languageMetadata'

const duoDataLoaders = import.meta.glob('../assets/duolingoData/*/*.json')

export async function courseDataLoader(courseId: string): Promise<DuolingoCourse>
export async function courseDataLoader(
  fromLang: LanguageCode,
  toLang: LanguageCode
): Promise<DuolingoCourse>
export async function courseDataLoader(
  arg1: LanguageCode | string,
  arg2?: LanguageCode
): Promise<DuolingoCourse> {
  let fromLang: LanguageCode, toLang: LanguageCode
  if (arg2 !== undefined) {
    fromLang = arg1 as LanguageCode
    toLang = arg2 as LanguageCode
  } else {
    const match = arg1.match(/([a-z]{2})f([a-z]{2})/)
    if (!match) {
      throw new Error(`Invalid course ID "${arg1}"`)
    }
    fromLang = match[2] as LanguageCode
    toLang = match[1] as LanguageCode
  }

  const loader = duoDataLoaders[`../assets/duolingoData/${fromLang}/${toLang}.json`]

  if (!loader) {
    throw new Error(`No course defintion file found for language "${toLang} from ${fromLang}"`)
  }

  const result = await loader()

  return result as DuolingoCourse
}
