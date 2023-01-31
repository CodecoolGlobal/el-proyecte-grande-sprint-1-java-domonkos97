package com.codecool.transactstat.controller;

import com.codecool.transactstat.model.UserEntity;
import com.codecool.transactstat.model.dto.UserDTO;
import com.codecool.transactstat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserDTO> getAllUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    public UserDTO getUserById(@PathVariable Long userId){
        return userService.getUserById(userId);
    }

    @PostMapping
    public void registerNewUser(@RequestBody UserEntity userEntity){
        userService.addUser(userEntity);
    }

    @PutMapping("/{userId}")
    public void updateUserById(@PathVariable Long userId, @RequestBody UserDTO appUser){
        userService.updateUserById(userId, appUser);
    }

    @DeleteMapping("/{userId}")
    public void deleteUserById(@PathVariable Long userId){
        userService.deleteUserById(userId);
    }

    @PostMapping("/auth")
    @ResponseBody
    public ResponseEntity<?> authenticate(@RequestBody UserDTO user, HttpServletResponse response){
        Optional<Long> userId = userService.authenticate(user);
        return userId.map((id) -> {
            Cookie cookie = new Cookie("userId",String.valueOf(id));
            cookie.setPath("/");
            response.addCookie(cookie);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }).orElse(new ResponseEntity<>(HttpStatus.FORBIDDEN));
    }
}
