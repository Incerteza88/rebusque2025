export function fullNormalize(string) {
    return string.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
}