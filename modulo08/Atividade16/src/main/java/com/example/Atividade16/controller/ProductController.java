package com.example.Atividade16.controller;

import com.example.Atividade16.dto.ProductDTO;
import com.example.Atividade16.model.Product;
import com.example.Atividade16.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProductController {

  @Autowired
  ProductService productService;

  @GetMapping
  public ResponseEntity<List<Product>> getAllProducts(){
    List<Product> responseProducts= productService.getAllProducts();
    return ResponseEntity.ok(responseProducts);
  }

  @PostMapping
  public ResponseEntity<Product> createProduct(@RequestBody Product product){
    Product responseProduct= productService.createProduct(product);
    return ResponseEntity.ok(responseProduct);
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getProductById(@PathVariable String id){
    Long longId = Long.parseLong(id);
    Product responseProduct= productService.getProductById(longId);
    if (responseProduct == null) {
      String message = "Produto não encontrado com o ID: " + id;
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
    }
    return ResponseEntity.ok(responseProduct);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateProduct(@PathVariable String id, @RequestBody ProductDTO productDTO){
    Long longId = Long.parseLong(id);
    Product responseProduct= productService.updateProduct(longId,productDTO);
    if (responseProduct == null) {
      String message = "Produto não encontrado com o ID: " + id;
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
    }
    return ResponseEntity.ok(responseProduct);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteProduct(@PathVariable String id){
    Long longId = Long.parseLong(id);
   String responseProduct=  productService.deleteProduct(longId);
    return ResponseEntity.ok(responseProduct);
  }

}
