class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.id = new Date().toString();
  }
}

export default Todo;
