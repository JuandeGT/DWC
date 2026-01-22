import { createClient } from "@supabase/supabase-js";

const supabaseConexion = createClient(
	"https://jazsbcpjyafcszoxnzii.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphenNiY3BqeWFmY3N6b3huemlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MzUyOTcsImV4cCI6MjA4NDQxMTI5N30.tjcfBljkhyu5YOyMKMsYR5Tyn04jJdENNTxv7kXbv48",
);

/**
 * Código para la conexión a través de variables de entorno.
 */
/* const supabaseConexion = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
); */

export { supabaseConexion };
