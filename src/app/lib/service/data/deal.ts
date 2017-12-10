
export class Deal{
    id: number;
    productName: string;
    slug: string;
    description: string;
    linkTitle: string;
    offerUrl: string;    
    image: string;
    category: string;
    card: string;
    gallery: [
        {
            id: number;
            thumbnail: string;
            images: string;
        }
    ]
}