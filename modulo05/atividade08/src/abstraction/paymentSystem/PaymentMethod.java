package abstraction.paymentSystem;

public abstract class PaymentMethod {
  abstract void processPayment(double value);

  abstract boolean validatePayment();
}
