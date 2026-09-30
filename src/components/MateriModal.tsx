import React, { useState } from 'react';
import { MATERI_MATEMATIKA, MateriSection } from '../data/materiMatematika';
import { downloadMateriPembelajaranPDF } from '../utils/pdfGenerator';
import {
  X,
  BookOpen,
  Download,
  Calculator,
  ArrowRightLeft,
  Split,
  BarChart3,
  CheckCircle2,
  Sparkles,
  School,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

interface MateriModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartExam?: () => void;
}

export const MateriModal: React.FC<MateriModalProps> = ({
  isOpen,
  onClose,
  onStartExam,
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    MATERI_MATEMATIKA.sections[0].id
  );

  if (!isOpen) return null;

  const activeSection =
    MATERI_MATEMATIKA.sections.find((s) => s.id === activeSectionId) ||
    MATERI_MATEMATIKA.sections[0];

  const getSectionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-blue-600" />;
      case 'ArrowRightLeft':
        return <ArrowRightLeft className="w-5 h-5 text-emerald-600" />;
      case 'Split':
        return <Split className="w-5 h-5 text-purple-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-amber-500" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header Modal */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded-md">
                  Modul Belajar Matematika
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  {MATERI_MATEMATIKA.targetKelas} • {MATERI_MATEMATIKA.schoolName}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight mt-0.5">
                {MATERI_MATEMATIKA.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => downloadMateriPembelajaranPDF()}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer shadow-2xs"
              title="Unduh Modul Ringkasan Materi dalam bentuk PDF"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span className="hidden sm:inline">Unduh PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-200/60 transition-colors cursor-pointer"
              title="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Konten Utama: 2 Kolom (Sidebar Navigasi Modul & Rincian Konten) */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-0">
          {/* Kolom Kiri: Menu Bab Materi */}
          <div className="md:col-span-4 border-r border-slate-200 overflow-y-auto p-3 sm:p-4 space-y-2 bg-slate-50/50">
            <div className="p-3 bg-blue-50/80 rounded-2xl border border-blue-200/70 mb-3">
              <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block">
                Topik Bahasan Ujian
              </span>
              <p className="text-xs text-blue-800/90 mt-1 leading-relaxed">
                Pelajari 4 pokok materi bilangan desimal berikut untuk mempersiapkan diri menghadapi tes sumatif.
              </p>
            </div>

            {MATERI_MATEMATIKA.sections.map((sec: MateriSection, idx: number) => {
              const isActive = sec.id === activeSectionId;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setActiveSectionId(sec.id)}
                  className={`w-full text-left p-3 rounded-2xl transition-all flex items-start gap-3 cursor-pointer border ${
                    isActive
                      ? 'bg-white border-blue-500 shadow-xs ring-1 ring-blue-500'
                      : 'border-transparent hover:bg-white/80 hover:border-slate-200 text-slate-700'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isActive ? 'bg-blue-100' : 'bg-slate-100'
                    }`}
                  >
                    {getSectionIcon(sec.iconName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                      Submateri 0{idx + 1}
                    </span>
                    <h4
                      className={`text-xs sm:text-sm font-bold truncate ${
                        isActive ? 'text-blue-900' : 'text-slate-800'
                      }`}
                    >
                      {sec.title.replace(/^\d+\.\s*/, '')}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      {sec.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Kolom Kanan: Rincian Bab Terpilih */}
          <div className="md:col-span-8 overflow-y-auto p-5 sm:p-7 space-y-6">
            {/* Header Bab Aktif */}
            <div className="pb-4 border-b border-slate-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                {getSectionIcon(activeSection.iconName)}
                <span>{activeSection.subtitle}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {activeSection.title}
              </h2>
            </div>

            {/* Paragraf Penjelasan */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeSection.content.map((p, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200 font-medium text-slate-800 whitespace-pre-line"
                >
                  {p}
                </div>
              ))}
            </div>

            {/* Poin Kunci / Rumus Penting */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Poin Kunci &amp; Ringkasan Rumus</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-amber-950 font-medium">
                {activeSection.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips Belajar & Trik Praktis */}
            {activeSection.actionTips && activeSection.actionTips.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2.5">
                <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                  <span>Tips Belajar &amp; Cara Mudah Mengingat</span>
                </div>
                <ul className="space-y-1.5 text-xs text-blue-950 font-medium">
                  {activeSection.actionTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer Modal: Tombol Aksi */}
        <div className="p-4 sm:px-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left flex items-center gap-2">
            <School className="w-4 h-4 text-blue-600" />
            <span>Materi resmi Kelas VI SD Negeri 3 Loloan Timur</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-200/70 rounded-xl transition-colors cursor-pointer"
            >
              Tutup Modul
            </button>
            {onStartExam && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onStartExam();
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Mulai Kerjakan Tes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
