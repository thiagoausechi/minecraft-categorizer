const write = <T>(key: string, data: T): T => { localStorage.setItem(key, JSON.stringify(data)); return data; }
const read = <T>(key: string, defaultValue: T): T => JSON.parse(localStorage.getItem(key) || "null") || defaultValue;

export { write, read };