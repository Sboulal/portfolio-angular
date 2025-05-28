import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Inception',
      desc: '',
      livedemo: 'https://mehulk05.github.io/MyShop/#/',
      githurl: 'https://github.com/mehulk05/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/docker_logo.png',
      tech: 'is a project aimed at introducing students to the concepts of system containerization and orchestration using **Docker**. The objective is to create a secure and efficient multi-container environment that mimics a small-scale web hosting setup.'
    },

    {
      id: 2,
      title: 'ft_transcendence',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/ping.png',
      tech: 'ft_transcendence is the ultimate project in the 42 common core curriculum, challenging students to create a feature-rich web application centered around the classic game Pong. This project combines various modern web technologies to create a complete multiplayer gaming experience with social features.'
    },


    {
      id: 3,
      title: 'Cub3D',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/mehulk05/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/cub3d.png',
      tech: 'Cub3D is a simple 3D game engine project built in C using raycasting, inspired by the classic game Wolfenstein 3D💪🔫🔫💥.'
    },

    {
      id: 4,
      title: 'Minishell',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/mini.gif',
      tech: 'This project is about creating a simple shell, and learning about about processes and file descriptors.'
    },


    {
      id: 5,
      title: 'IRC Chat Application',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/IRC.jpg',
      tech: 'ft_irc 💬 *A minimalist IRC server in C++ (RFC 2812 compliant)* Core Features: ✅ Multi-client chat with poll() ✅ Channel modes (+i, +t, +k) ✅ Password authentication ✅ DCC file transfer (bonus)'
    },



    {
      id: 6,
      title: 'Crud-app-angular',
      desc: '',
      livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/mehulk05/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/angular.jpeg',
      tech: 'Angular 2+ , Bootstrap, Javascript, HTML, CSS'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-Book/',
      githurl: 'https://github.com/mehulk05/Blog-Book',
      mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://mehulk05.github.io/COVOID-19/',
      githurl: 'https://github.com/mehulk05/COVOID-19',
      mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: 'https://mehulk05.github.io/React-Weather/',
      githurl: 'https://github.com/mehulk05/React-Weather-App',
      mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
      mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05',
      mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
      mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = ``

  about = "I'm a motivated student at 42 Network seeking an internship opportunity to advance my technical skills and gain practical industry experience. Based in Morocco, I'm eager to contribute to dynamic projects while learning from experienced professionals. I'm passionate about applying my academic knowledge in real-world settings and am committed to delivering value to any team I join. I'm particularly interested in opportunities that will challenge me to grow professionally and expand my understanding of current industry practices and technologies."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Langage C, C++',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Command linux, Git, Docker',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'Backend Django',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'PostgreSQL',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS,ANGULAR 2+',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PYTHON',
      'progress': '70%'
    }
  ];



  exprienceData: any = [
    {
      id: 4,
      company: 'Tech 57',
      location: 'kHOURIBGA',
      timeline: 'Aug 2021 to Present',
      role: 'Software Developer',
      work: 'Working as a developer Wordpress .'

    },
    
    {
      id: 3,
      company: 'Sphere Bleu',
      location: 'Casablanca',
      timeline: 'Mars 2025 to septembre 2025',
      role: 'Frontend Developer',
      work: `Technologies : Angular , html , css,Javascript .
      Worked on the web application built in Angular for different business and Campaigns .
      Contributed on developing the admin dashboard with different charts and insights for the application.`
    },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

  //   {
  //     id: 1,
  //     company: 'Tata Consultancy Services',
  //     location: 'Gandhinagar and Pune',
  //     timeline: 'June 2019 - Jan 2021',
  //     role: 'Assistant System Engineer Trainee',
  //     work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr .

  // Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business .

  // Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts .

  // Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  // `
  //   },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Salma Boulal – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  
  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
