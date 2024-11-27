package com.example.Atividade16.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
  private String name;
  private Double price;
  private String description;
  private Integer quantity;

}
