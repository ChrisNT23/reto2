# FoodiesBNB MVP

Mini MVP funcional inspirado en FoodiesBNB.

## 🚀 Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPO>
   cd cofundapr
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura Supabase (opcional pero recomendado):**
   - Crea un proyecto en [Supabase](https://app.supabase.com/).
   - Crea una tabla `applications` con los campos: `id`, `nombre`, `email`, `ciudad`, `instagram`, `motivo`, `created_at`.
   - Copia tu `SUPABASE_URL` y `SUPABASE_ANON_KEY` y colócalos en un archivo `.env.local`:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=tu_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
     ```

4. **Inicia la app en modo desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🛠️ Tecnologías utilizadas

- **Frontend:**
  - [Next.js](https://nextjs.org/) (React + SSR)
  - [React](https://react.dev/) (componentes y hooks)
  - [TailwindCSS](https://tailwindcss.com/) (estilos rápidos y modernos)

- **Backend:**
  - [Supabase](https://supabase.com/) (Base de datos Postgres y Auth, gestionado en la nube)
  - (Modo demo: localStorage para pruebas sin backend real)

- **Base de datos:**
  - [Supabase Postgres](https://supabase.com/) (persistencia real de aplicaciones)

- **Autenticación:**
  - [Supabase Auth](https://supabase.com/docs/guides/auth) (opcional, para login real)

- **Otros:**
  - [TypeScript](https://www.typescriptlang.org/) (tipado estático)

---

## 📦 Estructura principal

- `/src/app` — Páginas principales (`/aplicar`, `/dashboard`, `/login`)
- `/src/components` — Componentes reutilizables (Navbar, RestaurantCard, ApplicationForm)
- `/src/utils` — Utilidades (mockData, supabaseClient)

---

## ✨ Créditos
Inspirado en [FoodiesBNB](https://foodiesbnb.com/microinfluencers)
