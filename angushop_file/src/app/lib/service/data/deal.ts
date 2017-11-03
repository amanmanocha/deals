
export class Deal{
    id: number;
    productName: string;
    slug: string;
    description: string;
    originalPrice: number;
    dealPrice: number;    
    image: string;
    category: string;
    wishlist: number;
    card: string;
    gallery: [
        {
            id: number;
            thumbnail: string;
            images: string;
        }
    ]
}