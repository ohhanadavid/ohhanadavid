export interface IPostsModel {
    id: number;
    titleEN: string;
    titleHE: string;
    descriptionEN: string;
    descriptionHE: string;
    linkUrl: string; // Optional field for additional link
    color: string;
}

export const posts: IPostsModel[] = [
    {
        id: 1,
        titleEN: 'It\'s Done!',
        titleHE: 'זה קרה!',
        descriptionEN: 'After a lot of work, time and effort, I am excited to launch my app News AI! ',
        descriptionHE: 'אחרי הרבה עבודה,זמן ומאמצים, אני כל כך נרגש להעלות לאוויר את האפליקציה שלי NewsAI!!',
        linkUrl: 'https://www.linkedin.com/posts/david-ohhana-backend_%D7%96%D7%94-%D7%A7%D7%A8%D7%94-%D7%90%D7%97%D7%A8%D7%99-%D7%97%D7%95%D7%93%D7%A9%D7%99%D7%9D-%D7%A9%D7%9C-%D7%9C%D7%9E%D7%99%D7%93%D7%94-%D7%A2%D7%91%D7%95%D7%93%D7%94-%D7%A7%D7%A9%D7%94-activity-7338096091650813953-PS9f?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgzz3IBxmiPzqHz3QAlnw2HNVT-B2PIMa0',
        color: `#2978C6`
    },
    
];