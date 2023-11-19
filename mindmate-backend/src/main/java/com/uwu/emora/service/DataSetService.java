package com.uwu.emora.service;

import com.uwu.emora.dto.dataset.DataSetRequestDto;
import com.uwu.emora.dto.dataset.DataSetResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DataSetService {
    List<DataSetResponseDto> generateDataSet(DataSetRequestDto dto);
}
