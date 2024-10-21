package com.example.api_user.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtTokenProvider {

  @Value("${jwt.secret}")
  private  String secretKey;


  // Método auxiliar para converter a secretKey para um formato apropriado
  private Key getSigningKey() {
    byte[] keyBytes = secretKey.getBytes();
    return new SecretKeySpec(keyBytes, SignatureAlgorithm.HS256.getJcaName());
  }

  public String extractUsername(String token){
    return extractClaim(token, Claims::getSubject);
  }

  public<T> T extractClaim(String token, Function<Claims,T> claimsResolver){
    final Claims claims=extractAllClaims(token);
    return claimsResolver.apply(claims);
  }

  private Claims extractAllClaims(String token){
//    trocar o parser para parserbuilder
    return Jwts.parserBuilder().setSigningKey(getSigningKey()).build()
        .parseClaimsJws(token).getBody();
  }


  public String generateToken(String username,int id){
    Map<String,Object> claims=new HashMap<>();
    claims.put("id", id);
    claims.put("username",username );
    return createToken(claims,username);
  }


  private String createToken(Map<String,Object> claims,String subject){
    return Jwts.builder().setClaims(claims)
        .setSubject(subject)
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis()+1000*60*60*10))
        .signWith(getSigningKey())
        .compact();
  }



  public boolean isTokenValid(String token,UserDetails userDetails){
    final String username=extractUsername(token);
    return (!isTokenExpired(token) && username.equals(userDetails.getUsername()) );
  }

private Boolean isTokenExpired(String token){
    return extractExpiration(token).before(new Date());
}


private Date extractExpiration(String token){
    return extractClaim(token,Claims::getExpiration);
}






}