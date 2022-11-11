package com.dosth.api;

import java.util.List;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
@SuppressWarnings("serial")
public class ApiResult<T> extends OpTip {
	private List<T> list;
}