export interface Content {
    contentId: number;
    author: string;
    type?: string;
    title: string;
    imageUrl?: string;
    body: string;
    tags?: string[];
}