package com.example.api_user.service;

import com.example.api_user.model.User;
import com.example.api_user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User.UserBuilder;

@Service
public class CustomUserDetailsService implements UserDetailsService {

  private final UserRepository userRepository;

  @Autowired
  public CustomUserDetailsService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    // Busca o usuário no banco de dados pelo nome de usuário
    User user = userRepository.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado com o nome: " + username));

    // Constrói o UserDetails com username, password e authorities
    UserBuilder builder = org.springframework.security.core.userdetails.User.withUsername(user.getUsername());
    builder.password(user.getUser_password()); // Adiciona a senha do usuário
//    builder.authorities("USER"); // Adiciona uma autoridade básica (você pode ajustar conforme necessário)

    return builder.build();
  }
}
