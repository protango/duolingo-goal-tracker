export interface DuolingoCourse {
  courseId: string
  sections: DuolingoCourseSection[]
}

export interface DuolingoCourseSection {
  courseId: string
  sectionIndex: number
  exampleSentence?: string
  CEFRLevel?: string
  totalLevels: number
  totalUnits: number
  units: DuolingoCourseUnit[]
}

export interface DuolingoCourseUnit {
  courseId: string
  sectionIndex: number
  unitIndex: number
  absoluteIndex: number
  title: string
  levels: DuolingoCourseLevel[]
}

export interface DuolingoCourseLevel {
  type: LevelType
  lessons: number
}

export enum LevelType {
  Chest = 'chest',
  DuoRadio = 'duo_radio',
  Practice = 'practice',
  Skill = 'skill',
  Story = 'story',
  UnitReview = 'unit_review'
}
