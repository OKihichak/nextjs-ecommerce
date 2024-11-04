import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";  // Correct import

export const client = createClient({
    projectId: "YOUR PROJECT ID",
    dataset: "YOUR DATASET NAME",
    apiVersion: "2023-10-01",
    useCdn: true,
    token: "YOUR TOKEN",
});

// Use imageUrlBuilder function to create the builder
const builder = imageUrlBuilder(client);

// Helper function to build URLs for images
export function urlFor(source: any) {
    return builder.image(source);
}
