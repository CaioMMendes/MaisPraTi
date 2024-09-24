package polymorphism.interfaces;

public class Train implements IVehicle {
  @Override
  public void speedUp() {
    System.out.println("O trem está acelerando!");
  }

  @Override
  public void brake() {
    System.out.println("O trem está freando!");
  }
}
