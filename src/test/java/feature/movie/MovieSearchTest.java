package feature.movie;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/report"}, monochrome = true, strict = false, tags={"~@wip"}) 
//@CucumberOptions(tags={"~@wip"})
public class MovieSearchTest {
	
}