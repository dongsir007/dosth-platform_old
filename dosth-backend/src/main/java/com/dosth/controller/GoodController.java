package com.dosth.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dosth.api.ApiResult;
import com.dosth.dto.Good;

@RestController
@RequestMapping("/good")
public class GoodController {

	@RequestMapping("/list")
	public ApiResult<Good> list() {
		ApiResult<Good> result = new ApiResult<>();
		result.setCode(200);
		result.setMsg("获取购物车列表数据成功");
		List<Good> list = new ArrayList<>();
		for (Long i = 0L; i < 10; i++) {
			list.add(new Good(i, "2022夏季小众设计港风潮牌宽松ins潮半袖上衣", "http://localhost:7003/1.jpg", 100 + new Random().nextFloat(), 1, true));
		}
		result.setList(list);
		return result;
	}
}
