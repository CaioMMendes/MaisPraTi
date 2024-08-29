package undoRedo;

import java.util.Scanner;

public class UndoRedoExec {

  public static void execute() {
    try {
      Scanner scanner = new Scanner(System.in);
      boolean loop = true;
      UndoRedo undoRedo = new UndoRedo();
      while (loop) {
        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Realizar ação");
        System.out.println("2 - Desfazer ação");
        System.out.println("3 - Refazer ação");
        System.out.println("4 - Printar ações");
        System.out.println("5 - Sair");
        String input = scanner.nextLine();
        int option = Integer.parseInt(input);
        System.out.println("--------------------------------");
        switch (option) {
          case 1:
            System.out.print("Digite o nome da ação: ");
            String action = scanner.nextLine();
            undoRedo.add(action);
            break;

          case 2:
            undoRedo.undo();
            break;

          case 3:
            undoRedo.redo();
            break;

          case 4:
            undoRedo.printActions();
            break;

          case 5:
            System.out.println("Saindo do Undo Redo...");
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
