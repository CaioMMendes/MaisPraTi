package abstraction.employeeManagement;

public abstract class Employee {

  private String name;
  private double salary;

  public Employee(String name) {
    setName(name);
  }

  public abstract double calculateSalary();

  public abstract double calculateBonus();

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public double getSalary() {
    return salary;
  }

  public void setSalary(double salary) {
    this.salary = salary;
  }
}
