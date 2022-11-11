package com.dosth.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuppressWarnings("serial")
public class Good implements Serializable {
	private Long id;
	private String goodsName;
	private String goodsImg;
	private Float goodsPrice;
	private Integer goodsCount;
	private Boolean goodsState;
}
