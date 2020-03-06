export class Task {
    id: string;
    title: string;
    priority: string;
    description?: string;
    //status: string;
    completed: boolean;
    constructor () {
        //this.status = 'Not started';
        this.completed = false;
    }
}