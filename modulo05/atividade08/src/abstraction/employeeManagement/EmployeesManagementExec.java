package abstraction.employeeManagement;

public class EmployeesManagementExec {

  public static void execute() {
    EmployeesManagement manage = new EmployeesManagement();

    Employee larissa = new Manager("Larissa");
    Employee caio = new Developer("Caio");
    Employee pedro = new Intern("Pedro");

    manage.addEmployee(larissa);
    manage.addEmployee(caio);
    manage.addEmployee(pedro);

    System.out.println();
    manage.printEmployees();
    System.out.println();
    manage.calculatePayroll();
    manage.promoteEmployee(2);

    System.out.println();
    System.out.println("Após promoção:");
    manage.calculatePayroll();
    System.out.println();
    manage.printEmployees();
  }

}
