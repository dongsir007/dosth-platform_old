package com.dosth.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dosth.dto.Article;
import com.dosth.dto.Cover;

@RestController
@CrossOrigin
@RequestMapping("/article")
public class ArticleController {

	@RequestMapping("/list")
	public List<Article> list(@RequestParam("page") int page, @RequestParam("limit") int limit) {
		if (page > 5) {
			return null;
		}
		List<Article>list = new ArrayList<>();
		List<String> imgList1 = new ArrayList<>();
		imgList1.add("http://localhost:7003/2.jpg");
		List<String> imgList3 = new ArrayList<>();
		imgList3.add("http://localhost:7003/3.jpg");
		imgList3.add("http://localhost:7003/4.jpg");
		imgList3.add("http://localhost:7003/5.jpg");
		Article article3= new Article("1", "Android原生混合RN开发最佳实践", "1111", 68, new Date(2000000000), "劲舞川内", 0, new Cover(3, imgList3));
		Article article0 = new Article("1", "TypeScript玩转设计模式之创建型模式", "1111", 24, new Date(300000000), "仓直俊秀", 0, new Cover(0, new ArrayList<>()));
		Article article1 = new Article("1", "IOS原生混合RN开发最佳实践", "1111", 33, new Date(400000000), "信义霍夫", 0, new Cover(1, imgList1));
		int start = 8161;
		for (int i = (page - 1) * limit; i < page * limit; i++) {
			switch (i % 3) {
			case 0:
				article3= new Article(String.valueOf(start + (page - 1) * limit + i), "Android原生混合RN开发最佳实践", "1111", 68, new Date(), "劲舞川内", 0, new Cover(3, imgList3));
				list.add(article3);
				break;
			case 1:
				article0 = new Article(String.valueOf(start + (page - 1) * limit + i), "TypeScript玩转设计模式之创建型模式", "1111", 24, new Date(), "仓直俊秀", 0, new Cover(0, new ArrayList<>()));
				list.add(article0);
				break;
			case 2:
				article1 = new Article(String.valueOf(start + (page - 1) * limit + i), "IOS原生混合RN开发最佳实践", "1111", 33, new Date(), "信义霍夫", 0, new Cover(1, imgList1));
				list.add(article1);
				break;
			default:
				break;
			}
		}
		
		return list;
	}
}
