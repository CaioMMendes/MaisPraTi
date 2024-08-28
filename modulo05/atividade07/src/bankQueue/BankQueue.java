package bankQueue;

import utils.Node;

public class BankQueue {

  private Node<String> tail;
  private Node<String> head;

  public BankQueue() {
    this.tail = null;
    this.head = null;
  }

  protected void enqueue(String client) {
    Node<String> newNode = new Node<>(client);

    System.out.println("Cadastrando " + client + " na fila.");
    if (this.head == null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.head.next = newNode;
      this.head = newNode;
    }
  }

  protected void callNext() {
    if (this.tail == null) {
      System.out.println("A fila está vazia");
    } else {

      String client = this.tail.data;
      System.out.println("Chamando " + client + " !!");
      this.tail = this.tail.next;

      if (this.tail == null) {
        this.head = null;
      }

    }
  }

  protected void printClients() {

    int count = 1;
    Node<String> current = tail;
    System.out.println();
    System.out.println("Listando os clientes:");
    if (tail == null) {
      System.out.println("Não existe nenhum cliente na fila.");
    }

    while (current != null) {
      String client = current.data;
      System.out.println("Cliente " + count + ": " + "\"" + client + "\"");
      current = current.next;
      count++;
    }

  }

  protected boolean isEmpty() {
    return this.tail == null;
  }

}
