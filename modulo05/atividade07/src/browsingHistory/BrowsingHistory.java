package browsingHistory;

import utils.Node;

public class BrowsingHistory {

  private Node<String> tail;
  private int maxLength = 2;
  private int length = 0;

  protected BrowsingHistory(int maxLength) {
    if (maxLength <= 0) {
      System.out.println("O tamanho precisa ser maior que 0, adicionando uma lista de tamanho: " + this.maxLength);
    } else {
      this.maxLength = maxLength;
    }
    this.tail = null;
  }

  protected void add(String url) {
    System.out.println("Adicionando: " + url);
    if (this.tail == null) {
      this.tail = new Node<>(url);
    } else {
      Node<String> node = new Node<>(url);
      node.next = tail;
      tail = node;
    }
    this.length += 1;
    if (this.length > maxLength) {
      System.out.println("Lista de " + maxLength + " elementos cheia");
      this.remove();
    }
  }

  protected void remove() {
    Node<String> current = tail;
    while (current != null) {
      if (current.next != null) {
        if (current.next.next == null) {
          System.out.println("Removendo a tarefa: " + current.next.data);
          System.out.println();
          current.next = null;
          break;
        }
        current = current.next;
      }
    }
  }

  protected void printUrls() {
    int count = 1;
    Node<String> current = tail;
    System.out.println();
    System.out.println("Listando as Urls:");
    while (current != null) {
      String url = current.data;
      System.out.println("Url: " + count + " " + "\"" + url + "\"");
      current = current.next;
      count++;
    }
  }

}
