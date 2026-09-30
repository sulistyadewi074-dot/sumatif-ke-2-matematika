import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (15 BUTIR SOAL: NO. 1 - 15)
  // Bobot: 1 jawaban benar dari 4 opsi (A, B, C, D)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Nilai Tempat Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Pada bilangan desimal 45,782 angka yang menempati nilai tempat perseratusan adalah...`,
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '2' },
    ],
    correctAnswer: 'C',
    explanation: `Pada bilangan 45,782:
• Angka 4 menempati puluhan (nilai: 40)
• Angka 5 menempati satuan (nilai: 5)
• Angka 7 menempati persepuluhan (nilai: 0,7)
• Angka 8 menempati perseratusan (nilai: 0,08)
• Angka 2 menempati perseribuan (nilai: 0,002)
Jadi, angka yang menempati perseratusan adalah 8.`,
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Nilai Angka Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Nilai dari angka 6 pada bilangan desimal 13,065 adalah...`,
    options: [
      { id: 'A', text: '0,6' },
      { id: 'B', text: '0,06' },
      { id: 'C', text: '0,006' },
      { id: 'D', text: '6' },
    ],
    correctAnswer: 'B',
    explanation: `Angka 6 berada pada posisi dua angka di belakang tanda koma (tempat perseratusan), sehingga nilainya adalah 6/100 atau 0,06.`,
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Bentuk Penguraian Bilangan Desimal',
    difficulty: 'Sedang',
    text: `Bentuk penguraian penjumlahan dari bilangan 8,394 berdasarkan nilai tempatnya yang benar adalah...`,
    options: [
      { id: 'A', text: '8 + 0,3 + 0,09 + 0,004' },
      { id: 'B', text: '8 + 0,3 + 0,9 + 0,4' },
      { id: 'C', text: '80 + 3 + 0,9 + 0,04' },
      { id: 'D', text: '8 + 0,03 + 0,009 + 0,0004' },
    ],
    correctAnswer: 'A',
    explanation: `Penguraian nilai tempat bilangan 8,394:
• 8 sebagai satuan = 8
• 3 sebagai persepuluhan = 0,3
• 9 sebagai perseratusan = 0,09
• 4 sebagai perseribuan = 0,004
Maka 8,394 = 8 + 0,3 + 0,09 + 0,004.`,
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Mudah',
    text: `Bentuk desimal dari pecahan 3/4 adalah...`,
    options: [
      { id: 'A', text: '0,34' },
      { id: 'B', text: '0,43' },
      { id: 'C', text: '0,75' },
      { id: 'D', text: '0,25' },
    ],
    correctAnswer: 'C',
    explanation: `Untuk mengubah 3/4 menjadi desimal, ubah penyebut menjadi 100 dengan mengalikan pembilang dan penyebut dengan 25:
(3 × 25) / (4 × 25) = 75/100 = 0,75.
Atau membagi bersusun 3 : 4 = 0,75.`,
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Mudah',
    text: `Bentuk desimal dari pecahan 7/20 adalah...`,
    options: [
      { id: 'A', text: '0,70' },
      { id: 'B', text: '0,35' },
      { id: 'C', text: '0,27' },
      { id: 'D', text: '0,14' },
    ],
    correctAnswer: 'B',
    explanation: `Kalikan pembilang dan penyebut dengan 5 agar penyebutnya menjadi 100:
(7 × 5) / (20 × 5) = 35/100 = 0,35.`,
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Mengubah Pecahan Campuran menjadi Desimal',
    difficulty: 'Sedang',
    text: `Ibu membeli gula pasir seberat 2 3/5 kg di warung. Bentuk desimal dari berat gula pasir tersebut adalah...`,
    options: [
      { id: 'A', text: '2,35 kg' },
      { id: 'B', text: '2,6 kg' },
      { id: 'C', text: '2,3 kg' },
      { id: 'D', text: '2,53 kg' },
    ],
    correctAnswer: 'B',
    explanation: `Pecahan campuran 2 3/5:
Ubah 3/5 menjadi desimal: (3 × 2) / (5 × 2) = 6/10 = 0,6.
Gabungkan dengan bilangan bulat: 2 + 0,6 = 2,6 kg.`,
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Sedang',
    text: `Pecahan 5/8 jika diubah ke dalam bentuk bilangan desimal adalah...`,
    options: [
      { id: 'A', text: '0,58' },
      { id: 'B', text: '0,625' },
      { id: 'C', text: '0,85' },
      { id: 'D', text: '0,375' },
    ],
    correctAnswer: 'B',
    explanation: `Ubah penyebut 8 menjadi 1.000 dengan mengalikan 125:
(5 × 125) / (8 × 125) = 625/1.000 = 0,625.
Atau dengan pembagian bersusun 5 : 8 = 0,625.`,
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Mengubah Desimal menjadi Pecahan',
    difficulty: 'Mudah',
    text: `Bentuk pecahan biasa paling sederhana dari bilangan desimal 0,6 adalah...`,
    options: [
      { id: 'A', text: '6/10' },
      { id: 'B', text: '3/5' },
      { id: 'C', text: '2/3' },
      { id: 'D', text: '1/6' },
    ],
    correctAnswer: 'B',
    explanation: `0,6 = 6/10.
Sederhanakan dengan membagi pembilang dan penyebut dengan FPB(6, 10) yaitu 2:
(6 : 2) / (10 : 2) = 3/5.`,
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Mengubah Desimal menjadi Pecahan',
    difficulty: 'Sedang',
    text: `Bilangan desimal 0,45 jika diubah ke dalam bentuk pecahan biasa yang paling sederhana menjadi...`,
    options: [
      { id: 'A', text: '9/20' },
      { id: 'B', text: '45/100' },
      { id: 'C', text: '4/5' },
      { id: 'D', text: '9/10' },
    ],
    correctAnswer: 'A',
    explanation: `0,45 = 45/100.
Bagi pembilang dan penyebut dengan FPB(45, 100) yaitu 5:
(45 : 5) / (100 : 5) = 9/20.`,
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Mengubah Desimal menjadi Pecahan Campuran',
    difficulty: 'Sedang',
    text: `Bentuk pecahan campuran paling sederhana dari 3,75 adalah...`,
    options: [
      { id: 'A', text: '3 7/5' },
      { id: 'B', text: '3 3/4' },
      { id: 'C', text: '3 1/4' },
      { id: 'D', text: '3 75/10' },
    ],
    correctAnswer: 'B',
    explanation: `3,75 terdiri dari bilangan bulat 3 dan desimal 0,75.
0,75 = 75/100 = (75 : 25) / (100 : 25) = 3/4.
Jadi, bentuk pecahan campurannya adalah 3 3/4.`,
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Membandingkan Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Tanda perbandingan yang tepat untuk mengisi titik-titik pada: 0,75 ... 0,705 adalah...`,
    options: [
      { id: 'A', text: '< (lebih kecil)' },
      { id: 'B', text: '> (lebih besar)' },
      { id: 'C', text: '= (sama dengan)' },
      { id: 'D', text: '≤ (kurang dari sama dengan)' },
    ],
    correctAnswer: 'B',
    explanation: `Samakan jumlah digit di belakang koma:
0,75 = 0,750
0,705 = 0,705
Bandingkan angka perseratusan: pada 0,750 angka perseratusannya adalah 5, sedangkan pada 0,705 angka perseratusannya adalah 0. Karena 5 > 0, maka 0,75 > 0,705.`,
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Membandingkan Bilangan Desimal',
    difficulty: 'Sedang',
    text: `Perhatikan perbandingan berikut:
(i) 0,8 > 0,79
(ii) 1,25 < 1,205
(iii) 0,350 = 0,35
(iv) 2,401 > 2,41
Pernyataan perbandingan yang bernilai BENAR adalah...`,
    options: [
      { id: 'A', text: '(i) dan (ii)' },
      { id: 'B', text: '(i) dan (iii)' },
      { id: 'C', text: '(ii) dan (iv)' },
      { id: 'D', text: '(iii) dan (iv)' },
    ],
    correctAnswer: 'B',
    explanation: `Mari kita evaluasi:
(i) 0,80 > 0,79 (BENAR, karena 80 > 79)
(ii) 1,250 < 1,205 (SALAH, seharusnya 1,250 > 1,205)
(iii) 0,350 = 0,35 (BENAR, angka 0 paling kanan setelah koma tidak mengubah nilai)
(iv) 2,401 > 2,410 (SALAH, seharusnya 2,401 < 2,410)
Jadi pernyataan yang benar adalah (i) dan (iii).`,
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Mengurutkan Bilangan Desimal dari Terkecil',
    difficulty: 'Sedang',
    text: `Urutan bilangan desimal: 0,4 ; 0,25 ; 0,375 ; 0,5 dari yang TERKECIL ke terbesar adalah...`,
    options: [
      { id: 'A', text: '0,25 ; 0,375 ; 0,4 ; 0,5' },
      { id: 'B', text: '0,4 ; 0,25 ; 0,5 ; 0,375' },
      { id: 'C', text: '0,25 ; 0,4 ; 0,375 ; 0,5' },
      { id: 'D', text: '0,375 ; 0,25 ; 0,4 ; 0,5' },
    ],
    correctAnswer: 'A',
    explanation: `Samakan banyaknya digit di belakang koma menjadi 3 digit:
• 0,4 = 0,400
• 0,25 = 0,250
• 0,375 = 0,375
• 0,5 = 0,500
Urutan dari terkecil: 0,250 (0,25) ; 0,375 ; 0,400 (0,4) ; 0,500 (0,5).
Maka urutannya: 0,25 ; 0,375 ; 0,4 ; 0,5.`,
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Mengurutkan Bilangan Desimal dari Terbesar',
    difficulty: 'Sedang',
    text: `Empat orang siswa kelas VI SD Negeri 3 Loloan Timur mencatat waktu lari cepat 60 meter sebagai berikut:
• Putu: 9,45 detik
• Kadek: 9,08 detik
• Komang: 9,8 detik
• Ketut: 9,25 detik
Urutan siswa dengan catatan waktu dari yang PALING CEPAT (waktu tersingkat/terkecil) adalah...`,
    options: [
      { id: 'A', text: 'Komang, Putu, Ketut, Kadek' },
      { id: 'B', text: 'Kadek, Ketut, Putu, Komang' },
      { id: 'C', text: 'Kadek, Putu, Ketut, Komang' },
      { id: 'D', text: 'Ketut, Kadek, Putu, Komang' },
    ],
    correctAnswer: 'B',
    explanation: `Paling cepat berarti memiliki waktu tempuh paling kecil:
Samakan angka di belakang koma:
• Kadek = 9,08 detik
• Ketut = 9,25 detik
• Putu = 9,45 detik
• Komang = 9,80 detik
Urutan waktu dari terkecil: Kadek (9,08) < Ketut (9,25) < Putu (9,45) < Komang (9,80).
Jadi urutan siswa tercepat adalah Kadek, Ketut, Putu, Komang.`,
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Penerapan Konversi & Perbandingan Desimal',
    difficulty: 'Sukar',
    text: `Tiga orang anak memiliki pita dengan panjang berbeda:
• Made memiliki pita sepanjang 0,7 meter
• Siti memiliki pita sepanjang 3/5 meter
• Dayu memiliki pita sepanjang 0,65 meter
Pita milik siapakah yang PALING PANJANG?`,
    options: [
      { id: 'A', text: 'Pita milik Made' },
      { id: 'B', text: 'Pita milik Siti' },
      { id: 'C', text: 'Pita milik Dayu' },
      { id: 'D', text: 'Semua pita sama panjang' },
    ],
    correctAnswer: 'A',
    explanation: `Ubah semua panjang pita ke bentuk desimal dengan dua angka di belakang koma:
• Pita Made = 0,7 = 0,70 meter
• Pita Siti = 3/5 = (3 × 2) / (5 × 2) = 6/10 = 0,6 = 0,60 meter
• Pita Dayu = 0,65 meter
Bandingkan: 0,70 > 0,65 > 0,60.
Maka pita yang paling panjang adalah milik Made (0,7 meter).`,
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 16 - 20)
  // Kemungkinan memiliki LEBIH DARI SATU jawaban benar.
  // =========================================================================
  {
    id: 16,
    type: 'pgk',
    topic: 'Nilai Tempat & Angka Desimal',
    difficulty: 'Sedang',
    text: `Diberikan bilangan desimal 72,508. Manakah pernyataan berikut yang bernilai BENAR? (Pilihlah DUA jawaban yang benar!)`,
    options: [
      { id: 'A', text: 'Angka 5 menempati nilai tempat persepuluhan dengan nilai 0,5' },
      { id: 'B', text: 'Angka 8 menempati nilai tempat perseratusan dengan nilai 0,08' },
      { id: 'C', text: 'Angka 8 menempati nilai tempat perseribuan dengan nilai 0,008' },
      { id: 'D', text: 'Angka 7 menempati nilai tempat satuan' },
    ],
    correctAnswer: ['A', 'C'],
    explanation: `Pada 72,508:
• Angka 7 = puluhan (70)
• Angka 2 = satuan (2)
• Angka 5 = persepuluhan (0,5) -> Pernyataan A BENAR
• Angka 0 = perseratusan (0,00)
• Angka 8 = perseribuan (0,008) -> Pernyataan C BENAR
Pernyataan B salah karena 8 di perseribuan, dan D salah karena 7 adalah puluhan.`,
  },
  {
    id: 17,
    type: 'pgk',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Sedang',
    text: `Manakah pasangan pecahan biasa dan bentuk desimalnya berikut yang bernilai TEPAT? (Pilihlah TIGA jawaban yang benar!)`,
    options: [
      { id: 'A', text: '1/2 = 0,5' },
      { id: 'B', text: '4/5 = 0,8' },
      { id: 'C', text: '1/4 = 0,25' },
      { id: 'D', text: '3/8 = 0,38' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: `Evaluasi:
• A: 1/2 = 5/10 = 0,5 (BENAR)
• B: 4/5 = 8/10 = 0,8 (BENAR)
• C: 1/4 = 25/100 = 0,25 (BENAR)
• D: 3/8 = 375/1000 = 0,375 bukan 0,38 (SALAH)
Maka jawaban yang benar adalah A, B, dan C.`,
  },
  {
    id: 18,
    type: 'pgk',
    topic: 'Mengubah Desimal menjadi Pecahan Biasa',
    difficulty: 'Sedang',
    text: `Pilihlah DUA bilangan desimal berikut yang jika diubah ke dalam bentuk pecahan biasa paling sederhana menghasilkan pecahan dengan penyebut 4!`,
    options: [
      { id: 'A', text: '0,25' },
      { id: 'B', text: '0,5' },
      { id: 'C', text: '0,75' },
      { id: 'D', text: '0,8' },
    ],
    correctAnswer: ['A', 'C'],
    explanation: `Mari sederhanakan masing-masing:
• A: 0,25 = 25/100 = 1/4 (Penyebut 4 -> BENAR)
• B: 0,5 = 5/10 = 1/2 (Penyebut 2)
• C: 0,75 = 75/100 = 3/4 (Penyebut 4 -> BENAR)
• D: 0,8 = 8/10 = 4/5 (Penyebut 5)
Maka pilihan yang benar adalah A dan C.`,
  },
  {
    id: 19,
    type: 'pgk',
    topic: 'Membandingkan Bilangan Desimal',
    difficulty: 'Sedang',
    text: `Manakah di antara bilangan-bilangan desimal berikut yang bernilai LEBIH BESAR daripada 0,65? (Pilihlah DUA jawaban yang benar!)`,
    options: [
      { id: 'A', text: '0,7' },
      { id: 'B', text: '0,605' },
      { id: 'C', text: '0,68' },
      { id: 'D', text: '0,599' },
    ],
    correctAnswer: ['A', 'C'],
    explanation: `Bandingkan dengan menyamakan 3 angka di belakang koma (0,65 = 0,650):
• A: 0,7 = 0,700 (0,700 > 0,650 -> LEBIH BESAR)
• B: 0,605 (0,605 < 0,650 -> lebih kecil)
• C: 0,68 = 0,680 (0,680 > 0,650 -> LEBIH BESAR)
• D: 0,599 (0,599 < 0,650 -> lebih kecil)
Maka jawabannya adalah A dan C.`,
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Bilangan Desimal di Antara Dua Bilangan',
    difficulty: 'Sukar',
    text: `Manakah bilangan-bilangan desimal berikut yang terletak DI ANTARA 0,3 dan 0,4? (Pilihlah DUA jawaban yang benar!)`,
    options: [
      { id: 'A', text: '0,35' },
      { id: 'B', text: '0,29' },
      { id: 'C', text: '0,385' },
      { id: 'D', text: '0,42' },
    ],
    correctAnswer: ['A', 'C'],
    explanation: `0,3 = 0,300 dan 0,4 = 0,400.
Bilangan yang berada di antara 0,300 dan 0,400 adalah:
• A: 0,35 = 0,350 (0,300 < 0,350 < 0,400 -> BENAR)
• B: 0,29 = 0,290 (di luar rentang, lebih kecil dari 0,300)
• C: 0,385 (0,300 < 0,385 < 0,400 -> BENAR)
• D: 0,42 = 0,420 (di luar rentang, lebih besar dari 0,400)
Jadi pilihan yang benar adalah A dan C.`,
  },

  // =========================================================================
  // BAGIAN 3: PILIHAN GANDA KOMPLEKS KATEGORI (5 BUTIR SOAL: NO. 21 - 25)
  // Menilai pernyataan matematis: Benar/Salah, Sesuai/Tidak Sesuai, Setuju/Tidak Setuju
  // =========================================================================
  {
    id: 21,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Konsep Nilai Tempat Desimal',
    difficulty: 'Mudah',
    text: `Tentukan apakah setiap pernyataan mengenai nilai tempat bilangan desimal berikut bernilai BENAR atau SALAH!`,
    statements: [
      {
        id: 's1',
        text: 'Pada bilangan 12,345 angka pertama di belakang koma (angka 3) menempati nilai tempat persepuluhan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Angka 0 di sebelah paling kanan setelah tanda koma seperti pada 2,50 mengubah nilai bilangan menjadi 10 kali lebih besar dari 2,5.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Nilai dari tempat perseratusan adalah sepuluh kali lebih kecil daripada nilai tempat persepuluhan.',
        correctAnswer: true,
      },
    ],
    explanation: `Pernyataan 1 BENAR (angka pertama di kanan koma adalah persepuluhan).
Pernyataan 2 SALAH (angka 0 paling akhir di belakang koma tidak mengubah nilai, 2,50 = 2,5).
Pernyataan 3 BENAR (1/100 adalah 1/10 dari 1/10).`,
  },
  {
    id: 22,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Konversi Pecahan ke Desimal',
    difficulty: 'Mudah',
    text: `Tentukan apakah hasil konversi pecahan ke desimal berikut bernilai BENAR atau SALAH!`,
    statements: [
      {
        id: 's1',
        text: 'Pecahan 1/5 sama nilainya dengan bilangan desimal 0,2.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pecahan 3/20 sama nilainya dengan bilangan desimal 0,32.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pecahan campuran 1 1/4 sama nilainya dengan bilangan desimal 1,25.',
        correctAnswer: true,
      },
    ],
    explanation: `Pernyataan 1 BENAR (1/5 = 2/10 = 0,2).
Pernyataan 2 SALAH (3/20 = (3 × 5)/(20 × 5) = 15/100 = 0,15 bukan 0,32).
Pernyataan 3 BENAR (1 1/4 = 1 + 25/100 = 1,25).`,
  },
  {
    id: 23,
    type: 'pgk_kategori',
    categoryType: 'sesuai_tidak_sesuai',
    topic: 'Penyederhanaan Desimal ke Pecahan',
    difficulty: 'Sedang',
    text: `Tentukan apakah perubahan bilangan desimal menjadi pecahan biasa paling sederhana berikut SESUAI atau TIDAK SESUAI!`,
    statements: [
      {
        id: 's1',
        text: 'Desimal 0,8 jika diubah menjadi pecahan paling sederhana adalah 4/5.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Desimal 0,125 jika diubah menjadi pecahan paling sederhana adalah 1/8.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Desimal 0,36 jika diubah menjadi pecahan paling sederhana adalah 18/25.',
        correctAnswer: false,
      },
    ],
    explanation: `Pernyataan 1 SESUAI: 0,8 = 8/10 = (8:2)/(10:2) = 4/5.
Pernyataan 2 SESUAI: 0,125 = 125/1000 = (125:125)/(1000:125) = 1/8.
Pernyataan 3 TIDAK SESUAI: 0,36 = 36/100 = (36:4)/(100:4) = 9/25 bukan 18/25.`,
  },
  {
    id: 24,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Perbandingan Simbol Desimal',
    difficulty: 'Sedang',
    text: `Tentukan apakah pernyataan perbandingan bilangan desimal berikut bernilai BENAR atau SALAH!`,
    statements: [
      {
        id: 's1',
        text: '0,9 > 0,899',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: '3,07 < 3,007',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: '5,60 = 5,6',
        correctAnswer: true,
      },
    ],
    explanation: `Pernyataan 1 BENAR (0,9 = 0,900, dan 0,900 > 0,899).
Pernyataan 2 SALAH (3,07 = 3,070, dan 3,070 > 3,007, tanda yang benar adalah >).
Pernyataan 3 BENAR (angka nol di ujung desimal tidak mengubah nilainya).`,
  },
  {
    id: 25,
    type: 'pgk_kategori',
    categoryType: 'setuju_tidak_setuju',
    topic: 'Metode Pengurutan Desimal',
    difficulty: 'Mudah',
    text: `Berikan respon SETUJU atau TIDAK SETUJU terhadap cara-cara siswa dalam membandingkan bilangan desimal berikut!`,
    statements: [
      {
        id: 's1',
        text: 'Menyamakan banyak digit di belakang koma dengan menambahkan angka 0 di paling kanan mempermudah membandingkan nilai desimal.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan desimal dengan jumlah angka di belakang koma lebih banyak selalu bernilai lebih besar (misal 0,123 selalu lebih besar dari 0,5).',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Saat membandingkan desimal, kita harus memeriksa terlebih dahulu bagian bilangan bulatnya sebelum memeriksa angka di belakang koma.',
        correctAnswer: true,
      },
    ],
    explanation: `Pernyataan 1 DISETUJUI (menyamakan digit misal 0,5 menjadi 0,50 membuat perbandingan dengan 0,45 sangat jelas).
Pernyataan 2 TIDAK DISETUJUI (0,5 = 0,500 yang jauh lebih besar daripada 0,123. Banyaknya digit tidak menentukan besarnya nilai).
Pernyataan 3 DISETUJUI (bilangan bulat memiliki nilai tempat paling tinggi, misal 2,1 pasti lebih besar dari 1,99).`,
  },

  // =========================================================================
  // BAGIAN 4: ISIAN SINGKAT (5 BUTIR SOAL: NO. 26 - 30)
  // Menjawab dengan angka / pecahan tepat dan padat
  // =========================================================================
  {
    id: 26,
    type: 'isian',
    topic: 'Nilai Tempat Desimal',
    difficulty: 'Mudah',
    text: `Pada bilangan desimal 19,458 nama nilai tempat untuk angka 5 adalah...`,
    correctAnswer: 'Perseratusan',
    acceptedAnswers: [
      'perseratusan',
      'tempat perseratusan',
      'nilai tempat perseratusan',
      'seperseratus',
      'per seratusan',
    ],
    explanation: `Pada 19,458 angka 4 adalah persepuluhan, angka 5 adalah perseratusan, dan angka 8 adalah perseribuan. Jadi nilai tempat angka 5 adalah perseratusan.`,
  },
  {
    id: 27,
    type: 'isian',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Mudah',
    text: `Bentuk bilangan desimal dari pecahan 1/8 adalah... (Gunakan koma sebagai pemisah desimal)`,
    correctAnswer: '0,125',
    acceptedAnswers: ['0,125', '0.125', ',125', '.125'],
    explanation: `1/8 = (1 × 125) / (8 × 125) = 125/1000 = 0,125.`,
  },
  {
    id: 28,
    type: 'isian',
    topic: 'Mengubah Desimal menjadi Pecahan Paling Sederhana',
    difficulty: 'Sedang',
    text: `Bentuk pecahan biasa paling sederhana dari bilangan desimal 0,16 adalah... (Tuliskan dalam format a/b)`,
    correctAnswer: '4/25',
    acceptedAnswers: ['4/25', '4 / 25', '4 per 25'],
    explanation: `0,16 = 16/100.
Bagi pembilang dan penyebut dengan FPB(16, 100) yaitu 4:
(16 : 4) / (100 : 4) = 4/25.`,
  },
  {
    id: 29,
    type: 'isian',
    topic: 'Mengubah Pecahan Campuran menjadi Desimal',
    difficulty: 'Sedang',
    text: `Bentuk desimal dari pecahan campuran 4 1/2 adalah...`,
    correctAnswer: '4,5',
    acceptedAnswers: ['4,5', '4.5', '4,50', '4.50'],
    explanation: `1/2 = 0,5.
Maka 4 1/2 = 4 + 0,5 = 4,5.`,
  },
  {
    id: 30,
    type: 'isian',
    topic: 'Membandingkan Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Tuliskan tanda perbandingan yang tepat (pilih salah satu: > atau < atau =) untuk mengisi titik-titik berikut:
0,8 ... 0,78`,
    correctAnswer: '>',
    acceptedAnswers: ['>', 'lebih besar', 'lebih dari', '> (lebih besar)'],
    explanation: `Samakan digit: 0,8 = 0,80.
Karena 0,80 > 0,78, maka tanda yang tepat adalah > (lebih besar).`,
  },
];
