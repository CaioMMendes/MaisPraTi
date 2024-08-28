package processesQueue;

import java.util.Scanner;

public class ProcessesQueueExec {

  public static void execute() {
    try {
      Scanner scanner = new Scanner(System.in);
      boolean loop = true;
      ProcessesQueue processesQueue = new ProcessesQueue();
      while (loop) {
        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Adicionar processo na fila");
        System.out.println("2 - Executar processo");
        System.out.println("3 - Printar processos na fila");
        System.out.println("4 - Sair");
        String input = scanner.nextLine();
        int option = Integer.parseInt(input);
        System.out.println("--------------------------------");
        switch (option) {
          case 1:
            System.out.print("Digite o nome do documento: ");
            String document = scanner.nextLine();
            processesQueue.enqueue(document);
            break;

          case 2:
            processesQueue.executeProcess();
            break;

          case 3:
            processesQueue.printProcesses();
            break;

          case 4:
            System.out.println("Saindo do Processes Queue...");
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
