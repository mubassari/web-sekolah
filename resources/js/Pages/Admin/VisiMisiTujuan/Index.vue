<script setup>
import { AdminLayout } from '~Layouts';
import { Card } from '~Components/core'
import { FormVisiSekolah, FormMisiTujuanSekolah } from '~Components/forms'
import { useForm } from "@inertiajs/vue3";
import { ref } from '@vue/reactivity';

const title = ref('Pengaturan Visi, Misi & Tujuan Sekolah');

const props = defineProps({
  visi_misi_tujuan: { type: Object, required: true },
})

const visi = useForm({
  content: props.visi_misi_tujuan.visi,
})
const misi = useForm({
  content: props.visi_misi_tujuan.misi,
})
const tujuan = useForm({
  content: props.visi_misi_tujuan.tujuan,
})
</script>

<template>
  <AdminLayout :title="title">
    <div class="mb-4 col-span-full xl:mb-2">
      <h1 class="mb-3 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
        {{ title }}
      </h1>
    </div>
    <div class="col-span-full">
      <Card id="visi" title="Visi Sekolah" class="scroll-my-20">
        <FormVisiSekolah :sekolah="visi" @submit="visi.post(route('admin.visi_misi_tujuan.simpanVisi'))" />
      </Card>
    </div>
    <div>
      <Card id="misi" title="Misi Sekolah" class="scroll-my-20">
        <FormMisiTujuanSekolah :sekolah="misi" @submit="misi.post(route('admin.visi_misi_tujuan.simpanMisi'))" />
      </Card>
    </div>
    <div>
      <Card id="tujuan" title="Tujuan Sekolah" class="scroll-my-20">
        <FormMisiTujuanSekolah :sekolah="tujuan" @submit="tujuan.post(route('admin.visi_misi_tujuan.simpanTujuan'))" />
      </Card>
    </div>
  </AdminLayout>
</template>