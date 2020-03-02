export class Task {
    id: string;
    title: string;
    priority: string;
    description?: string;
    status: string;
    constructor () {
        this.status = 'Not started';
    }
}