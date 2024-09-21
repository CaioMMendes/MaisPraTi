package inheritance;

public class Manager extends Employee {

  public Manager(String name, double salary) {
    super(name, salary);
  }

  protected double calcularBonus() {
    return this.getSalary() * 0.2;
  }

}
