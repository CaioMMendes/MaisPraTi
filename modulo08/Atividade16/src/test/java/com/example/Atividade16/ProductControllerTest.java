package com.example.Atividade16;

import com.example.Atividade16.controller.ProductController;
import com.example.Atividade16.dto.ProductDTO;
import com.example.Atividade16.model.Product;
import com.example.Atividade16.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class ProductControllerTest {
  @Mock
  private ProductService productService;

  @InjectMocks
  private ProductController productController;

  @BeforeEach
  void setUp() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  void getAllProducts_Success() {
    List<Product> mockProducts = new ArrayList<>();
    mockProducts.add(new Product(1L, "Produto A", 100.0, "Descrição A", 10));
    when(productService.getAllProducts()).thenReturn(mockProducts);

    ResponseEntity<List<Product>> response = productController.getAllProducts();

    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(1, response.getBody().size());
    verify(productService, times(1)).getAllProducts();
  }

  @Test
  void createProduct_Success() {
    Product mockProduct = new Product(1L, "Produto A", 100.0, "Descrição A", 10);
    when(productService.createProduct(any(Product.class))).thenReturn(mockProduct);

    ResponseEntity<Product> response = productController.createProduct(mockProduct);

    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(mockProduct, response.getBody());
    verify(productService, times(1)).createProduct(any(Product.class));
  }

  @Test
  void getProductById_Success() {
    Product mockProduct = new Product(1L, "Produto A", 100.0, "Descrição A", 10);
    when(productService.getProductById(1L)).thenReturn(mockProduct);

    ResponseEntity<?> response = productController.getProductById("1");

    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(mockProduct, response.getBody());
    verify(productService, times(1)).getProductById(1L);
  }

  @Test
  void getProductById_ProductNotFound() {
    when(productService.getProductById(1L)).thenReturn(null);

    ResponseEntity<?> response = productController.getProductById("1");

    assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    verify(productService, times(1)).getProductById(1L);
  }

  @Test
  void updateProduct_Success() {
    ProductDTO mockProductDTO = new ProductDTO("Produto atualizado", 200.0,"Descrição do produto atualizado",5);
    Product mockProduct = new Product(1L, "Produto atualizado", 200.0,"Descrição do produto atualizado",5);
    when(productService.updateProduct(1L, mockProductDTO)).thenReturn(mockProduct);

    ResponseEntity<?> response = productController.updateProduct("1", mockProductDTO);

    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(mockProduct, response.getBody());
    verify(productService, times(1)).updateProduct(1L, mockProductDTO);
  }

  @Test
  void updateProduct_ProductNotFound() {
    ProductDTO mockProductDTO = new ProductDTO("Produto atualizado", 200.0,"Descrição do produto atualizado",5);
    when(productService.updateProduct(1L, mockProductDTO)).thenReturn(null);

    ResponseEntity<?> response = productController.updateProduct("1", mockProductDTO);

    assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    assertEquals("Produto não encontrado com o ID: 1", response.getBody());
    verify(productService, times(1)).updateProduct(1L, mockProductDTO);
  }

  @Test
  void deleteProduct_Success() {
    when(productService.deleteProduct(1L)).thenReturn("Produto deletado com sucesso");

    ResponseEntity<String> response = productController.deleteProduct("1");

    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals("Produto deletado com sucesso", response.getBody());
    verify(productService, times(1)).deleteProduct(1L);
  }

  @Test
  void deleteProduct_ProductNotFound() {
    when(productService.deleteProduct(1L)).thenReturn("Produto não encontrado com o ID: 1");

    ResponseEntity<String> response = productController.deleteProduct("1");

    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals("Produto não encontrado com o ID: 1", response.getBody());
    verify(productService, times(1)).deleteProduct(1L);
  }
}
