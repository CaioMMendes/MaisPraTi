package browsingHistory;

import java.util.Scanner;

public class BrowsingHistoryExec {

  public static void execute() {
    try {
      Scanner scanner = new Scanner(System.in);
      boolean loop = true;
      System.out.print("Digite o tamanho máximo da lista: ");
      int length = scanner.nextInt();
      BrowsingHistory browsingHistory = new BrowsingHistory(length);
      while (loop) {
        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Adicionar url");
        System.out.println("2 - Printar urls");
        System.out.println("3 - Sair");
        String input = scanner.next();
        int option = Integer.parseInt(input);
        System.out.println("--------------------------------");
        switch (option) {
          case 1:
            System.out.print("Digite a url: ");
            String url = scanner.next();
            browsingHistory.add(url);
            break;

          case 2:
            browsingHistory.printUrls();
            break;

          case 3:
            System.out.println("Saindo do Browsing History...");
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
