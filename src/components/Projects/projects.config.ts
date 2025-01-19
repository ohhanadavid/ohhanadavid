export interface IProjectsModel {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    repoUrl: string;
    color: string;
}

export const projects: IProjectsModel[] = [
    {
        id: 1,
        title: 'Trainees Project',
        description: 'A comprehensive Angular-based fitness tracking application for managing trainee workouts and progress.',
        technologies: ['Angular', 'TypeScript', 'RxJS', 'Material UI'],
        repoUrl: 'https://github.com/Shaybush/trainees-project.git',
        color: '#DD0031' // Angular red
    },
    {
        id: 2,
        title: 'Rent In Out',
        description: 'Full-stack rental platform with real-time features using React, Node.js, and WebSocket technology.',
        technologies: ['React', 'Node.js', 'TypeScript', 'Socket.io', 'MongoDB'],
        repoUrl: 'https://github.com/rent-in-out1/rent-in-out-backend',
        color: '#61DAFB' // React blue
    },
    {
        id: 3,
        title: 'Weather Forecast',
        description: 'Interactive weather forecasting application providing real-time weather updates and predictions.',
        technologies: ['React', 'Weather API', 'CSS3', 'JavaScript'],
        repoUrl: 'https://github.com/Shaybush/weather-forecast.git',
        color: '#00D8FF' // Light blue
    }
];