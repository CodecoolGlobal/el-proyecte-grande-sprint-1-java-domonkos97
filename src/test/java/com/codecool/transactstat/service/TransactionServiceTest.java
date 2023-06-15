package com.codecool.transactstat.service;

import com.codecool.transactstat.model.PaymentType;
import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.model.dto.TransactionDTO;
import com.codecool.transactstat.persistent.TransactionRepository;
import com.codecool.transactstat.persistent.WalletRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class TransactionServiceTest {

    @InjectMocks
    TransactionService service;
    @Mock
    TransactionRepository transactionRepository;

    @Mock
    WalletRepository walletRepository;


    @BeforeEach
    void setUp(){
        service = new TransactionService(transactionRepository, walletRepository);

    }

    @Test // TODO
    void getTransactions() {
    }

    @Test
    void getTransaction() {
        Transaction transaction = new Transaction();
        long id = 1;
        Mockito.when(transactionRepository.getReferenceById(id)).thenReturn(transaction);
        assertEquals(transaction, service.getTransaction(id));
    }

    @Test // TODO
    void getTransactionsByDate() {
    }
}