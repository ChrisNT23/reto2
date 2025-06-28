// Definir el tipo para la aplicación de foodie
export type FoodieApplication = {
  nombre: string;
  email: string;
  ciudad: string;
  instagram: string;
  motivo: string;
};

export const saveApplication = (data: FoodieApplication) => {
  if (typeof window !== "undefined") {
    localStorage.setItem('foodieApplication', JSON.stringify(data));
  }
};

export const getApplication = (): FoodieApplication | null => {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem('foodieApplication');
  return data ? JSON.parse(data) as FoodieApplication : null;
}; 