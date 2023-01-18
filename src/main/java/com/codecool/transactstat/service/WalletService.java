package com.codecool.transactstat.service;

import com.codecool.transactstat.model.User;
import com.codecool.transactstat.model.Wallet;
import com.codecool.transactstat.persistent.UserRepository;
import com.codecool.transactstat.persistent.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class WalletService {

    private final WalletRepository walletRepository;
    private final UserRepository userRepository;

    @Autowired
    public WalletService(WalletRepository walletRepository, UserRepository userRepository) {
        this.walletRepository = walletRepository;
        this.userRepository = userRepository;
    }

    public List<Wallet> getWalletsByUserId(Long userId){
        User user = userRepository.getReferenceById(userId);
        return walletRepository.getWalletsByUser(user);
    }

    public Wallet getWalletById(Long walletId){
        return walletRepository.getReferenceById(walletId);
    }


    public BigDecimal getBalanceByWalletId(Long walletId){
        return  getWalletById(walletId).getBalance();
    }
}
