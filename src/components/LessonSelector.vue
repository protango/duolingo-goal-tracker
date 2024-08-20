<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, ref, watch } from 'vue'
import { langMetadata, LanguageCode } from '@/courses/languageMetadata'
import { LevelType, type DuolingoCourse } from '@/courses/duolingoCourse'
import starIcon from '@/assets/icons/star.svg'
import dumbbellIcon from '@/assets/icons/dumbbells.svg'
import bookIcon from '@/assets/icons/book-open.svg'
import headphonesIcon from '@/assets/icons/headphones.svg'
import chestClosedIcon from '@/assets/icons/chest-closed.svg'
import chestOpenIcon from '@/assets/icons/chest-open.svg'
import trophyIcon from '@/assets/icons/trophy.svg'
import tickIcon from '@/assets/icons/tick.svg'

const props = defineProps<{
  section: number
  unit: number
  course: DuolingoCourse | undefined
}>()

const currentCourse = ref<DuolingoCourse>({
  courseId: 'esfen',
  sections: [
    {
      courseId: 'esfen',
      sectionIndex: 0,
      exampleSentence: '¡Hola! ',
      CEFRLevel: 'INTRO',
      totalUnits: 8,
      totalLevels: 0,
      units: [
        {
          courseId: 'esfen',
          sectionIndex: 0,
          unitIndex: 0,
          absoluteIndex: 0,
          title: 'form basic sentences',
          levels: [
            { type: LevelType.Skill, lessons: 4 },
            { type: LevelType.Skill, lessons: 4 },
            { type: LevelType.Practice, lessons: 2 },
            { type: LevelType.Chest, lessons: 0 },
            { type: LevelType.UnitReview, lessons: 1 }
          ]
        }
      ]
    }
  ]
})

const loading = computed(() => !props.course)

watch(
  () => props.course,
  (newCourseVal) => {
    if (newCourseVal) {
      currentCourse.value = newCourseVal
    }
  }
)

const fromLangCode = computed(() => currentCourse.value.courseId.substring(3) as LanguageCode)
const toLangCode = computed(() => currentCourse.value.courseId.substring(0, 2) as LanguageCode)

const fromLanguageMetadata = computed(() => langMetadata[fromLangCode.value])
const toLanguageMetadata = computed(() => langMetadata[toLangCode.value])

const levelsPerRow = 5

const levelIcons: Record<LevelType, string> = {
  [LevelType.Chest]: chestClosedIcon,
  [LevelType.DuoRadio]: headphonesIcon,
  [LevelType.Practice]: dumbbellIcon,
  [LevelType.Skill]: starIcon,
  [LevelType.Story]: bookIcon,
  [LevelType.UnitReview]: trophyIcon
}

const levels = computed(() => currentCourse.value.sections[props.section].units[props.unit].levels)
const activeIndex = ref(1)
const selectingActiveIndex = ref(0)
function isActive(i: number, alt?: boolean) {
  if (alt) {
    return selectingActiveIndex.value === 0 && i < activeIndex.value
  }
  if (selectingActiveIndex.value > 0) {
    return i < selectingActiveIndex.value
  } else {
    return i < activeIndex.value
  }
}

let releaseTimer: number | undefined
function onPathBtnMouseenter(index: number) {
  if (releaseTimer !== undefined) {
    clearTimeout(releaseTimer)
  }
  selectingActiveIndex.value = index + 1
}
function onPathBtnMouseleave() {
  if (releaseTimer !== undefined) {
    clearTimeout(releaseTimer)
  }
  releaseTimer = setTimeout(() => (selectingActiveIndex.value = 0), 200)
}
</script>

<template>
  <div :style="{ '--path-color': '#1cb0f6' }">
    <div class="banner">
      <div class="headingContainer">
        <h1>SECTION {{ section }}, UNIT {{ unit }}</h1>
        <h2>Describe activities</h2>
      </div>
      <div class="langIconContainer">
        <img v-if="toLanguageMetadata" :src="toLanguageMetadata.flag" />
        <img v-if="fromLanguageMetadata" :src="fromLanguageMetadata.flag" />
      </div>
    </div>
    <div class="levelsContainer">
      <svg class="lines"></svg>
      <div class="levelsGrid">
        <button
          v-for="(lvl, i) in levels"
          :key="i"
          :class="{
            chest: lvl.type === LevelType.Chest,
            levelCircle: lvl.type !== LevelType.Chest,
            active: isActive(i)
          }"
          @mouseenter="onPathBtnMouseenter(i)"
          @mouseleave="onPathBtnMouseleave()"
          @click="(activeIndex = i + 1), (selectingActiveIndex = 0)"
        >
          <img
            v-if="lvl.type !== LevelType.Chest"
            class="btnIcon"
            :src="
              isActive(i) && [LevelType.Skill, LevelType.Practice].includes(lvl.type)
                ? tickIcon
                : levelIcons[lvl.type]
            "
          />
          <img v-else class="chestImg" :src="isActive(i) ? chestOpenIcon : chestClosedIcon" />
          <svg
            width="56"
            height="46"
            viewBox="0 0 56 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="btnShine"
            v-if="lvl.type !== LevelType.Chest && isActive(i, true)"
          >
            <path
              d="M34.35 3.2567C35.3279 2.1181 34.823 0.2765 33.2575 0.1425C32.017 0.0487 30.8284 0 29.6717 0C13.393 0 0 10.2576 0 22.8642C0 26.2874 1.0183 29.799 2.853 32.7132C3.461 33.6113 4.8658 33.7153 5.7404 32.7815L34.3474 3.2664Z"
              fill="currentColor"
            ></path>
            <path
              d="M54.8485 12.5077C53.3806 9.6142 49.7531 6.8397 47.2891 5.1913C46.2732 4.5803 44.8991 4.7653 44.2163 5.584C34.6701 15.4964 18.2948 31.9904 12.0372 38.0378C10.9853 39.2871 10.9779 40.845 12.294 41.7528C16.2713 44.5178 20.876 45.7692 23.4509 45.7433C24.1372 46.2195 24.9764 45.8612 25.2747 45.4271C34.8451 36.1204 49.9937 19.9079 54.4815 15.0917C55.4127 14.4472 55.7715 13.3719 54.8598 12.5382Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  border-radius: 16px;
  background-color: var(--path-color);
  height: 82px;
  border-bottom: 4px solid color-mix(in srgb, var(--path-color), #000 20%);
  padding: 12px 16px 12px 16px;
  display: flex;
}

h1 {
  opacity: 0.7;
  color: white;
  margin: 0;
  font-size: 15px;
  font-weight: 800;
}

h2 {
  color: white;
  margin: 0;
  font-size: 17px;
  font-weight: 800;
}

.headingContainer {
  flex: 1;
}

.langIconContainer {
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  position: relative;
}
.langIconContainer > img {
  border-radius: 5px;
  border: 3px solid rgba(255, 255, 255, 0.5);
}

.langIconContainer > img:last-child {
  border-radius: 3px;
  width: 20px;
  position: relative;
  top: 15px;
  right: 10px;
  box-sizing: content-box;
}

.levelCircle:not(.active) {
  --path-color: #e5e5e5;
}

.levelCircle {
  border-radius: 50%;
  width: 70px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  position: relative;
  background: none;
}
.levelCircle:hover {
  top: 1.5px;
}
.levelCircle:active {
  top: 8px;
}
.levelCircle:hover::after {
  box-shadow:
    0 6.5px 0 rgb(0, 0, 0, 0.2),
    0 6.5px 0 var(--path-color);
}
.levelCircle:active::after {
  box-shadow: none;
}

.levelCircle:active::before {
  display: none;
}
.levelCircle::before {
  content: '';
  background: color-mix(in srgb, var(--path-color), #000 20%);
  width: 100%;
  height: 8px;
  position: absolute;
  z-index: 1;
  top: calc(50% - 4px);
  left: 0;
}
.levelCircle::after {
  content: '';
  background: var(--path-color);
  box-shadow:
    0 8px 0 rgba(0, 0, 0, 0.2),
    0 8px 0 var(--path-color);
  width: 100%;
  height: calc(100% - 8px);
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
}
.levelCircle img {
  z-index: 3;
  margin-bottom: 8px;
  position: relative;
}
.levelsContainer {
  margin-top: 16px;
}

.btnShine {
  position: absolute;
  opacity: 0.2;
  top: 6px;
  left: 6px;
  z-index: 4;
}

button {
  border: none;
  background: none;
  padding: 0;
}

.levelsContainer .chest {
  width: 80px;
  height: 90px;
}
.levelsContainer .chest:hover {
}

.levelsGrid > button {
  display: inline;
  vertical-align: top;
  margin: 0px 8px 0 8px;
}

.levelsGrid {
  display: block;
  margin: 0 auto;
}
</style>
