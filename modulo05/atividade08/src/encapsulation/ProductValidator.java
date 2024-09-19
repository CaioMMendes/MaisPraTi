package encapsulation;

public class ProductValidator {

  protected static boolean nameValidate(String name) {
    if (name.isBlank()) {
      System.out.println("Erro: Insira algum nome.");
      return false;
    }
    return true;
  }

  protected static boolean priceValidate(double price) {
    if (price < 0) {
      System.out.println("Erro: O preço não pode ser negativo.");
      return false;
    }

    return true;
  }

  protected static boolean quantityValidate(int quantity) {
    if (quantity < 0) {
      System.out.println("Erro: A quantidade não pode ser negativa.");
      return false;
    }
    return true;
  }

  protected static boolean isProductValid(String name, double price, int quantity) {
    return nameValidate(name) && quantityValidate(quantity) && priceValidate(price);
  }

}
