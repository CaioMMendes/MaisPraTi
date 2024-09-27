package abstraction.paymentSystem;

public class PaymentSlip extends PaymentMethod {
  private double value;

  @Override
  void processPayment(double valor) {
    this.value = valor;
    if (validatePayment()) {
      System.out.println("Pagamento de R$ " + valor + " processado com boleto.");
    } else {
      System.out.println("Pagamento com boleto inválido.");
    }
  }

  @Override
  boolean validatePayment() {
    return this.value > 0;
  }

}
