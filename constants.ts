import { MaterialType, BuildType, Project, Testimonial, TeamMember } from './types';

export const MATERIALS: MaterialType[] = [
  { id: 'brick', name: 'Opeka (Classic)', pricePerSqm: 900, description: 'Tradicionalna trpežnost in odlična izolacija.' },
  { id: 'concrete', name: 'Armirani Beton', pricePerSqm: 1100, description: 'Maksimalna stabilnost in sodoben izgled.' },
  { id: 'wood', name: 'Les (Skeletna)', pricePerSqm: 850, description: 'Ekološka, diha z naravo in toplino.' },
  { id: 'prefab', name: 'Montažna', pricePerSqm: 750, description: 'Hitra izvedba in energetska učinkovitost.' },
];

export const BUILD_TYPES: BuildType[] = [
  { id: 'house', name: 'Stanovanjska Hiša', icon: 'Home' },
  { id: 'extension', name: 'Prizidek', icon: 'PlusSquare' },
  { id: 'terrace', name: 'Terasa / Nadstrešek', icon: 'Sun' },
  { id: 'garage', name: 'Garaža', icon: 'Car' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Soseska Zeleni Gaj",
    category: "Stanovanjska",
    year: "2023",
    imageBefore: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop", 
    description: "Sodoben stanovanjski kompleks z 20 enotami in podzemno garažo v okolici Ljubljane."
  },
  {
    id: 2,
    title: "Poslovna Stolpnica Kristal",
    category: "Poslovni",
    year: "2022",
    imageBefore: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    description: "Celovita zasteklitev in energetska sanacija poslovnega objekta v centru mesta."
  },
  {
    id: 3,
    title: "Alpska Eko Vila",
    category: "Lesena",
    year: "2024",
    imageBefore: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
    description: "Luksuzna lesena gradnja z minimalnim ogljičnim odtisom in pametnimi inštalacijami."
  },
  {
    id: 4,
    title: "Vila Ob Jezeru",
    category: "Stanovanjska",
    year: "2023",
    imageBefore: "https://images.unsplash.com/photo-1600596542815-e328986592e3?q=80&w=1000&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop", // Fixed broken image with a reliable modern home URL
    description: "Moderna enodružinska hiša z bazenom in odprtim tlorisom."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marko Zupančič",
    role: "Lastnik Hiše",
    text: "Ekipa je presegla vsa pričakovanja. Transparentnost pri cenah in vrhunska izvedba.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ana Novak",
    role: "Arhitektka",
    text: "Kot arhitektka cenim natančnost. Gradbena Prihodnost je partner, na katerega se lahko zanesem.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Igor Kovač",
    role: "Investitor",
    text: "Projekt je bil zaključen pred rokom, kar je v gradbeništvu prava redkost.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export const TEAM: TeamMember[] = [
  { id: 1, name: "Janez Hribar", role: "Direktor & Ustanovitelj", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Maja Vidmar", role: "Glavna Inženirka", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Luka Kos", role: "Vodja Gradbišča", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop" },
];