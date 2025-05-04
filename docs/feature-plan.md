# 📜 Dokumentasi Fitur Bot Kannatan

Dokumentasi ini mencakup semua command dan fitur bot. Checklist dapat digunakan untuk menandai fitur yang sudah diimplementasikan.

---

## 1. 🎮 Mini Games

- [ ] `/rps [pilihan]`  
  Main suit batu-gunting-kertas dengan bot.

- [ ] `/guess-number`  
  Bot akan memilih angka acak, user harus menebak.

- [ ] `/scramble`  
  Tebak kata dari huruf acak.

- [ ] `/joke`  
  Mendapatkan joke acak dari bot.

---

## 2. 🛡️ Moderation

- [ ] `/ban [@user] [alasan?]`  
  Ban member dari server.

- [ ] `/kick [@user] [alasan?]`  
  Kick member dari server.

- [ ] `/mute [@user] [durasi?]`  
  Mute member.

- [ ] `/warn [@user] [alasan?]`  
  Memberikan peringatan ke member.

- [ ] `/purge [jumlah]`  
  Menghapus sejumlah pesan sekaligus.

- [ ] `/clear [@user] [jumlah]`  
  Menghapus pesan dari user tertentu.

---

## 3. 📊 Informasi

- [ ] `/userinfo [@user?]`  
  Menampilkan informasi user.

- [ ] `/serverinfo`  
  Menampilkan informasi server.

- [ ] `/avatar [@user?]`  
  Menampilkan avatar user.

- [ ] `/serveravatar`  
  Menampilkan ikon server.

---

## 4. 👥 Sosial & Interaktif

### One Word Story
Cerita satu kata per pesan.

- [ ] `/onewordstory config channel [#channel]`  
  Set channel khusus untuk sesi One Word Story.

- [ ] `/onewordstory start`  
  Mulai sesi — bot otomatis melacak setiap kata dari pesan user.

- [ ] `/onewordstory summary`  
  Ringkasan cerita sampai saat ini.

- [ ] `/onewordstory rollback [jumlah]`  
  Hapus kata terakhir sebanyak [jumlah].

- [ ] `/onewordstory end`  
  Akhiri sesi dan berhenti melacak pesan.

---

### Collaborative Writing
Cerita kolaboratif kalimat per kalimat.

- [ ] `/collabwrite config channel [#channel]`  
  Set channel untuk cerita kolaboratif.

- [ ] `/collabwrite start`  
  Mulai sesi — bot otomatis melacak setiap kalimat dari pesan user.

- [ ] `/collabwrite summary`  
  Ringkasan cerita saat ini.

- [ ] `/collabwrite rollback [jumlah]`  
  Hapus kalimat terakhir sebanyak [jumlah].

- [ ] `/collabwrite end [judul?]`  
  Akhiri sesi. Jika `judul` disediakan, bot generate file cerita dengan judul tersebut.

---

### Roleplay
Interaksi ekspresif antar user.

- [ ] `/roleplay punch [@user]`
- [ ] `/roleplay kick [@user]`
- [ ] `/roleplay hug [@user]`
- [ ] `/roleplay slap [@user]`
- [ ] `/roleplay pat [@user]`
- [ ] `/roleplay think`
- [ ] `/roleplay cry`
- [ ] `/roleplay sleep`
- [ ] `/roleplay shoot [@user]`
- [ ] `/roleplay rasengan [@user]`

---

## 5. 📢 Pengumuman & Auto Pesan

- [ ] `/config welcome [#channel] [pesan]`  
  Set channel dan pesan selamat datang.

- [ ] `/config goodbye [#channel] [pesan]`  
  Set channel dan pesan keluar member.

- [ ] `/config banmessage [#channel] [pesan]`  
  Set channel dan pesan saat user diban.

- [ ] `/say [#channel] [pesan]`  
  Minta bot kirim pesan ke channel tertentu.

---

## 6. 🛎️ Scheduler & Reminder

- [ ] `/remindme [jam] [pesan]`  
  Set alarm pribadi, bot akan mention saat waktu tiba.

- [ ] `/scheduler add [setiap/jam] [pesan]`  
  Kirim pesan berkala secara otomatis.

---

## 7. 📝 Sistem Pelaporan

- [ ] `/report [alasan]`  
  Kirim laporan ke tim admin, akan dibuatkan channel otomatis.

- [ ] `/report config category [kategoriID]`  
  Set kategori tempat laporan akan dibuat.

- [ ] `/report config role [roleID]`  
  Set role yang akan di tag saat laporan dibuat.

---

## 8. 🎭 Reaction Role

- [ ] `/reactionrole create [judul] [#channel] [deskripsi]`  
  Buat pesan reaction role.

- [ ] `/reactionrole add [emoji] [role]`  
  Tambah opsi emoji-role ke pesan reaction.

---

## 9. 🎨 Emoji & Stiker

- [ ] `/emoji add [nama] [url]`  
  Tambah emoji custom ke server.

- [ ] `/emoji delete [nama]`  
  Hapus emoji dari server.

- [ ] `/sticker add [nama] [url] [tipe]`  
  Tambah stiker ke server.

- [ ] `/sticker delete [nama]`  
  Hapus stiker dari server.

---

## 10. 🎚️ Leveling System

- [ ] `/leveling config exp [level] [jumlah]`  
  Set jumlah exp yang dibutuhkan untuk level tertentu.

- [ ] `/leveling reward [level] [role]`  
  Atur reward role saat mencapai level tertentu.

- [ ] `/leveling view [@user?]`  
  Cek level & progress user.

---

## 11. 🔊 Voice System

- [ ] `/tempvoice config [trigger-name] [kategori-name]`  
  Set nama channel trigger & kategori target.

- [ ] *(Auto)* Buat temporary voice channel saat user masuk trigger.

- [ ] *(Auto)* Hapus voice channel saat kosong.

