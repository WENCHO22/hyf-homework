SET NAMES utf8mb4;

CREATE DATABASE library_inventory;
USE library_inventory;

CREATE table `author`(
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE table `genre`(
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `publisher`(
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`publisher` varchar(255)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE table `book`(
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`description` text NOT NULL,
`publisher_id` INT UNSIGNED NOT NULL,
`rating` INT UNSIGNED NOT NULL,
CONSTRAINT `fk_book_publisher` FOREIGN KEY (`publisher_id`) REFERENCES `publisher`(`id`) ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `book_genre`(
`book_id` INT UNSIGNED NOT NULL,
`genre_id` INT UNSIGNED NOT NULL,
PRIMARY KEY(`book_id`, `genre_id`),
CONSTRAINT `fk_book_genre_book` FOREIGN KEY(`book_id`) REFERENCES `book`(`id`) ON UPDATE CASCADE,
CONSTRAINT `fk_book_genre_genre` FOREIGN KEY(`genre_id`) REFERENCES `genre`(`id`) ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `book_author`(
`book_id` INT UNSIGNED NOT NULL,
`author_id` INT UNSIGNED NOT NULL,
PRIMARY KEY(`book_id`, `author_id`),
CONSTRAINT `fk_book_author_book` FOREIGN KEY(`book_id`) REFERENCES `book`(`id`) ON UPDATE CASCADE,
CONSTRAINT `fk_book_author_author` FOREIGN KEY(`author_id`) REFERENCES `author`(`id`) ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;