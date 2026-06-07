import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 1. Importe o loader

const projectsCollection = defineCollection({
  // 2. Substitua o "type" pelo "loader", indicando o caminho da sua pasta de projetos
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    objectives: z.string(),
    link: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};