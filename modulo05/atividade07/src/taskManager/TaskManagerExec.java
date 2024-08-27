package taskManager;

import java.util.Scanner;

public class TaskManagerExec {

  public static void execute() {

    try {
      Scanner scanner = new Scanner(System.in);
      TaskManager taskManager = new TaskManager();
      boolean loop = true;
      while (loop) {
        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Adicionar tarefa");
        System.out.println("2 - Remover tarefa por índice");
        System.out.println("3 - Remover tarefa por nome");
        System.out.println("4 - Completar tarefa por índice");
        System.out.println("5 - Completar tarefa por nome");
        System.out.println("6 - Buscar tarefa por índice");
        System.out.println("7 - Listar todas as tarefas");
        System.out.println("8 - Sair do Task Manager");
        String input = scanner.nextLine();
        int option = Integer.parseInt(input);
        System.out.println("--------------------------------");
        switch (option) {
          case 1:
            System.out.print("Digite o nome da tarefa: ");
            String name = scanner.nextLine();
            System.out.print("Digite se a tarefa esta completa ou não (true ou false): ");
            boolean completed = Boolean.parseBoolean(scanner.nextLine());
            taskManager.add(name, completed);
            break;

          case 2:
            System.out.print("Digite o índice da tarefa a ser removida: ");
            int index = Integer.parseInt(scanner.nextLine());
            taskManager.remove(index);
            break;

          case 3:
            System.out.print("Digite o nome da tarefa a ser removida: ");
            String nameRemove = scanner.nextLine();
            taskManager.removeByTitle(nameRemove);
            break;

          case 4:
            System.out.print("Digite o indice da tarefa para completar: ");
            int indexComplete = Integer.parseInt(scanner.nextLine());
            taskManager.complete(indexComplete);
            break;

          case 5:
            System.out.print("Digite o nome da tarefa para completar: ");
            String nameComplete = scanner.nextLine();
            taskManager.completeByTitle(nameComplete);
            break;

          case 6:
            System.out.print("Digite o índice da tarefa a buscar: ");
            int getByIndex = Integer.parseInt(scanner.nextLine());
            taskManager.get(getByIndex);
            break;

          case 7:
            System.out.print("Listar todas as tarefas: ");
            taskManager.printTasks();
            break;

          case 8:
            System.out.println("Saindo do task manager...");
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
