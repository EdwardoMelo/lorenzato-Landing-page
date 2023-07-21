import { StaticImageData } from "next/image"
export interface ItemProps {
    key: number
    strong: string
    title: string
    content: string
    image: StaticImageData
};

export interface ServiceCard {
    key: number
    title: string
    content: string
    image: StaticImageData
};