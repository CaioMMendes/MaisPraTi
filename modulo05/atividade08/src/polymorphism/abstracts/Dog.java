package polymorphism.abstracts;

public class Dog extends Animal {

  @Override
  public void emitSound() {
    System.out.println("Au Au Au");
    System.out.println();
  }

}
