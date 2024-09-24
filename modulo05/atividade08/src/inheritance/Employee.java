package inheritance;

public class Employee {

  private String name;
  private double salary;

  public Employee(String name, double salary) {
    setName(name);
    setSalary(salary);
  }

  protected String getName() {
    return name;
  }

  protected void setName(String name) {
    this.name = name;
  }

  protected double getSalary() {
    return salary;
  }

  protected void setSalary(double salary) {
    this.salary = salary;
  }

  protected void trabalhar() {
    System.out.println("Mensagem genérica sobre o trabalho realizado");
  }
}
