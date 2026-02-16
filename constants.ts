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
    title: "Vila Park Ljubljana",
    category: "Stanovanjska",
    year: "2023",
    imageBefore: "https://picsum.photos/id/10/800/600",
    imageAfter: "https://picsum.photos/id/11/800/600",
    description: "Popolna prenova vile iz leta 1930 s sodobnim betonskim prizidkom."
  },
  {
    id: 2,
    title: "Poslovni Center Maribor",
    category: "Poslovni",
    year: "2022",
    imageBefore: "https://picsum.photos/id/13/800/600",
    imageAfter: "https://picsum.photos/id/14/800/600",
    description: "Energetska sanacija in fasada steklenega objekta."
  },
  {
    id: 3,
    title: "Eko Hiša Bled",
    category: "Lesena",
    year: "2024",
    imageBefore: "https://picsum.photos/id/17/800/600",
    imageAfter: "https://picsum.photos/id/18/800/600",
    description: "Trajnostna gradnja z lokalnim lesom in minimalnim ogljičnim odtisom."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marko Zupančič",
    role: "Lastnik Hiše",
    text: "Ekipa je presegla vsa pričakovanja. Transparentnost pri cenah in vrhunska izvedba.",
    image: "https://picsum.photos/id/1005/100/100"
  },
  {
    id: 2,
    name: "Ana Novak",
    role: "Arhitektka",
    text: "Kot arhitektka cenim natančnost. Gradbena Prihodnost je partner, na katerega se lahko zanesem.",
    image: "https://picsum.photos/id/1011/100/100"
  },
  {
    id: 3,
    name: "Igor Kovač",
    role: "Investitor",
    text: "Projekt je bil zaključen pred rokom, kar je v gradbeništvu prava redkost.",
    image: "https://picsum.photos/id/1027/100/100"
  }
];

export const TEAM: TeamMember[] = [
  { id: 1, name: "Janez Hribar", role: "Direktor & Ustanovitelj", image: "https://picsum.photos/id/1062/400/500" },
  { id: 2, name: "Maja Vidmar", role: "Glavna Inženirka", image: "https://picsum.photos/id/1025/400/500" },
  { id: 3, name: "Luka Kos", role: "Vodja Gradbišča", image: "https://picsum.photos/id/1012/400/500" },
];