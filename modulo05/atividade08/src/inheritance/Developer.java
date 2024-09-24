package inheritance;

public class Developer extends Employee {

  public Developer(String name, double salary) {
    super(name, salary);
    System.out.println();
    System.out.println("Cadastrando desenvolvedor:");
    System.out.println("Nome: " + name);
    System.out.println("Salario " + salary);
    System.out.println();
  }

  protected double calcularBonus() {
    double bonus = this.getSalary() * 0.1;
    System.out.println();
    System.out.println("Calculando bonus do Desenvolvedor, 10%");
    System.out.println("Salario: " + this.getSalary() + " , Bonus: " + bonus);
    System.out.println();
    return bonus;
  }

  @Override
  protected void trabalhar() {
    System.out.println("Desenvolvedor trabalhando.");
  }

}
