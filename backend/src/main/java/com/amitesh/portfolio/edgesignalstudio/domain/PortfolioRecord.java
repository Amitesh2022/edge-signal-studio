package com.amitesh.portfolio.edgesignalstudio.domain;

import java.time.Instant;
import java.util.UUID;

public record PortfolioRecord(UUID id, String title, String status, String note, Instant updatedAt) {}
