// Configuración de trabajos para cada página
// Solo necesitas especificar los IDs de los trabajos que quieres mostrar

export const worksConfig = {
  // Página de Galangal - muestra 4 trabajos
  galangal: ["scouting-labs", "flora-plus", "hyundai", "dbs"],

  // Página de Morgenstern - ejemplo con diferentes trabajos
  morgenstern: ["scouting-labs", "flora-plus", "hyundai", "dbs"],

  // Página de Inmobiliare - ejemplo con otros trabajos
  inmobiliare: ["scouting-labs", "flora-plus", "hyundai", "dbs"],

  // Página de Ephimero - ejemplo con otros trabajos
  ephimero: ["scouting-labs", "flora-plus", "hyundai", "dbs"],

  // Página de Trebol - ejemplo con otros trabajos
  trebol: ["scouting-labs", "flora-plus", "hyundai", "dbs"],

  // Página de Daewoo - ejemplo con otros trabajos
  daewoo: ["scouting-labs", "flora-plus", "hyundai", "dbs"],

  // Página de Manno - ejemplo con otros trabajos
  manno: ["scouting-labs", "flora-plus", "hyundai", "dbs"],

  // Página de Scouting Labs - ejemplo con otros trabajos
  "scouting-labs": ["inmobiliare", "flora-plus", "hyundai", "dbs"],

  // Página de Flora Plus - ejemplo con otros trabajos
  "flora-plus": ["scouting-labs", "galangal", "hyundai", "dbs"],
  // Página de Hyundai - ejemplo con otros trabajos
  hyundai: ["scouting-labs", "flora-plus", "daewoo", "dbs"],
  // Página de DBS - ejemplo con otros trabajos
  dbs: ["scouting-labs", "flora-plus", "hyundai", "ephimero"],

  home: ["scouting-labs", "flora-plus", "hyundai", "dbs"],
};

// Función helper para obtener la configuración de una página
export const getWorksConfig = (pageName) => {
  return worksConfig[pageName] || [];
};
