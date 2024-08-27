package undo;

import utils.Node;

public class Undo {

  private Node<String> tail;
  private int length;

  protected void add(String action) {
    System.out.println("Adicionando: " + action);
    if (this.tail == null) {
      this.tail = new Node<>(action);
    } else {
      Node<String> node = new Node<>(action);
      node.next = tail;
      tail = node;
    }
  }

  protected void undoLast() {

    Node<String> current = this.tail;

    if (current == null) {
      System.out.println("Não existe nenhuma ação para ser desfeita");
    } else {
      System.out.println("Desfazendo a ultima ação: " + current.data);
      if (current.next == null) {
        this.tail = null;
      } else {
        this.tail = current.next;
      }
    }
  }

  protected void printActions() {
    int count = 1;
    Node<String> current = tail;
    System.out.println();
    System.out.println("Listando as ações:");
    while (current != null) {
      String action = current.data;
      System.out.println("Ação: " + count + " " + "\"" + action + "\"");
      current = current.next;
      count++;
    }

  }

}
