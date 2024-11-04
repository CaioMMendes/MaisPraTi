package com.example.Atividade16.service;

import com.example.Atividade16.dto.ProductDTO;
import com.example.Atividade16.model.Product;
import com.example.Atividade16.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

  @Autowired
  ProductRepository productRepository;

  public Product createProduct(Product product) {
    return productRepository.save(product);
  }

  public List<Product> getAllProducts() {
    return productRepository.findAll();
  }

  public Product getProductById(Long id) {
    return productRepository.findById(id).orElse(null);
  }

  public Product updateProduct(Long id, ProductDTO productDTO) {

    Product product = productRepository.findById(id)
        .orElse(null);

    if (product == null) {
      return null;
    }

    product.setName(productDTO.getName());
    product.setDescription(productDTO.getDescription());
    product.setPrice(productDTO.getPrice());
    product.setQuantity(productDTO.getQuantity());
    product = productRepository.save(product);
    return product;

  }

  public String deleteProduct(Long id) {
    Product product = productRepository.findById(id)
        .orElse(null);
    if(product==null){
      return "Produto não encontrado.";
    }
    productRepository.deleteById(id);
    return "Produto deletado com sucesso!";
  }

}
