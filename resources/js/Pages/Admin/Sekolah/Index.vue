<script setup>
import { AdminLayout } from '~Layouts';
import { Card } from '~Components/core'
import { FormUmumSekolah, FormSosmedSekolah, FormLokasiSekolah } from '~Components/forms'
import { useForm } from "@inertiajs/vue3";
import { ref } from '@vue/reactivity';

const title = ref('Pengaturan Data Sekolah');

const props = defineProps({
  umum: { type: Object, required: true },
  sosmed: { type: Object, required: true },
  lokasi: { type: Object, required: true },
})

const umum = useForm({
  nama: props.umum.nama,
  logo: props.umum.logo,
  ikon: props.umum.ikon,
  npsn: props.umum.npsn,
  nss: props.umum.nss,
  alamat: props.umum.alamat,
  telepon: props.umum.telepon,
  email: props.umum.email,
})

const sosmed = useForm({
  facebook: props.sosmed.facebook,
  instagram: props.sosmed.instagram,
  tiktok: props.sosmed.tiktok,
  twitter: props.sosmed.twitter,
})

const lokasi = useForm({
  longitude: props.lokasi.longitude,
  latitude: props.lokasi.latitude,
})
</script>

<template>
  <AdminLayout :title="title">
    <div class="mb-4 col-span-full xl:mb-2">
      <h1 class="mb-3 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
        {{ title }}
      </h1>
    </div>
    <div>
      <Card id="umum" title="Pengaturan Umum" class="scroll-my-20">
        <FormUmumSekolah :sekolah="umum" @submit="umum.post(route('admin.sekolah.simpan.umum'))" />
      </Card>
    </div>
    <div>
      <Card id="lokasi" title="Pengaturan Lokasi Sekolah" class="scroll-my-20">
        <FormLokasiSekolah :sekolah="lokasi" @submit="lokasi.post(route('admin.sekolah.simpan.lokasi'))" />
      </Card>
      <Card id="sosmed" title="Pengaturan Sosial Media" class="scroll-my-20">
        <FormSosmedSekolah :sekolah="sosmed" @submit="sosmed.post(route('admin.sekolah.simpan.sosmed'))" />
      </Card>
    </div>
  </AdminLayout>
</template>