<script setup>
import { AdminLayout } from '~Layouts';
import { Card } from "~Components/core"
import { FormArtikel } from "~Components/forms"
import { useForm } from "@inertiajs/vue3";
import { ref } from '@vue/reactivity';

const title = ref('Ubah Artikel');

const props = defineProps({ artikel: { type: Object, required: true } })

const artikel = useForm({
  id: props.artikel.id,
  judul: props.artikel.judul,
  isi: props.artikel.isi,
  artikel_kategori_id: props.artikel.artikel_kategori_id,
})

</script>

<template>
  <AdminLayout :title="title">
    <div class="mb-4 col-span-full xl:mb-2">
      <h1 class="mb-3 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
        {{ title }}
      </h1>
    </div>
    <Card class="mb-4 col-span-full xl:mb-2">
      <FormArtikel :artikel="artikel" @submit="artikel.put(route('admin.artikel.perbarui', artikel.id))" />
    </Card>
  </AdminLayout>
</template>