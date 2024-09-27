package abstraction.employeeManagement;

public class Manager extends Employee {

  public Manager(String name) {
    super(name);
    setSalary(5000);
  }

  @Override
  public double calculateSalary() {
    return getSalary() + calculateBonus();
  }

  @Override
  public double calculateBonus() {
    return getSalary() * 0.2;
  }

}
