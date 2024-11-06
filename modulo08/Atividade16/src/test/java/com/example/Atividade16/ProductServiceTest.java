package com.example.Atividade16;


import com.example.Atividade16.dto.ProductDTO;
import com.example.Atividade16.model.Product;
import com.example.Atividade16.repository.ProductRepository;
import com.example.Atividade16.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

class ProductServiceTest {

  @InjectMocks
  private ProductService productService;

  @Mock
  private ProductRepository productRepository;

  @BeforeEach
  void setUp() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  void createProduct_Success() {
    Product product = new Product();
    product.setId(1L);
    product.setName("Product 1");

    when(productRepository.save(any(Product.class))).thenReturn(product);

    Product createdProduct = productService.createProduct(product);

    assertNotNull(createdProduct);
    assertEquals("Product 1", createdProduct.getName());
    verify(productRepository, times(1)).save(product);
  }

  @Test
  void getAllProducts_Success() {
    List<Product> productList = new ArrayList<>();
    productList.add(new Product());

    when(productRepository.findAll()).thenReturn(productList);

    List<Product> result = productService.getAllProducts();

    assertEquals(1, result.size());
    verify(productRepository, times(1)).findAll();
  }

  @Test
  void getAllProducts_NoProductsFound() {
    when(productRepository.findAll()).thenReturn(new ArrayList<>());

    List<Product> result = productService.getAllProducts();

    assertTrue(result.isEmpty());
    verify(productRepository, times(1)).findAll();
  }

  @Test
  void getProductById_Success() {
    Product product = new Product();
    product.setId(1L);

    when(productRepository.findById(1L)).thenReturn(Optional.of(product));

    Product result = productService.getProductById(1L);

    assertNotNull(result);
    assertEquals(1L, result.getId());
    verify(productRepository, times(1)).findById(1L);
  }

  @Test
  void getProductById_NotFound() {
    when(productRepository.findById(anyLong())).thenReturn(Optional.empty());

    Product result = productService.getProductById(1L);

    assertNull(result);
    verify(productRepository, times(1)).findById(1L);
  }

  @Test
  void updateProduct_Success() {
    Product existingProduct = new Product();
    existingProduct.setId(1L);
    existingProduct.setName("Old Name");

    ProductDTO productDTO = new ProductDTO();
    productDTO.setName("New Name");
    productDTO.setDescription("New Description");
    productDTO.setPrice(20.0);
    productDTO.setQuantity(5);

    when(productRepository.findById(anyLong())).thenReturn(Optional.of(existingProduct));
    when(productRepository.save(any(Product.class))).thenReturn(existingProduct);

    Product updatedProduct = productService.updateProduct(1L, productDTO);

    assertNotNull(updatedProduct);
    assertEquals("New Name", updatedProduct.getName());
    assertEquals("New Description", updatedProduct.getDescription());
    verify(productRepository, times(1)).findById(1L);
    verify(productRepository, times(1)).save(existingProduct);
  }

  @Test
  void updateProduct_NotFound() {
    ProductDTO productDTO = new ProductDTO();

    when(productRepository.findById(anyLong())).thenReturn(Optional.empty());

    Product result = productService.updateProduct(1L, productDTO);

    assertNull(result);
    verify(productRepository, times(1)).findById(1L);
    verify(productRepository, never()).save(any(Product.class));
  }

  @Test
  void deleteProduct_Success() {
    Product product = new Product();
    product.setId(1L);

    when(productRepository.findById(anyLong())).thenReturn(Optional.of(product));
    doNothing().when(productRepository).deleteById(1L);

    String result = productService.deleteProduct(1L);

    assertEquals("Produto deletado com sucesso!", result);
    verify(productRepository, times(1)).findById(1L);
    verify(productRepository, times(1)).deleteById(1L);
  }

  @Test
  void deleteProduct_NotFound() {
    when(productRepository.findById(anyLong())).thenReturn(Optional.empty());

    String result = productService.deleteProduct(1L);

    assertEquals("Produto não encontrado.", result);
    verify(productRepository, times(1)).findById(1L);
    verify(productRepository, never()).deleteById(anyLong());
  }
}