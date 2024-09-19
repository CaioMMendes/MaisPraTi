package encapsulation;

import java.util.ArrayList;

import static encapsulation.ProductValidator.isProductValid;

public class EncapsulationExec {

  public static void executeProduct() {
    ArrayList<Product> productList = new ArrayList<>();
    ArrayList<Product> validProductsList = new ArrayList<>();
    productList.add(new Product("Café", 10.50, 3));
    productList.add(new Product("", 10.50, 3));
    productList.add(new Product("Café", -1, 3));
    productList.add(new Product("Café", 10.50, -1));

    productList.forEach(product -> {
      String name = product.getName();
      double price = product.getPrice();
      int quantity = product.getQuantity();
      System.out.println();
      System.out.println("Tentando cadastrar");
      System.out.println("Nome: " + name + ", Preco: " + price + " Quantidade: " + quantity);
      if (isProductValid(name, price, quantity)) {
        System.out.println("Cadastrando " + name + " " + price + " " + quantity);
        validProductsList.add(product);
      }
    });

    System.out.println(" ");
    System.out.println(" ");
    System.out.println("Listando produtos válidos");
    validProductsList.forEach(System.out::println);

  }

  public static void executeProductWithDiscount() {
    ArrayList<ProductWithDiscount> productList = new ArrayList<>();
    productList.add(new ProductWithDiscount("Café", 5, 3));
    productList.add(new ProductWithDiscount("Carne", 10.50, 1));
    productList.add(new ProductWithDiscount("Água", 3, 2));
    productList.add(new ProductWithDiscount("Macarrão", 5.50, 1));
    int[] count = {0};
    int[] discounts = {-1, 10, 30, 60};

    productList.forEach(product -> {
      try {
        double discount = discounts[count[0]];
        System.out.println();
        System.out.println("Tentando aplicar desconto de " + discount);

        if (DiscountValidator.discountValidate(discounts[count[0]])) {
          product.applyDiscount(discount);
        }
      } catch (Exception error) {
        System.out.println(error);
      }
      count[0]++;
    });

    System.out.println(" ");
    System.out.println(" ");
    System.out.println("Listando produtos após aplicar o desconto");
    productList.forEach(System.out::println);

  }

}
