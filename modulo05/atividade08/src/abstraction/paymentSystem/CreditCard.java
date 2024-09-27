package abstraction.paymentSystem;

public class CreditCard extends PaymentMethod {

  private double value;

  @Override
  protected void processPayment(double valor) {
    this.value = valor;
    if (validatePayment()) {
      System.out.println("Pagamento de R$ " + valor + " processado com cartão de crédito.");
    } else {
      System.out.println("Pagamento com cartão de crédito inválido.");
    }
  }

  @Override
  protected boolean validatePayment() {
    return this.value > 0;
  }

}
