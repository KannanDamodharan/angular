import { RatingRepresentation } from "./rating-representation";

export interface ProductRepresentation{
    id?: number,
    category?: string,
    description?: string, 
    image?: string,
    price?: number,
    rating?: RatingRepresentation,
    title?: string
}