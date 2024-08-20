<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  options: { icon?: string; text: string; value: string | number }[]
  label?: string
  modelValue: string | number
  disabled?: boolean
}>()

const valueMap = computed(() =>
  props.options.reduce(
    (a, x) => ({ ...a, [x.value]: x }),
    {} as Record<string | number, { icon?: string; text: string; value: string | number }>
  )
)
const selectedOption = computed(() => valueMap.value[props.modelValue])
function processRawVal(raw: string) {
  const num = Number(raw)
  if (isNaN(num)) {
    return raw
  } else {
    return num
  }
}
</script>

<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div class="input-container">
      <img class="iconImg" v-if="!!selectedOption?.icon" :src="selectedOption.icon" />
      <select
        :disabled="disabled"
        :value="modelValue"
        @input="
          $emit('update:modelValue', processRawVal(($event?.target as HTMLSelectElement).value))
        "
        :class="{ withIcons: !!selectedOption?.icon }"
      >
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
label {
  font-weight: 700;
  font-size: 18px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

select {
  font-size: 18px;
  padding: 8px 14px 8px 14px;
  border: none;
  background-color: #f7f7f7;
  width: 100%;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: rgb(75, 75, 75);
  font-weight: 500;

  border-radius: 12px;
  border: 2px solid #e5e5e5;
}

select.withIcons {
  padding-left: 50px;
}

.input-container {
  overflow: hidden;
  position: relative;
}

.iconImg {
  height: 20px;
  position: absolute;
  top: 13px;
  left: 13px;
  border-radius: 3px;
}

select:disabled {
  color: #dfdfdf;
  border-color: #eeeeee;
}
</style>
