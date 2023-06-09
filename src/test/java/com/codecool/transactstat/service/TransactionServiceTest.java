package com.codecool.transactstat.service;

import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.persistent.TransactionRepository;
import com.codecool.transactstat.persistent.WalletRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

class TransactionServiceTest {

    TransactionService service;
    @Mock
    TransactionRepository transactionRepository;

    @Mock
    WalletRepository walletRepository;

    @InjectMocks
    TransactionService service;

    @BeforeEach
    void setUp(){
        service = new TransactionService(transactionRepository, walletRepository);

    }

    @Test // TODO
    void getTransactions() {
    }

    @Test // TODO
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