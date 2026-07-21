package com.amitesh.portfolio.edgesignalstudio;

import com.amitesh.portfolio.edgesignalstudio.api.ApiExceptionHandler;
import com.amitesh.portfolio.edgesignalstudio.api.PortfolioController;
import com.amitesh.portfolio.edgesignalstudio.service.PortfolioService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;

class PortfolioControllerTest {
    private MockMvc mvc;
    @BeforeEach void setUp() { mvc = standaloneSetup(new PortfolioController(new PortfolioService())).setControllerAdvice(new ApiExceptionHandler()).build(); }
    @Test void listsDomainRecords() throws Exception { mvc.perform(get("/api/records")).andExpect(status().isOk()).andExpect(jsonPath("$[0].title").exists()); }
    @Test void createsValidatedRecord() throws Exception { mvc.perform(post("/api/records").contentType(MediaType.APPLICATION_JSON).content("{\"title\":\"New review\",\"note\":\"Created from the browser\"}")).andExpect(status().isCreated()).andExpect(jsonPath("$.status").value("OPEN")); }
    @Test void rejectsBlankRecord() throws Exception { mvc.perform(post("/api/records").contentType(MediaType.APPLICATION_JSON).content("{\"title\":\"\",\"note\":\"\"}")).andExpect(status().isBadRequest()); }
}
