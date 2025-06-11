export interface IProjectsModel {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    repoUrl: string;
    videoUrl?: string; // Optional field for video URL
    linkUrl?: string; // Optional field for additional link
    color: string;
}

export const projects: IProjectsModel[] = [
    {
        id: 1,
        title: 'News AI',
        description: 'A smart system that delivers personalized news directly to users via email, SMS, or WhatsApp. It filters and presents the most relevant content to each individual, ensuring that truly important information reaches you easily and quickly.',
        technologies: ['Spring Boot','Spring Gateway', 'Kafka', 'PostgreSQL', 'Docker', 'AWS','Gemini','JWT','KeyCloak','Python' ],
        repoUrl: 'https://github.com/ohhanadavid/news-ai',
        videoUrl: 'https://youtu.be/VnCFvYnICuY',
        linkUrl: 'https://david-ohhana.com/',
        color: `#2978C6`
    },
    {
        id: 2,
        title: 'ChatBot',
        description: "A chatbot that allows users to receive recommendations and details about various movies. The chatbot can retrieve lists of top films and extract precise information like names and ratings. It's designed to understand complex requests, such as specific movie genres or the desired number of results, providing a personalized and intuitive experience.",
        technologies: ['Spring Boot', ' Regular Expressions', 'Dialogflow', 'OkHttp'],
        repoUrl: 'https://github.com/ohhanadavid/chatbot',
        color: '#61DAFB' 
    },
    {
        id: 3,
        title: 'Serch Engine',
        description: 'A search engine project focused on comprehensive web crawling and indexing. The system offers a flexible API for initiating crawls, monitoring their progress, and efficiently retrieving results. The engine can perform background crawls, provide real-time status updates for each crawling task, and offers advanced search capabilities on the collected data, creating a rich and accessible information index.',
        technologies: ['Spring Boot', 'Redis', 'Kafka', 'Elasticsearch','Web Crawling'],
        repoUrl: 'https://github.com/ohhanadavid/searchEngine',
        color: '#00D8FF' 
    },
        {
        id: 4,
        title: 'Sentiment',
        description: 'A project focused on sentiment (emotion) analysis of texts, with an emphasis on real-time data streams like tweets. The system can analyze emotions in texts using advanced natural language processing tools. It connects to dynamic data sources to filter messages by keywords, manage data flow (start/stop), and display results. The project enables reliable sending and receiving of messages, displaying grouped messages within selected time windows, and calculating average sentiment for messages over a defined period.',
        technologies: ['Spring Boot', 'Apache Kafka'],
        repoUrl: 'https://github.com/ohhanadavid/sentiment',
        color: '#DD0031' 
    },
        {
        id: 5,
        title: 'TinyUrl',
        description: 'A robust project implementing a comprehensive URL Shortener system with a REST API. The system focuses on efficient URL shortening, flexible data storage, and user engagement analytics. It generates unique, short identifiers for long URLs and provides automatic redirection when the shortened link is accessed. The system allows for link creation and user click tracking, providing insights into the usage of the shortened ',
        technologies: ['Spring Boot', 'Redis', 'MongoDB', 'REST APIs','Cassandra'],
        repoUrl: 'https://github.com/ohhanadavid/tinyUrl',
        color: '#739dcc' 
    }
];