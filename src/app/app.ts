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
      title: 'Syndify',
      desc: "Plateforme de Gestion Immobilière. Ce projet comprend la conception de l'architecture logicielle globale, le développement d'interfaces utilisateur dynamiques et la structuration de la base de données pour offrir une expérience de gestion fluide et optimisée.",
      tech: 'Angular, Laravel, PostgreSQL'
    },
    {
      title: 'Gestion Commerciale (CRM)',
      desc: "Conception et développement d'une application de gestion complète intégrant des tableaux de bord statistiques automatisés. Implémentation d'une gestion fine des rôles (Commercial et Superuser), ainsi que la configuration du serveur Nginx.",
      tech: 'Angular, Laravel, Flask, Nginx'
    },
    {
      title: 'ft_transcendence',
      desc: "Création d'une plateforme web interactive basée sur un jeu classique de Pong avec authentification OAuth2 (42 API).",
      tech: 'React, Django, PostgreSQL, WebSocket'
    },
    {
      title: 'Inception',
      desc: "Création d'une infrastructure multi-container en utilisant Docker et Docker Compose pour déployer un ensemble de services web fonctionnels.",
      tech: 'Docker, Docker Compose'
    }
  ];
}