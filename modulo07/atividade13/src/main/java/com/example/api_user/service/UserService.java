package com.example.api_user.service;

import com.example.api_user.dto.UpdateUserDTO;
import com.example.api_user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.api_user.dto.UserDTO;
import com.example.api_user.model.User;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
  @Autowired
  private final PasswordEncoder passwordEncoder;
  private final UserRepository userRepository;

  public UserService(PasswordEncoder passwordEncoder, UserRepository userRepository) {
    this.passwordEncoder = passwordEncoder;
    this.userRepository = userRepository;
  }

  public List<UserDTO> getAllUsers() {
    return userRepository
        .findAll()
        .stream()
        .map(this::convertToDTO)
        .collect(Collectors.toList());
  }

  public UserDTO getUSerById(int id) {
    Optional<User> user = userRepository.findById(id);
//      return user.map(this::convertToDTO).orElse(null);
    if (user.isPresent()) {
      User getUser = user.get();
      return convertToDTO(getUser);
    }
    return null;
  }

  public UserDTO getUserByUsername(String username) {
    Optional<User> user = userRepository.findByUsername(username);
    if (user.isPresent()) {
      User getUser = user.get();
      return convertToDTO(getUser);
    }
    return null;
  }

  public UserDTO createUser(UserDTO userDTO) {
    User user = new User();
    user.setUsername(userDTO.getUsername());
    user.setEmail(userDTO.getEmail());
    user.setUser_password(passwordEncoder.encode(userDTO.getUser_password()));
    userRepository.save(user);
    return convertToDTO(user);
  }

  public UserDTO updateUser(int id, UpdateUserDTO updateUserDto) {
    Optional<User> userOptional = userRepository.findById(id);
    if (userOptional.isPresent()) {
      User user = userOptional.get();
      user.setUsername(updateUserDto.getUsername());
      user.setEmail(updateUserDto.getEmail());
      user.setUser_password(passwordEncoder.encode(updateUserDto.getUser_password()));
      userRepository.save(user);
      return convertToDTO(user);
    }
    return null;
  }

  public void deleteUser(int id) {
    userRepository.deleteById(id);
  }

  private UserDTO convertToDTO(User user) {
    UserDTO userDTO = new UserDTO();
    userDTO.setId(user.getId());
    userDTO.setUsername(user.getUsername());
    userDTO.setEmail(user.getEmail());

    return userDTO;
  }

}
