import abstraction.employeeManagement.EmployeesManagementExec;
import abstraction.paymentSystem.PaymentExec;
import encapsulation.EncapsulationExec;
import inheritance.InheritanceExec;
import polymorphism.abstracts.AnimalExec;
import polymorphism.interfaces.VehicleExec;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    try {

      Scanner scanner = new Scanner(System.in);

      while (true) {

        System.out.println("Escolha uma da opções: ");
        System.out.println("1 - Product");
        System.out.println("2 - Product With Discount");
        System.out.println("3 - Employees");
        System.out.println("4 - Vehicles");
        System.out.println("5 - Animals");
        System.out.println("6 - Payment");
        System.out.println("7 - Employee Management");
        System.out.println("10 - Sair");
        int option = scanner.nextInt();

        switch (option) {
          case 1:
            System.out.println();
            System.out.println("-------------------------------");
            System.out.println("Executando Product.");
            System.out.println();
            EncapsulationExec.executeProduct();
            break;

          case 2:
            System.out.println();
            System.out.println("-------------------------------");
            System.out.println("Executando Product With Discount.");
            System.out.println();
            EncapsulationExec.executeProductWithDiscount();
            break;

          case 3:
            System.out.println("-------------------------------");
            System.out.println("Executando Employees.");
            System.out.println();
            InheritanceExec.execute();
            break;

          case 4:
            System.out.println("-------------------------------");
            System.out.println("Executando Veículos.");
            System.out.println();
            VehicleExec.execute();
            break;

          case 5:
            System.out.println("-------------------------------");
            System.out.println("Executando Animais.");
            System.out.println();
            AnimalExec.execute();
            break;

          case 6:
            System.out.println("-------------------------------");
            System.out.println("Executando Payment.");
            System.out.println();
            PaymentExec.execute();
            break;

          case 7:
            System.out.println("-------------------------------");
            System.out.println("Employee Management.");
            System.out.println();
            EmployeesManagementExec.execute();
            break;

          case 10:
            System.out.println("👋 Saindo...");
            return;
          default:
            System.out.println("Escolha uma opção válida.");
            break;
        }

        System.out.println("-------------------------------");
      }

    } catch (Exception error) {
      System.out.println("---------------");
      System.out.println(error);
      System.out.println("---------------");
    }

  }
}