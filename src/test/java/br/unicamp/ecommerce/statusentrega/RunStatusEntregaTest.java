package br.unicamp.ecommerce.statusentrega;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = { "pretty", "html:target/cucumber" },
        glue = "br.unicamp.ecommerce.statusentrega",
        features = "classpath:features/StatusEntrega.feature"
)
public class RunStatusEntregaTest {
}