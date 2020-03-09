export class Task {
    id: string;
    title: string;
    priority: string;
    notes?: string;
    completed: boolean;
    constructor () {
        this.completed = false;
    }
}