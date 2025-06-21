export interface IProjectsModel {
    id: number;
    title: string;
    description: Record<string, string>;
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
        description:{
            "en": 'A smart system that delivers personalized news directly to users via email, SMS, or WhatsApp. It filters and presents the most relevant content to each individual, ensuring that truly important information reaches you easily and quickly.',
            "he": 'מערכת חכמה המספקת חדשות מותאמות אישית ישירות למשתמשים באמצעות דוא"ל, SMS או WhatsApp. היא מסננת ומציגה את התוכן הרלוונטי ביותר לכל אדם, ומבטיחה שהמידע החשוב באמת יגיע אליך בקלות ובמהירות.'
        },
        technologies: ['Spring Boot','Spring Gateway', 'Kafka', 'PostgreSQL', 'Docker', 'AWS','Gemini','JWT','KeyCloak','Python' ],
        repoUrl: 'https://github.com/ohhanadavid/news-ai',
        videoUrl: 'https://youtu.be/GKZlytKSyWk',
        linkUrl: 'https://news-ai.david-ohhana.com/',
        color: `#2978C6`
    },
    {
        id: 2,
        title: 'ChatBot',
        description: {
            en: "A chatbot that allows users to receive recommendations and details about various movies. The chatbot can retrieve lists of top films and extract precise information like names and ratings. It's designed to understand complex requests, such as specific movie genres or the desired number of results, providing a personalized and intuitive experience.",
            he: "צ'אט-בוט המאפשר למשתמשים לקבל המלצות ופרטים על סרטים שונים. הצ'אט-בוט יכול לשלוף רשימות של הסרטים המובילים ולחלץ מידע מדויק כמו שמות ודירוגים. הוא מתוכנן להבין בקשות מורכבות, כגון ז'אנרים ספציפיים של סרטים או מספר התוצאות הרצוי, ומספק חוויה מותאמת ואינטואיטיבית.",
        },
            technologies: ['Spring Boot', ' Regular Expressions', 'Dialogflow', 'OkHttp'],
        repoUrl: 'https://github.com/ohhanadavid/chatbot',
        color: '#61DAFB' 
    },
    {
        id: 3,
        title: 'Serch Engine',
        description: {
            en: 'A search engine project focused on comprehensive web crawling and indexing. The system offers a flexible API for initiating crawls, monitoring their progress, and efficiently retrieving results. The engine can perform background crawls, provide real-time status updates for each crawling task, and offers advanced search capabilities on the collected data, creating a rich and accessible information index.',
            he: 'פרויקט מנוע חיפוש המתמקד בזחילת אינטרנט מקיפה ואינדוקס. המערכת מציעה API גמיש להתחלת זחילות, מעקב אחר התקדמותן, ואחזור תוצאות ביעילות. המנוע יכול לבצע זחילות ברקע, לספק עדכוני מצב בזמן אמת לכל משימת זחילה, ומציע יכולות חיפוש מתקדמות על הנתונים שנאספו, מה שיוצר אינדקס מידע עשיר ונגיש.',
        },
        technologies: ['Spring Boot', 'Redis', 'Kafka', 'Elasticsearch','Web Crawling'],
        repoUrl: 'https://github.com/ohhanadavid/searchEngine',
        color: '#00D8FF' 
    },
        {
        id: 4,
        title: 'Sentiment',
        description: {
            en: 'A project focused on sentiment (emotion) analysis of texts, with an emphasis on real-time data streams like tweets. The system can analyze emotions in texts using advanced natural language processing tools. It connects to dynamic data sources to filter messages by keywords, manage data flow (start/stop), and display results. The project enables reliable sending and receiving of messages, displaying grouped messages within selected time windows, and calculating average sentiment for messages over a defined period.',
            he: 'פרויקט המתמקד בניתוח רגשות (סנטימנט) של טקסטים, עם דגש על זרמי נתונים בזמן אמת כמו ציוצים. המערכת יכולה לנתח רגשות בטקסטים באמצעות כלים מתקדמים לעיבוד שפה טבעית. היא מתחברת למקורות נתונים דינמיים כדי לסנן הודעות לפי מילות מפתח, לנהל את זרימת הנתונים (התחלה/עצירה), ולהציג תוצאות. הפרויקט מאפשר שליחה וקבלה אמינה של הודעות, הצגת הודעות מקובצות בתוך חלונות זמן נבחרים, וחישוב סנטימנט ממוצע להודעות במשך תקופה מוגדרת.',
        },
        technologies: ['Spring Boot', 'Apache Kafka'],
        repoUrl: 'https://github.com/ohhanadavid/sentiment',
        color: '#DD0031' 
    },
        {
        id: 5,
        title: 'TinyUrl',
        description: {
            en: 'A robust project implementing a comprehensive URL Shortener system with a REST API. The system focuses on efficient URL shortening, flexible data storage, and user engagement analytics. It generates unique, short identifiers for long URLs and provides automatic redirection when the shortened link is accessed. The system allows for link creation and user click tracking, providing insights into the usage of the shortened ',
            he: 'פרויקט מקיף המיישם מערכת מקצר כתובות URL עם API REST. המערכת מתמקדת בקיצור כתובות URL ביעילות, אחסון נתונים גמיש, ואנליטיקה של מעורבות משתמשים. היא מייצרת מזהים ייחודיים וקצרים לכתובות URL ארוכות ומספקת הפניה אוטומטית כאשר הקישור המקוצר ניגש. המערכת מאפשרת יצירת קישורים ומעקב אחר לחיצות משתמשים, ומספקת תובנות על השימוש בקישורים המקוצרים.',
        },
        technologies: ['Spring Boot', 'Redis', 'MongoDB', 'REST APIs','Cassandra'],
        repoUrl: 'https://github.com/ohhanadavid/tinyUrl',
        color: '#739dcc' 
    }
];