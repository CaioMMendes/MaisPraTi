package processesQueue;

import utils.Node;

public class ProcessesQueue {

  private Node<String> tail;
  private Node<String> head;

  public ProcessesQueue() {
    this.tail = null;
    this.head = null;
  }

  protected void enqueue(String process) {
    Node<String> newNode = new Node<>(process);

    System.out.println("Adicionando " + process + " na fila.");
    if (this.head == null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.head.next = newNode;
      this.head = newNode;
    }
  }

  protected void executeProcess() {
    if (this.tail == null) {
      System.out.println("Não a processos para serem executados");
    } else {

      String process = this.tail.data;
      System.out.println("Executando " + process + " !!");
      this.tail = this.tail.next;

      if (this.tail == null) {
        this.head = null;
      }

    }
  }

  protected void printProcesses() {

    int count = 1;
    Node<String> current = tail;
    System.out.println();
    System.out.println("Listando os processos a serem executados:");
    if (tail == null) {
      System.out.println("Não existe nenhum processo para ser executado.");
    }

    while (current != null) {
      String process = current.data;
      System.out.println("Processo " + count + ": " + "\"" + process + "\"");
      current = current.next;
      count++;
    }

  }

  protected boolean isEmpty() {
    return this.tail == null;
  }

}
