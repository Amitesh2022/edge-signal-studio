package com.amitesh.portfolio.edgesignalstudio.api;

import com.amitesh.portfolio.edgesignalstudio.domain.PortfolioRecord;
import com.amitesh.portfolio.edgesignalstudio.service.PortfolioService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:4200"})
public class PortfolioController {
    private final PortfolioService service;
    public PortfolioController(PortfolioService service) { this.service = service; }

    @GetMapping("/about")
    public Map<String, String> about() { return Map.of("product", "Edge Signal Studio", "recordType", "Device event"); }

    @GetMapping("/records")
    public List<PortfolioRecord> records(@RequestParam(required = false) String q) { return service.findAll(q); }

    @PostMapping("/records")
    @ResponseStatus(HttpStatus.CREATED)
    public PortfolioRecord create(@Valid @RequestBody CreateRecordRequest request) { return service.create(request); }
}
