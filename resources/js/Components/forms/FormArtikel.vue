<script setup>
import { usePage } from '@inertiajs/vue3'
import { InputGeneral, InputSelect, Tiptap } from "~Components/core/forms";
import { ref } from "@vue/reactivity";

const page = usePage()
const lists = ref([{ id: 0, nama: 'Pilih Kategori' }, ...page.props.kategori])

const props = defineProps({
  artikel: { type: Object, required: true },
})
const emits = defineEmits(['submit'])

const clearError = (name) => props.artikel.clearErrors(name)
</script>

<template>
  <form @submit.prevent="">
    <div class="mb-6">
      <InputGeneral v-model="artikel.judul" :error="artikel.errors.judul" @clear-error="clearError" title="Judul Artikel"
        name="judul" required />
      <InputSelect v-model="artikel.artikel_kategori_id" :error="artikel.errors.artikel_kategori_id"
        @clear-error="clearError" title="Kategori Artikel" name="artikel_kategori_id" required :lists="lists" />
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
      <Tiptap v-model="artikel.isi" :error="artikel.errors.isi" @clear-error="clearError" />
    </div>

    <div class="inline-flex rounded-md shadow-sm" role="group">
      <button type="button" :disabled="artikel.processing || !artikel.isDirty"
        :class="{ 'cursor-not-allowed': artikel.processing || !artikel.isDirty }" @click="artikel.reset()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-l-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-gray-600">
        <font-awesome-icon icon="arrow-rotate-left" class="mr-1"></font-awesome-icon>
        Atur Ulang
      </button>
      <button :disabled="artikel.processing || !artikel.isDirty"
        :class="{ 'cursor-not-allowed': artikel.processing || !artikel.isDirty }" @click="$emit('submit')"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-gray-600">
        <font-awesome-icon icon="floppy-disk" class="mr-1"></font-awesome-icon>
        Simpan
      </button>
    </div>
  </form>
</template>