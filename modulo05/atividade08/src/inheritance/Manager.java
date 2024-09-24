package inheritance;

public class Manager extends Employee {

  public Manager(String name, double salary) {
    super(name, salary);
    System.out.println();
    System.out.println("Cadastrando gerente:");
    System.out.println("Nome: " + name);
    System.out.println("Salario " + salary);
    System.out.println();
  }

  protected double calcularBonus() {
    double bonus = this.getSalary() * 0.2;
    System.out.println();
    System.out.println("Calculando bonus do gerente, 20%");
    System.out.println("Salario: " + this.getSalary() + " , Bonus: " + bonus);
    System.out.println();
    return bonus;
  }

  @Override
  protected void trabalhar() {
    System.out.println("Gerente trabalhando.");
  }

}
