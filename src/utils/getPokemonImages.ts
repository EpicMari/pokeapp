function fetchImages(imports: Record<string, string>) {
    const images: Record<string, string> = {};

    for (const path in imports) {
        const cleanName = path.replace(/^.*[\\/]/, "").replace(/\.\w+$/, "");
        images[cleanName] = imports[path] as string;
    }

    return images;
}

const shinyImages = import.meta.glob(
    "../assets/pokemons/shiny/*.{png,jpg,jpeg,svg}",
    { eager: true }
) as Record<string, string>;
const defaultImagesRaw = import.meta.glob(
    "../assets/pokemons/default/*.{png,jpg,jpeg,svg}",
    { eager: true }
) as Record<string, string>;

export const images = fetchImages(shinyImages);
export const defaultImages = fetchImages(defaultImagesRaw);
