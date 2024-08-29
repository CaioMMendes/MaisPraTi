package undoRedo;

import utils.DoubleNode;

public class UndoRedo {

  DoubleNode<String> tail;

  public UndoRedo() {
    this.tail = null;
  }

  protected void add(String action) {
    DoubleNode<String> current = this.tail;
    if (current == null) {
      this.tail = new DoubleNode<>(action);
    } else {
      DoubleNode<String> newNode = new DoubleNode<>(action);
      current.prev = newNode;
      newNode.next = current;
      this.tail = newNode;
    }

    System.out.println("Realizando ação: " + action);

  }

  protected void undo() {
    if (this.tail == null || this.tail.data == null) {
      System.out.println("Não existem comandos a serem desfeitos");
    } else if (tail.next == null) {
      DoubleNode<String> current = this.tail;
      System.out.println("Desfazendo o comando: " + current.data);
      this.tail = new DoubleNode<>(null);
      current.next = this.tail;
      this.tail.prev = current;
    } else {
      System.out.println("Desfazendo o comando: " + this.tail.data);
      this.tail = this.tail.next;
    }
  }

  protected void redo() {
    if (tail == null) {
      System.out.println("Não existem comandos a serem refeitos");
    } else if (tail.prev == null) {
      System.out.println("Não existem comandos a serem refeitos");
    } else {
      System.out.println("Refazendo o comando: " + this.tail.prev.data);
      this.tail = this.tail.prev;
    }
  }

  protected void printActions() {
    DoubleNode<String> current = tail;
    System.out.println();
    System.out.println("Listando as ações:");
    if (tail == null || tail.data == null) {
      System.out.println("Não existe nenhuma ação.");
    }

    while (current != null) {
      String action = current.data;
      if (action == null) {
        current = current.next;
        continue;
      }
      System.out.println("Ação: " + "\"" + action + "\"");
      current = current.next;
    }
  }

}
