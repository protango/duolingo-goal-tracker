<script setup lang="ts">
const props = defineProps<{
  label?: string
  type: 'text' | 'number'
  modelValue: string | number
  max?: number
  min?: number
}>()
</script>

<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div class="input-container">
      <input
        :type="type"
        :value="props.modelValue"
        @input="$emit('update:modelValue', ($event!.target as HTMLInputElement).value)"
        :max="max"
        :min="min"
      />
    </div>
  </div>
</template>

<style scoped>
label {
  font-weight: 700;
  font-size: 18px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

input {
  font-size: 18px;
  padding: 8px 14px 8px 14px;
  border: none;
  background-color: #f7f7f7;
  width: 100%;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: rgb(75, 75, 75);
  font-weight: 500;
}

.input-container {
  border-radius: 12px;
  border: 2px solid #e5e5e5;
  overflow: hidden;
}
</style>
