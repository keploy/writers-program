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
 * Array of writers - easily extendable by adding new Writer objects
 * 
 * Note: Currently using placeholder images. Replace with actual writer photos.
 * Images should be placed in /public/images/writers/ directory.
 */
export const writers: Writer[] = [
    {
        id: "writer-1",
        name: "Sarah Chen",
        role: "Senior Technical Writer",
        bio: "Passionate about making complex testing concepts accessible to developers. Specializes in API testing and documentation best practices.",
        image: "/images/writers/placeholder-1.svg",
        socialLinks: {
            twitter: "https://twitter.com",
            github: "https://github.com",
            linkedin: "https://linkedin.com"
        }
    },
    {
        id: "writer-2",
        name: "Marcus Johnson",
        role: "DevOps Engineer & Writer",
        bio: "CI/CD enthusiast who loves writing about test automation, infrastructure, and developer productivity.",
        image: "/images/writers/placeholder-2.svg",
        socialLinks: {
            github: "https://github.com",
            linkedin: "https://linkedin.com"
        }
    },
    {
        id: "writer-3",
        name: "Priya Sharma",
        role: "Full Stack Developer",
        bio: "Writes about end-to-end testing strategies, microservices, and building reliable software systems.",
        image: "/images/writers/placeholder-3.svg",
        socialLinks: {
            twitter: "https://twitter.com",
            website: "https://example.com"
        }
    },
    {
        id: "writer-4",
        name: "Alex Rivera",
        role: "QA Lead & Educator",
        bio: "Bridges the gap between development and QA through comprehensive testing tutorials and guides.",
        image: "/images/writers/placeholder-4.svg",
        socialLinks: {
            github: "https://github.com",
            linkedin: "https://linkedin.com"
        }
    },
    {
        id: "writer-5",
        name: "Emily Zhang",
        role: "Backend Developer",
        bio: "Focuses on database testing, performance optimization, and writing clean, testable code.",
        image: "/images/writers/placeholder-5.svg",
        socialLinks: {
            twitter: "https://twitter.com",
            github: "https://github.com"
        }
    },
    {
        id: "writer-6",
        name: "David Park",
        role: "Open Source Contributor",
        bio: "Active contributor to testing frameworks. Writes about open source tools and community building.",
        image: "/images/writers/placeholder-6.svg",
        socialLinks: {
            github: "https://github.com",
            website: "https://example.com"
        }
    }
];
