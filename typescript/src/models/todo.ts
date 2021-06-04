class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.id = `${new Date().getTime()}_${Math.random()}`;
  }
}

export default Todo;
