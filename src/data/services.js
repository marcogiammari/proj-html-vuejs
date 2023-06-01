export const services = {
    getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
    }
}