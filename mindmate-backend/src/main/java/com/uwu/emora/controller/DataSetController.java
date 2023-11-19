package com.uwu.emora.controller;

import com.uwu.emora.dto.CommonResponse;
import com.uwu.emora.dto.dataset.DataSetRequestDto;
import com.uwu.emora.dto.dataset.DataSetResponseDto;
import com.uwu.emora.service.DataSetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/user/dataset")
@CrossOrigin
public class DataSetController {

    private final DataSetService dataSetService;

    @PostMapping(value = "")
    public ResponseEntity generateDataSet(@RequestBody DataSetRequestDto dto) {
        List<DataSetResponseDto> result = dataSetService.generateDataSet(dto);
        return ResponseEntity.ok(new CommonResponse<>(true, result));
    }

}
