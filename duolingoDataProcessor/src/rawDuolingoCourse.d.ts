export interface RawDuolingoCourse {
  currentCourse: {
    assignments: any[]
    progressVersion: number
    managedInHouse: boolean
    subject: string
    pathSectioned: PathSectioned[]
    activePathSectionId: string
    smartTips: SmartTip[]
    title: string
    preload: boolean
    trackingProperties: TrackingProperties
    placementDepth: null
    ttsAccents: null
    alphabetsPathProgressKey: null
    numberOfWords: number
    skills: Array<Skill[]>
    path: any[]
    numberOfSentences: number
    id: string
    fromLanguage: string
    globalPracticeMetadata: null
    wordsLearned: number
    fluency: null
    authorId: string
    finalCheckpointSession: string
    pathDetails: PathDetails
    storiesTabPromotionLocation: null
    sections: Section[]
    sideQuestProgress: SideQuestProgress
    inLessonAvatars: any[]
    placementTestAvailable: boolean
    learningLanguage: string
    crowns: number
    extraCrowns: number
    xp: number
    topic: string
    healthEnabled: boolean
    pathExperiments: string[]
    pathSectionsSummary: PathSectionsSummary[]
    checkpointTests: any[]
    status: string
  }
}

export interface PathDetails {
  notifications: any[]
  clientNotifications: any[]
}

export interface PathSectioned {
  index: number
  debugName: string
  type: string
  completedUnits: number
  totalUnits: number
  units: Unit[]
  cefr: Cefr | null
  summary: Summary | null
  exampleSentence: ExampleSentence | null
  id: string
}

export interface Cefr {
  level: MaxCefrLevel
  sublevel?: number
  granularLevel?: string
}

export enum MaxCefrLevel {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  Intro = 'Intro',
  MaxCefrLevelINTRO = 'INTRO'
}

export interface ExampleSentence {
  exampleSentence: string
  transliterationJson: null
}

export interface Summary {
  grammarConceptUrl: string
  cefrContentUrl: string
}

export interface Unit {
  unitIndex: number
  levels: Level[]
  guidebook: Guidebook | null
  teachingObjective: null | string
  cefrLevel: MaxCefrLevel
}

export interface Guidebook {
  url: string
}

export interface Level {
  id: string
  state: State
  finishedSessions: number
  pathLevelMetadata: PathLevelMetadata
  pathLevelClientData: PathLevelClientData
  totalSessions: number
  debugName: string
  hasLevelReview: boolean
  type: Type
  subtype: Subtype
  isInProgressSequence: boolean
  dailyRefreshInfo: DailyRefreshInfo | null
  absoluteNodeIndex: number
}

export interface DailyRefreshInfo {
  nodeIndex: number
  expiresAt: number
}

export interface PathLevelClientData {
  skillId?: string
  crownLevelIndex?: number
  hardModeLevelIndex?: number
  teachingObjective?: string
  assignmentInfo?: null
  skillIds?: string[]
  isPathExtension?: boolean
  storyId?: string
  mode?: Subtype
  eligibleModes?: EligibleMode[]
  storyName?: string
  fixedXpAward?: number
  duoRadioSummary?: DuoRadioSummary
  dailyRefreshIndex?: number
  expiresAt?: number
}

export interface DuoRadioSummary {
  id: string
  episode_id: string
  name: string
  version: number
  viable_skill_ids: string[]
}

export enum EligibleMode {
  Conversation = 'CONVERSATION',
  Listen = 'LISTEN',
  Read = 'READ'
}

export enum Subtype {
  Chest = 'chest',
  DuoRadio = 'duo_radio',
  Grammar = 'grammar',
  Listen = 'listen',
  Practice = 'practice',
  Read = 'read',
  Regular = 'regular',
  UnitPractice = 'unit_practice',
  UnitReview = 'unit_review'
}

export interface PathLevelMetadata {
  skillId?: string
  crownLevelIndex?: number
  anchorSkillId?: string
  indexSinceAnchorSkill?: number
  treeId?: TreeID
  unitIndex?: number
  storyId?: string
  mode?: Subtype
  duoRadioSummary?: DuoRadioSummary
  duoRadioProgress?: DuoRadioProgress
  skillIds?: string[]
}

export interface DuoRadioProgress {
  completions: any[]
}

export enum TreeID {
  The209338530709D160Ba0049Addfd664Ee = '209338530709d160ba0049addfd664ee'
}

export enum State {
  Active = 'active',
  Locked = 'locked',
  Passed = 'passed'
}

export enum Type {
  Chest = 'chest',
  DuoRadio = 'duo_radio',
  Practice = 'practice',
  Skill = 'skill',
  Story = 'story',
  UnitReview = 'unit_review'
}

export interface PathSectionsSummary {
  id: string
  index: number
  debugName: string
  type: string
  completedLevels: Levels
  totalLevels: Levels
  completedUnits: number
  totalUnits: number
  totalLevelsPerUnit: number[]
  completedLevelsPerUnit: number[]
  cefr: Cefr | null
  summary: Summary | null
  exampleSentence: ExampleSentence | null
  firstUnitTestNode: null
  lastUnitReviewNode: null
}

export interface Levels {
  skill?: number
  practice?: number
  chest?: number
  unit_review?: number
  story?: number
  duo_radio?: number
}

export interface Section {
  checkpointAccessible: boolean
  checkpointFinished: boolean
  checkpointSessionType: CheckpointSessionType
  masteryScore: null
  name: string
  numRows: number
  summary: string
  cefrLevel: MaxCefrLevel
}

export enum CheckpointSessionType {
  CheckpointTest = 'CHECKPOINT_TEST'
}

export interface SideQuestProgress {}

export interface Skill {
  accessible?: boolean
  experimentIds: any[]
  experimentalLessons: any[]
  explanation?: Explanation
  finalLevelTimeLimit: number
  finishedLessons: number
  finishedLevels: number
  hasLevelReview: boolean
  hasFinalLevel: boolean
  iconId: number
  id: string
  lastLessonPerfect: boolean
  lessons: number
  levels: number
  name: string
  perfectLessonStreak: number
  shortName: string
  skillType: SkillType
  strength: null
  tipsAndNotes: null | string
  urlName: string
  bonus?: boolean
  grammar?: boolean
  isGrammar?: boolean
}

export interface Explanation {
  intro: null
  title: string
  url: string
}

export enum SkillType {
  Bonus = 'BONUS',
  Grammar = 'GRAMMAR',
  Normal = 'NORMAL'
}

export interface SmartTip {
  url: string
  smartTipId: string
}

export interface TrackingProperties {
  direction: string
  learning_language: string
  ui_language: string
  max_cefr_level: MaxCefrLevel
  max_tree_level: number
  max_section_index: number
  skill_tree_id: TreeID
  took_placementtest: boolean
  course_subject: string
  course_topic_id: string
  course_id: string
  path_position_active_node_index: number
  path_position_active_unit_index: number
  path_position_active_section_index: number
  path_position_active_section_cefr: MaxCefrLevel
  path_position_content_type: null
  path_uses_unit_vision: boolean
}
