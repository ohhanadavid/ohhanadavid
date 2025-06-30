export interface IPostsModel {
    id: number;
    title: Record<string, string>; // Using Record to support multiple languages
   
    description: Record<string, string>; 
    linkUrl: string; // Optional field for additional link
    color: string;
}

export const posts: IPostsModel[] = [
    {
        id: 1,
        title:{ 
            en:'It\'s Done!',
            he: 'זה קרה!',
        },
        description:{
            en: 'After a lot of work, time and effort, I am excited to launch my app News AI! ',
            he: 'אחרי הרבה עבודה,זמן ומאמצים, אני כל כך נרגש להעלות לאוויר את האפליקציה שלי NewsAI!!',
        },
        linkUrl: 'https://www.linkedin.com/posts/david-ohhana-backend_%D7%96%D7%94-%D7%A7%D7%A8%D7%94-%D7%90%D7%97%D7%A8%D7%99-%D7%97%D7%95%D7%93%D7%A9%D7%99%D7%9D-%D7%A9%D7%9C-%D7%9C%D7%9E%D7%99%D7%93%D7%94-%D7%A2%D7%91%D7%95%D7%93%D7%94-%D7%A7%D7%A9%D7%94-activity-7338096091650813953-PS9f?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgzz3IBxmiPzqHz3QAlnw2HNVT-B2PIMa0',
        color: `#2978C6`
    },
    {
        id: 2,
        title: {
            en: 'So, How we Start Spring Boot project?',
            he: 'אז איך מתחילים פרויקט Spring Boot?',

        },
        description: {
            en: ' A short post explaining how to start a Spring Boot project?',
            he: 'פוסט קצר המסביר איך בכלל מתחילים פרויקט Spring Boot? ',
        },
            linkUrl: 'https://www.linkedin.com/posts/david-ohhana-backend_%D7%90%D7%99%D7%9A-%D7%9C%D7%99%D7%A6%D7%A8-%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98-%D7%91spring-activity-7342793539640045569-3Nv_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgzz3IBxmiPzqHz3QAlnw2HNVT-B2PIMa0',
            color: '#61DAFB'
    },
    //  {
    //     id: 3,
    //     title: {
    //         en: 'Libraries, Lombok, and what\'s in between',
    //         he: 'ספריות, Lombok, ומה שביניהן',

    //     },
    //     description: {
    //         en: ' A brief overview of how to add libraries, a bit about Lombok, and a bit about Hibernate.',
    //         he: 'איך מוסיפים ספריות, קצת על lombok וקצת על hibernate ',
    //     },
    //         linkUrl: '',
    //         color: '#4CAF50'
    // },
    
];