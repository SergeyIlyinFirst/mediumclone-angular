import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService<T> {
    set(key: string, data: T): void {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch(e) {
            console.error('Error saving to localStorage', e)
        }
    }

    get(key: string): T | null {
        try {
            const data: T = JSON.parse(localStorage.getItem(key)!)
            return data
        } catch(e) {
            console.error('Error getting data from localStorage', e)
            return null
        }
    }
}