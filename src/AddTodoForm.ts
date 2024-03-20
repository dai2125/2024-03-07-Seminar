export default class AddTodoForm {
    onSubmit: (subject: string, body: string) => void;

    constructor(node: HTMLFormElement, onSubmit: (subject: string, body: string) => void) {
        this.onSubmit = onSubmit;

        node.addEventListener('submit', (e) => {
            e.preventDefault();

            const data = new FormData(node);

            // Type assertion (compile time)
            const subject = data.get('subject') as string;
            const body = data.get('body') as string;

            // Narrowing (runtime)
            // if (typeof todo !== 'string') return;

            this.onSubmit(subject, body);

            node.reset();
        });
    }
}