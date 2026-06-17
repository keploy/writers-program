/**
 * Writers Data Configuration
 * 
 * This file contains the centralized data for all writers in the Writers Program.
 * To add a new writer, simply add a new object to the `writers` array.
 */

export interface Writer {
    id: string;
    name: string;
    bio: string;
    image: string;
    role?: string;
    socialLinks?: {
        twitter?: string;
        github?: string;
        linkedin?: string;
        website?: string;
    };
}

/**
 * ⚠️ PLACEHOLDER DATA - REPLACE BEFORE PRODUCTION ⚠️
 * 
 * This array contains SAMPLE writers for demonstration purposes only.
 * Before deploying to production:
 * 1. Replace these entries with real writer information
 * 2. Add actual photos to /public/images/writers/
 * 3. Add real social media profile URLs
 */
export const writers: Writer[] = [
    {
        id: "placeholder-writer-1",
        name: "Writer One",
        role: "Technical Writer",
        bio: "This is placeholder data. Replace with actual writer information.",
        image: "/images/writers/placeholder-1.svg",
    },
    {
        id: "placeholder-writer-2",
        name: "Writer Two",
        role: "DevOps Writer",
        bio: "This is placeholder data. Replace with actual writer information.",
        image: "/images/writers/placeholder-2.svg",
    },
    {
        id: "placeholder-writer-3",
        name: "Writer Three",
        role: "Full Stack Developer",
        bio: "This is placeholder data. Replace with actual writer information.",
        image: "/images/writers/placeholder-3.svg",
    },
    {
        id: "placeholder-writer-4",
        name: "Writer Four",
        role: "QA Engineer",
        bio: "This is placeholder data. Replace with actual writer information.",
        image: "/images/writers/placeholder-4.svg",
    },
    {
        id: "placeholder-writer-5",
        name: "Writer Five",
        role: "Backend Developer",
        bio: "This is placeholder data. Replace with actual writer information.",
        image: "/images/writers/placeholder-5.svg",
    },
    {
        id: "placeholder-writer-6",
        name: "Writer Six",
        role: "Open Source Contributor",
        bio: "This is placeholder data. Replace with actual writer information.",
        image: "/images/writers/placeholder-6.svg",
    }
];
