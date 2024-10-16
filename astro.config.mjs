import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export const locales = {
	root: { label: 'English', lang: 'en' },
	es: { label: 'Español', lang: 'es' },
};

export default defineConfig({
	integrations: [
		starlight({
			title: 'Healthy',
			locales,
			social: {
				github: 'https://github.com/SystemJAADE',
			},
			sidebar: [
				{
					label: 'Introduction',
					translations: {
						es: 'Introducción',
					},
					items: [
						{ label: 'Getting started', slug: 'getting-started', translations: { es: 'Empezando' } },
					],
				},
				{
					label: 'Installation (Recommended installation)',
					translations: {
						es: 'Instalación (Instalación recomendada)',
					},
					items: [
						{ label: 'Prerequisites', slug: 'installation/recommended/prerequisites', translations: { es: 'Requisitos previos' } },
						{ label: 'Deploying the Healthy Assets Service', slug: 'installation/recommended/deploying-assets-service', translations: { es: 'Desplegando el servicio de assets de Healthy' } },
						{ label: 'Deploying the Healthy Patients API', slug: 'installation/recommended/deploying-main-api', translations: { es: 'Desplegando la API de Healthy Pacientes' } },
					],
				},
				{
					label: 'Installation (Manual installation)',
					translations: {
						es: 'Instalación (Instalación manual)',
					},
					items: [
						{ label: 'Prerequisites', slug: 'installation/manual/prerequisites', translations: { es: 'Requisitos previos' } },
						{ label: 'Deploying the Healthy Assets Service', slug: 'installation/manual/deploying-assets-service', translations: { es: 'Desplegando el servicio de assets de Healthy' } },
						{ label: 'Deploying the Healthy Patients API', slug: 'installation/manual/deploying-main-api', translations: { es: 'Desplegando la API de Healthy Pacientes' } },
					],
				},
			],
		}),
	],
});
