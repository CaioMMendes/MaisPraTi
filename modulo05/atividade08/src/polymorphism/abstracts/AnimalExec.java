package polymorphism.abstracts;

import java.util.ArrayList;
import java.util.List;

public class AnimalExec {

  public static void execute() {
    List<Animal> Animals = new ArrayList<>();

    Animals.add(new Dog());
    Animals.add(new Cat());
    Animals.add(new Cow());

    for (Animal animal : Animals) {
      animal.emitSound();
    }
  }
}
