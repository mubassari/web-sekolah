const Ziggy = {"url":"http:\/\/127.0.0.1:8000","port":8000,"defaults":{},"routes":{"index":{"uri":"\/","methods":["GET","HEAD"]},"admin.index":{"uri":"admin","methods":["GET","HEAD"]},"admin.artikel.index":{"uri":"admin\/artikel","methods":["GET","HEAD"]},"admin.artikel.kategori.index":{"uri":"admin\/artikel\/kategori","methods":["GET","HEAD"]},"admin.artikel.kategori.simpan":{"uri":"admin\/artikel\/kategori","methods":["POST"]},"admin.artikel.kategori.perbarui":{"uri":"admin\/artikel\/kategori\/{kategori}","methods":["POST"],"bindings":{"kategori":"id"}},"admin.artikel.kategori.hapus":{"uri":"admin\/artikel\/kategori\/{kategori}","methods":["DELETE"],"bindings":{"kategori":"id"}},"admin.artikel.tambah":{"uri":"admin\/artikel\/tambah","methods":["GET","HEAD"]},"admin.artikel.simpan":{"uri":"admin\/artikel","methods":["POST"]},"admin.artikel.ubah":{"uri":"admin\/artikel\/ubah\/{artikel}","methods":["GET","HEAD"],"bindings":{"artikel":"id"}},"admin.artikel.perbarui":{"uri":"admin\/artikel\/{artikel}","methods":["POST"],"bindings":{"artikel":"id"}},"admin.artikel.hapus":{"uri":"admin\/artikel\/{artikel}","methods":["DELETE"],"bindings":{"artikel":"id"}},"admin.sekolah.index":{"uri":"admin\/sekolah","methods":["GET","HEAD"]},"admin.sekolah.simpan.umum":{"uri":"admin\/sekolah\/umum","methods":["POST"]},"admin.sekolah.simpan.sosmed":{"uri":"admin\/sekolah\/sosmed","methods":["POST"]},"artikel.index":{"uri":"{kategori}","methods":["GET","HEAD"]},"artikel.tampil":{"uri":"{kategori}\/{artikel}","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
