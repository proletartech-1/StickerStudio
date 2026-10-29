# Proletar Sticker Studio

Aplikasi web untuk menyiapkan desain stiker dan lembar cetak, langsung dari browser.

**Buka aplikasi:** [proletartech.github.io/Proletar-Sticker-Generator-UMKM](https://proletartech.github.io/Proletar-Sticker-Generator-UMKM/)

## Mulai menggunakan

1. Buka aplikasi melalui tautan di atas. Untuk memasang sebagai aplikasi, buka menu browser lalu pilih **Tambahkan ke layar utama** atau **Install app** jika tersedia.
2. Pilih tab sesuai pekerjaan: **Studio Warna**, **Hapus Latar**, **Upscaler**, **Lembar Stiker**, **Pratinjau File**, atau **Invoice**.
3. Unggah gambar, atur hasil, lalu unduh file yang dibutuhkan.

Gunakan browser modern. Instalasi dan dukungan offline bergantung pada browser dan perangkat; buka aplikasi sekali saat online agar asetnya dapat tersimpan.

## Fitur dan format ekspor

- **Studio Warna:** buat variasi warna logo, simpan PNG satu per satu, atau buat batch hingga 100 desain sebagai ZIP.
- **Pratinjau File:** buka PDF, SVG/SVGZ, PNG, JPG, WebP, GIF, BMP, dan AVIF dalam satu menu. CDR dan beberapa format vektor dicoba lewat gambar pratinjau tertanam bila tersedia; file diproses lokal di browser.
- **Invoice:** buat, cetak, dan kelola riwayat invoice dari tab baru. Data Invoice disimpan terpisah secara lokal di browser perangkat ini.
- **Hapus Latar:** hapus latar otomatis atau area warna tersambung; tersedia undo/redo dan unduhan PNG.
- **Upscaler:** perbesar gambar 2×, 3×, atau 4× dengan interpolasi browser. Fitur ini menghaluskan pembesaran, bukan menghasilkan detail baru seperti upscaler AI.
- **Lembar Stiker:** susun beberapa desain pada ukuran kertas termasuk A3+, atur ukuran stiker, jarak, margin, bleed, dan garis potong. Untuk grid, posisi semua bentuk dan ukuran dihitung agar muat sebanyak mungkin; sisa ruang dibagi ke jarak antarstiker tanpa mengurangi jarak minimum, dan stiker yang melampaui area bermargin tidak ditempatkan. Templat CDR potret memakai halaman **32,5 × 48,5 cm**; bingkai magenta **30,5 × 43,5 cm** hanya panduan area print di preview, tidak diekspor sebagai jalur potong. Marka hitamnya berupa siku L terbuka di setiap sudut bingkai dan dua titik bulat di bagian atas kertas. Preset menjaga jarak aman minimal 5 mm dari siku L. Stiker bulat otomatis memakai susunan zigzag khusus CDR dan meratakan sisa ruang agar muatan maksimal tanpa melanggar jarak minimum antarstiker. Kontur potong stiker tetap magenta sesuai ukuran stiker; lingkaran batas aman hitam tidak digunakan. Tambahkan teks kustom di tepi bawah lembar; teks ini tidak dicetak pada masing-masing stiker.
- Ekspor lembar cetak tersedia sebagai **PDF** dan **PNG**; file potong tersedia sebagai **SVG**, **DXF**, dan **PLT**.
- **SVG tanpa gambar** berisi kontur potong dan marka registrasi sebagai vektor; pengaturan bentuk, layout, offset, dan marka tetap diterapkan.
- Nama ekspor lembar cetak dapat mencantumkan pesanan, bahan, laminasi, finishing, potongan, ukuran kertas, bentuk, dan ukuran stiker.

**Catatan produksi:** informasi bahan, laminasi, finishing, dan jenis potongan hanya menjadi label nama file. Pilihan tersebut tidak mengubah proses finishing atau geometri potong secara otomatis. Konfirmasikan spesifikasi produksi dan margin aman dengan percetakan.

## Batas pemrosesan

- Tidak ada batas ukuran file atau megapiksel untuk unggahan gambar.
- Hasil ekspor dibatasi hingga **25 megapiksel** dan sisi terpanjang **12.000 piksel**. Jika perangkat mencapai batas memori, aplikasi menyediakan opsi untuk mencoba lagi dengan resolusi lebih rendah atau membatalkan.
- SVG lembar menyematkan gambar sumber PNG/JPEG satu kali dan memakai ulang untuk duplikat tanpa menurunkan resolusi; logo dengan efek yang perlu diproses piksel tetap dirender sesuai DPI ekspor.
- Total PNG dalam batch Studio Warna dibatasi hingga **64 MB**.
- Penghapus latar dan upscaler bekerja dengan piksel yang berdekatan/warna yang dipilih dan interpolasi; periksa tepi desain sebelum mengirim ke percetakan.

## Berkas proyek

- `index.html` — aplikasi utama dan tab Studio Warna tertanam; entry point GitHub Pages.
- `Studio Warna.html` — Studio Warna mandiri.
- `Proletar Tech · Invoice.html` — aplikasi Invoice yang juga tersedia sebagai tab tertanam di aplikasi utama.
- `BACA-SAYA.txt` — catatan penggunaan dan batas pemrosesan.
- `manifest.webmanifest`, `sw.js`, ikon, dan logo — aset instalasi/PWA.
- `LICENSE` — lisensi proyek.
- `NOTICE.md` — penjelasan lisensi kode dan batas penggunaan merek/aset Proletar.

Perubahan pada branch `main` dipublikasikan melalui GitHub Pages.

## Lisensi dan atribusi

Kode asli Proletar dilisensikan di bawah **GNU GPL v3.0** dan boleh digunakan, diubah, serta didistribusikan, termasuk secara komersial, dengan mengikuti GPLv3 dan ketentuan atribusi tambahan yang dijelaskan di [NOTICE.md](NOTICE.md). Komponen pihak ketiga mengikuti lisensi dan pemberitahuannya masing-masing.

Nama dan logo Proletar merupakan identitas merek terpisah dan tidak mendapat izin penggunaan dari lisensi kode. Baca [NOTICE.md](NOTICE.md) sebelum memakai atau mendistribusikan fork