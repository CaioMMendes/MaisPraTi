package bankQueue;

import java.util.Scanner;

public class BankQueueExec {

  public static void execute() {
    try {
      Scanner scanner = new Scanner(System.in);
      boolean loop = true;
      BankQueue bankQueue = new BankQueue();
      while (loop) {
        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Inserir cliente na fila");
        System.out.println("2 - Chamar próximo cliente");
        System.out.println("3 - Printar clientes na fila");
        System.out.println("4 - Sair");
        String input = scanner.nextLine();
        int option = Integer.parseInt(input);
        System.out.println("--------------------------------");
        switch (option) {
          case 1:
            System.out.print("Digite o nome do cliente: ");
            String client = scanner.nextLine();
            bankQueue.enqueue(client);
            break;

          case 2:
            bankQueue.callNext();
            break;

          case 3:
            bankQueue.printClients();
            break;

          case 4:
            System.out.println("Saindo do BankQueue...");
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
