package abstraction.employeeManagement;

import java.util.ArrayList;
import java.util.List;

public class EmployeesManagement {
  private List<Employee> employees;

  public EmployeesManagement() {
    setEmployees(new ArrayList<>());
  }

  public void setEmployees(List<Employee> employees) {
    this.employees = employees;
  }

  public void addEmployee(Employee employee) {
    String employeeType = "";

    if (employee instanceof Manager) {
      employeeType = "Gerente";
    } else if (employee instanceof Developer) {
      employeeType = "Desenvolvedor";
    } else if (employee instanceof Intern) {
      employeeType = "Estagiário";
    }
    System.out.println("Cadastrando: " + employee.getName() + " (" + employeeType + ") ");
    employees.add(employee);
  }

  public void calculatePayroll() {
    double totalSalary = 0;
    double totalSalaryWithBonus = 0;
    double totalBonus = 0;

    for (Employee employee : employees) {
      totalSalary += employee.getSalary();
      totalSalaryWithBonus += employee.calculateSalary();
      totalBonus += employee.calculateBonus();
    }
    System.out.println("Calculando fola de pagamento");
    System.out.println("Total de Salários sem bonus: " + totalSalary);
    System.out.println("Total de Salários com bonus: " + totalSalaryWithBonus);
    System.out.println("Total de Bônus: " + totalBonus);
  }

  public void promoteEmployee(int index) {
    if (index >= 0 && index < employees.size()) {
      Employee employee = employees.get(index);
      if (employee instanceof Intern) {
        System.out.println("Promovendo o estagiário " + employee.getName() + " para desenvolvedor.");
        employees.set(index, new Developer(employee.getName()));
      } else if (employee instanceof Developer) {
        System.out.println("Promovendo o desenvolvedor " + employee.getName() + " para gerente.");
        employees.set(index, new Manager(employee.getName()));
      } else {
        System.out.println("O funcionario já é um gerente");
      }
    }
  }

  public void printEmployees() {

    System.out.println("Imprimindo a lista de funcionários:");
    employees.forEach(employee -> {
      String employeeType = "";

      if (employee instanceof Manager) {
        employeeType = "Gerente";
      } else if (employee instanceof Developer) {
        employeeType = "Desenvolvedor";
      } else if (employee instanceof Intern) {
        employeeType = "Estagiário";
      }

      System.out.println(employee.getName() + " (" + employeeType + ") " + employee.getSalary());
    });

  }

}
