<script setup>
import { InputGeneral, InputImage } from '~Components/core/forms'
import { ref } from '@vue/reactivity'

const props = defineProps({
  sekolah: { type: Object, required: true },
})

const inputLogoSekolah = ref(null);
const inputIkonSekolah = ref(null);

const emits = defineEmits(['submit'])
const resetForm = () => {
  props.sekolah.reset();
  inputLogoSekolah.value.imagePreview = props.sekolah.logo;
  inputIkonSekolah.value.imagePreview = props.sekolah.ikon;
}
const clearError = (name) => props.sekolah.clearErrors(name)
</script>
<template>
  <form @submit.prevent="">
    <div class="mb-6">
      <InputGeneral v-model="sekolah.nama" :error="sekolah.errors.nama" @clear-error="clearError" title="Nama Sekolah"
        name="nama" required />
      <div class="grid grid-cols-1 md:gap-5 md:grid-cols-2">
        <InputImage v-model="sekolah.logo" :error="sekolah.errors.logo" @clear-error="clearError" title="Logo Sekolah"
          name="logo" ref="inputLogoSekolah" accept="image/jpeg,image/png,image/jpg" />
        <InputImage v-model="sekolah.ikon" :error="sekolah.errors.ikon" @clear-error="clearError" title="Ikon Sekolah"
          name="ikon" ref="inputIkonSekolah" accept="image/jpeg,image/png,image/jpg" />
      </div>
      <div class="grid grid-cols-1 md:gap-5 md:grid-cols-2">
        <InputGeneral v-model="sekolah.npsn" :error="sekolah.errors.npsn" @clear-error="clearError" title="NPSN"
          name="npsn" type="number" />
        <InputGeneral v-model="sekolah.nss" :error="sekolah.errors.nss" @clear-error="clearError" title="NSS" name="nss"
          type="number" />
      </div>
      <InputGeneral v-model="sekolah.alamat" :error="sekolah.errors.alamat" @clear-error="clearError" title="Alamat"
        name="alamat" required />
      <div class="grid grid-cols-1 md:gap-5 md:grid-cols-2">
        <InputGeneral v-model="sekolah.telepon" :error="sekolah.errors.telepon" @clear-error="clearError"
          title="Nomor Telepon" name="telepon" />
        <InputGeneral v-model="sekolah.email" :error="sekolah.errors.email" @clear-error="clearError" title="Email"
          name="email" type="email" />
      </div>
    </div>
    <div class="inline-flex rounded-md shadow-sm" role="group">
      <button type="button" :disabled="sekolah.processing || !sekolah.isDirty"
        :class="{ 'cursor-not-allowed': sekolah.processing || !sekolah.isDirty }" @click="resetForm"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-l-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-gray-600">
        <font-awesome-icon icon="arrow-rotate-left" class="mr-1"></font-awesome-icon>
        Atur Ulang
      </button>
      <button :disabled="sekolah.processing || !sekolah.isDirty"
        :class="{ 'cursor-not-allowed': sekolah.processing || !sekolah.isDirty }" @click="$emit('submit')"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-gray-600">
        <font-awesome-icon icon="floppy-disk" class="mr-1"></font-awesome-icon>
        Simpan
      </button>
    </div>
  </form>
</template>