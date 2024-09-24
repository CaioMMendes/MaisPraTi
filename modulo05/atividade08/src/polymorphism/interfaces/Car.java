package polymorphism.interfaces;

public class Car implements IVehicle {
  @Override
  public void speedUp() {
    System.out.println("O carro está acelerando!");
  }

  @Override
  public void brake() {
    System.out.println("O carro está freando!");
  }
}
