export function extractUTCDate(isoDateString: string): string {
    const date = new Date(isoDateString);
    return `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getUTCDate().toString().padStart(2, '0')}`;
}