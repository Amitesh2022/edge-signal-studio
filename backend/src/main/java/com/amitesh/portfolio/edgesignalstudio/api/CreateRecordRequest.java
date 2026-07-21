package com.amitesh.portfolio.edgesignalstudio.api;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateRecordRequest(@NotBlank @Size(max = 120) String title, @NotBlank @Size(max = 240) String note) {}
