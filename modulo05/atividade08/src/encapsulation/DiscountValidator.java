package encapsulation;

public class DiscountValidator {

  protected static boolean discountValidate(double discount) {
    if (discount > 50) {
      throw new IllegalArgumentException("O disconto não pode ser maior que 50%");
    } else if (discount < 0) {
      throw new IllegalArgumentException("O disconto não pode ser menor que 0%");
    }
    return true;
  }
}
