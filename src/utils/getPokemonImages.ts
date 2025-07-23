type ImageMap = Record<string, string>;

function fetchImages(glob: Record<string, unknown>): ImageMap {
    const images: ImageMap = {};

    for (const path in glob) {
        const value = glob[path];
        const fileName = path.split("/").pop();
        if (!fileName) continue;

        const id = fileName.split(".")[0];

        images[id] =
            typeof value === "object" && value && "default" in value
                ? (value as { default: string }).default
                : (value as string);
    }

    return images;
}

export const images = fetchImages(
    import.meta.glob("../assets/pokemons/shiny/*.{png,jpg,jpeg,svg}", {
        eager: true,
    })
);

export const defaultImages = fetchImages(
    import.meta.glob("../assets/pokemons/default/*.{png,jpg,jpeg,svg}", {
        eager: true,
    })
);
