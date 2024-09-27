package abstraction.employeeManagement;

public class Intern extends Employee {

  public Intern(String name) {
    super(name);
    setSalary(1500);
  }

  @Override
  public double calculateSalary() {
    return getSalary();
  }

  @Override
  public double calculateBonus() {
    return 0;
  }

}
