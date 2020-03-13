export class Task {
    id: string;
    title: string;
    notes?: string;
    completed: boolean;
    constructor () {
        this.completed = false;
    }
}