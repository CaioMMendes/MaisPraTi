package encapsulation;

public class ProductWithDiscount extends Product {

  public ProductWithDiscount(String name, double price, int quantity) {
    super(name, price, quantity);
  }

  protected void applyDiscount(double percentage) {
    System.out.println("Nome: " + this.getName() + ", Preco: " + this.getPrice() + ", Quantidade: " + this.getQuantity());
    System.out.println("Aplicando " + percentage + "% de desconto.");
    double priceWithDiscount = getPrice() * ((100 - percentage) / 100);
    setPrice(priceWithDiscount);
    System.out.println("O preço após aplicar o desconto é de: " + String.format("%.2f", priceWithDiscount));
  }

}
