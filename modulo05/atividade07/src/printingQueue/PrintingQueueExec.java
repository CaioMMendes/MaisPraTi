package printingQueue;

import java.util.Scanner;

public class PrintingQueueExec {

  public static void execute() {
    try {
      Scanner scanner = new Scanner(System.in);
      boolean loop = true;
      PrintingQueue printingQueue = new PrintingQueue();
      while (loop) {
        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Cadastrar documento para ser impresso");
        System.out.println("2 - Imprimir documento");
        System.out.println("3 - Printar documentos na fila");
        System.out.println("4 - Sair");
        String input = scanner.nextLine();
        int option = Integer.parseInt(input);
        System.out.println("--------------------------------");
        switch (option) {
          case 1:
            System.out.print("Digite o nome do documento: ");
            String document = scanner.nextLine();
            printingQueue.enqueue(document);
            break;

          case 2:
            printingQueue.print();
            break;

          case 3:
            printingQueue.printDocuments();
            break;

          case 4:
            System.out.println("Saindo do Printing Queue...");
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
