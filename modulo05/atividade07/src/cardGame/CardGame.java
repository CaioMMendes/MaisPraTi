package cardGame;

import utils.DoubleNode;

public class CardGame {

  DoubleNode<String> tail;

  public CardGame() {
    this.tail = null;
  }

  protected String add(String card, int index) {
    DoubleNode<String> current = this.tail;
    if (current == null) {
      System.out.println("É sua primeira carta, adicionando " + card + " no índice: 0");
      this.tail = new DoubleNode<>(card);
      return card;
    } else {
      if (index <= 0) {
        System.out.println("O índice é menor ou igual a zero, adicionando a carta: " + card + " no índice: 0");
        DoubleNode<String> newNode = new DoubleNode<>(card);
        current.prev = newNode;
        newNode.next = current;
        this.tail = newNode;
        return card;
      }
      int count = 0;

      while (count < index && current.next != null) {
        current = current.next;
        count++;
      }

      if (current.next == null && count != index) {
        System.out.println("O índice é maior ou igual ao número de cartas na mão, adicionando: " + card + " no índice: " + (count + 1));
        DoubleNode<String> newNode = new DoubleNode<>(card);
        newNode.prev = current;
        current.next = newNode;
        return card;
      }

      DoubleNode<String> newNode = new DoubleNode<>(card);
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
      System.out.println("Adicionando a carta: " + card + " no índice: " + index);
      return card;
    }

  }

  protected void remove(int index) {
    if (index < 0) {
      System.out.println("Digite um índice maior ou igual a 0.");
      return;
    }

    DoubleNode<String> current = this.tail;
    if (index == 0) {
      System.out.println("Removendo: " + current.data + " do índice: " + index);
      this.tail = this.tail.next;
      if (this.tail != null) {
        this.tail.prev = null;
      }
      return;
    }

    int count = 0;
    while (count < index && current.next != null) {
      current = current.next;
      count++;
    }

    if (current.next == null && count == index) {
      System.out.println("Removendo: " + current.data + " do índice: " + index);
      current.prev.next = null;
      return;
    }

    if (current.next == null) {
      System.out.println("Digite um índice entre 0 |-| " + (count));
      return;
    }

    System.out.println("Removendo: " + current.data + " do índice: " + index);
    current.prev.next = current.next;
    current.next.prev = current.prev;

  }

  protected void swap(int index1, int index2) {

    if (index1 > index2) {
      swap(index2, index1);
      return;
    }

    if (index1 < 0) {
      System.out.println("Digite índices maiores que 0.");
      return;
    }

    DoubleNode<String> current = this.tail;
    int count = 0;
    while (count < index1 && current != null) {
      current = current.next;
      count++;
    }
    DoubleNode<String> current2 = current;
    while (count < index2 && current2 != null) {
      current2 = current2.next;
      count++;
    }
    if (current == null || current2 == null) {
      System.out.println("Digite índices entre 0 |-| " + (count - 1));
      return;
    }

    String temp = current.data;
    System.out.println("Trocando: " + index1 + " " + current.data + " por " + index2 + " " + current2.data);
    current.data = current2.data;
    current2.data = temp;

  }

  protected void printCards() {
    DoubleNode<String> current = tail;
    System.out.println();
    System.out.println("Listando as cartas:");
    if (tail == null || tail.data == null) {
      System.out.println("Não existe nenhuma carta.");
    }
    int count = 0;
    while (current != null) {
      String card = current.data;
      if (card == null) {
        current = current.next;
        continue;
      }
      System.out.println("Carta " + count + ":" + "\"" + card + "\"");
      current = current.next;
      count++;
    }
  }

}
