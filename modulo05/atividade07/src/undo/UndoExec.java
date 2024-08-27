package undo;

import java.util.Scanner;

public class UndoExec {

  public static void execute() {
    try {
      Scanner scanner = new Scanner(System.in);
      boolean loop = true;
      Undo browsingHistory = new Undo();
      while (loop) {
        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Realizar ação");
        System.out.println("2 - Reverter última ação");
        System.out.println("3 - Reverter uma quantidade de ações");
        System.out.println("4 - Printar ações");
        System.out.println("5 - Sair");
        String input = scanner.nextLine();
        int option = Integer.parseInt(input);
        System.out.println("--------------------------------");
        switch (option) {
          case 1:
            System.out.print("Digite a ação: ");
            String action = scanner.nextLine();
            browsingHistory.add(action);
            break;

          case 2:
            browsingHistory.undoLast();
            break;

          case 3:
            System.out.print("Digite a quantidade de ações a serem revertidas: ");
            int quantity = Integer.parseInt(scanner.nextLine());
            browsingHistory.undoQuantity(quantity);
            break;

          case 4:
            browsingHistory.printActions();
            break;

          case 5:
            System.out.println("Saindo do Undo...");
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
