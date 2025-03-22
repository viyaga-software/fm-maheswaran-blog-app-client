export function convertStrapiImageUrl(url, size) {
    const parts = url.split(".com/");
    if (parts.length < 2) return url; // If the URL is invalid, return as is
    return `${parts[0]}.com/${size}_${parts[1].replace(/^(thumbnail_|small_|medium_|large_)/, "")}`;
}