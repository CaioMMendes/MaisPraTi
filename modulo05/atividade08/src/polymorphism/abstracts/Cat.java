package polymorphism.abstracts;

public class Cat extends Animal {

  @Override
  public void emitSound() {
    System.out.println("Miau");
    System.out.println();
  }
}
