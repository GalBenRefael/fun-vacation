export function formatPrice(value: number): string {
    return '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function formatDate(value: string) {
    return new Date(value).toLocaleDateString();
}
