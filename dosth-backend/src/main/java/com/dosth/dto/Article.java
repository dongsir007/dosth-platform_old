package com.dosth.dto;

import java.io.Serializable;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuppressWarnings("serial")
public class Article implements Serializable {
	private String artId;
	private String title;
	private String autId;
	private Integer commCount;
	private Date pubDate;
	private String autName;
	private Integer isTop;
	private Cover cover;
}
