/**
 * Script para crear el proyecto SCALEXIA en Firestore
 * Este proyecto contiene toda la información del análisis de implementación de SCALEXIA
 * Accesible solo para el superadmin: homodeus.cith@gmail.com
 * 
 * Ejecutar en la consola del navegador cuando estés autenticado como superadmin
 */

const scalexiaProjectData = [
    {
        id: "1",
        title: "📊 FASE 1: ANÁLISIS Y PLANIFICACIÓN",
        tasks: [
            {
                id: "1.1",
                title: "1.1 Análisis de Complejidad Técnica",
                items: [
                    {
                        id: "1.1.1",
                        text: "Evaluar complejidad del Frontend (Nuevo Botón/Sección) - Complejidad: BAJA - Tiempo: 2-3 días",
                        status: "❌",
                        note: "Agregar botón SCALEXIA en navegación, crear modal/textarea, mostrar loading states"
                    },
                    {
                        id: "1.1.2",
                        text: "Evaluar complejidad del Backend (Cloud Function) - Complejidad: MEDIA - Tiempo: 5-7 días",
                        status: "❌",
                        note: "Crear Cloud Function que recibe texto, conecta con APIs de IA, procesa y genera estructura JSON"
                    },
                    {
                        id: "1.1.3",
                        text: "Evaluar complejidad de Lógica de Generación - Complejidad: ALTA - Tiempo: 7-10 días",
                        status: "❌",
                        note: "Prompts engineering, extraer información, generar jerarquía lógica, asignar nombres y emojis"
                    },
                    {
                        id: "1.1.4",
                        text: "Evaluar complejidad de Integración - Complejidad: MEDIA - Tiempo: 3-4 días",
                        status: "❌",
                        note: "Conectar con función de creación de proyectos, mapear estructura, validar permisos"
                    },
                    {
                        id: "1.1.5",
                        text: "Calcular tiempo total estimado: 17-24 días (3-4 semanas) + 1 semana testing = 4-5 semanas total",
                        status: "❌"
                    }
                ]
            },
            {
                id: "1.2",
                title: "1.2 Análisis de APIs de IA Disponibles",
                items: [
                    {
                        id: "1.2.1",
                        text: "Investigar OpenAI (GPT-4o / GPT-4 Turbo) - Input: $5-10/1M tokens, Output: $15-30/1M tokens",
                        status: "❌",
                        note: "Mejor opción para organización estructurada. Recomendación: GPT-4o (balance calidad/precio)"
                    },
                    {
                        id: "1.2.2",
                        text: "Investigar Anthropic Claude (Sonnet / Haiku) - Input: $0.25-3/1M tokens, Output: $1.25-15/1M tokens",
                        status: "❌",
                        note: "Excelente para análisis y estructuración. Recomendación: Claude 3.5 Sonnet"
                    },
                    {
                        id: "1.2.3",
                        text: "Investigar Google Gemini - Input: $0.075-1.25/1M tokens, Output: $0.30-5/1M tokens",
                        status: "❌",
                        note: "Alternativa competitiva. Recomendación: Gemini 1.5 Pro (opción económica con buena calidad)"
                    },
                    {
                        id: "1.2.4",
                        text: "Comparar modelos: GPT-4o (⭐⭐⭐⭐⭐ calidad, $$$$ costo), Claude Sonnet (⭐⭐⭐⭐⭐ calidad, $$$$ costo), Gemini Pro (⭐⭐⭐⭐ calidad, $$ costo)",
                        status: "❌"
                    }
                ]
            },
            {
                id: "1.3",
                title: "1.3 Estimación de Costos por Consulta",
                items: [
                    {
                        id: "1.3.1",
                        text: "Calcular costos para Proyecto Pequeño (~2,500 tokens): GPT-4o $0.0325, Claude $0.0315, Gemini $0.010625",
                        status: "❌"
                    },
                    {
                        id: "1.3.2",
                        text: "Calcular costos para Proyecto Mediano (~10,000 tokens): GPT-4o $0.13, Claude $0.126, Gemini $0.0425",
                        status: "❌"
                    },
                    {
                        id: "1.3.3",
                        text: "Calcular costos para Proyecto Grande (~25,000 tokens): GPT-4o $0.325, Claude $0.315, Gemini $0.10625",
                        status: "❌"
                    },
                    {
                        id: "1.3.4",
                        text: "Proyectar costos mensuales: 500 consultas/mes = GPT-4o $65, Claude $63, Gemini $21.25",
                        status: "❌"
                    },
                    {
                        id: "1.3.5",
                        text: "Proyectar costos a escala: 5,000 consultas/mes = GPT-4o $650, Claude $630, Gemini $212.50",
                        status: "❌"
                    }
                ]
            }
        ]
    },
    {
        id: "2",
        title: "🔧 FASE 2: IMPLEMENTACIÓN TÉCNICA",
        tasks: [
            {
                id: "2.1",
                title: "2.1 Desarrollo Frontend",
                items: [
                    {
                        id: "2.1.1",
                        text: "Agregar botón 'SCALEXIA' en la navegación principal",
                        status: "❌",
                        note: "Ubicación: Sidebar o header, con icono de IA/brain"
                    },
                    {
                        id: "2.1.2",
                        text: "Crear modal/componente para input de texto del usuario",
                        status: "❌",
                        note: "Textarea grande, placeholder con ejemplos, contador de caracteres"
                    },
                    {
                        id: "2.1.3",
                        text: "Implementar loading states y feedback visual durante procesamiento",
                        status: "❌",
                        note: "Spinner, mensaje de progreso, estimación de tiempo"
                    },
                    {
                        id: "2.1.4",
                        text: "Crear vista de preview de estructura generada antes de crear proyecto",
                        status: "❌",
                        note: "Mostrar estructura en formato expandible, permitir edición manual antes de guardar"
                    },
                    {
                        id: "2.1.5",
                        text: "Implementar manejo de errores y mensajes informativos",
                        status: "❌",
                        note: "Errores de API, validaciones, timeouts"
                    }
                ]
            },
            {
                id: "2.2",
                title: "2.2 Desarrollo Backend (Cloud Functions)",
                items: [
                    {
                        id: "2.2.1",
                        text: "Crear Cloud Function: generateProjectStructure (onCall)",
                        status: "❌",
                        note: "Función que recibe texto del usuario, valida autenticación, procesa con IA"
                    },
                    {
                        id: "2.2.2",
                        text: "Implementar validación de autenticación y permisos",
                        status: "❌",
                        note: "Verificar usuario autenticado, validar límites de uso, verificar suscripción"
                    },
                    {
                        id: "2.2.3",
                        text: "Integrar con API de OpenAI (GPT-4o)",
                        status: "❌",
                        note: "Configurar API key, implementar llamadas, manejar rate limits"
                    },
                    {
                        id: "2.2.4",
                        text: "Integrar con API de Anthropic Claude (Sonnet)",
                        status: "❌",
                        note: "Configurar API key, implementar llamadas alternativas"
                    },
                    {
                        id: "2.2.5",
                        text: "Integrar con API de Google Gemini (Pro)",
                        status: "❌",
                        note: "Configurar API key, implementar como opción económica"
                    },
                    {
                        id: "2.2.6",
                        text: "Implementar sistema de selección de modelo según plan de usuario",
                        status: "❌",
                        note: "Gratis = Gemini, Premium = GPT-4o/Claude"
                    },
                    {
                        id: "2.2.7",
                        text: "Crear función de parseo y validación de respuesta JSON de IA",
                        status: "❌",
                        note: "Validar estructura, corregir errores menores, asegurar formato correcto"
                    },
                    {
                        id: "2.2.8",
                        text: "Implementar creación de proyecto en Firestore con estructura generada",
                        status: "❌",
                        note: "Mapear JSON de IA al formato Firestore, crear documento de proyecto"
                    }
                ]
            },
            {
                id: "2.3",
                title: "2.3 Prompt Engineering",
                items: [
                    {
                        id: "2.3.1",
                        text: "Diseñar prompt base para análisis de proyectos",
                        status: "❌",
                        note: "Instrucciones claras sobre qué analizar y cómo estructurar"
                    },
                    {
                        id: "2.3.2",
                        text: "Definir formato de salida JSON exacto requerido",
                        status: "❌",
                        note: "Especificar estructura: projectName, content array, espacios, grupos, tareas"
                    },
                    {
                        id: "2.3.3",
                        text: "Agregar instrucciones para uso de emojis apropiados",
                        status: "❌",
                        note: "Guía de emojis por tipo de sección (🏗️ infraestructura, 🎨 frontend, etc.)"
                    },
                    {
                        id: "2.3.4",
                        text: "Implementar límites: máximo 25 espacios, 15 grupos por espacio, 20 tareas por grupo",
                        status: "❌"
                    },
                    {
                        id: "2.3.5",
                        text: "Crear sistema de refinamiento de prompts basado en resultados",
                        status: "❌",
                        note: "Ajustar prompts según feedback de usuarios"
                    }
                ]
            },
            {
                id: "2.4",
                title: "2.4 Integración con Sistema Existente",
                items: [
                    {
                        id: "2.4.1",
                        text: "Conectar función de generación con createNewProject existente",
                        status: "❌",
                        note: "Reutilizar lógica de creación, adaptar para estructura pre-generada"
                    },
                    {
                        id: "2.4.2",
                        text: "Mapear estructura generada por IA al formato Firestore",
                        status: "❌",
                        note: "Convertir JSON de IA a formato: content (JSON string), priorities (JSON string)"
                    },
                    {
                        id: "2.4.3",
                        text: "Validar permisos del usuario antes de crear proyecto",
                        status: "❌",
                        note: "Verificar límites de proyectos, permisos de creación"
                    },
                    {
                        id: "2.4.4",
                        text: "Implementar guardado automático de proyecto generado",
                        status: "❌",
                        note: "Usar saveCoreProjectData o función similar"
                    }
                ]
            }
        ]
    },
    {
        id: "3",
        title: "💰 FASE 3: OPTIMIZACIÓN Y COSTOS",
        tasks: [
            {
                id: "3.1",
                title: "3.1 Estrategias de Reducción de Costos",
                items: [
                    {
                        id: "3.1.1",
                        text: "Implementar sistema de caché de respuestas",
                        status: "❌",
                        note: "Si usuario genera mismo proyecto dos veces, usar caché. Ahorro: 50-80%"
                    },
                    {
                        id: "3.1.2",
                        text: "Definir límites por usuario según plan",
                        status: "❌",
                        note: "Gratis: 10 consultas/mes, Básico: 50/mes, Premium: ilimitadas"
                    },
                    {
                        id: "3.1.3",
                        text: "Implementar validación previa de textos",
                        status: "❌",
                        note: "Rechazar textos >10,000 tokens, validar relevancia, evitar abuso"
                    },
                    {
                        id: "3.1.4",
                        text: "Crear sistema de batch processing para consultas pequeñas",
                        status: "❌",
                        note: "Agrupar múltiples consultas, procesar en horas de menor uso"
                    },
                    {
                        id: "3.1.5",
                        text: "Implementar modelo económico para previews (GPT-3.5/Gemini Flash)",
                        status: "❌",
                        note: "Usar modelo barato para preview, premium solo al confirmar"
                    }
                ]
            },
            {
                id: "3.2",
                title: "3.2 Modelo Híbrido de APIs",
                items: [
                    {
                        id: "3.2.1",
                        text: "Configurar sistema de selección automática de modelo",
                        status: "❌",
                        note: "Gratis = Gemini 1.5 Pro, Premium = GPT-4o/Claude Sonnet"
                    },
                    {
                        id: "3.2.2",
                        text: "Implementar fallback entre modelos si uno falla",
                        status: "❌",
                        note: "Si GPT-4o falla, intentar Claude, luego Gemini"
                    },
                    {
                        id: "3.2.3",
                        text: "Crear sistema de monitoreo de costos en tiempo real",
                        status: "❌",
                        note: "Tracking de tokens usados, costos por usuario, alertas de límites"
                    },
                    {
                        id: "3.2.4",
                        text: "Implementar rate limiting por usuario y por modelo",
                        status: "❌",
                        note: "Evitar abuso, distribuir carga, respetar límites de APIs"
                    }
                ]
            },
            {
                id: "3.3",
                title: "3.3 Modelo de Negocio",
                items: [
                    {
                        id: "3.3.1",
                        text: "Definir plan Freemium: Gratis (5 consultas/mes Gemini), Básico ($5/mes, 20 consultas Gemini), Pro ($15/mes, 100 consultas GPT-4o)",
                        status: "❌"
                    },
                    {
                        id: "3.3.2",
                        text: "Evaluar modelo Pay-per-use: 3 consultas gratis, adicionales $0.10-0.20 cada una",
                        status: "❌"
                    },
                    {
                        id: "3.3.3",
                        text: "Considerar modelo Solo Premium: Feature solo para usuarios Pro+",
                        status: "❌"
                    },
                    {
                        id: "3.3.4",
                        text: "Calcular ROI: Con 1,000 usuarios, si 20% paga $5/mes = $1,000/mes ingresos vs $200-650 costos",
                        status: "❌"
                    }
                ]
            }
        ]
    },
    {
        id: "4",
        title: "🚀 FASE 4: PLAN DE IMPLEMENTACIÓN",
        tasks: [
            {
                id: "4.1",
                title: "4.1 MVP (2 semanas)",
                items: [
                    {
                        id: "4.1.1",
                        text: "Frontend básico: input + botón SCALEXIA",
                        status: "❌",
                        note: "Modal simple con textarea y botón de generar"
                    },
                    {
                        id: "4.1.2",
                        text: "Cloud Function simple con integración Gemini 1.5 Pro",
                        status: "❌",
                        note: "Función básica que recibe texto, llama a Gemini, devuelve estructura"
                    },
                    {
                        id: "4.1.3",
                        text: "Validación básica de respuesta JSON",
                        status: "❌",
                        note: "Verificar que sea JSON válido, estructura correcta"
                    },
                    {
                        id: "4.1.4",
                        text: "Creación automática de proyecto con estructura generada",
                        status: "❌",
                        note: "Guardar proyecto en Firestore, mostrar en lista"
                    },
                    {
                        id: "4.1.5",
                        text: "Testing básico con usuarios beta",
                        status: "❌",
                        note: "Probar con 5-10 usuarios, recopilar feedback"
                    }
                ]
            },
            {
                id: "4.2",
                title: "4.2 Mejoras (1 semana)",
                items: [
                    {
                        id: "4.2.1",
                        text: "Preview de estructura antes de crear proyecto",
                        status: "❌",
                        note: "Mostrar estructura generada, permitir revisar antes de guardar"
                    },
                    {
                        id: "4.2.2",
                        text: "Edición manual de estructura antes de guardar",
                        status: "❌",
                        note: "Permitir modificar, agregar, eliminar elementos antes de crear"
                    },
                    {
                        id: "4.2.3",
                        text: "Manejo de errores mejorado con mensajes claros",
                        status: "❌",
                        note: "Errores específicos, sugerencias de solución"
                    },
                    {
                        id: "4.2.4",
                        text: "Loading states y feedback visual mejorado",
                        status: "❌",
                        note: "Progreso detallado, estimación de tiempo, animaciones"
                    }
                ]
            },
            {
                id: "4.3",
                title: "4.3 Optimización (1 semana)",
                items: [
                    {
                        id: "4.3.1",
                        text: "Sistema de caché de respuestas",
                        status: "❌",
                        note: "Guardar respuestas en Firestore, reutilizar si mismo input"
                    },
                    {
                        id: "4.3.2",
                        text: "Límites por usuario según plan",
                        status: "❌",
                        note: "Tracking de consultas, bloqueo al alcanzar límite"
                    },
                    {
                        id: "4.3.3",
                        text: "Múltiples modelos (sistema híbrido)",
                        status: "❌",
                        note: "Selección automática según plan de usuario"
                    },
                    {
                        id: "4.3.4",
                        text: "Analytics de uso y costos",
                        status: "❌",
                        note: "Dashboard de métricas, costos por usuario, uso por modelo"
                    }
                ]
            },
            {
                id: "4.4",
                title: "4.4 Avanzado (2 semanas)",
                items: [
                    {
                        id: "4.4.1",
                        text: "Refinamiento de prompts basado en feedback",
                        status: "❌",
                        note: "Ajustar prompts según resultados, mejorar calidad"
                    },
                    {
                        id: "4.4.2",
                        text: "Opción de regenerar partes específicas de la estructura",
                        status: "❌",
                        note: "Regenerar solo un espacio de trabajo o grupo específico"
                    },
                    {
                        id: "4.4.3",
                        text: "Sugerencias inteligentes durante edición",
                        status: "❌",
                        note: "IA sugiere mejoras, tareas adicionales, reorganización"
                    },
                    {
                        id: "4.4.4",
                        text: "Templates guardados de proyectos comunes",
                        status: "❌",
                        note: "Guardar estructuras exitosas como templates reutilizables"
                    }
                ]
            }
        ]
    },
    {
        id: "5",
        title: "⚠️ FASE 5: RIESGOS Y CONSIDERACIONES",
        tasks: [
            {
                id: "5.1",
                title: "5.1 Riesgos Técnicos",
                items: [
                    {
                        id: "5.1.1",
                        text: "Costos impredecibles si usuarios generan proyectos muy grandes",
                        status: "❌",
                        note: "Solución: Límites de tokens de entrada/salida, validación previa"
                    },
                    {
                        id: "5.1.2",
                        text: "Calidad variable de estructuras generadas por IA",
                        status: "❌",
                        note: "Solución: Validación robusta + opción de edición manual obligatoria"
                    },
                    {
                        id: "5.1.3",
                        text: "Latencia de APIs (1-10 segundos de delay)",
                        status: "❌",
                        note: "Solución: Loading states claros + timeout handling + mensajes informativos"
                    },
                    {
                        id: "5.1.4",
                        text: "Rate limits de APIs de terceros",
                        status: "❌",
                        note: "Solución: Queue system + rate limiting por usuario + fallback entre modelos"
                    },
                    {
                        id: "5.1.5",
                        text: "Privacidad: texto del proyecto se envía a terceros (IA)",
                        status: "❌",
                        note: "Solución: Política de privacidad clara + opción de no usar IA + encriptación"
                    }
                ]
            },
            {
                id: "5.2",
                title: "5.2 Mitigaciones",
                items: [
                    {
                        id: "5.2.1",
                        text: "Implementar sistema de validación multi-nivel",
                        status: "❌",
                        note: "Validar antes de enviar, validar respuesta, validar antes de guardar"
                    },
                    {
                        id: "5.2.2",
                        text: "Crear sistema de queue para manejar picos de tráfico",
                        status: "❌",
                        note: "Cola de procesamiento, priorización, retry automático"
                    },
                    {
                        id: "5.2.3",
                        text: "Implementar monitoreo y alertas de costos",
                        status: "❌",
                        note: "Alertas cuando costos excedan umbral, límites diarios/mensuales"
                    },
                    {
                        id: "5.2.4",
                        text: "Crear documentación clara sobre limitaciones y expectativas",
                        status: "❌",
                        note: "Comunicar a usuarios qué puede y no puede hacer la IA"
                    }
                ]
            }
        ]
    },
    {
        id: "6",
        title: "✅ FASE 6: CONCLUSIÓN Y PRÓXIMOS PASOS",
        tasks: [
            {
                id: "6.1",
                title: "6.1 Validación de Viabilidad",
                items: [
                    {
                        id: "6.1.1",
                        text: "Confirmar viabilidad: ALTA - SCALEXIA es factible y agrega mucho valor",
                        status: "✅",
                        note: "Análisis completo realizado, todos los componentes son implementables"
                    },
                    {
                        id: "6.1.2",
                        text: "Validar demanda con usuarios actuales del gestor",
                        status: "❌",
                        note: "Encuesta, entrevistas, interés en feature de IA"
                    },
                    {
                        id: "6.1.3",
                        text: "Calcular inversión inicial: Desarrollo 4-5 semanas (~$5,000-8,000), Costos mensuales iniciales ~$20-100",
                        status: "❌"
                    },
                    {
                        id: "6.1.4",
                        text: "Proyectar escalabilidad: 1,000 usuarios = $200-650/mes costos, potencial $1,000/mes ingresos",
                        status: "❌"
                    }
                ]
            },
            {
                id: "6.2",
                title: "6.2 Próximos Pasos Inmediatos",
                items: [
                    {
                        id: "6.2.1",
                        text: "Validar demanda con usuarios actuales",
                        status: "❌",
                        note: "Crear encuesta, preguntar sobre interés en IA para generar proyectos"
                    },
                    {
                        id: "6.2.2",
                        text: "Crear MVP básico (2 semanas de desarrollo)",
                        status: "❌",
                        note: "Frontend simple + Cloud Function + Gemini 1.5 Pro"
                    },
                    {
                        id: "6.2.3",
                        text: "Probar con usuarios beta (5-10 usuarios)",
                        status: "❌",
                        note: "Seleccionar usuarios activos, dar acceso temprano, recopilar feedback"
                    },
                    {
                        id: "6.2.4",
                        text: "Iterar y mejorar basado en feedback",
                        status: "❌",
                        note: "Ajustar prompts, mejorar UI, optimizar costos"
                    },
                    {
                        id: "6.2.5",
                        text: "Lanzar feature completa con modelo freemium",
                        status: "❌",
                        note: "Lanzamiento público, marketing, documentación"
                    }
                ]
            },
            {
                id: "6.3",
                title: "6.3 Recomendaciones Finales",
                items: [
                    {
                        id: "6.3.1",
                        text: "Comenzar con MVP usando Gemini 1.5 Pro (costo bajo $0.04/consulta, calidad aceptable)",
                        status: "❌",
                        note: "Permite validar demanda sin grandes inversiones"
                    },
                    {
                        id: "6.3.2",
                        text: "Implementar sistema freemium desde el inicio",
                        status: "❌",
                        note: "Limitar uso gratuito, cobrar por uso adicional o premium"
                    },
                    {
                        id: "6.3.3",
                        text: "ROI positivo si > 200 usuarios pagando $5/mes",
                        status: "❌",
                        note: "Con 1,000 usuarios, si 20% paga = $1,000/mes ingresos vs $200-650 costos"
                    },
                    {
                        id: "6.3.4",
                        text: "SCALEXIA es diferenciador fuerte, costos manejables, puede generar ingresos adicionales",
                        status: "✅",
                        note: "Vale la pena implementar - alto potencial de valor"
                    }
                ]
            }
        ]
    }
];

// Función para crear el proyecto SCALEXIA
async function createScalexiaProject() {
    try {
        // Verificar que estamos en el contexto correcto (navegador con Firebase)
        if (typeof db === 'undefined' || typeof auth === 'undefined') {
            console.error('Error: Firebase no está inicializado. Ejecuta esto en la consola del navegador después de iniciar sesión.');
            return;
        }

        const user = auth.currentUser;
        if (!user) {
            console.error('Error: No hay usuario autenticado. Por favor inicia sesión primero.');
            return;
        }

        const userEmail = user.email;
        const SUPERADMIN_EMAIL = 'homodeus.cith@gmail.com';

        if (userEmail.toLowerCase() !== SUPERADMIN_EMAIL.toLowerCase()) {
            console.error('Error: Solo el superadmin puede crear este proyecto.');
            return;
        }

        console.log('Creando proyecto SCALEXIA...');

        const projectId = 'scalexia';
        const docPath = `artifacts/${appId}/public/data/projects/${projectId}`;
        const projectRef = doc(db, docPath);

        // Verificar si ya existe
        const existingDoc = await getDoc(projectRef);
        if (existingDoc.exists()) {
            console.log('El proyecto SCALEXIA ya existe. Actualizando...');
        }

        // Crear/actualizar proyecto
        await setDoc(projectRef, {
            projectName: "SCALEXIA - Análisis de Implementación",
            description: "Proyecto completo con análisis técnico, costos, plan de implementación y consideraciones para la funcionalidad SCALEXIA (IA generadora de estructuras de proyectos)",
            content: JSON.stringify(scalexiaProjectData),
            priorities: JSON.stringify([]),
            isPrivate: true, // Solo visible para el superadmin
            createdBy: SUPERADMIN_EMAIL,
            invitedUsers: [], // Solo el superadmin tiene acceso
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });

        console.log('✅ Proyecto SCALEXIA creado exitosamente!');
        console.log('El proyecto está disponible solo para:', SUPERADMIN_EMAIL);
        console.log('Recarga la lista de proyectos para verlo.');

        // Recargar lista de proyectos si la función existe
        if (typeof loadProjectsList === 'function') {
            await loadProjectsList();
        }

    } catch (error) {
        console.error('Error al crear proyecto SCALEXIA:', error);
    }
}

// Exportar para uso en consola del navegador
if (typeof window !== 'undefined') {
    window.createScalexiaProject = createScalexiaProject;
    console.log('Función createScalexiaProject() disponible. Ejecuta: createScalexiaProject()');
}

// Si se ejecuta directamente en Node.js (para testing)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { scalexiaProjectData, createScalexiaProject };
}

