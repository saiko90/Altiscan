import {
  Target,
  ScanSearch,
  Database,
  Map,
  Layers,
  Clock,
  Camera,
  Activity,
  ShieldCheck,
  Navigation,
  MapPin,
  Film,
  Palette,
  Move,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceSpec {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface ServiceDeliverable {
  format: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  color: string;
  glow: string;
  gradient: string;
  heroDescription: string;
  techTitle: string;
  techParagraphs: string[];
  specs: ServiceSpec[];
  capabilities: string[];
  deliverables: ServiceDeliverable[];
}

export const servicesData: Record<string, ServiceDetail> = {
  photogrammetrie: {
    slug: "photogrammetrie",
    title: "Photogrammétrie 3D",
    tagline: "Modélisation haute précision",
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.18)",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    heroDescription:
      "Transformez vos relevés terrain en modèles 3D d'une précision centimétrique. De la topographie au jumeau numérique, nous capturons la réalité avec une exactitude chirurgicale.",
    techTitle: "Une précision millimétrique à grande échelle",
    techParagraphs: [
      "Notre workflow de photogrammétrie aérienne combine des images à très haute résolution (GSD < 2 cm/px) avec des points d'appui terrain géoréférencés. Le résultat : des modèles 3D exploitables directement dans vos outils de CAO, BIM ou SIG, sans retraitement.",
      "Les nuages de points denses générés offrent une densité supérieure à 500 points/m², permettant une extraction automatique des lignes de structure, une modélisation topographique précise et la génération d'orthophotographies géoréférencées prêtes pour l'analyse.",
    ],
    specs: [
      { icon: Target, label: "Précision planimétrique", value: "< 1 cm" },
      { icon: ScanSearch, label: "GSD moyen", value: "1 – 3 cm/px" },
      { icon: Database, label: "Densité nuage de points", value: "500+ pts/m²" },
      { icon: Map, label: "Couverture par vol", value: "Jusqu'à 200 ha" },
      { icon: Layers, label: "Intégration", value: "BIM / SIG ready" },
      { icon: Clock, label: "Délai de livraison", value: "5 – 10 jours" },
    ],
    capabilities: [
      "Modélisation topographique haute précision",
      "Calcul de cubature et bilan terrassement",
      "Orthophotographies géoréférencées",
      "Intégration directe BIM & SIG",
      "Suivi de déformation temporel",
      "Extraction automatique de bâtiments",
    ],
    deliverables: [
      { format: ".LAS / .LAZ", description: "Nuage de points dense géoréférencé" },
      { format: ".OBJ / .PLY", description: "Maillage 3D texturé haute résolution" },
      { format: ".TIFF", description: "Orthophotographie géoréférencée" },
      { format: ".DXF / .DWG", description: "Courbes de niveau & extraction vectorielle" },
      { format: "Rapport PDF", description: "Métadonnées de précision & rapport de traitement" },
    ],
  },

  inspection: {
    slug: "inspection",
    title: "Inspection Visuelle",
    tagline: "Accès difficiles & diagnostic",
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.18)",
    gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    heroDescription:
      "Inspectez les zones inaccessibles en toute sécurité. Grâce à nos drones équipés de capteurs 45MP+ et de caméras thermiques, chaque anomalie est détectée, documentée et restituée avec précision.",
    techTitle: "Des capteurs de pointe pour un diagnostic exhaustif",
    techParagraphs: [
      "Nos drones embarquent des capteurs plein format 45 mégapixels combinés à des caméras thermiques infrarouges calibrées. Cette combinaison permet d'identifier aussi bien les défauts structurels visibles (fissures, corrosion, déformations) que les anomalies thermiques cachées (infiltrations, ponts thermiques, défauts d'isolation).",
      "Chaque inspection est suivie d'un rapport de conformité structuré, avec annotation géolocalisée des anomalies, classification par sévérité et recommandations d'intervention priorisées. Nos livrables sont directement exploitables par vos équipes de maintenance et conformes aux normes en vigueur.",
    ],
    specs: [
      { icon: Camera, label: "Résolution capteur", value: "45 MP+" },
      { icon: Activity, label: "Caméra thermique", value: "IR calibrée" },
      { icon: ShieldCheck, label: "Taux de détection", value: "> 98 %" },
      { icon: Navigation, label: "Altitude d'inspection", value: "0 – 120 m" },
      { icon: Clock, label: "Rapport de conformité", value: "< 48 h" },
      { icon: MapPin, label: "Annotation anomalies", value: "Géolocalisée" },
    ],
    capabilities: [
      "Inspection de toitures et façades",
      "Contrôle d'ouvrages d'art (ponts, pylônes)",
      "Détection de fissures et corrosion",
      "Thermographie infrarouge des bâtiments",
      "Inspection de lignes haute tension",
      "Rapports de conformité normés",
    ],
    deliverables: [
      { format: "Rapport PDF", description: "Rapport d'inspection détaillé avec annotations" },
      { format: ".JPG / .PNG", description: "Photos haute résolution géolocalisées" },
      { format: ".TIFF", description: "Images thermiques calibrées avec palette" },
      { format: ".MP4", description: "Vidéo de survol annotée et commentée" },
      { format: ".XLSX", description: "Tableau des anomalies classifiées par sévérité" },
    ],
  },

  video: {
    slug: "video",
    title: "Vidéo & Motion Design",
    tagline: "Imagerie aérienne premium",
    color: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.18)",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    heroDescription:
      "Donnez à vos projets une dimension visuelle exceptionnelle. De la prise de vue aérienne 6K au motion design intégré, nous créons des contenus qui marquent les esprits et valorisent vos actifs.",
    techTitle: "Un workflow cinématographique de bout en bout",
    techParagraphs: [
      "Nos drones cinéma embarquent des capteurs large format permettant une acquisition 4K à 6K avec un rendu cinématographique. Le workflow de post-production intègre un étalonnage colorimétrique professionnel en DaVinci Resolve, garant d'une cohérence visuelle parfaite avec votre identité de marque.",
      "Pour les projets immobiliers haut de gamme, nous combinons prises de vue aériennes, plans intérieurs stabilisés et animations motion design pour une narration visuelle complète. Chaque séquence est pensée pour maximiser l'impact émotionnel et valoriser votre bien à sa juste valeur.",
    ],
    specs: [
      { icon: Film, label: "Résolution capteur", value: "4K – 6K" },
      { icon: Palette, label: "Étalonnage", value: "DaVinci Resolve" },
      { icon: Move, label: "Stabilisation", value: "3 axes actifs" },
      { icon: Clock, label: "Délai de livraison", value: "48 – 72 h" },
      { icon: Layers, label: "Formats livrés", value: "Multi-supports" },
      { icon: Timer, label: "Cadences", value: "24 / 25 / 30 fps" },
    ],
    capabilities: [
      "Prise de vue aérienne 4K / 6K",
      "Étalonnage colorimétrique professionnel",
      "Motion design & animation 2D/3D",
      "Narration visuelle immobilière",
      "Suivi de chantier en time-lapse",
      "Livraison multi-formats et multi-supports",
    ],
    deliverables: [
      { format: ".MP4 4K", description: "Master haute qualité (H.264 / H.265)" },
      { format: ".MOV ProRes", description: "Master d'archive en qualité maximale" },
      { format: "PNG Seq.", description: "Séquences d'image pour motion design" },
      { format: "Fichiers sources", description: "Projets After Effects / Premiere Pro" },
      { format: "Social cuts", description: "Formats optimisés réseaux (9:16, 1:1, 16:9)" },
    ],
  },
};
