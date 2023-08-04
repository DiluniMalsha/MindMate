package com.uwu.emora.dto;

import com.uwu.emora.enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChildDto {
    private long id;
    private String firstName;
    private String lastName;
    private String address;
    private String emergencyContactNumber;
    private Gender gender;
    private LocalDate dateOfBirth;
    private String parentName;

}
