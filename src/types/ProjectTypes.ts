export interface ProjectType {
    id: number;
    title: string;
    description: string;
    tags: string[];
    codeUrl: string;
    previewUrl: string;
    likes: number;
    date: string;
    user: {
        name: string;
        profileUrl: string;
        avatar: string;
    };
    image: string;
};