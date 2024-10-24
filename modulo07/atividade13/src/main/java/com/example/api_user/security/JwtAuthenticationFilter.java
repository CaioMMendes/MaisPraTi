package com.example.api_user.security;

import com.example.api_user.service.CustomUserDetailsService;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Configuration
public class JwtAuthenticationFilter extends OncePerRequestFilter {

  private final JwtTokenProvider jwtTokenProvider;
  private final CustomUserDetailsService userDetailsService;

  public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider, CustomUserDetailsService userDetailsService) {
    this.jwtTokenProvider = jwtTokenProvider;
    this.userDetailsService = userDetailsService;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request,
                                  HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
    UserDetails userDetails = null;
    String authHeader = request.getHeader("Authorization");

    if (authHeader == null || !authHeader.startsWith("Bearer")) {
      filterChain.doFilter(request, response);
      return;
    }

    String jwt = authHeader.substring(7);
    String id = jwtTokenProvider.extractSubject(jwt);
    if (id != null && SecurityContextHolder.getContext().getAuthentication() == null) {
      userDetails = userDetailsService.loadUserById(Integer.parseInt(id));
    }
    if (userDetails == null) {
      filterChain.doFilter(request, response);
      return;
    }

    if (jwtTokenProvider.isTokenValid(jwt, userDetails)) {
      System.out.println("Token válido");
      Claims claims = jwtTokenProvider.extractAllClaims(jwt);
      String username = claims.get("username", String.class);

      UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
          new CustomUserDetails(Integer.parseInt(id), username), null, Collections.emptyList()
      );
      authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

      SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    filterChain.doFilter(request, response);
  }

}
