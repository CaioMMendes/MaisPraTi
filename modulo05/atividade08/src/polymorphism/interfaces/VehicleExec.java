package polymorphism.interfaces;

public class VehicleExec {

  public static void execute() {
    IVehicle[] vehicles = {
        new Car(),
        new Bike(),
        new Train()
    };

    for (IVehicle vehicle : vehicles) {
      vehicle.speedUp();
      vehicle.brake();
      System.out.println();
    }
  }
}
