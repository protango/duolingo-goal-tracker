import { promises as fs } from 'fs'
import { glob } from 'glob'
import { RawDuolingoCourse } from './rawDuolingoCourse'
import { DuolingoCourse, DuolingoCourseUnit, LevelType } from './duolingoCourse'
import path from 'path'

async function main() {
  // Copy type defs into main project
  await fs.copyFile('./src/duolingoCourse.ts', '../src/courses/duolingoCourse.ts')

  const courseMasterList: Record<string, string[]> = {}
  const files = await glob('./duolingoData/**/*.json')
  for (const filePath of files) {
    console.log(`Processing file: ${filePath}`)
    const rawContent: RawDuolingoCourse = JSON.parse(
      await fs.readFile(filePath, { encoding: 'utf8' })
    )
    const fileContent = rawContent.currentCourse

    const courseId = path
      .basename(filePath)
      .replace(/\.[^.]+$/, '')
      .replace(/\d+/g, '')
    const partsCourseId = courseId.match(/([a-z]{2})f([a-z]{2})/)
    if (!partsCourseId) {
      throw new Error(`File name is not in correct format! "${filePath}"`)
    }

    const fromLangCode = partsCourseId[2]
    let toLangCode = partsCourseId[1]

    if (fromLangCode === 'en' && toLangCode === 'en') {
      toLangCode = 'ei' // For intermediate english
    }

    courseMasterList[fromLangCode] = courseMasterList[fromLangCode] ?? []

    courseMasterList[fromLangCode].push(toLangCode)

    const result: DuolingoCourse = {
      courseId: courseId,
      sections: fileContent.pathSectioned.map((pathSect) => {
        const units = pathSect.units.map<DuolingoCourseUnit>((unit, i) => {
          return {
            courseId: courseId,
            sectionIndex: pathSect.index,
            unitIndex: i,
            absoluteIndex: unit.unitIndex,
            title: unit.teachingObjective ?? '',
            levels: unit.levels.map((level) => ({
              type: level.type as string as LevelType,
              lessons:
                (level.type as string as LevelType) === LevelType.Chest ? 0 : level.totalSessions
            }))
          }
        })
        return {
          courseId: courseId,
          sectionIndex: pathSect.index,
          exampleSentence: pathSect.exampleSentence?.exampleSentence,
          CEFRLevel: pathSect.cefr?.level,
          totalUnits: pathSect.totalUnits,
          totalLevels: 0,
          units
        }
      })
    }
    try {
      await fs.access('../src/assets/duolingoData')
    } catch {
      await fs.mkdir('../src/assets/duolingoData')
    }
    try {
      await fs.access('../src/assets/duolingoData/' + fromLangCode)
    } catch {
      await fs.mkdir('../src/assets/duolingoData/' + fromLangCode)
    }
    await fs.writeFile(
      path.join('../src/assets/duolingoData', fromLangCode, toLangCode + '.json'),
      JSON.stringify(result)
    )
  }

  await fs.writeFile(
    path.join('../src/assets/duolingoData', 'courseList.json'),
    JSON.stringify(courseMasterList)
  )
}

main()
