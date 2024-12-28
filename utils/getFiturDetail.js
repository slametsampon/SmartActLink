import DetailFitur from '../data/detailFitur.js';

export default function getFiturDetail(fitur) {
  const fiturMap = {
    mandiri: DetailFitur.mandiri,
    aksesHP: DetailFitur.aksesHP,
    kompatibel: DetailFitur.kompatibel,
  };
  return (
    fiturMap[fitur] || {
      title: 'Unknown',
      description: 'Fitur tidak ditemukan',
    }
  );
}
