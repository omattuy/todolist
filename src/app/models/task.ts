export class Task {
    id: string;
    userId: string;
    title: string;
    notes?: string;
    completed: boolean;
    constructor () {
        this.completed = false;
    }
}