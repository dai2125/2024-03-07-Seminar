export default class AddTodoForm {
    onSubmit;
    constructor(node, onSubmit) {
        this.onSubmit = onSubmit;
        node.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(node);
            // Type assertion (compile time)
            const subject = data.get('subject');
            const body = data.get('body');
            // Narrowing (runtime)
            // if (typeof todo !== 'string') return;
            this.onSubmit(subject, body);
            node.reset();
        });
    }
}
