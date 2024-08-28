package printingQueue;

import utils.Node;

public class PrintingQueue {

  private Node<String> tail;
  private Node<String> head;

  public PrintingQueue() {
    this.tail = null;
    this.head = null;
  }

  protected void enqueue(String print) {
    Node<String> newNode = new Node<>(print);

    System.out.println("Cadastrando " + print + " na fila.");
    if (this.head == null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.head.next = newNode;
      this.head = newNode;
    }
  }

  protected void print() {
    if (this.tail == null) {
      System.out.println("Não a documentos para serem impressos");
    } else {

      String document = this.tail.data;
      System.out.println("Imprimindo " + document + " !!");
      this.tail = this.tail.next;

      if (this.tail == null) {
        this.head = null;
      }

    }
  }

  protected void printDocuments() {

    int count = 1;
    Node<String> current = tail;
    System.out.println();
    System.out.println("Listando os documentos a serem impressos:");
    if (tail == null) {
      System.out.println("Não existe nenhum documento aguardando impressão.");
    }

    while (current != null) {
      String document = current.data;
      System.out.println("Documento " + count + ": " + "\"" + document + "\"");
      current = current.next;
      count++;
    }

  }

  protected boolean isEmpty() {
    return this.tail == null;
  }
}
