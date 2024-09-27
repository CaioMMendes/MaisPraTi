package abstraction.paymentSystem;

public class Pix extends PaymentMethod {
  private double value;

  @Override
  void processPayment(double valor) {
    this.value = valor;
    if (validatePayment()) {
      System.out.println("Pagamento de R$ " + valor + " processado com pix.");
    } else {
      System.out.println("Pagamento com pix inválido.");
    }
  }

  @Override
  boolean validatePayment() {
    return this.value > 0;
  }
}
