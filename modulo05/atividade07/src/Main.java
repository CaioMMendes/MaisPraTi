import bankQueue.BankQueueExec;
import browsingHistory.BrowsingHistoryExec;
import printingQueue.PrintingQueueExec;
import taskManager.TaskManagerExec;
import undo.UndoExec;

import java.util.LinkedList;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    try {

      Scanner scanner = new Scanner(System.in);

      while (true) {

        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Task Manager");
        System.out.println("2 - Browsing History");
        System.out.println("3 - Undo");
        System.out.println("6 - Bank Queue");
        System.out.println("7 - Printing Queue");
        System.out.println("10 - Sair");
        int option = scanner.nextInt();

        switch (option) {
          case 1:
            System.out.println("Executando task manager.");
            TaskManagerExec.execute();
            break;

          case 2:
            System.out.println("Executando browsing history.");
            BrowsingHistoryExec.execute();
            break;

          case 3:
            System.out.println("Executando Undo.");
            UndoExec.execute();
            break;

          case 6:
            System.out.println("Executando Bank Queue.");
            BankQueueExec.execute();
            break;

          case 7:
            System.out.println("Executando Printing Queue.");
            PrintingQueueExec.execute();
            break;

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

    LinkedList<String> teste = new LinkedList<>();
  }
}