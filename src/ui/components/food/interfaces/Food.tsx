interface Food{
    id: number;
    name: string;
    calories?: number;
    nutrients?: Nutrients;
    img?: string;
    viewDetails?: boolean;
}