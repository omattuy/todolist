export class Task {
    id: string;
    title: string;
    priority: string;
    description?: string;
    completed: boolean;
    status: string;
    constructor () {
        this.status = 'Not working';
    }
}