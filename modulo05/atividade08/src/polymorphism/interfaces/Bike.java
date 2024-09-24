package polymorphism.interfaces;

public class Bike implements IVehicle {
  @Override
  public void speedUp() {
    System.out.println("A bicicleta está acelerando!");
  }

  @Override
  public void brake() {
    System.out.println("A bicicleta está freando!");
  }
}
