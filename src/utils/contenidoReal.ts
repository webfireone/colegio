export const USUARIOS = [
  { id: 'user-claudia', nombre: 'Claudia', email: 'claudia@instituto.edu', telefono: '+5491149499858', ciudad: 'Buenos Aires', profesion: 'Docente jubilada', hobbies: ['Jardinería', 'Yoga', 'Lectura'], musica: 'Soda Stereo', frase: 'La vida es un viaje, no un destino', estado: 'casado/a' },
  { id: 'user-sandro', nombre: 'Sandro', email: 'sandro@instituto.edu', telefono: '+5491141751031', ciudad: 'La Plata', profesion: 'Contador público', hobbies: ['Fútbol', 'Asado', 'Tango'], musica: 'Carlos Gardel', frase: 'Siempre adelante', estado: 'casado/a' },
  { id: 'user-edy', nombre: 'Edy', email: 'edy@instituto.edu', telefono: '+5491161730001', ciudad: 'Córdoba', profesion: 'Arquitecta', hobbies: ['Pintura', 'Viajes', 'Cocina'], musica: 'Charly García', frase: 'El arte de vivir es disfrutar cada día', estado: 'divorciado/a' },
  { id: 'user-fabiana', nombre: 'Fabiana', email: 'fabiana@instituto.edu', telefono: '+5491140225506', ciudad: 'Rosario', profesion: 'Médica pediatra', hobbies: ['Correr', 'Teatro', 'Tejer'], musica: 'Fito Páez', frase: 'La salud es lo más importante', estado: 'casado/a' },
  { id: 'user-jorge', nombre: 'Jorge', email: 'jorge@instituto.edu', telefono: '+5491153780003', ciudad: 'Mar del Plata', profesion: 'Ingeniero jubilado', hobbies: ['Pesca', 'Jardinería', 'Fotografía'], musica: 'Los Abuelos de la Nada', frase: 'Nunca es tarde para aprender', estado: 'casado/a' },
  { id: 'user-laura', nombre: 'Laura', email: 'laura@instituto.edu', telefono: '+5491167405677', ciudad: 'Buenos Aires', profesion: 'Abogada', hobbies: ['Cocina', 'Yoga', 'Viajes'], musica: 'Serú Girán', frase: 'Todo pasa por algo', estado: 'soltero/a' },
  { id: 'user-mara', nombre: 'Mara', email: 'mara@instituto.edu', telefono: '+5491141718134', ciudad: 'Bariloche', profesion: 'Veterinaria', hobbies: ['Senderismo', 'Fotografía', 'Música'], musica: 'Gustavo Cerati', frase: 'La naturaleza es mi hogar', estado: 'casado/a' },
  { id: 'user-mariana', nombre: 'Mariana', email: 'mariana@instituto.edu', telefono: '+5219841149846', ciudad: 'Cancún', profesion: 'Empresaria hotelera', hobbies: ['Buceo', 'Cocina mexicana', 'Baile'], musica: 'Los Auténticos Decadentes', frase: 'La vida es una fiesta', estado: 'casado/a' },
  { id: 'user-paula', nombre: 'Paula', email: 'paula@instituto.edu', telefono: '+5491140606023', ciudad: 'Mendoza', profesion: 'Sommelier', hobbies: ['Vitivinicultura', 'Cocina', 'Montañismo'], musica: 'Spinetta', frase: 'El buen vino y la buena compañía', estado: 'divorciado/a' },
  { id: 'user-pocha', nombre: 'Pocha', email: 'pocha@instituto.edu', telefono: '+5491157000916', ciudad: 'Buenos Aires', profesion: 'Psicóloga', hobbies: ['Lectura', 'Teatro', 'Meditación'], musica: 'Mercedes Sosa', frase: 'La empatía lo cura todo', estado: 'soltero/a' },
  { id: 'user-cristian', nombre: 'Cristian', email: 'cristian@instituto.edu', telefono: '+5491160529765', ciudad: 'Salta', profesion: 'Músico', hobbies: ['Guitarra', 'Composición', 'Ciclismo'], musica: 'Los Redondos', frase: 'La música es el alma del mundo', estado: 'casado/a' },
  { id: 'user-marcelo', nombre: 'Marcelo', email: 'marcelo@instituto.edu', telefono: '+5491164567522', ciudad: 'Buenos Aires', profesion: 'Comerciante', hobbies: ['Fútbol', 'Cine', 'Parrilla'], musica: 'Los Piojos', frase: 'El trabajo en equipo es la clave', estado: 'casado/a' },
  { id: 'user-marito', nombre: 'Marito', email: 'marito@instituto.edu', telefono: '+5491130190515', ciudad: 'Ushuaia', profesion: 'Guía de turismo', hobbies: ['Montañismo', 'Fotografía', 'Astronomía'], musica: 'Indio Solari', frase: 'El sur es mi lugar en el mundo', estado: 'soltero/a' },
]

export const AMIGOS = USUARIOS.map((u) => u.id)

export const PUBLICACIONES = [
  // Claudia
  { autorId: 'user-claudia', plataforma: 'facebook' as const, contenido: '¡Qué emoción! Encontré el álbum de fotos del viaje de egreso a Bariloche en 1985. Fuimos 28 compañeros en un micro que no tenía calefacción. ¡Cómo nos reímos esa semana! ¿Alguien tiene la foto de la nevada en el Cerro Catedral?', imagenes: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600'], filtro: 'ninguno', hashtags: ['#viaje86', '#bariloche', '#recuerdos'] },
  { autorId: 'user-claudia', plataforma: 'instagram' as const, contenido: 'Antes y después 🥹 1986 → 2026 ❤️', imagenes: ['https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'], filtro: 'sepia', hashtags: ['#antesydespues', '#40años', '#promo86'] },
  // Sandro
  { autorId: 'user-sandro', plataforma: 'facebook' as const, contenido: 'Chicos, ¿se acuerdan del partido de fútbol intercolegial? Les ganamos 3 a 0 al Colegio San José. Yo hice dos goles ⚽ Hoy voy a la cancha con mi hijo al mismo club. El tiempo pasa volando.', hashtags: ['#futbol', '#recuerdos', '#promo86'] },
  { autorId: 'user-sandro', plataforma: 'tiktok' as const, contenido: 'Bailando tango como en los 80 🕺💃', videos: ['https://www.w3schools.com/html/mov_bbb.mp4'], hashtags: ['#tango', '#bailando', '#recuerdos'] },
  // Edy
  { autorId: 'user-edy', plataforma: 'instagram' as const, contenido: 'Mi rincón favorito de Córdoba. Las sierras me recuerdan cuando veníamos de excursión con el colegio. ❤️', imagenes: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600'], filtro: 'vintage', hashtags: ['#cordoba', '#sierras', '#naturaleza'] },
  { autorId: 'user-edy', plataforma: 'facebook' as const, contenido: 'Comparto la receta de tortilla de papas de mi abuela, la misma que llevábamos a los picnics del colegio. 👩‍🍳\n\nIngredientes:\n- 5 papas grandes\n- 6 huevos\n- 1 cebolla\n- Aceite de oliva\n- Sal y pimienta\n\n¿Alguien más la hace igual?', hashtags: ['#recetas', '#cocina', '#abuela'] },
  // Fabiana
  { autorId: 'user-fabiana', plataforma: 'facebook' as const, contenido: 'Hoy atendí al hijo de una excompañera en mi consultorio. ¡Qué chico grande! Me acordé de cuando nosotras estábamos en el cole y no parábamos de reírnos en el fondo del aula. 🤭📚', hashtags: ['#pediatra', '#historias', '#promo86'] },
  { autorId: 'user-fabiana', plataforma: 'instagram' as const, contenido: 'Mi pasión: tejer mientras miro el atardecer rosarino 🌅🧶', imagenes: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600'], filtro: 'retro80', hashtags: ['#tejido', '#rosario', '#atardecer'] },
  // Jorge
  { autorId: 'user-jorge', plataforma: 'youtube' as const, contenido: 'Documental completo: recorrida por el Instituto Inmaculada Concepción 40 años después. Entrevisté a ex-profesores y recorrí cada aula. Las paredes hablan. 🏫🎥', videos: ['https://www.w3schools.com/html/mov_bbb.mp4'], hashtags: ['#documental', '#colegio', '#40años'] },
  { autorId: 'user-jorge', plataforma: 'facebook' as const, contenido: 'Subí la primera foto del álbum de pesca en Mar del Plata. ¡El mar está espectacular! 🐟🌊 ¿Quién se apunta para una salida?', imagenes: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'], hashtags: ['#pesca', '#marplatense', '#jubilado'] },
  // Laura
  { autorId: 'user-laura', plataforma: 'instagram' as const, contenido: 'New York, New York 🗽❤️ Cumpliendo el sueño de conocer Central Park. Me acordé de cuando estudiábamos inglés en el cole y soñábamos con viajar. ¡Nunca es tarde!', imagenes: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600'], filtro: 'ninguno', hashtags: ['#newyork', '#viajes', '#sueños'] },
  { autorId: 'user-laura', plataforma: 'whatsapp' as const, contenido: '¡Los espero a todas mañana en mi casa para la juntada! Traigan fotos viejas que vamos a mirar 📸✨' },
  // Mara
  { autorId: 'user-mara', plataforma: 'instagram' as const, contenido: 'La Patagonia es mi lugar en el mundo. Hoy en el lago Nahuel Huapi, 40 años después de haber venido con la promo. Mismo lugar, misma sonrisa. 🏔️💙', imagenes: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600'], filtro: 'ninguno', hashtags: ['#bariloche', '#patagonia', '#feliz'] },
  { autorId: 'user-mara', plataforma: 'tiktok' as const, contenido: 'Desafío: baile como en los 80 🎶💃 ¿Se acuerdan de este tema? 🔥', videos: ['https://www.w3schools.com/html/mov_bbb.mp4'], hashtags: ['#desafiobaila', '#80s', '#dance'] },
  // Mariana
  { autorId: 'user-mariana', plataforma: 'instagram' as const, contenido: 'Desde Cancún con amor 💕🌴 ¡Los extraño mucho! Ojalá puedan venir a visitarme. La casa tiene lugar para todos, armenos una promo vacaciones ☀️', imagenes: ['https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600'], filtro: 'vintage', hashtags: ['#cancun', '#mexico', '#promo86'] },
  { autorId: 'user-mariana', plataforma: 'facebook' as const, contenido: '¿Alguien más se acuerda de cuando hacíamos los bailes folclóricos en el acto del 25 de Mayo? Yo tenía el vestido celeste y blanco que me cosió mamá. 🇦🇷🎵 Hoy lo volvería a hacer sin dudar.', hashtags: ['#recuerdos', '#25demayo', '#colegio'] },
  // Paula
  { autorId: 'user-paula', plataforma: 'facebook' as const, contenido: 'Inaugurando la cosecha de uvas 2026 en Mendoza! 🍇🍷 Si alguien de la promo quiere venir a la vendimia, tengo lugar para 4. ¡El vino corre por mi cuenta!', imagenes: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400'], hashtags: ['#mendoza', '#vino', '#vendimia'] },
  { autorId: 'user-paula', plataforma: 'instagram' as const, contenido: 'Atardecer en los viñedos. La vida es bella. 🌅🍷', imagenes: ['https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600'], filtro: 'ninguno', hashtags: ['#mendoza', '#vino', '#atardecer'] },
  // Pocha
  { autorId: 'user-pocha', plataforma: 'facebook' as const, contenido: 'Reflexión del día: 40 años después, me doy cuenta de que los verdaderos amigos son los que estuvieron desde el principio. Gracias a esta app por permitirnos reencontrarnos. Los quiero mucho a todos. 💕✨', hashtags: ['#reflexion', '#amigos', '#promo86'] },
  { autorId: 'user-pocha', plataforma: 'instagram' as const, contenido: 'Mi rincón de lectura favorito 📚☕ ¿Recomendaciones de libros?', imagenes: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600'], filtro: 'ninguno', hashtags: ['#lectura', '#libros', '#recomendar'] },
  // Cristian
  { autorId: 'user-cristian', plataforma: 'tiktok' as const, contenido: 'Tocando "Persiana Americana" en la guitarra criolla. 🎸🎵 ¿Se acuerdan de esta? 🔥', videos: ['https://www.w3schools.com/html/mov_bbb.mp4'], hashtags: ['#guitarra', '#sodastereo', '#musica'] },
  { autorId: 'user-cristian', plataforma: 'youtube' as const, contenido: 'Mi nuevo tema: "Promoción 86" — una canción dedicada a todos ustedes. Espero que les guste. 🎵🎶', videos: ['https://www.w3schools.com/html/mov_bbb.mp4'], hashtags: ['#musicaoriginal', '#promocion86', '#cancion'] },
  // Marcelo
  { autorId: 'user-marcelo', plataforma: 'facebook' as const, contenido: '¡Asado confirmado para el sábado en lo de Claudio! 🤝 Traigan bebida y buena onda. Yo pongo la carne y el fuego. 🔥🥩 ¿Quién se copa?', hashtags: ['#asado', '#junta', '#promo86'] },
  { autorId: 'user-marcelo', plataforma: 'instagram' as const, contenido: 'Finde de pesca en el río. Pieza de 5 kilos! 🎣🔥', imagenes: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'], filtro: 'ninguno', hashtags: ['#pesca', '#rio', '#finde'] },
  // Marito
  { autorId: 'user-marito', plataforma: 'instagram' as const, contenido: 'Ushuaia, el fin del mundo. 🌎❄️ La ciudad más austral del planeta y mi hogar. Los espero a todos para hacer el viaje de la promo acá abajo. ¿Se animan?', imagenes: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600'], filtro: 'ninguno', hashtags: ['#ushuaia', '#findelmundo', '#viaje'] },
  { autorId: 'user-marito', plataforma: 'tiktok' as const, contenido: 'Aurora austral en Ushuaia 🌌✨ Algo que tienen que ver antes de morir.', videos: ['https://www.w3schools.com/html/mov_bbb.mp4'], hashtags: ['#aurora', '#ushuaia', '#naturaleza'] },
]

export const MENSAJES_CHAT = [
  { id: 'conv-claudia-sandro', participantes: ['user-claudia', 'user-sandro'], nombre: 'Claudia', ultimo: '¡Dale, confirmo! Llevo el vino 🍷' },
  { id: 'conv-edy-fabiana', participantes: ['user-edy', 'user-fabiana'], nombre: 'Edy', ultimo: 'Te compartí la receta de tortilla 🤗' },
  { id: 'conv-jorge-laura', participantes: ['user-jorge', 'user-laura'], nombre: 'Jorge', ultimo: 'La pesca del finde estuvo increíble 🎣' },
  { id: 'conv-grupo-promo86', participantes: USUARIOS.map((u) => u.id), nombre: 'Promo 86', tipo: 'grupal' as const, ultimo: '¿A qué hora es la cena del sábado?' },
  { id: 'conv-anuncios', participantes: USUARIOS.map((u) => u.id), nombre: 'Anuncios', tipo: 'broadcast' as const, ultimo: 'Cena anual: 10 de diciembre 2026' },
  { id: 'conv-mara-mariana', participantes: ['user-mara', 'user-mariana'], nombre: 'Mara', ultimo: '¡Nos vemos en Cancún! 🌴' },
  { id: 'conv-paula-pocha', participantes: ['user-paula', 'user-pocha'], nombre: 'Paula', ultimo: 'Te guardo una botella de malbec 🍷' },
  { id: 'conv-cristian-marcelo', participantes: ['user-cristian', 'user-marcelo'], nombre: 'Cristian', ultimo: 'Pasame la letra de la canción 📝' },
  { id: 'conv-marito-todos', participantes: ['user-marito', 'user-claudia', 'user-sandro', 'user-edy'], nombre: 'Marito', ultimo: 'Los espero en Ushuaia! ❄️' },
]

export const EVENTOS = [
  { id: 'event-cena', titulo: 'Cena Anual de Exalumnos', fecha: '10 de diciembre, 2026', lugar: 'Salón La Inmaculada, Av. Rivadavia 3450, CABA', confirmados: 9, pendientes: 3, menuEspecial: ['celiaco', 'vegetariano'] },
  { id: 'event-asado', titulo: 'Asado Promo 86 en lo de Marcelo', fecha: '25 de enero, 2027', lugar: 'Quinta de Marcelo, Moreno', confirmados: 7, pendientes: 5, menuEspecial: ['vegetariano'] },
  { id: 'event-viaje', titulo: 'Viaje a Ushuaia — Semana Promo', fecha: '5-12 de marzo, 2027', lugar: 'Ushuaia, Tierra del Fuego', confirmados: 4, pendientes: 8, menuEspecial: [] },
  { id: 'event-vendimia', titulo: 'Vendimia en Mendoza con Paula', fecha: '20 de febrero, 2027', lugar: 'Bodega de Paula, Mendoza', confirmados: 5, pendientes: 6, menuEspecial: ['celiaco'] },
  { id: 'event-records', titulo: 'Visita al Colegio — 40 Años', fecha: '15 de enero, 2027', lugar: 'Instituto Inmaculada Concepción', confirmados: 11, pendientes: 2, menuEspecial: [] },
]
