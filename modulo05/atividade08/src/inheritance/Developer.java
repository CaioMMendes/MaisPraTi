package inheritance;

public class Developer extends Employee {

  public Developer(String name, double salary) {
    super(name, salary);
  }

  protected double calcularBonus() {
    return this.getSalary() * 0.1;
  }

}
