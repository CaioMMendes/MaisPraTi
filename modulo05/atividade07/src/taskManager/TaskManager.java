package taskManager;

import utils.Node;



public class TaskManager {

 protected Node<Task> head;

  protected TaskManager() {
    this.head = null;
  }

  protected Task complete(int index) {
    Node<Task> current = this.head;
    int count = 0;
    while (current != null) {
      if (count == index) {
        current.data.completed = true;
        System.out.println("Completando a tarefa " + "\" " + current.data.title + "\"" + "Completed: true" );
        return current.data;
      }
      count++;
      current = current.next;
    }
    throw new IndexOutOfBoundsException("Index fora dos limites");
  }

  protected Task completeByTitle(String title) {
    Node<Task> current = this.head;
    int count = 0;
    while (current != null) {
      if (title.equalsIgnoreCase(current.data.title) && !current.data.completed) {
        current.data.completed = true;
        System.out.println("Completando a tarefa " + "\" " + current.data.title + "\"" + "Completed: " + current.data.completed);
        return current.data;
      }
      count++;
      current = current.next;
    }
    throw new IndexOutOfBoundsException("Index fora dos limites");
  }

  protected void add(String title, boolean completed) {

    Task task = new Task(title, completed);

    Node<Task> newNode = new Node<>(task);

    if (this.head == null) {
      this.head = newNode;
    } else {
      Node<Task> current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    System.out.println("Adicionando " + "\"" + title + "\" " + "Completed: " + completed + " na lista");
  }


  protected Task get(int index) {
    Node<Task> current = this.head;
    int count = 0;
    while (current != null) {
      if (count == index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    throw new IndexOutOfBoundsException("Index fora dos limites");
  }

  protected void remove(int index) {
    Node<Task> current = this.head;
    if (this.head == null) {
      throw new IndexOutOfBoundsException("Index fora dos limites");
    }

    if (index == 0) {
      System.out.println("Removendo " + "\"" + this.head.data.title + "\"" + " da lista");
      this.head = this.head.next;
      return;
    }

    int count = 0;
    Node<Task> previous = null;

    while (current != null && count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    if (current == null) {
      throw new IndexOutOfBoundsException("Index fora dos limites");
    }
    if (previous == null) {
      throw new IndexOutOfBoundsException("Index fora dos limites");
    }
    System.out.println("Removendo " + "\"" + current.data.title + "\"" + " da lista");
    previous.next = current.next;


  }

  protected void removeByTitle(String title) {
    Node<Task> current = this.head;
    if (this.head == null) {
      throw new IndexOutOfBoundsException("Index fora dos limites");
    }

    if (title.equalsIgnoreCase(this.head.data.title)) {
      this.head = this.head.next;
      return;
    }

    int count = 0;
    Node<Task> previous = null;

    while (current != null && !current.data.title.equalsIgnoreCase(title)) {
      previous = current;
      current = current.next;
      count++;
    }

    if (current == null) {
      throw new IndexOutOfBoundsException("Index fora dos limites");
    }
    System.out.println("Removendo " + "\"" + current.data.title + "\"" + " da lista");
    previous.next = current.next;


  }


  protected boolean isEmpty() {
    return this.head == null;
  }

  protected void printTasks() {
    Node<Task> current = head;
    System.out.println();
    System.out.println("Listando as tarefas:");
    while (current != null) {
      Task task = current.data;
      System.out.println("Title: " + "\"" + task.title + "\"" + ", Completed: " + task.completed);
      current = current.next;
    }
  }
}