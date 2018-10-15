package br.unicamp.ecommerce;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = { "pretty", "html:target/cucumber" },
	    glue = { "br.unicamp.ecommerce.statusentrega", "br.unicamp.ecommerce.frete", "br.unicamp.ecommerce.endereco" },
        features = "classpath:features/"
)
public class EcommerceTest {

}
