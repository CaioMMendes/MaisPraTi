package polymorphism.abstracts;

public class Cow extends Animal {
  @Override
  public void emitSound() {
    System.out.println("Muuuuuuuuuuuuuuuu");
    System.out.println();
  }
}
