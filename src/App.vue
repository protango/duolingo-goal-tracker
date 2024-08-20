<script setup lang="ts">
import InputBox from './components/InputBox.vue'
import LessonSelector from './components/LessonSelector.vue'
import DropdownBox from './components/DropdownBox.vue'
import { computed, ref, watch } from 'vue'
import { langMetadata, LanguageCode, preferredLangOrdering } from './courses/languageMetadata'
import courseListRaw from './assets/duolingoData/courseList.json'
import { useI18n } from 'vue-i18n'
import { courseDataLoader } from './courses/courseDataLoader'
import type { DuolingoCourse } from './courses/duolingoCourse'

const { t, locale } = useI18n({ useScope: 'global' })
const fromLangCode = ref<LanguageCode>(LanguageCode.English)
const toLangCode = ref<LanguageCode>(LanguageCode.Spanish)
const section = ref(0)
const unit = ref(0)
const currentCourse = ref<DuolingoCourse | undefined>()

const courseList = courseListRaw as Record<LanguageCode, LanguageCode[] | undefined>
const fromLangSelections = Object.keys(courseList)
  .map((fromLangCode) => {
    const lang = langMetadata[fromLangCode as LanguageCode]
    return {
      icon: lang.flag,
      text: lang.nativeName,
      value: fromLangCode as LanguageCode
    }
  })
  .sort((a, b) => (a.value === LanguageCode.English ? -1 : a.value.localeCompare(b.value)))

const toLangSelections = computed(() => {
  const langs = courseList[fromLangCode.value] ?? []
  return langs
    .map((toLangCode) => {
      const lang = langMetadata[toLangCode as LanguageCode]
      return {
        icon: lang.flag,
        text: t('lang.' + toLangCode),
        value: toLangCode
      }
    })
    .sort(
      (a, b) => (preferredLangOrdering[a.value] ?? 999) - (preferredLangOrdering[b.value] ?? 999)
    )
})

watch(fromLangCode, () => {
  toLangCode.value = toLangSelections.value[0].value
})

watch(
  [fromLangCode, toLangCode],
  async () => {
    currentCourse.value = undefined
    section.value = 0
    unit.value = 0
    currentCourse.value = await courseDataLoader(fromLangCode.value, toLangCode.value)
  },
  { immediate: true }
)

watch(section, () => (unit.value = 0))

const sectionSelections = computed(() =>
  !currentCourse.value
    ? undefined
    : currentCourse.value.sections.map((x) => ({
        text: String(x.sectionIndex + 1),
        value: x.sectionIndex
      }))
)

const unitSelections = computed(() =>
  !currentCourse.value
    ? undefined
    : currentCourse.value.sections[section.value]?.units.map((x) => ({
        text: String(x.unitIndex + 1),
        value: x.unitIndex
      }))
)

function changeLanguage() {
  if (locale.value === 'en') {
    locale.value = 'es'
  } else {
    locale.value = 'en'
  }
}
</script>

<template>
  <main>
    <div class="wrapper">
      <h1>{{ $t('mainTitle') }}</h1>
      <DropdownBox
        :label="$t('mainForm.sourceLang')"
        :options="fromLangSelections"
        v-model="fromLangCode"
        class="fromLangSelect"
      />
      <div class="currentPositionSelection">
        <DropdownBox
          :label="$t('mainForm.course')"
          :options="toLangSelections"
          v-model="toLangCode"
        />
        <DropdownBox
          :label="$t('mainForm.section')"
          :options="sectionSelections ?? []"
          v-model="section"
          :disabled="!sectionSelections"
        />
        <DropdownBox
          :label="$t('mainForm.unit')"
          :options="unitSelections ?? []"
          v-model="unit"
          :disabled="!unitSelections"
        />
      </div>
      <LessonSelector :section="section" :unit="unit" :course="currentCourse" />
    </div>

    <button @click="changeLanguage()">{{ $t('changeLanguage') }}</button>
  </main>
</template>

<style scoped>
main {
  max-width: 500px;
  margin: 0px auto;
}
.currentPositionSelection {
  display: flex;
  margin-bottom: 16px;
  gap: 16px;
}
.currentPositionSelection > div {
  flex: 1;
}
.currentPositionSelection > div:first-child {
  flex: 2;
}
.fromLangSelect {
  margin-bottom: 16px;
}
</style>
