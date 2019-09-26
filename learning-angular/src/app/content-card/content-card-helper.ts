export interface Content {
    contentId: number;
    author: string;
    type?: string;
    imageUrl?: string;
    body: string;
    tags?: string[];
}