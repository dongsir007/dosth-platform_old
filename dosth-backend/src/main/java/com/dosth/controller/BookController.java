package com.dosth.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dosth.dto.Book;

@RestController
@RequestMapping("/book")
public class BookController {

	@RequestMapping("/list")
	public List<Book> books() {
		List<Book> list = new ArrayList<>();
		list.add(new Book(1L, "红楼梦", "曹雪芹"));
		list.add(new Book(2L, "水浒传", "施耐庵"));
		list.add(new Book(3L, "西游记", "吴承恩"));
		list.add(new Book(4L, "三国演义", "罗贯中"));
		return list;
	}
}