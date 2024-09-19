import encapsulation.EncapsulationExec;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    try {

      Scanner scanner = new Scanner(System.in);

      while (true) {

        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Product");
        System.out.println("2 - Product With Discount");
        System.out.println("3 - Undo");
        System.out.println("4 - Undo Redo");
        System.out.println("5 - Card Game");
        System.out.println("6 - Bank Queue");
        System.out.println("7 - Printing Queue");
        System.out.println("8 - Processes Queue");
        System.out.println("10 - Sair");
        int option = scanner.nextInt();

        switch (option) {
          case 1:
            System.out.println();
            System.out.println("-------------------------------");
            System.out.println("Executando Product.");
            System.out.println();
            EncapsulationExec.executeProduct();
            break;

          case 2:
            System.out.println();
            System.out.println("-------------------------------");
            System.out.println("Product With Discount.");
            System.out.println();
            EncapsulationExec.executeProductWithDiscount();
            break;

//          case 3:
//            System.out.println("Executando Undo.");
//            UndoExec.execute();
//            break;
//
//          case 4:
//            System.out.println("Executando Undo Redo.");
//            UndoRedoExec.execute();
//            break;
//
//          case 5:
//            System.out.println("Executando Card Game.");
//            CardGameExec.execute();
//            break;
//
//          case 6:
//            System.out.println("Executando Bank Queue.");
//            BankQueueExec.execute();
//            break;
//
//          case 7:
//            System.out.println("Executando Printing Queue.");
//            PrintingQueueExec.execute();
//            break;
//
//          case 8:
//            System.out.println("Executando Processes Queue.");
//            ProcessesQueueExec.execute();
//            break;

          case 10:
            System.out.println("👋 Saindo...");
            return;
          default:
            System.out.println("Escolha uma opção válida.");
            break;
        }

        System.out.println("-------------------------------");
      }

    } catch (Exception error) {
      System.out.println("---------------");
      System.out.println(error);
      System.out.println("---------------");
    }

  }
}