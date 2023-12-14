package com.uwu.emora.dto.robot;

import com.uwu.emora.enums.ResponseType;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RobotResponseDto {
    private int responseExists = 0;
    private ResponseType type;
    private String content;
}
