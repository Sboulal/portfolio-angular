import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  personalInfo = {
    name: 'Boulal Salma',
    title: 'Full Stack Developer',
    email: 'boulalsalma7@gmail.com',
    phone: '0654447852',
    location: 'Casablanca, Morocco',
    linkedin: 'BOULAL Salma',
    github: 'Sboulal',
    about: "Développeuse Full-stack passionnée, actuellement étudiante à l'école 1337 (Khouribga). Dotée d'une solide expérience académique et pratique en développement web (Angular, Laravel, Django) et en infrastructure (Docker). Je m'efforce de concevoir des solutions innovantes et performantes."
  };

  skills = [
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'Laravel', icon: 'devicon-laravel-original colored' },
    { name: 'Flask', icon: 'devicon-flask-original text-slate-800' },
    { name: 'Django', icon: 'devicon-django-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'C', icon: 'devicon-c-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
    { name: 'Linux', icon: 'devicon-linux-plain text-slate-800' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Flutter & Dart', icon: 'fas fa-mobile-alt text-sky-500' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' }
  ];

  experience = {
    title: 'Développeuse Full-stack',
    company: 'SphereBleue',
    date: 'Depuis Mars 2025',
    location: 'Casablanca',
    description: "Participation active au développement continu de sites web ainsi que d'applications métiers au sein de l'entreprise. Pilotage technique de projets tels que l'Application Imprime."
  };

  projects = [
    {
      title: 'ft_transcendence',
      category: 'Web',
      desc: "Création d'une plateforme web interactive basée sur un jeu classique de Pong avec authentification OAuth2 (42 API).",
      tech: ['React', 'Django', 'PostgreSQL', 'WebSocket'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Inception',
      category: 'Infrastructure',
      desc: "Création d'une infrastructure multi-container en utilisant Docker et Docker Compose pour déployer un ensemble de services web fonctionnels.",
      tech: ['Docker', 'Docker Compose'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Syndify - Gestion de Copropriété',
      category: 'Web & Mobile',
      desc: 'Plateforme complète de gestion immobilière et de syndic permettant le suivi des cotisations, la gestion des incidents, les assemblées générales et la communication entre résidents et gestionnaires.',
      tech: ['Angular', 'Flutter', 'Laravel', 'MySQL', 'Tailwind CSS'],
      github: '#',
      demo: 'http://51.178.87.234:8101/'
    },
    {
      title: 'GPAAO - Application Mobile Cross-Platform',
      category: 'Mobile',
      desc: 'Application mobile intuitive développée avec Flutter, offrant une expérience fluide sur iOS et Android. Intégration complète avec des APIs backend et déploiement sur Google Play Store et App Store Connect.',
      tech: ['Flutter', 'Dart', 'REST API', 'iOS / Android'],
      github: 'https://github.com/Sboulal/gpaao',
      demo: 'https://apps.apple.com/ma/app/gpaao/id6810309414'
    },
    {
      title: 'Gestion des Notes de Frais',
      category: 'Web',
      desc: 'Application web dédiée à l’automatisation et au suivi des dépenses professionnelles : soumission des justificatifs, workflow de validation hiérarchique et calcul automatique des remboursements.',
      tech: ['Angular', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/Sboulal/notes_frais',
      demo: 'http://51.178.87.234:8102/login'
    },
    {
      title: 'Application de Gestion Commerciale',
      category: 'Web',
      desc: 'Système complet de gestion des ventes, des stocks, de la facturation et du suivi clientèle, conçu pour optimiser les opérations quotidiennes des entreprises.',
      tech: ['Angular', 'Laravel', 'MySQL', 'Bootstrap / Tailwind'],
      github: 'https://github.com/Sboulal/Gestion_Commercial',
      demo: 'https://commercial.nomade-cloud.com/login'
    }
  ];
}