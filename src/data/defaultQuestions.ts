import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (15 BUTIR SOAL: NO. 1 - 15)
  // Tingkat Kesulitan: SEMUA MUDAH
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Nilai Tempat Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Pada bilangan desimal 24,7 angka 7 menempati nilai tempat...`,
    options: [
      { id: 'A', text: 'Satuan' },
      { id: 'B', text: 'Puluhan' },
      { id: 'C', text: 'Persepuluhan' },
      { id: 'D', text: 'Perseratusan' },
    ],
    correctAnswer: 'C',
    explanation: `Pada bilangan 24,7:
• Angka 2 menempati puluhan
• Angka 4 menempati satuan
• Angka 7 (satu angka di belakang koma) menempati persepuluhan.
Jadi, angka 7 menempati nilai tempat persepuluhan.`,
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Nilai Angka Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Nilai dari angka 5 pada bilangan desimal 12,5 adalah...`,
    options: [
      { id: 'A', text: '50' },
      { id: 'B', text: '5' },
      { id: 'C', text: '0,5' },
      { id: 'D', text: '0,05' },
    ],
    correctAnswer: 'C',
    explanation: `Angka 5 berada tepat satu angka di belakang tanda koma (tempat persepuluhan), sehingga bernilai 5/10 atau 0,5.`,
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Bentuk Penguraian Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Bentuk penguraian penjumlahan dari bilangan 7,4 berdasarkan nilai tempatnya adalah...`,
    options: [
      { id: 'A', text: '7 + 0,4' },
      { id: 'B', text: '7 + 4' },
      { id: 'C', text: '70 + 4' },
      { id: 'D', text: '0,7 + 4' },
    ],
    correctAnswer: 'A',
    explanation: `Bilangan 7,4 terdiri dari satuan 7 dan persepuluhan 0,4.
Maka 7,4 = 7 + 0,4.`,
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Mudah',
    text: `Bentuk desimal dari pecahan 3/10 adalah...`,
    options: [
      { id: 'A', text: '0,03' },
      { id: 'B', text: '0,3' },
      { id: 'C', text: '3,0' },
      { id: 'D', text: '0,13' },
    ],
    correctAnswer: 'B',
    explanation: `Pecahan dengan penyebut 10 memiliki satu angka di belakang tanda koma:
3/10 = 0,3.`,
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Mudah',
    text: `Bentuk desimal dari pecahan 1/2 adalah...`,
    options: [
      { id: 'A', text: '0,2' },
      { id: 'B', text: '0,5' },
      { id: 'C', text: '0,12' },
      { id: 'D', text: '0,25' },
    ],
    correctAnswer: 'B',
    explanation: `Kalikan pembilang dan penyebut dengan 5 agar penyebutnya menjadi 10:
(1 × 5) / (2 × 5) = 5/10 = 0,5.`,
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Mudah',
    text: `Bentuk desimal dari pecahan 1/4 adalah...`,
    options: [
      { id: 'A', text: '0,14' },
      { id: 'B', text: '0,4' },
      { id: 'C', text: '0,25' },
      { id: 'D', text: '0,75' },
    ],
    correctAnswer: 'C',
    explanation: `Kalikan pembilang dan penyebut dengan 25 agar penyebutnya menjadi 100:
(1 × 25) / (4 × 25) = 25/100 = 0,25.`,
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Mudah',
    text: `Bentuk desimal dari pecahan 2/5 adalah...`,
    options: [
      { id: 'A', text: '0,2' },
      { id: 'B', text: '0,4' },
      { id: 'C', text: '0,25' },
      { id: 'D', text: '0,5' },
    ],
    correctAnswer: 'B',
    explanation: `Kalikan pembilang dan penyebut dengan 2 agar penyebutnya menjadi 10:
(2 × 2) / (5 × 2) = 4/10 = 0,4.`,
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Mengubah Pecahan Campuran menjadi Desimal',
    difficulty: 'Mudah',
    text: `Bentuk desimal dari pecahan campuran 1 1/2 adalah...`,
    options: [
      { id: 'A', text: '1,2' },
      { id: 'B', text: '1,5' },
      { id: 'C', text: '1,12' },
      { id: 'D', text: '1,25' },
    ],
    correctAnswer: 'B',
    explanation: `Pecahan 1/2 sama dengan 0,5.
Maka 1 1/2 = 1 + 0,5 = 1,5.`,
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Mengubah Desimal menjadi Pecahan',
    difficulty: 'Mudah',
    text: `Bentuk pecahan biasa dari bilangan desimal 0,7 adalah...`,
    options: [
      { id: 'A', text: '7/100' },
      { id: 'B', text: '7/10' },
      { id: 'C', text: '7/1' },
      { id: 'D', text: '1/7' },
    ],
    correctAnswer: 'B',
    explanation: `Karena ada 1 angka di belakang tanda koma, maka penyebutnya adalah 10:
0,7 = 7/10.`,
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Mengubah Desimal menjadi Pecahan Paling Sederhana',
    difficulty: 'Mudah',
    text: `Bentuk pecahan biasa paling sederhana dari bilangan desimal 0,5 adalah...`,
    options: [
      { id: 'A', text: '5/10' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '1/5' },
      { id: 'D', text: '2/5' },
    ],
    correctAnswer: 'B',
    explanation: `0,5 = 5/10.
Sederhanakan dengan membagi pembilang dan penyebut dengan 5:
(5 : 5) / (10 : 5) = 1/2.`,
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Membandingkan Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Tanda perbandingan yang tepat untuk mengisi titik-titik pada: 0,8 ... 0,5 adalah...`,
    options: [
      { id: 'A', text: '< (lebih kecil)' },
      { id: 'B', text: '> (lebih besar)' },
      { id: 'C', text: '= (sama dengan)' },
      { id: 'D', text: '≤ (kurang dari sama dengan)' },
    ],
    correctAnswer: 'B',
    explanation: `Angka persepuluhan pada 0,8 adalah 8, sedangkan pada 0,5 adalah 5.
Karena 8 lebih besar dari 5, maka 0,8 > 0,5.`,
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Membandingkan Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Perbandingan antara bilangan desimal 0,4 dan 0,40 yang tepat adalah...`,
    options: [
      { id: 'A', text: '0,4 > 0,40' },
      { id: 'B', text: '0,4 < 0,40' },
      { id: 'C', text: '0,4 = 0,40' },
      { id: 'D', text: '0,4 tidak bisa dibandingkan dengan 0,40' },
    ],
    correctAnswer: 'C',
    explanation: `Angka 0 di sebelah paling kanan setelah tanda koma tidak mengubah nilai desimal:
0,4 = 0,40.`,
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Membandingkan Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Di antara bilangan desimal berikut, bilangan yang bernilai PALING BESAR adalah...`,
    options: [
      { id: 'A', text: '1,2' },
      { id: 'B', text: '2,1' },
      { id: 'C', text: '0,9' },
      { id: 'D', text: '1,9' },
    ],
    correctAnswer: 'B',
    explanation: `Bandingkan terlebih dahulu bagian bilangan bulatnya:
2,1 memiliki bilangan bulat 2, sedangkan pilihan lainnya memiliki bilangan bulat 0 atau 1.
Maka bilangan yang paling besar adalah 2,1.`,
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Mengurutkan Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Urutan bilangan desimal: 0,7 ; 0,2 ; 0,5 dari yang TERKECIL ke terbesar adalah...`,
    options: [
      { id: 'A', text: '0,2 ; 0,5 ; 0,7' },
      { id: 'B', text: '0,7 ; 0,5 ; 0,2' },
      { id: 'C', text: '0,5 ; 0,2 ; 0,7' },
      { id: 'D', text: '0,2 ; 0,7 ; 0,5' },
    ],
    correctAnswer: 'A',
    explanation: `Bandingkan angka di belakang koma:
2 < 5 < 7
Maka urutan dari terkecil adalah 0,2 ; 0,5 ; 0,7.`,
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Penerapan Perbandingan Desimal',
    difficulty: 'Mudah',
    text: `Ibu memiliki dua potong pita: pita merah panjangnya 0,6 meter dan pita biru panjangnya 0,9 meter. Pernyataan yang BENAR adalah...`,
    options: [
      { id: 'A', text: 'Pita merah lebih panjang dari pita biru' },
      { id: 'B', text: 'Pita biru lebih panjang dari pita merah' },
      { id: 'C', text: 'Kedua pita sama panjang' },
      { id: 'D', text: 'Pita biru lebih pendek dari pita merah' },
    ],
    correctAnswer: 'B',
    explanation: `Panjang pita merah = 0,6 meter.
Panjang pita biru = 0,9 meter.
Karena 0,9 > 0,6, maka pita biru lebih panjang daripada pita merah.`,
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS / PGK (3 BUTIR SOAL: NO. 16 - 18)
  // Tingkat Kesulitan: SEMUA MUDAH
  // =========================================================================
  {
    id: 16,
    type: 'pgk',
    topic: 'Nilai Tempat Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Diberikan bilangan desimal 25,7. Manakah pernyataan berikut yang bernilai BENAR? (Pilihlah DUA jawaban yang benar!)`,
    options: [
      { id: 'A', text: 'Angka 2 menempati nilai tempat puluhan' },
      { id: 'B', text: 'Angka 5 menempati nilai tempat satuan' },
      { id: 'C', text: 'Angka 7 menempati nilai tempat ratusan' },
      { id: 'D', text: 'Angka 7 bernilai 70' },
    ],
    correctAnswer: ['A', 'B'],
    explanation: `Pada bilangan 25,7:
• Angka 2 berada pada tempat puluhan (nilai 20) -> BENAR (A)
• Angka 5 berada pada tempat satuan (nilai 5) -> BENAR (B)
• Angka 7 berada pada tempat persepuluhan (nilai 0,7).`,
  },
  {
    id: 17,
    type: 'pgk',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Mudah',
    text: `Manakah pasangan pecahan biasa dan bentuk desimalnya berikut yang bernilai TEPAT? (Pilihlah DUA jawaban yang benar!)`,
    options: [
      { id: 'A', text: '1/10 = 0,1' },
      { id: 'B', text: '1/2 = 0,5' },
      { id: 'C', text: '1/5 = 0,5' },
      { id: 'D', text: '3/10 = 0,03' },
    ],
    correctAnswer: ['A', 'B'],
    explanation: `Evaluasi:
• A: 1/10 = 0,1 (BENAR)
• B: 1/2 = 0,5 (BENAR)
• C: 1/5 = 0,2 bukan 0,5 (SALAH)
• D: 3/10 = 0,3 bukan 0,03 (SALAH)`,
  },
  {
    id: 18,
    type: 'pgk',
    topic: 'Membandingkan Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Manakah bilangan desimal berikut yang bernilai LEBIH BESAR daripada 0,5? (Pilihlah DUA jawaban yang benar!)`,
    options: [
      { id: 'A', text: '0,8' },
      { id: 'B', text: '0,2' },
      { id: 'C', text: '0,7' },
      { id: 'D', text: '0,4' },
    ],
    correctAnswer: ['A', 'C'],
    explanation: `Bandingkan angka persepuluhan dengan 5:
• 0,8 > 0,5 (BENAR)
• 0,2 < 0,5 (salah)
• 0,7 > 0,5 (BENAR)
• 0,4 < 0,5 (salah)`,
  },

  // =========================================================================
  // BAGIAN 3: BENAR / SALAH (5 BUTIR SOAL: NO. 19 - 23)
  // Tingkat Kesulitan: SEMUA MUDAH
  // =========================================================================
  {
    id: 19,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Nilai Tempat Desimal',
    difficulty: 'Mudah',
    text: `Tentukan apakah setiap pernyataan mengenai nilai tempat desimal berikut bernilai BENAR atau SALAH!`,
    statements: [
      {
        id: 's1',
        text: 'Pada bilangan 3,4 angka 4 berada di tempat persepuluhan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada bilangan 5,6 angka 5 adalah bilangan bulat satuan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Tanda koma pada bilangan desimal memisahkan bagian bilangan bulat dan bagian pecahan.',
        correctAnswer: true,
      },
    ],
    explanation: `Semua pernyataan di atas BENAR sesuai dengan konsep dasar bilangan desimal sekolah dasar.`,
  },
  {
    id: 20,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Konversi Pecahan ke Desimal',
    difficulty: 'Mudah',
    text: `Tentukan apakah hasil perubahan pecahan ke bentuk desimal berikut bernilai BENAR atau SALAH!`,
    statements: [
      {
        id: 's1',
        text: 'Pecahan 1/2 sama nilainya dengan bilangan desimal 0,5.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pecahan 1/10 sama nilainya dengan bilangan desimal 0,1.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pecahan 1/4 sama nilainya dengan bilangan desimal 0,4.',
        correctAnswer: false,
      },
    ],
    explanation: `Pernyataan 1 BENAR (1/2 = 0,5).
Pernyataan 2 BENAR (1/10 = 0,1).
Pernyataan 3 SALAH (1/4 = 25/100 = 0,25 bukan 0,4).`,
  },
  {
    id: 21,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Konversi Desimal ke Pecahan',
    difficulty: 'Mudah',
    text: `Tentukan apakah bentuk pecahan dari bilangan desimal berikut bernilai BENAR atau SALAH!`,
    statements: [
      {
        id: 's1',
        text: 'Bilangan desimal 0,3 sama nilainya dengan pecahan 3/10.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan desimal 0,5 jika disederhanakan sama dengan pecahan 1/2.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bilangan desimal 0,8 sama nilainya dengan pecahan 8/100.',
        correctAnswer: false,
      },
    ],
    explanation: `Pernyataan 1 BENAR (0,3 = 3/10).
Pernyataan 2 BENAR (0,5 = 5/10 = 1/2).
Pernyataan 3 SALAH (0,8 adalah 8/10, bukan 8/100).`,
  },
  {
    id: 22,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Perbandingan Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Tentukan apakah pernyataan perbandingan bilangan desimal berikut bernilai BENAR atau SALAH!`,
    statements: [
      {
        id: 's1',
        text: '0,9 lebih besar nilainya daripada 0,4 (0,9 > 0,4).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: '0,3 lebih kecil nilainya daripada 0,7 (0,3 < 0,7).',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: '0,5 sama nilainya dengan 0,50 (0,5 = 0,50).',
        correctAnswer: true,
      },
    ],
    explanation: `Pernyataan 1 BENAR (9 > 4).
Pernyataan 2 BENAR (3 < 7).
Pernyataan 3 BENAR (menambahkan nol di paling kanan tidak mengubah nilai bilangan desimal).`,
  },
  {
    id: 23,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Mengurutkan Bilangan Desimal',
    difficulty: 'Mudah',
    text: `Tentukan apakah pernyataan mengenai urutan bilangan desimal berikut bernilai BENAR atau SALAH!`,
    statements: [
      {
        id: 's1',
        text: 'Urutan 0,1 ; 0,2 ; 0,3 adalah urutan bilangan desimal dari yang terkecil ke terbesar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan desimal 0,9 nilainya lebih kecil daripada 0,1.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Bilangan desimal 1,5 nilainya lebih besar daripada 0,9.',
        correctAnswer: true,
      },
    ],
    explanation: `Pernyataan 1 BENAR (0,1 < 0,2 < 0,3).
Pernyataan 2 SALAH (0,9 jelas lebih besar daripada 0,1).
Pernyataan 3 BENAR (1,5 memiliki bilangan bulat 1 sehingga lebih besar dari 0,9).`,
  },

  // =========================================================================
  // BAGIAN 4: ISIAN SINGKAT (2 BUTIR SOAL: NO. 24 - 25)
  // Tingkat Kesulitan: SEMUA MUDAH
  // =========================================================================
  {
    id: 24,
    type: 'isian',
    topic: 'Nilai Tempat Desimal',
    difficulty: 'Mudah',
    text: `Pada bilangan desimal 8,3 angka 3 menempati nilai tempat...`,
    correctAnswer: 'Persepuluhan',
    acceptedAnswers: [
      'persepuluhan',
      'tempat persepuluhan',
      'nilai tempat persepuluhan',
      'sepersepuluh',
      'per sepuluhan',
    ],
    explanation: `Pada bilangan 8,3: angka 8 adalah satuan dan angka 3 (satu angka di belakang koma) adalah persepuluhan.`,
  },
  {
    id: 25,
    type: 'isian',
    topic: 'Mengubah Pecahan menjadi Desimal',
    difficulty: 'Mudah',
    text: `Bentuk bilangan desimal dari pecahan 1/2 adalah... (Gunakan tanda koma)`,
    correctAnswer: '0,5',
    acceptedAnswers: ['0,5', '0.5', ',5', '.5', '0,50', '0.50'],
    explanation: `1/2 = 5/10 = 0,5.`,
  },
];
