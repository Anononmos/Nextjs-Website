import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google";

export const roboto = Roboto_Mono(
    {
        variable: "--font-roboto",
        subsets: ["latin"]
    }
)

export const geistSans = Geist(
    {
        variable: "--font-geist-sans", 
        subsets: ["latin"]
    }
)

export const geistMono = Geist_Mono(
    {
        variable: "--font-geist-mono", 
        subsets: ['latin']
    }
)