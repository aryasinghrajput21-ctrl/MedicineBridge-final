import { demoMedicines, type Medicine } from '@/data/demoData';

export function searchMedicines(query: string): Medicine[] {
  if (!query.trim()) return demoMedicines;
  const q = query.toLowerCase().trim();
  return demoMedicines.filter(
    (m) =>
      m.name.toLowerCase().includes(q) ||
      m.generic_name.toLowerCase().includes(q)
  );
}

export function getMedicineById(id: string): Medicine | undefined {
  return demoMedicines.find((m) => m.id === id);
}

export function findByName(name: string): Medicine | undefined {
  const q = name.toLowerCase().trim();
  return demoMedicines.find(
    (m) =>
      m.name.toLowerCase() === q ||
      m.generic_name.toLowerCase() === q
  );
}
