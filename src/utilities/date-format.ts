export function formatDate(dateStr?: any) {
    if (dateStr) {
        const date = new Date(dateStr)
        const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
        const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
        return `${day}/${month}/${date.getFullYear()}`
    }
}