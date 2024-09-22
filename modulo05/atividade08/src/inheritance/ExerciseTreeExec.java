package inheritance;

public class ExerciseTreeExec {

  public static void execute() {

    Developer developer = new Developer("Caio", 1500);

    Manager manager = new Manager("Larissa", 10000);

    developer.calcularBonus();
    manager.calcularBonus();

  }

}
