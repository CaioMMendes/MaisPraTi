package abstraction.employeeManagement;

public class Developer extends Employee {

  public Developer(String name) {
    super(name);
    setSalary(3000);
  }

  @Override
  public double calculateSalary() {
    return getSalary() + calculateBonus();
  }

  @Override
  public double calculateBonus() {
    return getSalary() * 0.1;
  }

}
