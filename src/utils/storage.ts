export const saveApplication = (data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem('foodieApplication', JSON.stringify(data));
  }
};

export const getApplication = () => {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem('foodieApplication');
  return data ? JSON.parse(data) : null;
}; 