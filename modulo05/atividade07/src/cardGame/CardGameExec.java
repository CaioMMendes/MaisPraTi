package cardGame;

import java.util.Scanner;

public class CardGameExec {

  public static void execute() {
    try {
      Scanner scanner = new Scanner(System.in);
      boolean loop = true;
      CardGame cardGame = new CardGame();
      while (loop) {
        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Adicionar carta");
        System.out.println("2 - Remover carta");
        System.out.println("3 - Trocar carta de lugar");
        System.out.println("4 - Printar cartas");
        System.out.println("5 - Sair");
        String input = scanner.nextLine();
        int option = Integer.parseInt(input);
        System.out.println("--------------------------------");
        switch (option) {
          case 1:
            System.out.print("Digite a carta: ");
            String card = scanner.nextLine();
            System.out.println("Digite o índice que deseja adicionar");
            int index = Integer.parseInt(scanner.nextLine());
            cardGame.add(card, index);
            break;

          case 2:
            System.out.print("Digite o índice da carta: ");
            int indexRemove = Integer.parseInt(scanner.nextLine());
            cardGame.remove(indexRemove);
            break;

          case 3:
            System.out.print("Digite o índice da primeira carta: ");
            int indexSwap1 = Integer.parseInt(scanner.nextLine());
            System.out.print("Digite o índice da segunda carta: ");
            int indexSwap2 = Integer.parseInt(scanner.nextLine());
            cardGame.swap(indexSwap1, indexSwap2);
            break;

          case 4:
            cardGame.printCards();
            break;

          case 5:
            System.out.println("Saindo do Card Game...");
            loop = false;
            break;

          default:
            System.out.println("Escolha uma opção válida.");
            break;
        }
        System.out.println("--------------------------------");
      }
    } catch (Exception error) {
      System.out.println("----------------------------------");
      System.out.println("Erro");
      System.out.println(error);
      System.out.println("----------------------------------");
    }

  }

}
