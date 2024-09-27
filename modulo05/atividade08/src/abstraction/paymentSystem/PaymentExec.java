package abstraction.paymentSystem;

public class PaymentExec {

  public static void execute() {
    PaymentMethod creditCard = new CreditCard();
    PaymentMethod paymentSlip = new PaymentSlip();
    PaymentMethod pix = new Pix();

    creditCard.processPayment(100.00);
    paymentSlip.processPayment(255.55);
    pix.processPayment(333.333);

    creditCard.processPayment(-100.00);
    paymentSlip.processPayment(-255.55);
    pix.processPayment(-333.333);
  }

}
