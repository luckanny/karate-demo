package com.example.runner;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestRunner {

    @Test
    void testAll() {
        Results results = Runner.path("classpath:features")
//                .tags("~@ignore")
                //.outputCucumberJson(true)
                .parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    // 可选：按标签运行特定测试
//    @Test
//    void testApi() {
//        Results results = Runner.path("classpath:features/api")
//                .tags("@api")
//                .parallel(3);
//        assertEquals(0, results.getFailCount(), results.getErrorMessages());
//    }
}