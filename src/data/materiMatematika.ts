export interface MateriSection {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  content: string[];
  keyPoints: string[];
  actionTips?: string[];
}

export const MATERI_MATEMATIKA = {
  title: "Bilangan Desimal Matematika Kelas VI",
  subTitle: "Nilai Tempat, Mengubah Pecahan ↔ Desimal, serta Membandingkan & Mengurutkan Bilangan Desimal",
  targetKelas: "Kelas VI Sekolah Dasar",
  schoolName: "SD Negeri 3 Loloan Timur",
  introduction: `Bilangan desimal adalah bentuk lain dari pecahan dengan penyebut 10, 100, 1.000, dan kelipatannya yang dituliskan menggunakan tanda koma (,) sebagai pemisah antara bagian bilangan bulat dan bagian pecahan.

Memahami bilangan desimal sangat penting dalam kehidupan sehari-hari, mulai dari mengukur panjang, menimbang berat barang belanjaan, membaca uang kembalian, hingga menghitung waktu lari atau lomba olahraga.`,

  sections: [
    {
      id: "nilai-tempat",
      title: "1. Nilai Tempat Bilangan Desimal",
      subtitle: "Mengenal posisi satuan, persepuluhan, perseratusan, dan perseribuan",
      iconName: "Calculator",
      content: [
        "Bilangan desimal terdiri dari dua bagian utama yang dipisahkan oleh tanda koma: bagian di sebelah kiri koma merupakan bagian bilangan bulat (satuan, puluhan, ratusan), sedangkan bagian di sebelah kanan koma merupakan bagian pecahan.",
        "Setiap pergeseran satu angka ke arah kanan dari tanda koma memiliki nilai yang sepuluh kali lebih kecil dari nilai tempat sebelumnya:",
        "• Angka ke-1 di kanan koma adalah PERSEPULUHAN (1/10 = 0,1).\n• Angka ke-2 di kanan koma adalah PERSERATUSAN (1/100 = 0,01).\n• Angka ke-3 di kanan koma adalah PERSERIBUAN (1/1.000 = 0,001).",
        "Contoh pada bilangan 45,782:\n• Angka 4 menempati puluhan bernilai 40\n• Angka 5 menempati satuan bernilai 5\n• Angka 7 menempati persepuluhan bernilai 0,7 (7/10)\n• Angka 8 menempati perseratusan bernilai 0,08 (8/100)\n• Angka 2 menempati perseribuan bernilai 0,002 (2/1.000)"
      ],
      keyPoints: [
        "Bagian kiri koma = Bilangan bulat (..., Ratusan, Puluhan, Satuan)",
        "Tempat ke-1 setelah koma = Persepuluhan (0,1)",
        "Tempat ke-2 setelah koma = Perseratusan (0,01)",
        "Tempat ke-3 setelah koma = Perseribuan (0,001)",
        "Menambahkan angka 0 di ujung kanan setelah koma tidak mengubah nilai (2,5 = 2,50 = 2,500)"
      ],
      actionTips: [
        "Gunakan tabel nilai tempat bila menjumpai bilangan desimal yang panjang.",
        "Ingat bahwa 0,05 jauh lebih kecil dari 0,5 karena berada di tempat perseratusan."
      ]
    },
    {
      id: "pecahan-ke-desimal",
      title: "2. Mengubah Pecahan menjadi Desimal",
      subtitle: "Metode mengubah penyebut kelipatan 10 atau pembagian bersusun (porogapit)",
      iconName: "ArrowRightLeft",
      content: [
        "Ada dua metode utama untuk mengubah pecahan biasa atau campuran menjadi bilangan desimal:",
        "Metode 1: Mengubah Penyebut Menjadi 10, 100, atau 1.000\nCari angka pengali agar penyebut pecahan menjadi 10, 100, atau 1.000. Kalikan pembilang dan penyebut dengan angka yang sama.\n• Pasangan pengali penting:\n  - 2 × 5 = 10  → 1/2 = (1×5)/(2×5) = 5/10 = 0,5\n  - 4 × 25 = 100 → 3/4 = (3×25)/(4×25) = 75/100 = 0,75\n  - 5 × 20 = 100 → 4/5 = (4×20)/(5×20) = 80/100 = 0,8\n  - 8 × 125 = 1.000 → 5/8 = (5×125)/(8×125) = 625/1.000 = 0,625\n  - 20 × 5 = 100 → 7/20 = (7×5)/(20×5) = 35/100 = 0,35",
        "Metode 2: Pembagian Bersusun (Porogapit)\nBagi pembilang dengan penyebut secara bersusun. Jika pembilang lebih kecil dari penyebut, tambahkan angka 0 pada pembilang dan tuliskan 0, pada hasil pembagian.",
        "Untuk Pecahan Campuran (contoh 2 3/5):\nSimpan bilangan bulatnya (2), ubah pecahannya 3/5 = 6/10 = 0,6. Gabungkan menjadi 2 + 0,6 = 2,6."
      ],
      keyPoints: [
        "1/2 = 0,5",
        "1/4 = 0,25 dan 3/4 = 0,75",
        "1/5 = 0,2 ; 2/5 = 0,4 ; 3/5 = 0,6 ; 4/5 = 0,8",
        "1/8 = 0,125 ; 3/8 = 0,375 ; 5/8 = 0,625 ; 7/8 = 0,875",
        "Pecahan campuran: bilangan bulat tetap di depan koma."
      ],
      actionTips: [
        "Hafalkan pasangan pengali sakti: 2×5=10, 4×25=100, 5×20=100, 8×125=1.000.",
        "Gunakan pembagian bersusun jika penyebut tidak mudah diubah ke 10, 100, atau 1.000."
      ]
    },
    {
      id: "desimal-ke-pecahan",
      title: "3. Mengubah Desimal menjadi Pecahan",
      subtitle: "Menuliskan pecahan persepuluhan/perseratusan lalu disederhanakan",
      iconName: "Split",
      content: [
        "Langkah-langkah mengubah desimal menjadi pecahan biasa paling sederhana:",
        "Langkah 1: Perhatikan banyaknya angka di belakang tanda koma untuk menentukan penyebutnya:\n• 1 angka di belakang koma → penyebut 10 (contoh: 0,6 = 6/10)\n• 2 angka di belakang koma → penyebut 100 (contoh: 0,45 = 45/100)\n• 3 angka di belakang koma → penyebut 1.000 (contoh: 0,125 = 125/1.000)",
        "Langkah 2: Sederhanakan pecahan dengan membagi pembilang dan penyebut dengan FPB-nya (Faktor Persekutuan Terbesar):\n• 0,6 = 6/10 → bagi 2 = 3/5\n• 0,25 = 25/100 → bagi 25 = 1/4\n• 0,45 = 45/100 → bagi 5 = 9/20\n• 0,125 = 125/1.000 → bagi 125 = 1/8",
        "Jika ada angka di depan koma (misal 3,75):\nJadikan pecahan campuran: bilangan bulat 3 tetap, lalu sederhanakan 0,75 = 75/100 = 3/4. Hasilnya adalah 3 3/4."
      ],
      keyPoints: [
        "Jumlah digit di belakang koma = jumlah angka nol pada penyebut 10, 100, 1.000",
        "Selalu sederhanakan pecahan sampai tidak dapat dibagi lagi (pembilang & penyebut prima relatif)",
        "Gunakan FPB untuk menyederhanakan dalam satu langkah mudah"
      ],
      actionTips: [
        "Jika bilangan desimal berakhiran 5 atau 0, penyebut dan pembilang pasti bisa dibagi 5.",
        "Jika dua angka terakhir kelipatan 25, pasti bisa dibagi 25."
      ]
    },
    {
      id: "banding-urut",
      title: "4. Membandingkan & Mengurutkan Bilangan Desimal",
      subtitle: "Kunci menyamakan banyak angka di belakang koma dan memeriksa dari kiri",
      iconName: "BarChart3",
      content: [
        "Cara Mudah Membandingkan Bilangan Desimal:",
        "1. Bandingkan bagian bilangan bulatnya terlebih dahulu (di depan tanda koma).\nContoh: 3,1 lebih besar dari 2,999 karena 3 > 2.",
        "2. Jika bagian bilangan bulat sama, samakan jumlah digit di belakang koma dengan menambahkan angka 0 di sebelah kanan bilangan yang digitnya lebih sedikit.\nContoh membandingkan 0,7 dan 0,65:\n• 0,7 diubah menjadi 0,70\n• 0,65 tetap 0,65\n• Sekarang bandingkan 70 dengan 65. Jelas 70 > 65, maka 0,7 > 0,65!",
        "Contoh membandingkan 0,75 dan 0,705:\n• 0,75 dijadikan 3 digit: 0,750\n• 0,705 sudah 3 digit\n• Karena 750 > 705, maka 0,75 > 0,705.",
        "Mengurutkan Bilangan Desimal:\n• Dari terkecil ke terbesar (naik / ascending)\n• Dari terbesar ke terkecil (turun / descending)\nSamakan semua bilangan ke digit yang sama, lalu urutkan seperti bilangan cacah biasa."
      ],
      keyPoints: [
        "Bandingkan dari nilai tempat tertinggi (kiri ke kanan)",
        "Jangan terkecoh panjangnya digit! 0,5 LEBIH BESAR dari 0,123 karena 0,5 = 0,500",
        "Menambahkan nol di akhir desimal adalah trik rahasia terbaik membandingkan bilangan"
      ],
      actionTips: [
        "Selalu sejajarkan tanda koma secara vertikal saat membandingkan beberapa bilangan di kertas coretan.",
        "Tuliskan desimal dengan jumlah angka di belakang koma yang sama."
      ]
    }
  ]
};
